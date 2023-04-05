const logger = (param, khuong) => (state) => (next) => (action) => {
  console.log("Logging", param, khuong);
  next(action);
};
export default logger;
