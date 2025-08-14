export const globalErrorHandler = (err, req, res, next) => {
  console.error('Global error handler:', err);
  res.status(500).json({ 
    error: 'An error occurred while processing your request',
    message: err.message || 'Unknown error'
  });
};