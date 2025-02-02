const express = require("express");
const faqController = require("../../controller/faq-controller");

const router = express.Router();

router.post("/faq", faqController.create);
router.delete("/faq/:id", faqController.destroy);
router.get("/faq/:id", faqController.get);
// router.get("/faq", faqController.getAll);
router.get("/faqs", faqController.getAll);
router.patch("/faq/:id", faqController.update);

module.exports = router;
