const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    address: {
        type: String
    },
    rating: {
      type: Number
    },
    price: {
        type: Number
    }
});

const PostModel = mongoose.model('posts', PostSchema);
module.exports = PostModel;