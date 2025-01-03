//Language Translator
let currentLanguage = 'en';

// 获取所有带有 data-* 属性的元素
const translatableElements = document.querySelectorAll('[zh], [en]');

// 获取切换语言的按钮
const zhButton = document.getElementById('language-zh');
const enButton = document.getElementById('language-en');

// 更新页面语言的函数
function updateLanguage() {
    translatableElements.forEach(element => {
    // 根据当前语言更新内容
    element.textContent = element.getAttribute(`${currentLanguage}`);
    });
}

// 点击中文按钮时切换语言
zhButton.addEventListener('click', () => {
    currentLanguage = 'zh';
    updateLanguage();
});

// 点击英文按钮时切换语言
enButton.addEventListener('click', () => {
    currentLanguage = 'en';
    updateLanguage();
});

// 初次加载时更新页面语言
updateLanguage();

//page Switch
window.onload = function() {
    // 获取 URL 中的 page 参数
    const urlParams = new URLSearchParams(window.location.search);
    const pageId = urlParams.get('page');

    // 调用切换页面的函数
    if (pageId) {
        switchPage(pageId);
    }
};

//切换页面
function switchPage(pageId) {
    // 存储目标页面 ID
    localStorage.setItem('lastVisitedPage', pageId);

    // 跳转到 homepage.html
    window.location.href = `homepage.html?page=${pageId}`;
}


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
