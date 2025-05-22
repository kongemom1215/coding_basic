import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.type('text/plain'); // Content-Type 설정
    res.send('Hello node.js2');
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});