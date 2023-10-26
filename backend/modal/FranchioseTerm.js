import mongoose from'mongoose';

const FranchiseTermSchema = new mongoose.Schema({
  title: String,
  description: String,
  duration: Number,
  fee: Number,
  company: {type:mongoose.Schema.Types.ObjectId,ref:"Company"},
  franchisee: String,
  isAccepted: Boolean,
});

const franchiseTerm = mongoose.model('FranchiseTerm', FranchiseTermSchema);
export default franchiseTerm
