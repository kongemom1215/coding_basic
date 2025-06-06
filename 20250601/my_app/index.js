import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import studentRouter from './routes/studentRouter.js';
import Student from './models/Student.js';

mongoose.connect('mongodb+srv://juhye:konge@myapp.jljc3lv.mongodb.net/?retryWrites=true&w=majority&appName=myapp')
.then(() => {
    console.log('✅ MongoDB Atlas 연결 성공');
    // 테스트용 데이터 저장
    const student = new Student({
      name: '홍길동',
      age: 10,
      stickers: 3
    });

    student.save().then(() => console.log('🎉 저장 완료'));
})
.catch((err) => {
    console.error('❌ MongoDB Atlas 연결 실패', err);
});

const __dirname = path.resolve();
const app = express();

// EJS 설정
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
