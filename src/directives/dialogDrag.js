const drag = {
  mounted(el, binding) {
    const header = el.querySelector(".dialog-drag-header");
    const setStyle = (el) => {
      el.style.cursor = "move";
      el.style.borderStyle = "solid";
      el.style.borderColor = "red";
      el.style.borderWidth = "3px";
    };
    const removeStyle = (el) => {
      el.style.cursor = "";
      el.style.borderStyle = "";
      el.style.borderColor = "";
      el.style.borderWidth = "";
    };
    const mousedown = (event) => {
      const offsetX = parseInt(el.style.left); // 获取当前的x轴距离
      const offsetY = parseInt(el.style.top); // 获取当前的y轴距离
      const innerX = event.clientX - offsetX; // 获取鼠标在方块内的x轴距
      const innerY = event.clientY - offsetY; // 获取鼠标在方块内的y轴距
      // 按住鼠标时为div添加样式
      setStyle(el);
      // 鼠标移动的时候不停的修改div的left和top值
      document.onmousemove = (event) => {
        el.style.left = event.clientX - innerX + "px";
        el.style.top = event.clientY - innerY + "px";
      };
      // 鼠标抬起时，清除绑定在文档上的mousemove和mouseup事件
      // 否则鼠标抬起后还可以继续拖拽方块
      document.onmouseup = function () {
        document.onmousemove = null;
        document.onmouseup = null;
        // 清除样式
        removeStyle(el);
      };
    };
    header.addEventListener("mousedown", mousedown, { passive: false });
    console.log(el.parentNode, binding.value);
  },
  unmounted() {},
};

// 挂载，注册
const dialogDrag = {
  install: (app) => {
    app.directive("dialogDrag", drag);
  },
};
export default dialogDrag;
