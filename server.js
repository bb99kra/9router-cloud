const { spawn } = require('child_process');

const port = process.env.PORT || 20128;
console.log(`[9Router Cloud] Launching on port ${port}...`);

// Try running globally installed 9router or fallback to npx
const child = spawn('sh', ['-c', `9router -p ${port} -n -l || npx 9router -p ${port} -n -l`], {
  stdio: 'inherit'
});

child.on('exit', (code) => {
  console.log(`[9Router Cloud] Process exited with code ${code}`);
  process.exit(code || 0);
});
