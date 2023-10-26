import express from "express"
import FranchiseTerm from'../modal/FranchioseTerm.js';
const router = express.Router()

// Create a new franchise term
router.post("/", async (req, res) => {
  const { title, description, duration, fee, company, franchisee } = req.body;

  try {
    const newFranchiseTerm = new FranchiseTerm({
      title,
      description,
      duration,
      fee,
      company,
      franchisee,
      isAccepted: false,
    });

    const savedFranchiseTerm = await newFranchiseTerm.save();
    res.json(savedFranchiseTerm);
  } catch (err) {
    res.status(500).json({ error: 'Could not create the franchise term' });
  }
});

// Find all franchise terms
router.get("/",async (req, res) => {
    try {
      const franchiseTerms = await FranchiseTerm.find();
      res.json(franchiseTerms);
    } catch (err) {
      res.status(500).json({ error: 'Could not retrieve franchise terms' });
    }
  })
// get a single contract
router.get("/:id",async (req, res) => {
    const { id } = req.params;
  
    try {
      const franchiseTerm = await FranchiseTerm.findById(id);
      if (!franchiseTerm) {
        return res.status(404).json({ error: 'Franchise term not found' });
      }
      res.json(franchiseTerm);
    } catch (err) {
      res.status(500).json({ error: 'Could not retrieve the franchise term' });
    }
  })
export default router
