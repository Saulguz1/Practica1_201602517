pipeline {
  agent any
  stages {
    stage('Ansible Instalar Componentes') {
      steps {
        ansiblePlaybook installation: 'ansible2', playbook: 'Componentes.yml'
      }
    }
    stage('Ansible Framework Front') {
      steps {
        ansiblePlaybook installation: 'ansible2', playbook: 'Frontend.yml'
      }
    }
    stage('Ansible Framework Back') {
      steps {
        ansiblePlaybook installation: 'ansible2', playbook: 'Backend.yml'
      }
    }
    stage('Verificar instalacion') {
      steps {
        sh 'docker --version && sudo docker-compose --verison && ng --version && node --version && npm --version'
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
    stage('Status git') {
      steps {
        sh 'git status' 
      }
    } 
   
  }
} 