var express = require("express"),
    app = express()

var router = express.Router();

router.get('/', function(req, res) {
   res.send(process.env);
});

app.use(router);

app.listen(process.env.VCAP_APP_PORT || 8080, function() {

  var port = process.env.VCAP_APP_PORT || 8080
  var host = "localhost"

  console.log("GlobalPaaS nodejs-test server running on http://%s:%s",host,port);
});
