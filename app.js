require('dotenv').config();
const express = require("express");
const port = process.env.PORT;
const app = express();
//creamos un middleware que diga cual es la el directorio principal de la pagina estatica
//los middlewarse se ejecutan sipemre primero
app.use(express.static(`public`));
app.use(express.static(`css`));
app.get(`/index`,(req,res)=>{
    res.sendFile(`${__dirname}/public/index.html`);
});
app.get(`/contact`,(req,res)=>{
    res.sendFile(`${__dirname}/public/contact.html`);
});
app.get(`/localizacion`,(req,res)=>{
    res.sendFile(`${__dirname}/public/localizacion.html`);
});
app.get(`/*`,(req,res)=>{
    res.status(404).sendFile(`${__dirname}/public/404error.html`);
});

app.listen(port,()=>{console.log(`http://localhost:8080`)});