// 
var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")
const session = require("express-session")


const app = express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:false
}))
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/node_crud',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(
    session({
        secret:"my secret key",
        saveUninitialized:true,
        resave:false,
    })
)

app.use ((req,res,next)=>{
    res.locals.messag=req.session.message;
    delete req.session.message;
    next();
})
//set templet engine
app.set("view engine","ejs")

//route prefix

app.use("",require("./routes/routes"))
// database connection

var db = mongoose.connection;

db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to Database"))

app.get('/',(req,res)=>{
    res.send("hello world")
})
app.listen(3000)