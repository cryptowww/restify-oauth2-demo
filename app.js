const restify = require("restify")

var restifyOAuth2 = require("restify-oauth2");

var server = restify.createServer({
	name:"test",
	url:"localhost",
  	version:"0.1.0"
});

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(restify.authorizationParser());

server.get({path:"/m/:name",version:'1.0.1'},function(req,res,next){
	var name = req.params.name;
	console.log("name param : " + name);

	var users = [
	  {
	    name: 'xPerson1',
	    age: 1
	  },{
	    name: 'xPerson1',
	    age: 2
	  },{
	    name: 'xPerson3',
	    age: 3
	  },{
	    name: 'xPerson4',
	    age: 4
	  },{
	    name: 'xPerson5',
	    age: 5
	  }
	];
	res.json(users)
})


server.get({path:"/m/:name",version:'1.0.2'},function(req,res,next){
	var name = req.params.name;
	console.log("name param : " + name);

	var users = [
	  {
	    name: 'Person1',
	    age: 1
	  },{
	    name: 'Person1',
	    age: 2
	  },{
	    name: 'Person3',
	    age: 3
	  },{
	    name: 'Person4',
	    age: 4
	  },{
	    name: 'Person5',
	    age: 5
	  }
	];
	res.json(users)
})

//restifyOAuth2.cc(server, options);

server.listen(5000, function () {
  console.log('%s listening at %s', server.name, server.url);
});