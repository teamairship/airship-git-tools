#! /usr/bin/env node
var inquirer = require('inquirer');

const git = require('simple-git/promise');

const branchesToDelete = [];

deleteBranchPrompt = async () => {
  const workingDir = "";
  const branches = await git(workingDir).branchLocal();

  inquirer
  .prompt([
    {
      type: 'checkbox',
      name: 'branches',
      message: 'What branches do you want to delete?',
      choices: branches.all
    }])
  .then(answers => {
    for(branch of answers.branches) {
      console.log(`deleting branch ${branch}`);
      git(workingDir).deleteLocalBranch(branch);
    }
  });
};

deleteBranchPrompt();







