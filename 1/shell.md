```
config    0.000GB
local     0.000GB
reliance  0.000GB
test      0.000GB
> use Human_Resource
switched to db Human_Resource
> db.employee.insertOne({name: "raghu"})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("62bdc50cc0724271fc13149e")
}
> db.employee.find()
{ "_id" : ObjectId("62bdc50cc0724271fc13149e"), "name" : "raghu" }
> db.employee.insertMany([{ "firstName": "john", "lastName": "Doe", "salary": "25000", "department": "HR", "lastCompany":  "X", "lastSalary": "10000", "overallExp": "2", "contactInfo": "1234567890", "yearGrad": "2016", "gradStream": "CSE"  }])
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("62bdc64dc0724271fc13149f")
        ]
}
> db.employee.insertMany([{ "firstName": "Rohan", "lastName": "Jame", "salary": "30000", "department": "Technical", "lastCompany":  "Y", "lastSalary": "15000", "overallExp": "1", "contactInfo": "1234567890", "yearGrad": "2015", "gradStream": "CSE"  }, { "firstName": "Jame", "lastName": "Doe", "salary": "35000", "department": "Accounts", "lastCompany": "Z",  }])
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("62bdc7f9c0724271fc1314a0"),
                ObjectId("62bdc7f9c0724271fc1314a1")
        ]
}
> db.employee.insertMany([{ "firstName": "Sao", "lastName": "Avika", "salary": "30000", "department": "Technical", "lastCompany":  "Y", "lastSalary": "15000", "overallExp": "1", "contactInfo": "1234567890", "yearGrad": "2015", "gradStream": "CSE"  }, { "firstName": "Jame", "lastName": "roh", "salary": "35000", "department": "Accounts", "lastCompany": "Z", "lastSalary": "15000", "overallExp": "2", "contactInfo": "1234567890", "yearGrad": "2019", "gradStream": "EEE" }])
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("62bdc8b2c0724271fc1314a2"),
                ObjectId("62bdc8b2c0724271fc1314a3")
        ]
}
> db.employee.find()
{ "_id" : ObjectId("62bdc50cc0724271fc13149e"), "name" : "raghu" }
{ "_id" : ObjectId("62bdc64dc0724271fc13149f"), "firstName" : "john", "lastName" : "Doe", "salary" : "25000", "department" : "HR", "lastCompany" : "X", "lastSalary" : "10000", "overallExp" : "2", "contactInfo" : "1234567890", "yearGrad" : "2016", "gradStream" : "CSE" }
{ "_id" : ObjectId("62bdc7f9c0724271fc1314a0"), "firstName" : "Rohan", "lastName" : "Jame", "salary" : "30000", "department" : "Technical", "lastCompany" : "Y", "lastSalary" : "15000", "overallExp" : "1", "contactInfo" : "1234567890", "yearGrad" : "2015", "gradStream" : "CSE" }
{ "_id" : ObjectId("62bdc7f9c0724271fc1314a1"), "firstName" : "Jame", "lastName" : "Doe", "salary" : "35000", "department" : "Accounts", "lastCompany" : "Z" }
{ "_id" : ObjectId("62bdc8b2c0724271fc1314a2"), "firstName" : "Sao", "lastName" : "Avika", "salary" : "30000", "department" : "Technical", "lastCompany" : "Y", "lastSalary" : "15000", "overallExp" : "1", "contactInfo" : "1234567890", "yearGrad" : "2015", "gradStream" : "CSE" }
{ "_id" : ObjectId("62bdc8b2c0724271fc1314a3"), "firstName" : "Jame", "lastName" : "roh", "salary" : "35000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "15000", "overallExp" : "2", "contactInfo" : "1234567890", "yearGrad" : "2019", "gradStream" : "EEE" }
> db.employee.find().pretty()
{ "_id" : ObjectId("62bdc50cc0724271fc13149e"), "name" : "raghu" }
{
        "_id" : ObjectId("62bdc64dc0724271fc13149f"),
        "firstName" : "john",
        "lastName" : "Doe",
        "salary" : "25000",
        "department" : "HR",
        "lastCompany" : "X",
        "lastSalary" : "10000",
        "overallExp" : "2",
        "contactInfo" : "1234567890",
        "yearGrad" : "2016",
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("62bdc7f9c0724271fc1314a0"),
        "firstName" : "Rohan",
        "lastName" : "Jame",
        "salary" : "30000",
        "department" : "Technical",
        "lastCompany" : "Y",
        "lastSalary" : "15000",
        "overallExp" : "1",
        "contactInfo" : "1234567890",
        "yearGrad" : "2015",
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("62bdc7f9c0724271fc1314a1"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z"
}
{
        "_id" : ObjectId("62bdc8b2c0724271fc1314a2"),
        "firstName" : "Sao",
        "lastName" : "Avika",
        "salary" : "30000",
        "department" : "Technical",
        "lastCompany" : "Y",
        "lastSalary" : "15000",
        "overallExp" : "1",
        "contactInfo" : "1234567890",
        "yearGrad" : "2015",
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("62bdc8b2c0724271fc1314a3"),
        "firstName" : "Jame",
        "lastName" : "roh",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "1234567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}
> db.employee.find({salary: {$gt: 30000 }}).pretty()
> db.employee.find({salary: {$gt: "30000" }}).pretty()
{
        "_id" : ObjectId("62bdc7f9c0724271fc1314a1"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z"
}
{
        "_id" : ObjectId("62bdc8b2c0724271fc1314a3"),
        "firstName" : "Jame",
        "lastName" : "roh",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "1234567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}
> db.employee.find({overallExp: {$gt: "1" }}).pretty()
{
        "_id" : ObjectId("62bdc64dc0724271fc13149f"),
        "firstName" : "john",
        "lastName" : "Doe",
        "salary" : "25000",
        "department" : "HR",
        "lastCompany" : "X",
        "lastSalary" : "10000",
        "overallExp" : "2",
        "contactInfo" : "1234567890",
        "yearGrad" : "2016",
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("62bdc8b2c0724271fc1314a3"),
        "firstName" : "Jame",
        "lastName" : "roh",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "1234567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}
> db.employee.find({$and: [{overallExp: {$gt: "1"}}, {yearGrad: {$gt: "2015"}}] }).pretty()
{
        "_id" : ObjectId("62bdc64dc0724271fc13149f"),
        "firstName" : "john",
        "lastName" : "Doe",
        "salary" : "25000",
        "department" : "HR",
        "lastCompany" : "X",
        "lastSalary" : "10000",
        "overallExp" : "2",
        "contactInfo" : "1234567890",
        "yearGrad" : "2016",
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("62bdc8b2c0724271fc1314a3"),
        "firstName" : "Jame",
        "lastName" : "roh",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "1234567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}
> db.employee.updateMany({salary: {$gt: "10000"}}, {$set: {hasExp: "true"}})
{ "acknowledged" : true, "matchedCount" : 5, "modifiedCount" : 5 }
> db.employee.updateMany({salary: {$gt: "10000"}}, {$set: {salary: "5000"}})
{ "acknowledged" : true, "matchedCount" : 5, "modifiedCount" : 5 }

> db.employee.find()
{ "_id" : ObjectId("62bdc50cc0724271fc13149e"), "name" : "raghu" }
{ "_id" : ObjectId("62bdc64dc0724271fc13149f"), "firstName" : "john", "lastName" : "Doe", "salary" : "5000", "department" : "HR", "lastCompany" : "X", "lastSalary" : "10000", "overallExp" : "2", "contactInfo" : "1234567890", "yearGrad" : "2016", "gradStream" : "CSE", "hasExp" : "true" }
{ "_id" : ObjectId("62bdc7f9c0724271fc1314a0"), "firstName" : "Rohan", "lastName" : "Jame", "salary" : "5000", "department" : "Technical", "lastCompany" : "Y", "lastSalary" : "15000", "overallExp" : "1", "contactInfo" : "1234567890", "yearGrad" : "2015", "gradStream" : "CSE", "hasExp" : "true" }
{ "_id" : ObjectId("62bdc7f9c0724271fc1314a1"), "firstName" : "Jame", "lastName" : "Doe", "salary" : "5000", "department" : "Accounts", "lastCompany" : "Z", "hasExp" : "true" }
{ "_id" : ObjectId("62bdc8b2c0724271fc1314a2"), "firstName" : "Sao", "lastName" : "Avika", "salary" : "5000", "department" : "Technical", "lastCompany" : "Y", "lastSalary" : "15000", "overallExp" : "1", "contactInfo" : "1234567890", "yearGrad" : "2015", "gradStream" : "CSE", "hasExp" : "true" }
{ "_id" : ObjectId("62bdc8b2c0724271fc1314a3"), "firstName" : "Jame", "lastName" : "roh", "salary" : "5000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "15000", "overallExp" : "2", "contactInfo" : "1234567890", "yearGrad" : "2019", "gradStream" : "EEE", "hasExp" : "true" }
> db.employee.deleteMany({lastCompany: "Y"})
{ "acknowledged" : true, "deletedCount" : 2 }
> db.employee.find().pretty()
{ "_id" : ObjectId("62bdc50cc0724271fc13149e"), "name" : "raghu" }
{
        "_id" : ObjectId("62bdc64dc0724271fc13149f"),
        "firstName" : "john",
        "lastName" : "Doe",
        "salary" : "5000",
        "department" : "HR",
        "lastCompany" : "X",
        "lastSalary" : "10000",
        "overallExp" : "2",
        "contactInfo" : "1234567890",
        "yearGrad" : "2016",
        "gradStream" : "CSE",
        "hasExp" : "true"
}
{
        "_id" : ObjectId("62bdc7f9c0724271fc1314a1"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "5000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "hasExp" : "true"
}
{
        "_id" : ObjectId("62bdc8b2c0724271fc1314a3"),
        "firstName" : "Jame",
        "lastName" : "roh",
        "salary" : "5000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "1234567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE",
        "hasExp" : "true"
}
```
