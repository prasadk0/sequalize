const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/schema');

const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true, // Enable GraphiQL for testing in the browser
}));

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000/graphql');
});
