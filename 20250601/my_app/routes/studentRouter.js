import express from 'express';
import Student from '../models/Student.js';

const studentRouter = express.Router();

// 학생 목록 조회 라우터
studentRouter.get('/', async (req, res) => {
  const students = await Student.find();
  res.render('students', { students });
});

export default studentRouter;