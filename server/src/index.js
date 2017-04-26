'use strict';
import app from './app';
import {insertTestDocuments, getTestDocuments} from './db/index'

const PORT = process.env.port || 9000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
  insertTestDocuments([{a: 1}, {b: 2}, {c: 3}])
  getTestDocuments()
    .then((docs) => console.log(docs.map((doc) => Object.keys(doc)
        .map((key) => ({
          [key]: doc[key] * doc[key]
        })))));
});
