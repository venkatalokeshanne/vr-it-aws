pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'your-dockerhub-username/your-nextjs-app:latest'
        KUBECONFIG_CREDENTIAL_ID = 'kubeconfig-credentials'
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/venkatalokeshanne/vr-it-aws.git'
            }
        }

        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Next.js App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh "docker build -t $DOCKER_IMAGE ."
            }
        }

        stage('Push Docker Image') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-registry-creds', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                    sh """
                        echo $PASSWORD | docker login -u $USERNAME --password-stdin
                        docker push $DOCKER_IMAGE
                    """
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                withCredentials([file(credentialsId: KUBECONFIG_CREDENTIAL_ID, variable: 'KUBECONFIG')]) {
                    sh """
                        kubectl set image deployment/nextjs-deployment nextjs-container=$DOCKER_IMAGE -n default
                        kubectl rollout status deployment/nextjs-deployment -n default
                    """
                }
            }
        }
    }
}
