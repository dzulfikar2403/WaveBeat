pipeline {
    agent any

    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:24-alphine'
                    reuseNode true
                }
            }

            steps {
                echo '''
                    node --version
                    npm --version
                    npm ci
                    npm run build
                '''
            }
        }
        stage('Deploy') {
            agent {
                docker {
                    image 'node:24-alphine'
                    reuseNode true
                }
            }

            steps {
                echo 'deploy...'
            }
        }
    }
}