const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        title: { 
            type: String 
        },
        price: { 
            type: Number 
        },
        description: { 
            type: String 
        }
    },
    {
        timestamps: true,
    }
)

const modelName = 'Product';

const Product = mongoose.model(modelName, ProductSchema);

module.exports = Product;
