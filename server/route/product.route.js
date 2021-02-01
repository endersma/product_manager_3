const productController = require('../controller/product.controller');

module.exports = (app) => {
    app.get("/api/product", productController.getAll);
    app.post("/api/product", productController.create);
    app.get("/api/product/:id", productController.getOne);
    app.put("/api/product/:id", productController.editOne);
    app.delete("/api/product/:id", productController.delete);
}
