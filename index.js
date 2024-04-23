const express = require("express");
const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname});
})

app.get('/index', (req, res) => {
    res.sendFile('index.html', {root: __dirname});
})

app.get('/about', (req, res) => {
    res.sendFile('about.html', {root: __dirname})
})

app.get('/contact-me', (req, res) => {
    res.sendFile('contact-me.html', {root: __dirname});
})

app.all("/*", (req, res) => {
    res.status(404).sendFile('404.html', {root: __dirname});
});

app.listen(port, () => {
    console.log(`BIS app listening on port ${port}`);
})