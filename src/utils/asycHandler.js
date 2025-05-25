const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch((err) => {
    next(err);
    // console.error(err);
    // res.status(500).json({ success: false, message: 'Internal Server Error' });
  });
}
export { asyncHandler };        