```javascript
//Incorrect usage of $inc operator
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$inc:{count: -1}});
//If count is already 0, the above operation will result in -1.  MongoDB does not throw an error. 
//Instead it will store -1 in the database, resulting in a negative count, which is often unexpected.
```