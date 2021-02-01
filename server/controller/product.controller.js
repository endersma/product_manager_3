const { response } = require('express');

const Product = require('../model/product.model');

module.exports = {
    getAll: (req, res) => {
        Product.find().sort()
            .then((allProducts) => {
                res.json(allProducts);
            })
            .catch((err) => console.log(res.json(err)));
        
    },

    create: (req, res) => {
        Product.create(req.body)
            .then((newProduct) => {
                res.json(newProduct);
            })
            .catch((err) => console.log(res.json(err)));
    },

    getOne: (req, res) => {
        Product.findById(req.params.id)
            .then((oneProduct) => {
                res.json(oneProduct);
            })
            .catch((err) => console.log(res.json(err)));
    },

    editOne: (req, res) => {
        Product.findByIdAndUpdate(req.params.id, req.body,{new: true})
            .then((updateProduct) => {
                res.json(updateProduct);
            })
            .catch((err) => res.json(err));
    },

    delete: (req, res) => {
        Product.findByIdAndDelete(req.params.id)
            .then((deleteProduct) =>{
                res.json(deleteProduct);
            })
            .catch((err) => res.json(err));
    },
}