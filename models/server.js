const express = require(`express`);
const path = require(`path`);
class Server {
    constructor () {
        this.port = process.env.PORT;
        this.app = express();
        this.middleware();
        this.routes();

    }
    middleware() {
           this.app.use(express.static(`public`));
    }
    routes() {
            this.app.use (`/api/usuarios`,require("../routes/route.usuarios"));
            this.app.use(`/index` , (req,res)=>{
                res.sendFile(path.resolve(`public/index.html`));
            });
            this.app.use(`/contact` , (req,res)=>{
                res.sendFile(path.resolve(`public/contact.html`));
            });
            this.app.use(`/localizacion` , (req,res)=>{
                res.sendFile(path.resolve(`public/localizacion.html`));
            });
            this.app.use(`/*` , (req,res)=>{
                res.sendFile(path.resolve(`public/404error.html`));
            });
    }
    listen(){
        this.app.listen(this.port,()=>{console.log(`http://localhost:8080`)});
    }
}

module.exports = Server;

