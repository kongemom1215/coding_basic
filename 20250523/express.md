## Express?
- Express는 Node.js에서 웹 서버를 더 쉽게 만들 수 있게 해주는 라이브러리(도구)
- 전세계에서 가장 많이 사용 되는 웹 프레임 워크

> 웹 프레임워크는 많은 기능들이 미리 구현해놓은 도구

### 왜 필요한가요??
Node.js만으로도 웹서버를 만들 수 있지만,
- http.createServer()처럼 코드가 복잡하고 불편하다.
- 라우팅(주소마다 다른 화면 보여주기), 폼 데이터 처리, 정적 파일 보내기 등을 직접 다 짜야 한다.
그래서
➡ Express가 그 복잡한 걸 다 쉽게 만들어줍니다~!

### express를 사용해서 서버를 간단하게 띄워보겠습니다.
1. 새로운 `index.js`생성(index2.js)

| 기능 / 비교 항목 | **Express 버전**                                           | **http 모듈 버전**                       |
| ---------- | -------------------------------------------------------- | ------------------------------------ |
| **서버 생성**  | `const app = express()`                                  | `const server = createServer()`      |
| **요청 처리**  | `app.get('/', handler)`                                  | `createServer()`에서 `req, res`로 처리    |
| **응답 설정**  | `res.type('text/plain')` -> `res.send('Hello node.js2')` | `res.writeHead()`, `res.write()`로 설정 |
| **응답 종료**  | 자동으로 처리 (`res.send()`가 끝내줌)                              | `res.end()`로 명시적으로 종료                |
| **서버 실행**  | `app.listen(3000)`                                       | `server.listen(3000)`                |

2. html을 서버 응답으로 받기 `index.js`(index3.js)
여러줄 코드는 백틱을 사용!  
하지만 그건 번거로우니까 html 파일을 받아서 showing

3. Express를 사용해서 HTML 파일을 브라우저에 보내주는 코드를 작성해보자
`public` 폴더 생성 하고 그 안에 `main.html` 생성하기
```js
import express from 'express';
import path from 'path';            // 경로를 다루기 위한 node.js 내장 모듈

const __dirname = path.resolve();   // 현재 파일의 폴더 경로

const app = express();              // express 앱 생성(웹 서버 객체)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/main.html')       // html 파일을 찾아서 브라우저로 보낸다다
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
```


### nodemon
Node.js 서버 코드를 수정할 때마다 자동으로 서버를 재시작해주는 도구

1. 설치하기
```
npm install nodemon -D
```
2. `package.json` 확인
- `-D` 옵션은 일반 dependencies가 아닌 devDependencies에 설정  
> devDependencies에: 우리가 만들었던 서버의 필수 요소는 아니지만 개발할 땐 필요한 라이브러리를 넣는다.

- scripts 사용법
```json
"scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
}
```
스크립트의 설정을 따르기 위해서는 `npm run` 명령어를 따른다.  
refresh만으로 바로바로 확인할 수 있다. 