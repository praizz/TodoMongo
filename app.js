// tutorial page https://blog.openshift.com/day-27-restify-build-correct-rest-web-services-in-nodejs/

const restify = require('restify'); //server
const config = require('./config');
var mongojs = require("mongojs"); //db
const restifyPlugins = require('restify-plugins');
//const restifyErrors = require('restify-errors');

//create my server on restify

const server = restify.createServer({
    name: config.name,               //this names my server
});

//configure the restify server
server.use(restify.queryParser()); //parses url query params
server.use(restify.bodyParser()); //allows body to be parsed as json
server.use(restify.CORS()); //configures cors on the app

server.listen(config.port, function(){
  console.log(`${server.name} listening at ${server.url}`);
    //console.log('%s listening at %s', server.name, server.url);
});

// Lets connect to the mongo database now
