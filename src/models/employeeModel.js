import mongoose from 'mongoose';

const assetSchema = new mongoose.Schema({
  type: String,
  info: String
});

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cpf: { type: String, required: true, unique: true },
  assets: [assetSchema]
});

const Employee = mongoose.model('Employee', employeeSchema);

export default Employee;
