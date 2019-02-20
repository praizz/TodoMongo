// tutorial page https://blog.openshift.com/day-27-restify-build-correct-rest-web-services-in-nodejs/

const restify = require('restify'); //server
const mongodb = require('mongojs'); //db

//create my server on restify

    //my localhost
const ip = '127.0.0.1';
const port = '27017';

const server = restify.createServer({
    name: 'myServer'               //this names my server
});

server.listen(ip, port, function(){
  //console.log(`${server.name} listening at ${server.url}`);
    console.log('%s listening at %s', server.name, server.url);
});
