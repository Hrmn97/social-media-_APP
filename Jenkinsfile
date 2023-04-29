pipeline{
    agent {
        label "node"
    }
    stages{
        stage("Docker Compose Build"){
            steps{
                sh '''
                ls
                sudo docker-compose down
                sudo docker-compose up -d
                sudo docker-compose ps
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