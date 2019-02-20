const{MongoClient, ObjectID} = require('mongodb'); //could also be const MongoClient = require('mongodb').MongoClient 
//above are constructors, they must start with capital letter

//mongo client helps connetion to server (url where db lives, callback fcn)
MongoClient.connect('mongodb://localhost:27017/Todos', (err, db)=> { //Todos is the name of the database
    if(err){
        return console.log('Unable to connect to DB', err); //handles the error
    }
    console.log('Connected to DB') //instead of else, we use return in the if

// GET ALL TODOS
    //to get all from my db
    //.find() is a cursor,it doesnt return all the docs, you have to call a method on it. you dont have to specify a param to get all
    //.toArray() this converts your document to an array and it takes a promise which is .then
    //.then takes in the (() => {}, () => {}) i.e docs and error
    db.collection('todo').find().toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        if(err){
            console.log('Unable to get all docs', err);
        }
    })

// QUERY THE DB WITH SPECIFIC PARAMS
    db.collection('top3').find({
        status: 'done'
        // _id: new ObjectID('5c6d4b3f2ea29351069b72e7')
    }).toArray().then((docs)=> {
        console.log('Query per param')
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err)=> {
        if(err){
            console.log('Unable to get all docs', err);
        }
    })    
    
    //db.close();
});