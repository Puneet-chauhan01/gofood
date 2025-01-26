const mongoose = require('mongoose');
const mongourl = 'mongodb+srv://pschauhan6149:2004@cluster0.keoal.mongodb.net/goFoodMERN?retryWrites=true&w=majority&appName=Cluster0'
// const mongourl = "mongodb://pschauhan6149:2004@cluster0-shard-00-00.keoal.mongodb.net:27017,cluster0-shard-00-01.keoal.mongodb.net:27017,cluster0-shard-00-02.keoal.mongodb.net:27017/goFoodMERN?ssl=true&replicaSet=atlas-try180-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"

const mongo = async () => {
  await mongoose.connect(mongourl, { useNewUrlParser: true, useUnifiedTopology: true }, async (err, res) => {
    if (err) console.log(err);
    else {
      console.log("connected");
      const fetched_data = await mongoose.connection.db.collection("fooditem");
      fetched_data.find({}).toArray(async function (err, data) {
        const foodCategory = await mongoose.connection.db.collection("foodcategory");
        foodCategory.find({}).toArray(async function (err, catData) {
          if (err) console.log(err);
          else {
            global.food_items = data;
            global.food_cat = catData;

            // console.log(global.food_items);
          }
        })
      })
    }
  });
}

// const mongo = async() =>{
//     await mongoose.connect(mongourl);

//   }

module.exports = mongo;



// const mongoose = require('mongoose');

// const mongourl = 'mongodb+srv://pschauhan6149:2004@cluster0.keoal.mongodb.net/goFoodMERN?retryWrites=true&w=majority';

// const mongo = async () => {
//     try {
//         // Connecting to MongoDB
//         await mongoose.connect(mongourl, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log("Connected to MongoDB");

//         // Accessing the 'fooditem' collection
//         const fetched_data = await mongoose.connection.db.collection("fooditem");
//         fetched_data.find({}).toArray((err, data) => {
//             if (err) {
//                 console.error("Error fetching data:", err);
//             } else {
//                 console.log("Fetched data:", data);
//             }
//         });
//     } catch (error) {
//         console.error("Error connecting to MongoDB:", error);
//     }
// };

// module.exports = mongo;
