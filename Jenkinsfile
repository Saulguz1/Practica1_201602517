pipeline {
  agent any
  stages {
    stage('Ansible Framework Front') {
      steps {
        ansiblePlaybook credentialsId: 'private-key', disableHostKeyChecking: true, installation: 'ansible2', inventory: 'grup.inv', playbook: 'Frontend.yml'
      }
    }
    stage('Ansible Framework Back') {
      steps {
        ansiblePlaybook credentialsId: 'private-key', disableHostKeyChecking: true, installation: 'ansible2', inventory: 'grup.inv', playbook: 'Backend.yml'
      }
    }
    stage('Verificar instalacion') {
      steps {
        sh 'docker --version && ng --version && node --version && npm --version'
      }
    }
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
    stage('Deploy') {
      steps {
        sh 'git status' 
      }
    } 
   
  }
} 