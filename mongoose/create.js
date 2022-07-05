const { default: mongoose } = require("mongoose")
const connetionWithMongoose = require("./connection")
const { employeeShema } = require("./schema")
const employeesData = require("./employeesData.json")

const employeeModel = mongoose.model("employees", employeeShema)

const insertOneWithMongoose = async () => {
  try {
    await connetionWithMongoose()
    const emp1 = employeeModel({
      firstName: "John",
      lastName: "Doe",
      salary: "25000",
      department: "HR",
      lastCompany: "X",
      lastSalary: "10000",
      overallExp: "2",
      contactInfo: "1234567890",
      yearGrad: "2016",
      gradStream: "CSE",
    })
    const result = await emp1.save()
    console.log("Successfully created the record", result)
  } catch (e) {
    console.error("Error while inserting", e)
  }
}

const insertManyWithMongoose = async () => {
  try {
    await connetionWithMongoose()

    const result = await employeeModel.insertMany(employeesData)

    console.log("Successfully created the record", result)
  } catch (e) {
    console.error("error while inserting record", e)
  }
}

module.exports = {
  insertOneWithMongoose,
  insertManyWithMongoose,
}
