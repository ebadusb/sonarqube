const core      = require('@actions/core');
const exec      = require('@actions/exec');
const github    = require('@actions/github');

const scan = async () => {
    const option = core.getInput('option');
    console.log(`DEBUG: opt: ${option}`);
    console.log("Debug: About to start scan");
    if (option === 'start'){
        await exec.exec('./_actions/ebadusb-sonarqube@v1.23/start-sonarqube.ps1');
    } 
    
    if (option === 'stop'){
        await exec.exec('./_actions/ebadusb-sonarqube@v1.23/stop-sonarqube.ps1');
    }

}

try {
 
  scan();
 
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}