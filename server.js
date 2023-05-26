const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

const baseUrl = '/calculator'

app.use(express.json());

const baseRouter = express.Router();

app.use(baseRouter)

baseRouter.get('/calculator/greeting', (req, res) => {
    res.status(200).send("Hello world!")
});

baseRouter.post('/calculator/add', (req, res) => {
    let {first, second} = req.body
    first = parseInt(first)
    second = parseInt(second)

    let result = first + second
    return res.status(200).json({
        result
    })
});


baseRouter.post('/calculator/subtract', (req, res) => {
    let {first, second} = req.body
    first = parseInt(first)
    second = parseInt(second)

    let result = first - second
    return res.status(200).json({
        result
    })
});

app.use(baseUrl, baseRouter);
app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});