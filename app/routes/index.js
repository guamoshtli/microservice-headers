module.exports = function(app) {
 app.route('/whoami')


    .get(function(request, response) {
			var h=request.headers
			var lang = h["accept-language"].split(',')[0];
			var soft = h["user-agent"].split(') ')[0].split(' (')[1] 
      var ip = h['x-forwarded-for'] || 
     request.connection.remoteAddress || 
     request.socket.remoteAddress ||
     request.connection.socket.remoteAddress;
			var data = {
      "ipaddress": ip,
      "language": lang,
      "software": soft
    };


    response.send(JSON.stringify(data)); });
}; 
