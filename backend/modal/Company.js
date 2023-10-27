import mongoose from 'mongoose';

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,unique:true
  },
  description: String,
  
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  },
  tin: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
  },

  companyLogo: { type: String, required: true },

  country: {
    type: String,
    required: true,
  },
  city: String,
  streetAddress: String,
  // You can add more location-specific fields as needed (e.g., province, postal code)
});

const Company = mongoose.model('Company', companySchema);
export default Company;
