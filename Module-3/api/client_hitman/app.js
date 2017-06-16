fetch('http://localhost:3000/api/v1/agents')
  .then(r => r.json())
  .then(r => console.log('from my api:', r))
