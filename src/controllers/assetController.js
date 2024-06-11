import Employee from '../models/employeeModel.js';
import { validateAssetType } from '../utils/validation.js';

export const updateAssetInfo = async (req, res) => {
  try {
    const { cpf, assetType } = req.params;
    const { info } = req.body;

    if (!validateAssetType(assetType)) return res.status(400).json({ message: 'Invalid asset type' });

    const employee = await Employee.findOne({ cpf });
    if (!employee) return res.status(404).json({ message: 'Employee not found' });

    const asset = employee.assets.find(a => a.type === assetType);
    if (!asset) return res.status(404).json({ message: 'Asset not found' });

    asset.info = info;
    await employee.save();
    res.status(200).json(employee);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const clearAssetInfo = async (req, res) => {
  try {
    const { cpf, assetType } = req.params;

    if (!validateAssetType(assetType)) return res.status(400).json({ message: 'Invalid asset type' });

    const employee = await Employee.findOne({ cpf });
    if (!employee) return res.status(404).json({ message: 'Employee not found' });

    const asset = employee.assets.find(a => a.type === assetType);
    if (!asset) return res.status(404).json({ message: 'Asset not found' });

    asset.info = '';
    await employee.save();
    res.status(200).json(employee);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
