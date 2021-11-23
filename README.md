# EZEN-FrontEnd-TeamPortfolio

베스킨라빈스, 브런치, 스타벅스 메인 홈페이지 클론 코딩 프로젝트입니다.

### 참가자

- 김우영
- 양수원

### 작업 스케줄

1. 베스킨라빈스 홈페이지 메인 (11/22 ~ 11/23) - 양수원
2. 브런치 홈페이지 메인 (11/22 ~ 11/23) - 김우영
3. 스타벅스 홈페이지 메인 (11/24 ~ 11/26) - 공동
4. 작업 결과 문서화 (11/27 ~ 11/27) - 공동

### 코드 작성 가이드라인

```html
<!-- 주석 -->
<!-- 주석은 코드 상단에 위치합니다. -->

<!-- 클래스명은 공백을 하이폰으로 대체하며, 소문자만을 사용합니다. -->
<!-- id -> class 순으로 작성합니다. -->
<div id="my-id" class="class-example"></div>

<!-- 메인 컨테이너는 div 대신 각각 header, main, footer 태그를 사용합니다. -->
<header>
    this is header
</header>
<main>
    this is main
</main>
<footer>
    this is footer
</footer>
```

```js
// 변수명, 함수명의 띄어쓰기 구분은 카멜 표기법을 사용합니다.
// Function example
function returnAdd(x, y){
    return x + y;
}

// Variable example
const myVar = returnAdd(1, 3);
```

### 작업 디렉토리

작업 디렉토리는 아래와 같은 디렉토리 구조를 준수합니다.

```plaintext
.
├── assets
│   ├── css
│   │   ├── common.css
│   │   └── style.css
│   ├── img
│   │   ├── css.png
│   │   ├── html.png
│   │   ├── js.png
│   │   ├── mountain.jpeg
│   │   └── red-background.jpeg
│   ├── js
│   │   └── script.js
│   ├── lib
│   │   ├── animationsjs
│   │   │   └── animations.js
│   │   └── fullpagejs
│   │       ├── fullpage.css
│   │       └── fullpage.js
│   └── video
│       └── flowers.mp4
└── index.html
```

`index.html` 파일은 루트 디렉토리에 위치시키고 `css`, `js`, `image`, `video` 파일은 `assets` 디렉토리 하위에 위치시킵니다.
