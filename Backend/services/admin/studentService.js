exports.createDocument = (model, data) => {
  return new Promise((resolve, reject) => {
    model.create(data, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
};
exports.getAllDocuments = (model, query, options) => {
  return new Promise((resolve, reject) => {
    model.find((err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
};
