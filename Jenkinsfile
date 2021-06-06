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
        sh 'npm i'
      }
    }
    stage('Change Branch Main') {
      steps {
        sh 'git checkout main'
      }
    }
    stage('Run tests') {
      steps {
        sh 'ng test'
      }
    }
    stage('Deploy develop in Main') {
      steps {
        sh 'git merge develop'
      }
    }
  }
}