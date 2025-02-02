const { FAQ } = require("../models/index");

class FAQRepository {
  async createFAQ({
    question,
    answer,
    question_hi,
    question_bn,
    answer_hi,
    answer_bn,
  }) {
    try {
      const faq = await FAQ.create({
        question,
        answer,
        question_hi,
        question_bn,
        answer_hi,
        answer_bn,
      });
      return faq;
    } catch (error) {
      console.error("Error in createFAQ:", error);
      throw error;
    }
  }

  async deleteFAQ(FAQId) {
    try {
      await FAQ.destroy({
        where: {
          id: FAQId,
        },
      });
      return true;
    } catch (error) {
      console.error("Error in deleteFAQ:", error);
      throw error;
    }
  }

  async updateFAQ(
    FAQId,
    data //{name: "new name"}
  ) {
    try {
      const faq = await FAQ.update(data, {
        where: {
          id: FAQId,
        },
      });
      return faq;
    } catch (error) {
      console.error("Error in updateFAQ:", error);
      throw error;
    }
  }

  async getFAQ(FAQId) {
    try {
      const faq = await FAQ.findByPk(FAQId);
      return faq;
    } catch (error) {
      console.error("Error in getFAQ:", error);
      throw error;
    }
  }

  async getAllFAQs() {
    try {
      const faqs = await FAQ.findAll();
      return faqs;
    } catch (error) {
      console.error("Error in getAllFAQs:", error);
      throw error;
    }
  }

  //   async getAllFAQ(filter) {
  //     try {
  //       if (filter.name) {
  //         const cities = await City.findAll({
  //           where: {
  //             name: {
  //               [Op.startsWith]: filter.name,
  //             },
  //           },
  //         });
  //         return cities;
  //       }
  //       const cities = await City.findAll();
  //       return cities;
  //     } catch (error) {
  //       console.error("Error in getAllCities:", error);
  //       throw error;
  //     }
  //   }
}

module.exports = FAQRepository;
