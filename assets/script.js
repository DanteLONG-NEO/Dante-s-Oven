let scrolling = false;

document.addEventListener("wheel", (e) => {
    if (scrolling) return; // 防止连续触发
    scrolling = true;

    // 判断滚动方向
    if (e.deltaY > 0) {
        scrollNext(); // 向下滚动
    } else if (e.deltaY < 0) {
        scrollPrevious(); // 向上滚动
    }

    // 延迟一段时间允许下一次滚动
    setTimeout(() => scrolling = false, 800); // 防抖间隔
});

function scrollNext() {
    const currentScroll = window.scrollY; // 当前滚动位置
    const viewportHeight = window.innerHeight; // 视口高度
    const maxScroll = document.body.scrollHeight - viewportHeight; // 最大滚动位置
    const nextScroll = Math.min(currentScroll + viewportHeight, maxScroll); // 防止超出页面高度
    window.scrollTo({ top: nextScroll, behavior: "smooth" }); // 平滑滚动
}

function scrollPrevious() {
    const currentScroll = window.scrollY; // 当前滚动位置
    const viewportHeight = window.innerHeight; // 视口高度
    const prevScroll = Math.max(currentScroll - viewportHeight, 0); // 防止小于顶部
    window.scrollTo({ top: prevScroll, behavior: "smooth" }); // 平滑滚动
}
