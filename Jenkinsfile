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
}
