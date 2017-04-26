'use strict';
import {MongoClient} from 'mongodb';
import assert from 'assert';

// Connection URL
const MONGO_URL= 'mongodb://localhost:27017/myproject';

// Use connect method to connect to the server
MongoClient.connect(MONGO_URL, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  db.close();
});

export const getDB = () => new Promise(function(resolve, reject) {
  MongoClient.connect(MONGO_URL, (err, db) => {
    if (err){
      reject(err);
    }
    resolve(db);
  })
});

export const insertTestDocuments = (testValues) => new Promise((resolve, reject) => {
  getDB().then((db) => {
    const coll = db.collection('testDocuments');

    coll.insertMany(testValues, (err, result) => {
      db.close();
      if(err){
        reject(err);
      }
      resolve(result)
    })
    .catch((err) => console.log(err))
  })
})

export const getTestDocuments = () => new Promise((resolve, reject) => {
  getDB().then((db) => {
    const coll = db.collection('testDocuments');
    coll.find({}).toArray((err, docs) => {
      db.close();
      if (err) {
        reject(err);
        return;
      }
      console.log('found the following:');
      console.log(docs);
      resolve(docs);
    })
  })
});
