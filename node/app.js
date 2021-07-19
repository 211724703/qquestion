const express = require('express')
const app = express()
const mogoose = require('mongoose')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const router = require('./routers/api')
const request = require('request')
const { response } = require('express')

dotenv.config()

let connectParams = {
    // newUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}

app.use(bodyParser.json())

mogoose.connect(process.env.CONECT_DB, connectParams
).then(() => {
    console.log("db contected");
}).catch((error) => {
    console.log(`error: ${error}`);
})

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authoriztion");
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});



app.use('/', router)

app.listen(4000, () => {
    console.log("listening in port 4000")
})


