const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./src/routes");
const axios = require('axios');
const xml2js = require('xml2js');
const { Buffer } = require('buffer'); // Required for base64 decoding
const fileUpload = require('express-fileupload');
const xlsx = require('xlsx');
const cors = require("cors");
const path = require('path'); 
const app = express();
// console.log("test data test data test data test data ");
// const url = 'https://tnpreauth.tn.gov.in/clientgwapi/api/Aadhaar/DoDemoAuth';
// const requestData = {
//   AUAKUAParameters: {
//     LAT: "17.494568",
//     LONG: "78.392056",
//     AADHAARID: "308523270102",
//     RRN: "1234567890",
//     SLK: "LPAAS-GJLNV-ZSVIL-ZSWER",
//     DEVID: "public",
//     DEVMACID: "11:22:33:44:55",
//     CONSENT: "Y",
//     SHRC: "Y",
//     VER: "2.5",
//     SERTYPE: "07",
//     ENV: "2",
//     REF: "FROMSAMPLE",
//     ISPI: "True",
//     ISPA: "False",
//     ISPFA: "False",
//     PIMS: "E",
//     Name: "Sulochana M",
//     PIDOB: "1982",
//     PIGENDER: "F"
//   },
//   PIDXml: "",
//   ENVIRONMENT: "0"
// };

// axios.post(url, requestData, {
//   headers: {
//     'Content-Type': 'application/json'
//   }
// })
// .then(response => {
//   console.log('Response:', response.data);
// })
// .catch(error => {
//   console.error('Error:', error.message);
// });


var whitelist = ['http://localhost:9000', 'http://localhost:3001', "http://a4f506a.online-server.cloud", "http://127.0.0.1:8000", "https://inspection1.proz.in", 'https://shg.mathikalam.org','https://mathikalam.org']
var corsOptions = {
  origin: function (origin, callback) {
    console.log(origin);
    if (whitelist.indexOf(origin) !== -1 || origin === undefined) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
} 
app.use(
  cors(corsOptions)
);
app.use(bodyParser.json());
app.use(fileUpload());
app.use("/", routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 