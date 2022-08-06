import path from "path";
import fs from "fs";
import https from "https";
import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

//Use helmet to secure Express headers;
import helmet from "helmet";
app.use(helmet());

app.get('/', (req, res) => {
    res.send('<h1> Home Page </h1>');
})

app.get('/about', (req, res) => {
    res.send('<h1> About Page </h1>');
})

app.get('/services', (req, res) =>{
    res.send('<h1> Services Page </h1>');
})

app.get('/contact', (req, res) => {
    res.send('<h1> Contact Page </h1>');
})


// Use the https module to get the certificate and key files
const sslServer = https.createServer({
    key: fs.readFileSync(path.join(process.cwd(), 'certi', 'key.pem')),
    cert: fs.readFileSync(path.join(process.cwd(), 'certi', 'cert.pem')),
}, app)


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} Port.`);
})

//Name: AKSH K DESAI
//ID: 20CE020
