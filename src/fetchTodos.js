const AWS = require('aws-sdk');

const fetchTodos = async (event) => {
  const dynamodb = AWS.DynamoDB.DocumentClient();

  console.log('This is an id', id);

  return {
    statusCode: 200,
    body: JSON.stringify(newTodo),
  };
};

module.exports = {
  handler: fetchTodos
}