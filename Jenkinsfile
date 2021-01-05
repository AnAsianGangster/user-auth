pipeline {

    agent any

    stages {
        
        stage("build") {

            environment {
                dotenv_content = "something"
            }

            steps {
                sh echo "Hi $dotenv_content"
                sh echo "##################"
                sh echo "pwd"
            }
        }
        
        stage("test") {

            steps {
                sh echo "pwd"
            }
        }
        
        stage("deploy") {

            steps {
                sh echo "pwd"
            }
        }
    }
}
