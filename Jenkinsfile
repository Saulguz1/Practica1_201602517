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
    stage('Commit Branch') {
      steps {
        sh 'git add -A && git commit -m "jenkins" && git push'
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