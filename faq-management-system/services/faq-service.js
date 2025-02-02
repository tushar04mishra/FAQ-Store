const { FAQRepository } = require("../repository/index");

class FAQService {
  constructor() {
    this.FAQRepository = new FAQRepository();
  }

  async createFAQ(data) {
    try {
      const faq = await this.FAQRepository.createFAQ({
        question: data.question,
        answer: data.answer,
        question_hi: data.question_hi,
        question_bn: data.question_bn,
        answer_hi: data.answer_hi,
        answer_bn: data.answer_bn,
      });
      return faq;
    } catch (error) {
      console.log("something went wrong at service layer");
      throw { error };
    }
  }

  async deleteFAQ(FAQId) {
    try {
      const response = this.FAQRepository.deleteFAQ(FAQId);
      return response;
    } catch (error) {
      console.log("something went wrong at service layer");
      throw { error };
    }
  }

  async updateFAQ(FAQId, data) {
    try {
      const faq = await this.FAQRepository.updateFAQ(FAQId, data);
    } catch (error) {
      console.log("something went wrong at service layer");
      throw { error };
    }
  }

  async getFAQ(FAQId, data) {
    try {
      const faq = await this.FAQRepository.getFAQ(FAQId);
      return faq;
    } catch (error) {
      console.log("something went wrong at service layer");
      throw { error };
    }
  }

  async getAllFAQs() {
    try {
      const faqs = await this.FAQRepository.getAllFAQs();
      return faqs;
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw { error };
    }
  }

  //   async getAllCities(filter) {
  //     try {
  //       const cities = await this.CityRepository.getAllCities({
  //         name: filter.name,
  //       });
  //       return cities;
  //     } catch (error) {
  //       console.log("something went wrong at service layer");
  //       throw { error };
  //     }
  //   }
}
module.exports = FAQService;
