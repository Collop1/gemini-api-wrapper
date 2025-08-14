export const promptValidator = (req, res, next) => {
  const { prompt } = req.body;

  if (!prompt || prompt.trim() === '') {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  // Limit prompt size
  if (prompt.length > 1000) {
    return res.status(400).json({ error: 'Prompt must be less than 1000 characters' });
  }

  next();
};