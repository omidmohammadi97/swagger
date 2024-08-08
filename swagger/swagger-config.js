const swaggerjsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const path = require("path");
function SwaggerConfig(app){
    const swaggerDocs = swaggerjsDoc({
        swaggerDefinition : {
            openapi: "3.0.1",
            info : {
                title : "swagger example",
                description : "",
                version : "1.0.0"
            },
        },
        apis : [path.join(__dirname , "*.swagger.js")]
    });
    const swagger = swaggerUi.setup(swaggerDocs)
    app.use("/apis" , swaggerUi.serve , swagger)
}


 module.exports = SwaggerConfig;