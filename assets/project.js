//Switch Project Image
let currentIndex = 0;

function scrollRight() {
    const carousel = document.querySelector('.carousel');
    const images = carousel.querySelectorAll('img');
    const imageWidth = images[0].clientWidth;

    if (currentIndex < images.length - 1) {
        // 如果不是最后一张图片，继续向右滑动
        currentIndex++;
    } else {
        // 如果已经是最后一张，跳回到第一张图片
        currentIndex = 0;
    }
    updateCarouselTransform();
}

function Left() {
    const carousel = document.querySelector('.carousel');
    const images = carousel.querySelectorAll('img');
    const imageWidth = images[0].clientWidth;

    if (currentIndex > 0) {
        // 如果不是第一张图片，正常向左滑动
        currentIndex--;
    } else {
        // 如果已经是第一张，跳到最后一张图片
        currentIndex = images.length - 1;
    }
    updateCarouselTransform();
}

function updateCarouselTransform() {
    const carousel = document.querySelector('.carousel');
    const images = carousel.querySelectorAll('img');
    const imageWidth = images[0].clientWidth;
    
    // 计算每张图片的宽度加上间隔
    carousel.style.transform = `translateX(-${(imageWidth) * currentIndex}px)`;
}

// 监听窗口大小变化，确保图片宽度更新并且只显示一个图像
window.addEventListener('resize', () => {
    updateCarouselTransform(); // 调整transform，确保在resize时位置正确
});


document.addEventListener("DOMContentLoaded", () => {
    const gridItems = document.querySelectorAll(".grid-item img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const closeButton = document.getElementById("close-button");
    const prevButton = document.getElementById("prev-button");
    const nextButton = document.getElementById("next-button");
  
    let currentIndex = -1;
  
    // 打开灯箱
    function openLightbox(index) {
      currentIndex = index;
      const image = gridItems[index];
      lightboxImage.src = image.src;
      lightbox.classList.remove("hidden");
    }
  
    // 关闭灯箱
    function closeLightbox() {
      lightbox.classList.add("hidden");
      lightboxImage.src = "";
    }
  
    // 切换到上一张图片
    function showPrevImage() {
      if (currentIndex > 0) {
        openLightbox(currentIndex - 1);
      }
    }
  
    // 切换到下一张图片
    function showNextImage() {
      if (currentIndex < gridItems.length - 1) {
        openLightbox(currentIndex + 1);
      }
    }
  
    // 添加事件监听
    gridItems.forEach((img, index) => {
      img.addEventListener("click", () => openLightbox(index));
    });
  
    closeButton.addEventListener("click", closeLightbox);
    prevButton.addEventListener("click", showPrevImage);
    nextButton.addEventListener("click", showNextImage);
  
    // 键盘支持
    document.addEventListener("keydown", (e) => {
      if (!lightbox.classList.contains("hidden")) {
        if (e.key === "ArrowLeft") showPrevImage();
        if (e.key === "ArrowRight") showNextImage();
        if (e.key === "Escape") closeLightbox();
      }
    });
});
  