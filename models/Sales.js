const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const stringTypeWithRequiredSchema = {
    type : String,
    required: true,
};

const booleanTypeWithRequiredSchema = {
    type : Boolean,
    required: true,
};

const numberTypeWithRequiredSchema = {
    type : String,
    required: true,
};

const dateTypeWithRequiredSchema = {
    type : Date,
    required: true,
};

const SalesSchema = new Schema({
 id: numberTypeWithRequiredSchema,
 title : stringTypeWithRequiredSchema,
 price : numberTypeWithRequiredSchema,
 description: stringTypeWithRequiredSchema,
 category: stringTypeWithRequiredSchema,
 image: stringTypeWithRequiredSchema,
 sold: booleanTypeWithRequiredSchema,
 dateOfSale: dateTypeWithRequiredSchema,
})


module.exports = mongoose.model('Sales', SalesSchema);