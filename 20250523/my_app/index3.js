import express from 'express';
import path from 'path';

const __dirname = path.resolve();

const app = express();

app.get('/', (req, res) => {
    //res.send('<h1>Hello Main Page</h1>')
    res.sendFile(__dirname + '/public/main.html')
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});