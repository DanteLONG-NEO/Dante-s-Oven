/*let scrolling = false;

document.addEventListener("wheel", (e) => {
    if (scrolling) return; // 防止连续触发
    scrolling = true;

    if (e.deltaY > 0) {
        scrollNext(); // 向下滚动
    } else if (e.deltaY < 0) {
        scrollPrevious(); // 向上滚动
    }

    // 延迟一段时间允许下一次滚动
    setTimeout(() => scrolling = false, 500); // 延迟时间设置为 500 毫秒
});

function scrollNext() {
    const divs = document.querySelectorAll("div"); // 获取页面中的所有 div
    const viewportHeight = window.innerHeight; // 视口高度
    const currentScroll = window.scrollY; // 当前滚动位置

    let nextDiv = null;

    // 寻找当前滚动位置所在的 div，并且找到下一个 div
    divs.forEach(div => {
        const divTop = div.offsetTop;
        const divBottom = divTop + div.offsetHeight;

        if (currentScroll + viewportHeight / 2 >= divTop && currentScroll + viewportHeight / 2 < divBottom) {
            nextDiv = div.nextElementSibling; // 找到下一个 div
        }
    });

    if (nextDiv) {
        const nextDivCenter = nextDiv.offsetTop - (viewportHeight / 2) + nextDiv.offsetHeight / 2;
        window.scrollTo({ top: nextDivCenter, behavior: "smooth" });
    } else {
        // 如果已经滚动到最后一个 div，停止滚动
        const lastDiv = divs[divs.length - 1];
        const lastDivCenter = lastDiv.offsetTop - (viewportHeight / 2) + lastDiv.offsetHeight / 2;
        window.scrollTo({ top: lastDivCenter, behavior: "smooth" });
    }
}

function scrollPrevious() {
    const divs = document.querySelectorAll("div"); // 获取页面中的所有 div
    const viewportHeight = window.innerHeight; // 视口高度
    const currentScroll = window.scrollY; // 当前滚动位置

    let prevDiv = null;

    // 寻找当前滚动位置所在的 div，并且找到上一个 div
    divs.forEach(div => {
        const divTop = div.offsetTop;
        const divBottom = divTop + div.offsetHeight;

        if (currentScroll + viewportHeight / 2 > divTop && currentScroll + viewportHeight / 2 <= divBottom) {
            prevDiv = div.previousElementSibling; // 找到上一个 div
        }
    });

    if (prevDiv) {
        const prevDivCenter = prevDiv.offsetTop - (viewportHeight / 2) + prevDiv.offsetHeight / 2;
        window.scrollTo({ top: prevDivCenter, behavior: "smooth" });
    } else {
        // 如果已经滚动到第一个 div，停止滚动
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
}*/

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


//Page Switch
function switchPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    const pageNames = document.querySelectorAll('.center h6');

    pages.forEach(page => {
        page.classList.remove('active');
    });
    pageNames.forEach(pageName => {
        pageName.classList.remove('active');
    });

    // Show the selected page
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }
    
    // 激活相应的导航按钮
    const selectedPageName = document.querySelector(`.center h6[onclick="switchPage('${pageId}')"]`);
    if (selectedPageName) {
        selectedPageName.classList.add('active'); // 高亮当前导航按钮
    }
}

// 页面加载时默认显示第一个页面（例如: aboutMe）
window.onload = function() {
    switchPage('design');  // 默认显示 'aboutMe' 页面
};