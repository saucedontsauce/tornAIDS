import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('yup')
})

app.listen(3000, () => {
    console.log('yup')
})