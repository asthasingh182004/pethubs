var express =require("express");
var bodyParser = require("body-parser");
var mongoose =require("mongoose");
const e=require("express")

const app=express()
app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb://localhost:27017/logindb',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

var db=mongoose.connection;
db.on('error',()=> console.log("error in connecting database"));
db.once('open',()=>console.log("connected to db"));

app.get("/", (req, res) => {

    res.set({
        "Allow-access-Allow-Origin": '*'
    })

    return res.redirect('index.html');

}).listen(3000);
app.post("/login", (request, response) => {
    try {
        //adding
        const username = request.body.username;
        const password = request.body.password;
        console.log('${username} and ${password}');
    } catch (error) {
        console.log("inv info");
    }
})

//         const usermail = db.collection('logininfo').findOne({ email: username }, (err, res) => {
//             if (res == null) {
//                 response.send("Invalid information!❌❌❌! Please create account first");
//             }
//             else if (err) throw err;


//             if (res.password === password) {
//                 return response.redirect('login.html');
//             }
//             else {
//                 response.send("Invalid Password!❌❌❌");
//             }


//         });
//     }
//     catch (error) {
//         response.send("Invalid information❌");
//     }

// })