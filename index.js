'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const ncp = require('ncp').ncp;
const mkdirp = require('mkdirp');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the geometric ${chalk.red('generator-nevinha-project')} generator!`)
    );

    const prompts = [
      {
        type: 'confirm',
        name: 'appName',
        message: 'Would you like to enable this option?',
        default: true
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    console.log(this.props)
    ncp.limit = 16;
     
    ncp('./generators/app', './', function (err) {
     if (err) {
       return console.error(err);
     }
     console.log('done!');
    });
  }
};
