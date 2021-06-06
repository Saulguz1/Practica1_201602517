pipeline {
  agent any
  stages {
    stage('Move Folder App') {
      steps {
        sh 'cd minipractica1'
      }
    }
    stage('Install Dependences') {
      steps {
        sh 'cd minipractica1 && npm i -D'
      }
    }
    stage('Run tests') {
      steps {
        sh 'cd minipractica1 && ng test'
      }
    }
    stage('Deploy develop in Main') {
      steps {
        sh 'git merge main'
      }
    }
  }
}