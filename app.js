let express = require("express");
let app = express();
const httpStatus = require("http-status");

app.get("/", function(req, res){
    res.send("Node.js başarılı bir şekilde çalışıyor");
})

app.get("/add", function(req, res){
        res.status(httpStatus.OK).send(xmlToJson(response,"add"))
})

app.get("/divide", function(req, res){
        res.status(httpStatus.OK).send(xmlToJson(response,"subtract"))
})
app.get("/multiply", function(req, res){
        res.status(httpStatus.OK).send(xmlToJson(response,"multiply"))
})
app.get("/divide", function(req, res){
        res.status(httpStatus.OK).send(xmlToJson(response,"divide"))
})


app.listen(3000);
