exports.createDocument =  (model, data) => {
    return new Promise((resolve,reject)=>{
        model.create(data, (err, data) => {
                if (err) reject(err);
                else resolve(data);
            })
       })
}