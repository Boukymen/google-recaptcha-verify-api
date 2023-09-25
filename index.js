require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
const port = 8000;

const SITE_SECRET = process.env.SITE_SECRET;

app.use(cors());
app.use(express.json());

app.post("/verify", async (request, response) => {
    const { captchaValue } = request.body;
    const { data } = await axios.post(
        `https://www.google.com/recaptcha/api/siteverify?secret=${SITE_SECRET}&response=${captchaValue}`
    );
    response.send(data);
});

app.listen(port, () => {
    console.log(`Server listening at ${port}`);
});


app.get('/', (req, res) => {
    res.send('Hey this is my API running 🥳')
})

app.get('/about', (req, res) => {
    res.send('This is my about route..... ')
})


// Export the Express API
module.exports = app
