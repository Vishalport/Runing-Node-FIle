const express = require('express');
const app = express();
require('./db/dbconnection');
require("./admin/admin")
require("./StaticContaint/StaticContaint");
const userRouter = require("./routes/userRouter");
const adminRouter = require('./routes/adminRouter');
const CronJob  = require("node-cron")
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require("swagger-jsdoc");

app.use(express.json({ limit: "50mb" }));
require("./helper/StoreStatus");


// const option = {
//   definition : {
//     openapi : '3.0.0',
//     info : {
//       title : "node js API",
//       version : "1.0.0"
//     },
//     server : [
//       {
//         api : "http/localhost/4000/"
//       }
//     ]
//   },
//   apis : ["../routes/*.js"]
// }
const swaggerDefinition = {
  info: {
    title: "compliance-node",
    version: "1.0.0",
    description: "Swagger API Docs",
  },
  // host: `${variableused.swaggerurl}`,
  basePath: "/api/v1",
};
const options = {
  swaggerDefinition: swaggerDefinition,
  apis: ["./routes/*.js"],
  // explorer: true 

};

// const app = express();
// let options = {
//   explorer: true
// };
const swaggerSpec = swaggerJSDoc(options);

// app.get("/swagger.json", (req, res) => {
//   res.setHeader("Content-Type", "application/json");
//   res.send(swaggerSpec);
// });

// const swaggerSpec = swaggerJSDoc(option); 
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.use(express.urlencoded({extended:true}));
app.use(express.json()); 

                                              
app.use("/api/v1/user", userRouter, (req, res) => {
});

app.use("/user/", userRouter, (req, res) => {
}); 

app.use("/admin", adminRouter, (req, res) => {
}); 
 

CronJob.schedule("* * * * * */10", function() {
  console.log("running a task every 10 second");
});


app.listen(4000,()=>{
    console.log("server is running on 4000");
});
