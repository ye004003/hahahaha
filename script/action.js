// 1. 토글 함수 (이 함수는 전역 범위에 있어야 HTML에서 호출 가능합니다)
function toggleContent(id) {
    const content = document.getElementById(id);
    if (!content) return;

    const currentDisplay = window.getComputedStyle(content).display;

    if (currentDisplay === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

// 2. 메뉴 버튼 이벤트 (문서 로드 후 실행)
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.m_menu_btn');
    const nav = document.querySelector('nav');

    if (menuBtn && nav) {
        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('open'); // 버튼 모양 변경
            nav.classList.toggle('active');   // 메뉴 열기/닫기
        });
    }
});