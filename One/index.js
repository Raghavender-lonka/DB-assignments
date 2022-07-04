const mongoClient = require("mongodb").MongoClient
const employeesData = require("./employeesData.json")

const connectionString = "mongodb://127.0.0.1:27017"

mongoClient.connect(connectionString, async (err, db) => {
  if (err) {
    console.error("Error while connecting", err)
    return
  }
  const database = db.db("Human_Resoure")
  const dbCollection = database.collection("employee")

  console.log("Connected to Mongo Database")

  //   const inserting = await database
  //     .collection("employee")
  //     .insertMany(employeesData)

  //   console.log(inserting)

  const finding = await dbCollection.find().toArray()
  console.log(finding)

  //   const findingWithSalary = await dbCollection
  //     .find({ salary: { $gt: "30000" } })
  //     .toArray()
  //   console.log(findingWithSalary)

  //   const findingWithExp = await dbCollection
  //     .find({ overallExp: { $gt: "1" } })
  //     .toArray()
  //   console.log(findingWithExp)

  //   const findingWithTwoConditions = await dbCollection
  //     .find({
  //       $and: [{ yearGrad: { $gt: "2015" } }, { overallExp: { $gt: "1" } }],
  //     })
  //     .toArray()
  //   console.log(findingWithTwoConditions, "findingwithtwoconditions")

  //   const updatingSalary = await dbCollection.updateMany(
  //     { salary: { $gt: "30000" } },
  //     { $set: { salary: "28000" } }
  //   )
  //   console.log(updatingSalary)

  //   const deleteWithLastCompany = await dbCollection.deleteMany({
  //     lastCompany: "Y",
  //   })
  //   console.log(deleteWithLastCompany)
})
