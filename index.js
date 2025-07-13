import express from 'express';

const app = express();

app.use('/assets', express.serve('/assets'))

app.get('/', (req, res) => {
    res.send('yup')
})

app.listen(3000, () => {
    console.log('yup')
})