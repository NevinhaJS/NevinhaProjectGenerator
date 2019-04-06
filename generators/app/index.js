'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const ncp = require('ncp').ncp;
const mkdirp = require('mkdirp');

module.exports = class extends Generator {
  // prompting() {
  //   // Have Yeoman greet the user.
  //   this.log(
  //     yosay(`Welcome to the geometric ${chalk.red('generator-nevinha-project')} generator!`)
  //   );

  //   const prompts = [
  //     {
  //       type: 'input',
  //       name: 'appName',
  //       message: `What's the app name?`,
  //       default: 'no-app-name'
  //     }
  //   ];

  //   return this.prompt(prompts).then(props => {
  //     // To access props later use this.props.someAnswer;
  //     this.props = props;
  //   });
  // }

  writing() {
    ncp.limit = 16;
    
    ncp(this.sourceRoot(), './', function (err) {
     if (err) {
       return console.error(err);
     }
     console.log('done!');
    });
  }

  install() {
    this.npmInstall();
  }
};
