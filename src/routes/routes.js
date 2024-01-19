const expres = require("express");
const router = expres.Router();
const whatsAppController = require("../controllers/whatsappController");

router 
.get("/", whatsAppController.VeryToken)
.post("/", whatsAppController.ReceiveMessage)

module.exports = router;