var request = require('request');
var cheerio = require('cheerio');
request('http://www.israbirding.com/irdc/bulletins/irdc_list/', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var $body = cheerio.load(body);
    var $birds = $body("table[style='width:580px'] tr")
    for (var i = 1; i < $birds.length; i ++){
     var isConsiderd = false;
     var oRow = $birds.eq(i);
     isConsiderd = (oRow.find("span").last().text().indexOf("*")  > -1) ? true : false;
     if (isConsiderd){
     	console.log(oRow.find(":nth-child(2)").text(), "\t", oRow.find(":nth-child(3)").text());
     }
    }
  }
})