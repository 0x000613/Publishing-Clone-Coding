const menu = document.querySelector("#menu-bar-category");
const dropdownMenu = document.querySelector("#dropdown-wrapper");

// 메뉴바에 mouseover 이벤트 발생시 드롭다운 메뉴 출력
menu.addEventListener("mouseover", e => {
    dropdownMenu.style.height = "274px";
});

// 드롭다운 메뉴에 mouseout 이벤트 발생시 드롭다운 메뉴 비활성화
dropdownMenu.addEventListener("mouseout", e => {
    dropdownMenu.style.height = "0px";
});