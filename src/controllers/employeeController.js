import Employee from '../models/employeeModel.js';

export const createEmployee = async (req, res) => {
  try {
    const newEmployee = new Employee(req.body);
    const employee = await newEmployee.save();
    res.status(201).json(employee);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findOne({ cpf: req.params.cpf });
    if (!employee) return res.status(404).json({ message: 'Employee not found' });
    if (employee.assets.length > 0) return res.status(400).json({ message: 'Cannot delete employee with assigned assets' });

    await Employee.deleteOne({ cpf: req.params.cpf });
    res.status(200).json({ message: 'Employee deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getEmployeeInventory = async (req, res) => {
  try {
    const employee = await Employee.findOne({ cpf: req.params.cpf });
    if (!employee) return res.status(404).json({ message: 'Employee not found' });
    res.status(200).json(employee.assets);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const updateEmployeeName = async (req, res) => {
  try {
    const employee = await Employee.findOneAndUpdate(
      { cpf: req.params.cpf },
      { name: req.body.name },
      { new: true }
    );
    if (!employee) return res.status(404).json({ message: 'Employee not found' });
    res.status(200).json(employee);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
