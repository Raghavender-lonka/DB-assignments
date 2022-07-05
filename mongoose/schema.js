const mongoose = require("mongoose")

const employeeShema = mongoose.Schema({
  firstName: String,
  lastName: String,
  salary: String,
  department: String,
  lastCompany: String,
  lastSalary: String,
  overallExp: String,
  contactInfo: String,
  yearGrad: String,
  gradStream: String,
})

module.exports = {
  employeeShema,
}
