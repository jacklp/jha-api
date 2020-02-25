import express from 'express';
var router = express.Router();
import PrintService from '../services/print'

/* GET home page. */
router.get('/', async function(req, res, next) {
  const prints = await PrintService.getPrints(req.query.page);
  return res.json(prints);
});

export default router;
