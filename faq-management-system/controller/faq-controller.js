const faq = require("../models/faq");
const { FAQService } = require("../services/index");

// Ensure FAQService is correctly instantiated
const faqService = new FAQService();

const create = async (req, res) => {
  try {
    const faq = await faqService.createFAQ(req.body);
    return res.status(201).json({
      data: faq,
      success: true,
      message: "FAQ created successfully",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "FAQ not created",
      err: error,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const response = await faqService.deleteFAQ(req.params.id);
    return res.status(200).json({
      data: faq,
      success: true,
      message: "deleted the faq successfully",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "FAQ not deleted",
      err: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const faq = await faqService.getFAQ(req.params.id);
    return res.status(201).json({
      data: faq,
      success: true,
      message: "FAQ fetched successfully",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: " FAQ not fetched",
      err: error,
    });
  }
};

const update = async (req, res) => {
  try {
    const faq = await faqService.updateFAQ(req.params.id, req.body);
    return res.status(201).json({
      data: faq,
      success: true,
      message: "FAQ updated successfully",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "FAQ not updated",
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const faqs = await faqService.getAllFAQs();
    return res.status(200).json({
      data: faqs,
      success: true,
      message: "FAQs fetched successfully",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "FAQs not fetched",
      err: error,
    });
  }
};

// const getAll = async (req, res) => {
//   try {
//     const cities = await cityService.getAllCities(req.query);
//     return res.status(200).json({
//       data: cities,
//       success: true,
//       message: "Cities fetched successfully",
//       err: {},
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({
//       data: {},
//       success: false,
//       message: "Cities not fetched",
//       err: error,
//     });
//   }
// };

module.exports = {
  create,
  destroy,
  get,
  update,
  getAll,
};
