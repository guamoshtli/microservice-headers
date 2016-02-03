module.exports = function(app) {
 app.route('/whoami')


    .get(function(request, response) {
			var h=request.headers
			var lang = h["accept-language"].split(',')[0];
			var soft = h["user-agent"].split(') ')[0].split(' (')[1] 
      var ip = req.connection.socket.remoteAddress
			var data = {
      "ip-address": ip,
      "language": lang,
      "software": soft
    };


    response.send(JSON.stringify(data)); });
}; 
