import GeminiDao from '../dao/GeminiDao.js';

export default class GeminiController {
  async generateContent(req, res, next) {
    const { prompt } = req.body;

    const dao = new GeminiDao();
    try {
      const result = await dao.callGeminiAPI(prompt);
      res.status(200).json({ content: result });
    } catch (error) {
      next(error);
    }
  }
}