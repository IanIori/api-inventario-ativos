import express from 'express';
const router = express.Router();
import {
  updateAssetInfo,
  clearAssetInfo
} from '../controllers/assetController.js';

router.put('/employees/:cpf/assets/:assetType', updateAssetInfo);
router.delete('/employees/:cpf/assets/:assetType', clearAssetInfo);

export default router;
