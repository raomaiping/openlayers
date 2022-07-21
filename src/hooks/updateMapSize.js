import { onBeforeUnmount } from "vue";

/**
 * 监听侧边栏，侧边栏发生变化更新地图
 * @param {ol.Map} map 地图实例
 */
export default (...map) => {
  // 选择需要观察变动的节点
  const targetNode = document.querySelector(
    ".el-aside .menu .el-scrollbar__view"
  );
  // 观察器的配置（需要观察什么变动）
  const config = { attributes: true, childList: true, subtree: true };
  // 当观察到变动时执行的回调函数
  const callback = function (mutationsList) {
    // Use traditional 'for loops' for IE 11
    for (let mutation of mutationsList) {
      if (mutation.type === "childList") {
        // console.log("已添加或删除子节点。");
      } else if (
        mutation.type === "attributes" &&
        mutation.attributeName === "style"
      ) {
        for (let i = 0; i < map.length; i++) {
          map[i].updateSize();
        }

        // console.log("这个 " + mutation.attributeName + " 属性被修改。");
      }
    }
  };
  // 创建一个观察器实例并传入回调函数
  const observer = new MutationObserver(callback);

  // 以上述配置开始观察目标节点
  observer.observe(targetNode, config);

  //卸载前
  onBeforeUnmount(() => {
    observer.disconnect();
  });
};
