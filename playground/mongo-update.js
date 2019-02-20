const{MongoClient, ObjectID} = require('mongodb'); //could also be const MongoClient = require('mongodb').MongoClient 
//above are constructors, they must start with capital letter

//mongo client helps connetion to server (url where db lives, callback fcn)
MongoClient.connect('mongodb://localhost:27017/Todos', (err, db)=> { //Todos is the name of the database
    if(err){
        return console.log('Unable to connect to DB', err); //handles the error
    }
    console.log('Connected to DB') //instead of else, we use return in the if

    //TO UPDATE A PART OF THE DOC
    //THE findOneAndUpdate takes in about four parameters
    //findOneAndUpdate({}, {}, {}, {}) .  id to identify document, update operators then what we want to update, 
//findOneAndUpdate(filter, update, options, callback)
    db.collection('todo').findOneAndUpdate({
        _id: new ObjectID('5c6d700b6799e91cb7fe4b5a')
    },{
        $set: { //this is an update operator that Sets the value of a field in a document.
            completed: 'false'
        }
    }, {
        returnOriginal: false   //When false, returns the updated document rather than the original. The default is true.
    }
    ).then((result) => {
        console.log(result)})
        

        db.collection('todo').findOneAndUpdate({
            _id: new ObjectID('5c6d886abee37d3115dcc613')
        }, {
            $set: {
                status: 'undone'
            },
            $inc: {
                age: 1   //this specifies how much you want to increment what u want 2 increment
            }
        }, {
            returnOriginal: false
        }). then((result) => {
            console.log(result)
        });

    //db.close();
});