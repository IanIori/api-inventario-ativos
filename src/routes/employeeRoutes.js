import express from 'express';
const router = express.Router();
import {
  createEmployee,
  deleteEmployee,
  getAllEmployees,
  getEmployeeInventory,
  updateEmployeeName
} from '../controllers/employeeController.js';

router.post('/employees', createEmployee);
router.delete('/employees/:cpf', deleteEmployee);
router.get('/employees', getAllEmployees);
router.get('/employees/:cpf/inventory', getEmployeeInventory);
router.put('/employees/:cpf', updateEmployeeName);

export default router;
