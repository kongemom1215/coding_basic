## 템플릿 엔진
템플릿 엔진은 미리 정의된 양식이나 구조(템플릿)에 데이터를 넣어 동적 웹페이지를 생성하는 소프트웨어

### EJS (Embedded Javascript)
HTML 안에 자바스크립트 코드를 섞어서 동적으로 페이지를 만들 수 있는 템플릿 엔진   
`HTML + JS 데이터출력`  

#### 설치 방법 
```bash
npm i ejs
```

#### 기본 폴더 구조 
```sql
project/
├── views/           ← EJS 파일(.ejs) 저장 폴더
│   └── index.ejs
├── public/          ← CSS, JS, 이미지 등 정적 파일
├── index.js         ← 서버 실행 파일
└── package.json
```

#### index.js ( 기본 서버 코드 )
```js
import express from 'express';
import path from 'path';

const __dirname = path.resolve();       // 현재 파일의 폴더 경로
const app = express();                  // express 앱 생성(웹 서버 객체)

// EJS 설정
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// 정적 파일 경로
app.use(express.static('public'));

// 루트 페이지 렌더링
app.get('/', (req, res) => {
    res.render('index', { name: '콩이', isStudent: true });
});

app.listen(3000, () => {
    console.log('서버가 3000번 포트에서 실행 중입니다.');
});
```

- `app.set('view engine', 'ejs');` 
    - Express한테 EJS를 템플릿 엔진으로 쓸거야 라고 설정
    - 왜 필요한가? res.render('파일명')했을 때 자동으로 `.ejs` 확장자를 찾아준다. 
- `app.set('views', __dirname + '/views');`
    - 템플릿 파일들(.ejs)가 어느 폴더에 있는지 Express에게 알려주는 것
    - `app.set('views', 경로);
- `app.use(express.static('public'));`
    - public 폴더 안의 파일들을 정적(static) 파일로 사용하겠다는 뜻
    - CSS, JS, IMG 파일을 접근할수 있게!

#### views/index.ejs (템플릿 파일)
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>EJS 연습</title>
</head>
<body>
    <h1>안녕, <%= name %>!</h1>

    <% if (isStudent) { %>
        <p>당신은 학생입니다.</p>
    <% } else { %>
        <p>당신은 학생이 아닙니다.</p>
    <% } %>
</body>
</html>
```

| 문법                                | 설명           |
| --------------------------------- | ------------ |
| `<%= value %>`                    | 값을 출력        |
| `<% if () {} %>`                  | 조건문          |
| `<% for (let i=0; i<3; i++) { %>` | 반복문          |
| `<% include filename %>`          | 다른 EJS 파일 포함 |
