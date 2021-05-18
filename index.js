const core      = require('@actions/core');
const exec      = require('@actions/exec');
const github    = require('@actions/github');
const io        = require('@actions/io');

const scan = async () => {
    const buildScript = core.getInput('option');
    console.log(`DEBUG: opt: ${buildScript}`);
    console.log("Debug: About to start scan");
    await exec.exec('./_actions/ebadusb-sonarqube@v1.21/start-sonarqube.ps1');
}

try {
 
  scan();
 
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}