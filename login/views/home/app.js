app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", function(request,response){
  response.render("home/index");
});

app.get("/", function(request,response){
  response.render("home/login");
});

const home = require("./routes/home");
app.use("/", home); // use -> 미들 웨어를 등록해주는 메서드