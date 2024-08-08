const express = require("express")
const dotenv = require("dotenv")
const SwaggerConfig = require("./swagger/swagger-config")

async function main(){
    const app = express()
    dotenv.config();
    app.use(express.json({ type: 'application/json', charset: 'utf-8' }));
    app.use(express.urlencoded({extended : true}))
    SwaggerConfig(app);
    const PORT = process.env.PORT
    app.listen(PORT , ()=>{
    console.log("Server is listeing on port" + PORT)
})
}
main()