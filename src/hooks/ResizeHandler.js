import { onMounted, onBeforeMount, onBeforeUnmount } from "vue";

export default () => {
  const { body } = document;
  const WIDTH = 992;

  function $_isMobile() {
    const rect = body.getBoundingClientRect();
    return rect.width - 1 < WIDTH;
  }
  function $_resizeHandler() {
    if (!document.hidden) {
      const isMobile = $_isMobile();
      const app = document.getElementById("app");
      localStorage.setItem("device", isMobile ? "mobile" : "desktop");
      if (isMobile) {
        app.classList.add("mobile");
      } else {
        app.classList.remove("mobile");
      }
    }
  }
  // 挂载前
  onBeforeMount(() => {
    localStorage.setItem("device", "desktop");
    window.addEventListener("resize", $_resizeHandler);
  });
  // 挂载完毕
  onMounted(() => {
    const isMobile = $_isMobile();
    const app = document.getElementById("app");
    if (isMobile) {
      localStorage.setItem("device", "mobile");
      app.classList.add("mobile");
    }
  });

  //卸载前
  onBeforeUnmount(() => {
    window.removeEventListener("resize", $_resizeHandler);
  });
};
