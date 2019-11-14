const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/bookmark", { useNewUrlParser: true });
mongoose.Promise = global.Promise;
mongoose.connection.on("error", console.log);