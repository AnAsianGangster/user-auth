pipeline {
    agent any

    stages {
        stage('build') {
            environment {
                dotenv_content = 'something'
            }

            steps {
                sh echo "Hi ${dotenv_content}"
            }
        }

        stage('test') {
            steps {
                sh echo 'pwd'
            }
        }

        stage('deploy') {
            steps {
                sh echo 'pwd'
            }
        }
    }
}
