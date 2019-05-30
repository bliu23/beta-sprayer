const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017/my-project'

class Database {
  constructor() {
    console.log("Database initialized")
  }

  testConnection() {
    // Something like this should be a singleton class with functions you can use to query.
    MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
      if(err) {
        console.log(err)
        return
      }
      console.log("Db connected: " + db.isConnected())
      db.close()
    })
  }

}
let x = new Database().testConnection()

module.exports = Database