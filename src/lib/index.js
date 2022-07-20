export const handleRouter = (router) => {
  const paths = ["/", "/home"];
  let newRouter = router
    .filter((item) => !paths.includes(item.path))
    .map((item) => {
      let { path, meta, children, icon } = item;
      return {
        icon,
        path,
        title: meta.title,
        children:
          children?.map((childrenItem) => ({
            path: `${path}/${childrenItem.path}`,
            title: childrenItem.meta.title,
          })) || [],
      };
    });
  return newRouter;
};

export const exportMap = (map, filename = "map.png") => {
  map.once("rendercomplete", function () {
    const mapCanvas = document.createElement("canvas");
    const size = map.getSize();
    mapCanvas.width = size[0];
    mapCanvas.height = size[1];
    const mapContext = mapCanvas.getContext("2d");
    Array.prototype.forEach.call(
      map.getViewport().querySelectorAll(".ol-layer canvas, canvas.ol-layer"),
      (canvas) => {
        if (canvas.width > 0) {
          const opacity =
            canvas.parentNode.style.opacity || canvas.style.opacity;
          mapContext.globalAlpha = opacity === "" ? 1 : Number(opacity);

          const backgroundColor = canvas.parentNode.style.backgroundColor;
          if (backgroundColor) {
            mapContext.fillStyle = backgroundColor;
            mapContext.fillRect(0, 0, canvas.width, canvas.height);
          }

          let matrix;
          const transform = canvas.style.transform;
          if (transform) {
            // Get the transform parameters from the style's transform matrix
            matrix = transform
              .match(/^matrix\(([^(]*)\)$/)[1]
              .split(",")
              .map(Number);
          } else {
            matrix = [
              parseFloat(canvas.style.width) / canvas.width,
              0,
              0,
              parseFloat(canvas.style.height) / canvas.height,
              0,
              0,
            ];
          }
          // Apply the transform to the export map context
          CanvasRenderingContext2D.prototype.setTransform.apply(
            mapContext,
            matrix
          );
          mapContext.drawImage(canvas, 0, 0);
        }
      }
    );
    mapContext.globalAlpha = 1;
    if (navigator.msSaveBlob) {
      // 链接下载属性不能在MS浏览器上工作
      navigator.msSaveBlob(mapCanvas.msToBlob(), filename);
    } else {
      const downloadElement = document.createElement("a");
      downloadElement.href = mapCanvas.toDataURL();
      downloadElement.download = filename;
      document.body.appendChild(downloadElement);
      downloadElement.click();
      // 移除a标签；
      document.body.removeChild(downloadElement);
    }
  });
  map.renderSync();
};

// 创建blob对象
function downloadBlob(url) {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.responseType = "blob";

    xhr.onload = function () {
      if (xhr.status === 200) {
        resolve(xhr.response);
      } else {
        reject(new Error(xhr.statusText || "Download failed."));
      }
    };
    xhr.onerror = function () {
      reject(new Error("Download failed."));
    };
    xhr.send();
  });
}
export function downloadFile(url, fileName = "") {
  return downloadBlob(url, fileName)
    .then((resp) => {
      if (resp.blob) {
        return resp.blob();
      } else {
        return new Blob([resp]);
      }
    })
    .then((blob) => URL.createObjectURL(blob))
    .then((url) => {
      downloadURL(url, fileName);
      URL.revokeObjectURL(url);
    })
    .catch((err) => {
      throw new Error(err.message);
    });
}
function downloadURL(url, name = "") {
  const link = document.createElement("a");
  link.download = name;
  link.href = url;
  if ("download" in document.createElement("a")) {
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    // 对不支持download进行兼容
    click(link, (link.target = "_blank"));
  }
}
// clone https://github.com/eligrey/FileSaver.js/blob/master/src/FileSaver.js
function click(node) {
  try {
    node.dispatchEvent(new MouseEvent("click"));
  } catch (e) {
    var evt = document.createEvent("MouseEvents");
    evt.initMouseEvent(
      "click",
      true,
      true,
      window,
      0,
      0,
      0,
      80,
      20,
      false,
      false,
      false,
      false,
      0,
      null
    );
    node.dispatchEvent(evt);
  }
}
