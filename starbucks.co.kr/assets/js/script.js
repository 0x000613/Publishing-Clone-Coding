// 헤더 메뉴
const menus = document.querySelectorAll(".menu-bar-category");
// 드롭다운 전체 영역 div
const dropdownWrapper = document.querySelector("#dropdown-wrapper");
// dropdownWrapper의 자식으로 들어가는 메뉴들
const dropdownInner = document.querySelectorAll(".dropdown-wrapper-inner");
// dropdownWrapper 하단 배경 이미지
const dropdownUnderBG = document.querySelector(".dropdown-under-bg")
// dropdownWrapper 하단 content div
const dropdownUnderInner = document.querySelectorAll(".dropdown-under-inner")

// 메뉴바에 mouseover 이벤트 발생시 드롭다운 메뉴 출력
for (let i = 0; i < menus.length; i++) {
    menus[i].addEventListener("mouseover", e => {
        // 다른 dropdownInner 비활성화
        for (const inner of dropdownInner) inner.style.display = "none";
        // 선택된 dropdownInner만 활성화
        dropdownInner[i].style.display = "grid";
        // 드롭다운 메뉴 높이를 내부 div의 길이를 자동으로 인식하여 자동조정함
        // 아래 변수를 조정하여 자동조정 이외에 수동으로 높이 추가 역시 가능함
        const customPlusHeight = 0;
        dropdownWrapper.style.height = String(dropdownInner[i].scrollHeight + customPlusHeight) + "px";

        // 드롭다운 하단 배경 이미지 활성화
        dropdownUnderBG.style.display = "inline-block";
        // 다른 하단 inner div 비활성화
        for (const inner of dropdownUnderInner) inner.style.display = "none";
        // 선택된 하단 inner div만 활성화
        console.log(dropdownUnderInner[i])
        dropdownUnderInner[i].style.display = "block";
        
    })
}

// 메인 컨테이너로 마우스 진입시 드롭다운 비활성화
const container = document.querySelector("#container");
container.addEventListener("mouseover", e => {
    // 드롭다운 height를 0으로 지정하여 보이지 않게 변경함
    dropdownWrapper.style.height = "0px";
    
    // 드롭다운 하단 이미지를 display: none 옵션을 주어 사라지게함
    dropdownUnderBG.style.display = "none";
})