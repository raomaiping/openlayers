import Overlay from 'ol/Overlay'
import { fromLonLat, transform, toLonLat } from 'ol/proj'
import { toStringHDMS } from 'ol/coordinate'
/**
 * 第一种：点标记 marker
 * 创建一个标注信息
 */
export const addMarker = ({ map, element }) => {
  const marker = new Overlay({
    position: fromLonLat([104.043505, 30.58165]),
    positioning: 'center-center',
    element,
    stopEvent: false,
  })
  map.addOverlay(marker)
}


/**
 * 第二种：文字标签 label
 * 创建一个label标注信息
 */
export const addText = ({ map, element }) => {
  const textInfo = new Overlay({
    position: fromLonLat([104.043505, 30.58165]),
    offset: [20, -20],
    element,
  })
  map.addOverlay(textInfo)
}


/**
 * 第三种：弹窗式窗口 popup
 * 创建一个弹窗popup信息
 */

export const addPopup = ({ container, closer, content, map }) => {
  // 创建一个弹窗 Overlay 对象
  const overlay = new Overlay({
    element: container, //绑定 Overlay 对象和 DOM 对象的
    autoPan: false, // 定义弹出窗口在边缘点击时候可能不完整 设置自动平移效果
    autoPanAnimation: {
      duration: 250 //自动平移效果的动画时间 9毫秒）
    }
  });
  // 将弹窗添加到 map 地图中
  map.addOverlay(overlay);

  /**
  * 为弹窗添加一个响应关闭的函数
  */
  closer.onclick = () => {
    overlay.setPosition(undefined);
    closer.blur();
    return false;
  };

  /**
   * 添加单击响应函数来处理弹窗动作
   */
  map.on("singleclick", (evt) => {
    console.log(evt.coordinate);
    let coordinate = transform(
      evt.coordinate,
      "EPSG:3857",
      "EPSG:4326"
    );
    // 点击尺 （这里是尺(米)，并不是经纬度）;
    let hdms = toStringHDMS(toLonLat(evt.coordinate)); // 转换为经纬度显示
    content.innerHTML = `
    <p>你点击了这里：</p>
    <p>经纬度：<p><code> ${hdms}  </code> <p>
    <p>坐标：</p>X：${coordinate[0]} &nbsp;&nbsp; Y: ${coordinate[1]}`;
    overlay.setPosition(evt.coordinate); //把 overlay 显示到指定的 x,y坐标
  });
}