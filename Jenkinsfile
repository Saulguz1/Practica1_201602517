pipeline {
  agent any
  stages {
    stage('Install Dependences') {
      steps {
        sh 'npm i -D'
      }
    }
    stage('Run tests mocha/chai') {
      steps {
        sh 'npm test'
      }
    } 
    stage('Status git') {
      steps {
        sh 'git status'
      }
    }
    stage('Deploy and Merge') {
      steps {
        sh 'git checkout origin/main && git merge origin/develop &&  git push origin HEAD:main'
      }
    }
    
  }
}