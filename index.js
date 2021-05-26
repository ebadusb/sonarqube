const core      = require('@actions/core');
const exec      = require('@actions/exec');
const github    = require('@actions/github');

const scan = async () => {

    let output = '';
    let error = '';

    const options = {};
    options.listeners = {
    stdout: (data) => {
      output += data.toString();
    },
    stderr: (data) => {
      error += data.toString();
    }
    };
    const inputOption = core.getInput('option');
   
    if (inputOption === 'start'){
        await exec.exec('./.github/actions/sonarqube/start-sonarqube.ps1', options);
    } 
    
    if (inputOption === 'stop'){
        await exec.exec('./.github/actions/sonarqube/stop-sonarqube.ps1', options);
    }

}

try {
 
  scan();
 
    // Get the JSON webhook payload for the event that triggered the workflow
    //    const payload = JSON.stringify(github.context.payload, undefined, 2)
    //   console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}