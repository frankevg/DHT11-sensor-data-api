fetch('http://localhost:3000/api/data')
  .then(response => response.json())
  .then(data => {
    // Do something with the response data
  })
  .catch(error => {
    // Handle any errors that occur
  });