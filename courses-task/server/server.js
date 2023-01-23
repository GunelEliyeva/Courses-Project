const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const port = 8080;
app.use(cors());
app.use(bodyParser.json());
const { Schema } = mongoose;

const featuredSchema = new Schema(
  {
    imgurl: { type: String, require: true },
  },
  { timestamp: true }
);
const coursess = mongoose.model("featureds", featuredSchema);

app.get("/featureds", (req, res) => {
  coursess.find({}, (error, docs) => {
    if (!error) {
      res.send(docs);
    } else {
      res.status(500).json({ message: error });
    }
  });
});
// id get
app.get("/featureds/:id", (req, res) => {
  const { id } = req.params;
  coursess.findById(id, (error, doc) => {
    if (!error) {
      res.send(doc);
    } else {
      res.status(500).json({ message: error });
    }
  });
});

app.delete("/featureds/:id", (req, res) => {
  const { id } = req.params;
  coursess.findByIdAndDelete(id, (err) => {
    if (!err) {
      res.send("SUCCESSFULLY DELETED");
    } else {
      res.status(404).json({ message: err });
    }
  });
});

app.post("/featureds/", (req, res) => {
  let user = new coursess({
    imgurl: req.body.imgurl,
  });

  user.save();
  res.send({ message: "SUCCESS" });
});
mongoose.set("strictQuery", false);
mongoose.connect(``, (error) => {
  if (!error) {
    app.listen(port, () => {
      console.log(`Example app listening on port http://localhost:${port}`);
    });
  }
});
