const Products_store_model = require("../model/ProductStore")
const CronJob  = require("node-cron")
const moment = require("moment");

const time = moment().format('LT');
console.log(time);
if(moment().format('LT') >= "10:00") {
    Products_store_model.updateMany({openingTime: "10:00"}, 
        {status:true}, async (err, Data) => {
            if (Data) {
                console.log("Store is open........rr.....!!");
                console.log(time);
            } else {
                console.log("Something worng...!!!");
                return await responce.status(500).json({
                    responseCode: 500,
                    responseMesage: "Something went Worng..!!",
                });
            }
        }
    );
} 

if(moment().format('LT') >= "9:00") {
    Products_store_model.updateMany({openingTime: "9:00"}, 
        {status:true}, async (err, Data) => {
            if (Data) {
                console.log("Store is open.............!!");
                console.log(time);
            } else {
                console.log("Something worng...!!!");
                return await responce.status(500).json({
                    responseCode: 500,
                    responseMesage: "Something went Worng..!!",
                });
            }
        }
    );
}
