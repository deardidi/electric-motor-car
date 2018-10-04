const Koa = require("koa");
const route = require("koa-route");
const koaBody = require("koa-body");
const statics= require("koa-static");
const cors= require("koa2-cors");
const path= require("path");
const app = new Koa();
const main=statics(path.join(__dirname));
var User = require("./schema/user.js");
app.use(main);
app.use(cors({
	origin: "*",
	exposeHeaders: ["WWW-Authenticate", "Server-Authorization", "Date"],
	maxAge: 100,
	credentials: true,
	allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
	allowHeaders: ["Content-Type", "Authorization", "Accept", "X-Custom-Header",
	"anonymous"],
}));
app.use(koaBody());
app.use(route.post("/reg", require("./route/reg.js")));
app.use(route.post("/login", require("./route/login.js")));
app.use(route.get('/goodslist', require("./route/goodslist.js")));
app.use(route.get("/goodscon", require("./route/goodscon.js"))); 
app.use(route.post('/orderadd', require("./route/orderadd.js")));
app.use(route.post("/orderlist", require("./route/orderlist.js")));
app.use(route.post("/orderremove", require("./route/orderremove.js")));

app.use(route.get("/goodscart", require("./route/goodscart.js")));



app.use(route.post('/orderlistAdd', require("./route/orderlistAdd.js")));
app.use(route.post('/orderlistGet', require("./route/orderlistGet.js")));

app.use(route.post('/userCenter', require("./route/my.js")));
app.listen(3000);



