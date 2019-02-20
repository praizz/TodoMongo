const{MongoClient} = require('mongodb'); //could also be const MongoClient = require('mongodb').MongoClient 
//above are constructors, they must start with capital letter

//mongo client helps connetion to server (url where db lives, callback fcn)
MongoClient.connect('mongodb://localhost:27017/Todos', (err, db)=> { //Todos is the name of the database
    if(err){
        return console.log('Unable to connect to DB', err); //handles the error
    }
    console.log('Connected to DB') //instead of else, we use return in the if


    //to insert something to my todo db
    db.collection('todo').insertOne({
        task: 'Document the open API specification',
        description: 'The swagger documentation for the MTn Billaway Raas project',
        progress: 'Almost',
        age: 24,
        status: 'Done',
        completed: true
    }, (err, result) => {
        if(err){
            return console.log('Unable to insert to db', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    //insert into my top3 db
    db.collection('top3').insertOne({
        task: 'no one of my top three',
        description: 'My top three daily tasks - number one',
        progress: 'quite good',
        status: 'done'
    }, (err, result)=>{
        if(err){
           return console.log('Unable to write to the db', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2))
    });

    db.close();
});