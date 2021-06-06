pipeline {
  agent any
  stages {
    stage('Move Folder App') {
      steps {
        bat 'cd minipractica1'
      }
    }
    stage('Install Dependences') {
      steps {
        bat 'npm i -D'
      }
    }
    stage('Change Branch Main') {
      steps {
        bat 'git checkout main'
      }
    }
    stage('Run tests') {
      steps {
        bat 'ng test'
      }
    }
    stage('Deploy develop in Main') {
      steps {
        bat 'git merge develop'
      }
    }
  }
}