pipeline {
    agent any

    environment {
        NETLIFY_AUTH_TOKEN = credentials('PAT_Netlify_Jenkins')
        NETLIFY_SITE_ID = credentials('NETLIFY_SITE_ID')
    }

    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:24-alpine'
                    reuseNode true
                }
            }

            steps {
                sh '''
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
                    image 'node:24-alpine'
                    reuseNode true
                }
            }

            steps {
                sh '''
                    npm i netlify-cli
                    ./node_modules/.bin/netlify deploy --prod --dir=out
                '''
            }
        }
    }
}