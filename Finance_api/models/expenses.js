import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const expensesSchema = new Schema({
    items : String,
    amount : Number,
    description : String,
    user : {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    week: String,
    month: String,
    year: String
}, {timestamps: true});

module.exports = mongoose.model('Expenses', expensesSchema);