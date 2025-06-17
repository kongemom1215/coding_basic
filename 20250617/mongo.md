# Mongo

## 기본 연결
```js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydb')
    .then(() => console.log('✅ DB 연결 성공'))
    .catch((err) => console.error('❌ DB 연결 실패:', err));
```

## 모델 정의
```js
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  stickers: [String]
});

const Student = mongoose.model('Student', studentSchema);
```

## CRUD

## Create
```js
await Student.create({ name: '콩이', age: 3, stickers: ['별', '하트'] });
```

## Read
```js
// 전체 조회
const allStudents = await Student.find();

// 조건 조회
const oneStudent = await Student.findOne({ name: '콩이' });

// ID로 조회
const byId = await Student.findById('객체ID');
```

## Update
```js
// 조건으로 수정
await Student.updateOne({ name: '콩이' }, { age: 4 });

// ID로 수정
await Student.findByIdAndUpdate('객체ID', { age: 5 });
```

## Delete
```js
// 조건 삭제
await Student.deleteOne({ name: '콩이' });

// ID로 삭제
await Student.findByIdAndDelete('객체ID');
```