pipeline {
    agent any

    stages {
        // stage('checkout') {
        //     steps {
        //         checkout scmGit(branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[credentialsId: 'Github', url: 'https://github.com/Hrmn97/social-media-_APP.git']])
        //     }
        // }
        stage("Docker compose") {
            steps{
                sh '''
                ls
                sudo docker compose down
                sudo docker compose up -d
                sudo docker compose ps
                '''
            }
        }
        
    }
     post{
        always{
            echo "Pipeline Completed check status"
        }
        success{
            echo "========pipeline executed successfully ========"
        }
        failure{
            echo "========pipeline execution failed========"
        }
    }
}
