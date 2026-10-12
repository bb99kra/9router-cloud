const path = require('path');
const fs = require('fs');

let customServerPath = path.join(__dirname, 'node_modules', '9router', 'app', 'custom-server.js');

if (!fs.existsSync(customServerPath)) {
  try {
    const globalRoot = require('child_process').execSync('npm root -g', { encoding: 'utf8' }).trim();
    customServerPath = path.join(globalRoot, '9router', 'app', 'custom-server.js');
  } catch (e) {
    console.error('Error finding global 9router:', e);
  }
}

if (fs.existsSync(customServerPath)) {
  const port = process.env.PORT || 20128;
  console.log(`[9Router Cloud] Launching 9Router on port ${port}...`);
  require(customServerPath);
} else {
  console.error('[9Router Cloud] Fatal: Could not find 9router app/custom-server.js');
  process.exit(1);
}
