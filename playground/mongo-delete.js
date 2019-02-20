const{MongoClient, ObjectID} = require('mongodb'); //could also be const MongoClient = require('mongodb').MongoClient 
//above are constructors, they must start with capital letter

//mongo client helps connetion to server (url where db lives, callback fcn)
MongoClient.connect('mongodb://localhost:27017/Todos', (err, db)=> { //Todos is the name of the database
    if(err){
        return console.log('Unable to connect to DB', err); //handles the error
    }
    console.log('Connected to DB') //instead of else, we use 'return' in the if
   
    // We can delete with eithe deleteOne, deleteMany or findOneAndDelete
    //deleteMany is if we have plenty duplicates we want to delete. we need to know an exact field and value
    //deleteOne is if we want to delete just the first document of many duplicates

    db.collection('todo').deleteOne({
        progress: 'Almost'
    }).then((result) => {
        console.log(result);
    })
//findOneAndDelete is for when we dont know the specific one to delete, we only have a clue of field. it also deletes just the first thing it comes accross that matches
//that criteria. It returns the one it deleted as part of the response.
    db.collection('top3').findOneAndDelete({status: 'done'}).then((results)=> {
        console.log(results)
    })

    //db.close();
});