const express = require("express");
const multer = require("multer");
const fs = require("fs");
const helmet = require("helmet");

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     // const dest = "./app/lab/" + req.userId;
//     const dest = "./public/tmp/uploads/";
//     fs.access(dest, function (error) {
//       if (error) {
//         return fs.mkdir(dest, (error) => cb(error, dest));
//       } else {
//         return cb(null, dest);
//       }
//     });
//   },

//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     let extArray = file.mimetype.split("/");
//     let extension = extArray[extArray.length - 1];
//     cb(null, file.fieldname + "-" + uniqueSuffix + "." + extension);
//   },
// });
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const cors = require("cors");

const app = express();

app.use(cors());
app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.post("/create", upload.single("image"), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  res.send(req.body);
});

app.listen(3000, () => {
  console.log("listening");
});
