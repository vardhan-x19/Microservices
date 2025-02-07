const autocannon = require('autocannon');

const urls = ['http://localhost:3005', 'http://localhost:3005/stress'];

const runTest = async (url) => {
  console.log(`Starting stress test on: ${url}`);

  const result = await autocannon({
    url,
    connections: 10, // Number of concurrent connections
    duration: 10,    // Test duration in seconds
  });

  console.log(`Number of requests for ${url}:`, result.requests.total);
};

// Run tests sequentially
(async () => {
  for (const url of urls) {
    await runTest(url);
  }
})();
