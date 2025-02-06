const autocannon = require('autocannon');

const urls = ['http://localhost:3000', 'http://localhost:3000/stress'];

const runTest = async (url) => {
  const instance = autocannon({
    url,
    connections: 10,  // number of concurrent connections
    duration: 10,     // test duration in seconds
  });

  // Log the number of requests
  instance.on('done', (result) => {
    console.log(`Number of requests for ${url}:`, result.requests.total);
  });
};


// Run tests for both URLs
urls.forEach(runTest);