var bodyParser = require("body-parser"),
    express = require("express"),
    app = express();

app.set("view engine", "ejs");

app.use(express.static("."));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("*", function (req, res) {
    res.render("index");
});

app.listen(3000, function () {
    console.log("APP running on PORT 3000");
});