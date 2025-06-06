import express from 'express';
import Student from '../models/Student.js';

const studentRouter = express.Router();

// 학생 목록 조회 라우터
studentRouter.get('/', async (req, res) => {
  const students = await Student.find();
  res.render('students', { students });
});

// 학생 등록 폼 페이지
studentRouter.get('/new', (req, res) => {
  res.render('student_form');
});

studentRouter.post('/insert', async (req, res) => {
  const { id, name, age, stickers } = req.body;
  console.log('👉 받은 데이터:', req.body);

  // 같은 ID가 있으면 등록 금지
  const existing = await Student.findOne({ id: String(id) });
  console.log(existing+ " 존재여부부")
  if (existing) {
    return res.send('❌ 이미 존재하는 ID입니다!');
  }

  await Student.create({ id, name, age, stickers });
  res.redirect('/students');
});

export default studentRouter;