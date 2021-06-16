pipeline {
  agent any
  stages {
    stage('Install Dependences') {
      steps {
        sh 'cd Frontend && npm i -D'
      }
    }
    stage('Run tests mocha/chai') {
      steps {
        sh 'cd Frontend && npm test'
      }
    } 
    stage('Status git') {
      steps {
        sh 'git status' 
      }
    } 
   
  }
} 