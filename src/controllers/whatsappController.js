// const fs = require("fs");
// const myConsole = new console.Console(fs.createWriteStream("./logs.txt"));

// const VeryToken = (req, res) => {
//     try {
//         var accessToken = "AZSDFVLODOEDZO390301002";
//         var token = req.query["hub.verify_token"];
//         var challenge = req.body["hub.challenge"];

// if (challenge != null && token != null && token == accessToken) {
//     res.send(challenge);
// } else {
//     res.status(400).send();
// }

//     } catch (e) {
//         res.status(400).send();
//     }


//     res.send('Hello VeriToken');
// } 


// const ReceiveMessage = (req, res) => {
//   try {
//     var entry = (req.body["entry"])[0];
//     var changes = (entry["changes"])[0];
//     var value = changes["value"];
//     var messageObject = value["message"];

//     myConsole.log(messageObject);

//     res.send("EVENT_RECEIVED");
    
//   } catch (e) {

//     myConsole.log(e);

//     res.send("EVENT_RECEIVED");
//   }
// } 


const VeriToken = (req, res) => {
  res.send("TOKEN VERIFY")
}

const ReceiveMessage = (req, res) => {
  res.send("RECEIVE MESSAGE")
}


module.exports = {
    VeryToken,
    ReceiveMessage
}