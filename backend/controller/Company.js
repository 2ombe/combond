import Company from '../modal/Company.js';
import express from 'express';
const router = express.Router();
// Register a new company
router.post('/', async (req, res) => {
  try {
    const {
      name,
      description,
      email,
      tin,
      location,
      category,
      companyLogo,
      country,
      city,
      streetAddress,
    } = req.body;

    // Check if a company with the same name or TIN already exists
    const existingCompany = await Company.findOne({ $or: [{ tin }] });
    if (existingCompany) {
      return res
        .status(400)
        .json({ message: 'Company with this name or TIN already exists' });
    }

    // Create a new company
    const newCompany = new Company({
      name,
      description,
      category,
      email,
      companyLogo,
      tin,
      location,
      country,
      city,
      streetAddress,
    });

    await newCompany.save();

    res.status(201).json({
      message: 'Company registered successfully',
      company: newCompany,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get company information by name
router.get('/', async (req, res) => {
  try {
    const company = await Company.find();

    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }

    res.status(200).json(company);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/:companyId', async (req, res) => {
  try {
    const { companyId } = req.params;

    // Use findById to find a company by its unique ID
    const company = await Company.findById(companyId);

    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }

    res.status(200).json({ company });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
