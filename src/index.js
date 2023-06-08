//includes 
const express = require('express');

const routes = require('./routes');
const NotFoundError = require('./middlewares/NotFoundError');
//---------------------------------------------------
const server = express();
const porta = 8080;
//-----------------
server.use(express.json());

server.use(routes);
//-----------------

server.use((err, req, res, next) => {
    if(err instanceof NotFoundError){
        res.status(404).json(err.message)
    }
     res.status(500).json({
        status: "error",
        message: "internal server error"
    })

})
server.listen(porta,()=>{
    console.log("SERVIDOR INICIADO");
});
