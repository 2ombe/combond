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

  router.put(
    '/pay',
    
    (async (req, res) => {
      const order = await FranchiseTerm.findById(req.params.id);
      if (order) {
        order.isPaid = true;
        order.paidAt = Date.now();
        order.paymentResult = {
          id: req.body.id,
          status: req.body.status,
          update_time: req.body.update_time,
          email_address: req.body.email_address,
        };
  
        const updatedOrder = await order.save();
        res.send({ message: 'Order Paid', order: updatedOrder });
      } else {
        res.status(404).send({ message: 'Order Not Found' });
      }
    })
  );
export default router
