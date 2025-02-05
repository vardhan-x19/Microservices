const autocannon = require('autocannon');

const config = {
  url: 'http://localhost:3000/', // Target URL
  connections: 10,              // Number of concurrent users
  duration: 10,                  // Test duration (seconds)
  workers: 2,                    // Number of worker threads
  headers: {                     // Optional headers
    'Content-Type': 'application/json',
  },
  requests: [{                   // Custom request (e.g., POST)
    method: 'GET',
    path: '/api/data',
    body: JSON.stringify({ key: 'value' })
  }]
};

// Run the test
autocannon(config, (err, result) => {
  if (err) throw err;
  console.log('Load test results:', result);
});