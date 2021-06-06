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
    stage('Deploy') {
      steps {
        sh 'git pull origin && git checkout origin/main && git merge origin/develop && git add . && git commit -am "Deploy Jenkins"'
      }
    }
    
  }
}