exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'KNK',
      age: 25,
      email: 'namgyung.kim2@gmail.com'
    })
  }
}