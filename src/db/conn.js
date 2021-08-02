const mongoose = require("mongoose")

//Creating a Database
mongoose.connect("mongodb://localhost:27017/NamanDynamic",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{//If succesful
    console.log("Connection Successful");
}).catch((error) => {//If not suuccessful
       console.log(error);
})
