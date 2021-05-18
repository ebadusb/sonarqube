const core      = require('@actions/core');
const exec      = require('@actions/exec');
const github    = require('@actions/github');

const scan = async () => {
    const option = core.getInput('option');
    const actionPath = process.env['GITHUB_PATH'];
    console.log(`DEBUG: actionPath: ${actionPath}`);

    if (option === 'start'){
        await exec.exec('./_actions/ebadusb-sonarqube@v1.24/start-sonarqube.ps1');
    } 
    
    if (option === 'stop'){
        await exec.exec('./_actions/ebadusb-sonarqube@v1.24/stop-sonarqube.ps1');
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