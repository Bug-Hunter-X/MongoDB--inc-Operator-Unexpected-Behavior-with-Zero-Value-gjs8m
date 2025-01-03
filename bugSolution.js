```javascript
db.collection('myCollection').findOne({"_id":ObjectId("someId")}, (err, doc) => {
  if(err) {
    console.error("Error fetching document:",err)
    return
  }
  if (doc && doc.count > 0) {
    db.collection('myCollection').updateOne({"_id":ObjectId("someId")}, {$inc: {count: -1}});
  } else {
    console.log('Count is already zero or the document does not exist. No update performed.');
  }
});
```