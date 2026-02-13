pipeline {
    agent any
    
    environment {
        // You must add these credentials in Jenkins > Manage Jenkins > Credentials
        VERCEL_TOKEN = credentials('vercel-token')
        VERCEL_ORG_ID = credentials('vercel-org-id')
        VERCEL_PROJECT_ID = credentials('vercel-project-id')
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'bun install'
            }
        }
        
        stage('Build') {
            steps {
                sh 'bun run build'
            }
        }
        
        stage('Deploy to Vercel') {
            steps {
                // Deploy to production
                sh 'vercel deploy --prod --token $VERCEL_TOKEN'
            }
        }
    }
    
    post {
        success {
            echo 'Deployment successful!'
        }
        failure {
            echo 'Deployment failed.'
        }
    }
}
