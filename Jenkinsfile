pipeline {
    agent any

    stages {
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
            echo "========always========"
        }
        success{
            echo "========pipeline executed successfully ========"
        }
        failure{
            echo "========pipeline execution failed========"
        }
    }
}
