# MongoDB
데이터를 JSON 처럼 저장하는 NoSQL 데이터데이스  
> 자바스크립트 객체처럼 데이터를 저장하고 꺼낼 수 있는 저장소입니다. 

## 몽고DB 데이터 예시
```json
{
  "_id": "a1b2c3",
  "title": "글 제목",
  "content": "내용입니다",
  "createdAt": "2025-06-06T10:00:00Z"
}
```
이걸 우리는 `Document`라고 부르고 문서들이 모인 것을 `Collection`이라고 부릅니다. 

| MongoDB 용어     | 역할            | RDBMS 비교    |
| -------------- | ------------- | ----------- |
| **Document**   | 하나의 JSON 데이터  | Row (행)     |
| **Collection** | Document들의 집합 | Table (테이블) |

>  Database > Collection > Document

## 설치
```bash
npm install mongoose
```


## 몽고 DB 클러스터 생성하기 
https://www.mongodb.com

- 클러스터 : MongoDB 서버 인스턴스의 집합으로, 데이터를 저장하고 관리하는 기본 단위. ( = 데이터베이스 )
- 데이터베이스 : 관련 데이터를 논리적으로 그룹화하는 컨테이너. 하나의 클러스터 안에 여러개의 데이터베이스를 만들 수 있습니다. 

## MongoDB 연결 코드
```js
mongoose.connect(uri)
  .then(() => console.log('연결 성공'))
  .catch(err => console.error('연결 실패', err));
```

## Data의 구조 정의
```js
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  stickers: Number
});
```
- 이 스키마는 MongoDB에 저장할 **문서(document)**의 구조를 말합니다.
- 위 예시는 이름, 나이, 스티커 개수라는 세 가지 필드를 정의했습니다.

### Data Type은?
```js
const postSchema = new Schema({
  title: String,
  views: Number,
  isPublished: Boolean,
  createdAt: { type: Date, default: Date.now },
  tags: [String], // 배열
  metadata: {
    author: String,
    length: Number
  },
});
```


## Data 모델 생성
```js
const Student = mongoose.model('Student', studentSchema);
```

## Data 모델에 데이터 Insert
```js
Student.create({ name: '홍길동', age: 10, stickers: 3 });
```


### 실습 : 연결 코드 (index.js)
```js
import mongoose from 'mongoose';

mongoose.connect(연결 URI)
    .then(() => {
        console.log('✅ MongoDB Atlas 연결 성공');
    })
    .catch((err) => {
        console.error('❌ MongoDB Atlas 연결 실패', err);
    });
```
- mongoDB 연결 URI 넣어주기 
- `mongoose.connect` : Atlas의 몽고DB와 연결을 맺는 것


### 연결을 확인했다면, models 디렉토리 생성해주기
```sql
project/
├── models/
│   └── Student.js        ← 여기서 DB 스키마 정의
├── routes/
│   └── studentRouter.js  ← 라우터 분리할 경우
├── views/
│   └── list.ejs
├── public/
│   └── style.css
├── index.js              ← 앱의 진입점
```

index.js에 모든 코드를 넣으면 코드가 지저분해져서 유지보수가 어렵기때문에
폴더를 나눠서 분리를 하는 것이 좋습니다!



### 실습 : models/Student.js 스키마 🌟생성🌟하기
```js
import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  stickers: Number
});

const Student = mongoose.model('Student', studentSchema);

export default Student; // ← 이 줄이 반드시 있어야 함!
```
Student라는 모델을 만들고, MongoDB의 students라는 컬렉션이 연결됨 (없을땐 생성)



### 실습 : Student에 값을 🫙저장🫙해봅시다(index.js)
```js
import mongoose from 'mongoose';

import Student from './models/Student.js';

mongoose.connect(연결 URI)
.then(() => {
    console.log('✅ MongoDB Atlas 연결 성공');
    // 테스트용 데이터 저장
    const student = new Student({
      name: '홍길동',
      age: 10,
      stickers: 0
    });

    student.save().then(() => console.log('🎉 저장 완료'));
})
.catch((err) => {
    console.error('❌ MongoDB Atlas 연결 실패', err);
});
```

- 값을 넣고 생성된 Student를 atlas에서 확인해봅니다☺️
- 좀더 쉽게 확인하는 방법이 있어요 => Mongo Compass 


### Mongo Compass
- 연결법 : https://blog.naver.com/n_cloudplatform/223146716115
- 설치 : https://www.mongodb.com/try/download/compass
설치하고 연결!


### Create는 배웠고, 이제 Read를 배워볼게요
`/students`로 접속하면 MongoDB에서 학생 목록을 조회해서
EJS 템플릿으로 출력하기

#### routes/studentRouter.js
```js
import express from 'express';
import Student from '../models/Student.js';

const studentRouter = express.Router();

// 학생 목록 조회 라우터
studentRouter.get('/', async (req, res) => {
  const students = await Student.find();
  res.render('students', { students });
});

export default studentRouter;
```

- `const studentRouter = express.Router();` : Express에서 router(경로)를 따로 분리해서 관리할 수 있도록 만들어주는 미니 앱 
> studentRouter는 학생 관련 요청만 모아서 처리할 수 있는 작은 라우터 전용 객체를 만든 것
- `async`와 `await`는 짝꿍! : 비동기 작업을 위해 가져옵니다. 
    - student.find는 몽고DB에 네트워크 요청을 보내는 작업입니다.
    - 결과가 바로 나오지않아서, 결과를 기다리고(await) 결과 데이터를 보내줍니다.
    - 결과를 기다리지 않으면 빈값이 보내질 수가 있기 때문!

#### views/students.ejs
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>학생 목록</title>
</head>
<body>
  <h1>학생 목록</h1>

  <ul>
    <% students.forEach((s, index) => { %>
      <li>
        <strong><%= index + 1 %>번:</strong> 
        이름: <%= s.name %>, 
        나이: <%= s.age %>, 
        스티커: <%= s.stickers %>개
      </li>
    <% }) %>
  </ul>
</body>
</html>
```


#### index.ejs
```html
<a href="/students">학생 목록 보러 가기</a>
```
추가


#### index.js
```js
import studentRouter from './routes/studentRouter.js';

...
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({ extended: true }));

// 정적 파일 경로
app.use(express.static('public'));

// 루트 페이지 렌더링
const data = { name: '콩이', isStudent: true };

app.get('/', (req, res) => {
    res.render('index', data);
});

// /students → 라우터 연결
app.use('/students', studentRouter);

app.listen(3000, () => {
    console.log('서버가 3000번 포트에서 실행 중입니다.');
});
```

- `app.use(express.urlencoded({ extended: true }));` : HTML 폼으로부터 POST된 데이터를 req.body로 읽기 위한 Express 필수 설정 (추후에 진행해볼게요!)
- `app.use('/students', studentRouter);` :  /students로 시작하는 요청은 전부 studentRouter에서 처리하겠다! 는 뜻이야.


##### index.js와 router 동작 방식

studentRouter.js에 이런 코드가 있다면
```js
studentRouter.get('/', ...);          // /students
```

| 라우터 정의 (studentRouter 내부) | 실제 요청 주소      |
| ------------------------- | ------------- |
| `get('/')`                | `/students`   |



### ReaD에 대해서 배웠어요! 그럼이제 Create도 Router에 넣어주겠습니다.
router에 `/students/insert`를 넣어줄게요

```js
studentRouter.post('/insert', async (req, res) => {
  const { name, age, stickers } = req.body;

  await Student.create({ name, age, stickers });
  res.redirect('/students');
});
```

학생 정보를 입력 받는 `studentForm.ejs` 페이지를 생성해볼게요
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>학생 등록</title>
</head>
<body>
  <h1>학생 등록</h1>
  <form action="/students/insert" method="POST">
    이름: <input type="text" name="name" required><br>
    나이: <input type="number" name="age" required><br>
    스티커 개수: <input type="number" name="stickers" required><br>
    <button type="submit">등록</button>
  </form>

  <a href="/students">← 목록으로</a>
</body>
</html>
```


#### 학생 중복 체크를 하려면?
이름은 중복될 수 있으니, ID를 받아서 학생 중복체크를 해줄게요

- ejs 삽입입
```html
ID: <input type="text" name="id" required><br>
```

- id 필드를 받기 위해서 model 수정!
```js
const studentSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: String,
  age: Number,
  stickers: Number
});
```

- router에서 중복체크 로직 추가
```js
studentRouter.post('/insert', async (req, res) => {
  const { id, name, age, stickers } = req.body;

  // 같은 ID가 있으면 등록 금지
  const existing = await Student.findOne({ id: String(id) });
  if (existing) {
    return res.send('❌ 이미 존재하는 ID입니다!');
  }

  await Student.create({ id, name, age, stickers });
  res.redirect('/students');
});
```