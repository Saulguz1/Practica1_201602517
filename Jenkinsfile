pipeline {
  agent any
  stages {
    stage('Install Dependences') {
      steps {
        sh 'npm i -D'
      }
    }
    stage('Run tests') {
      steps {
        sh 'npm test'
      }
    } 
    stage('Deploy') {
      steps {
        sh 'git checkout origin/main && git merge origin/develop && git add . && git commit -am "Deploy Jenkins"'
      }
    }
    
  }
}