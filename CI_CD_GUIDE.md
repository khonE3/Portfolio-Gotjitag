# Jenkins CI/CD Setup Guide

This guide helps you set up a local Jenkins instance with Docker, configured to build your project with Bun and deploy to Vercel.

## Prerequisites

- Docker Desktop installed and running.
- A Vercel account and a project created for this repository.
- Vercel Access Token.

## 1. Start Jenkins

Run the following command in the project root to build and start Jenkins:

```bash
docker-compose up -d --build
```

## 2. Unlock Jenkins

1.  Wait for Jenkins to start (a few minutes).
2.  Get the initial admin password:
    ```bash
    docker exec jenkins_cicd cat /var/jenkins_home/secrets/initialAdminPassword
    ```
3.  Open [http://localhost:8093](http://localhost:8093) in your browser.
4.  Paste the password and click **Continue**.
5.  Choose **Install suggested plugins** and wait for installation to complete.
6.  Create your first admin user.

## 3. Configure Credentials

You need to provide Vercel credentials so Jenkins can deploy your app.

1.  Go to **Manage Jenkins** > **Credentials** > **System** > **Global credentials (unrestricted)**.
2.  Click **Add Credentials**.
3.  Add the following 3 credentials (choose **Secret text** for all):

    | Kind        | Secret              | ID                  | Description            |
    | :---------- | :------------------ | :------------------ | :--------------------- |
    | Secret text | _Your Vercel Token_ | `vercel-token`      | Vercel Access Token    |
    | Secret text | _Your Org ID_       | `vercel-org-id`     | Vercel Organization ID |
    | Secret text | _Your Project ID_   | `vercel-project-id` | Vercel Project ID      |

    > **Note:** You can find Org ID and Project ID in your Vercel Project Settings > General.

## 4. Create the Pipeline

1.  Go to **Dashboard** > **New Item**.
2.  Enter a name (e.g., `Update-Portfolio`).
3.  Select **Pipeline** and click **OK**.
4.  Scroll down to **Pipeline** section.
5.  **Definition**: Select **Pipeline script from SCM**.
6.  **SCM**: Select **Git**.
7.  **Repository URL**: Enter the local path or URL of your git repo.
    - _If running locally:_ You might need to use a local file path accessible to Docker or host the repo on GitHub.
    - _Recommendation:_ Push your code to GitHub and use the GitHub URL.
8.  **Branch Specifier**: `*/main` (or your branch name).
9.  **Script Path**: `Jenkinsfile`.
10. Click **Save**.

## 5. Run the Pipeline

1.  Click **Build Now** on the left menu.
2.  Click the build number (e.g., `#1`) under **Build History**.
3.  Click **Console Output** to see the progress.

## Troubleshooting

- **Bun not found?** Ensure the Docker image built successfully. Check `docker-compose build`.
- **Permission denied?** Ensure the `jenkins` user in Docker has permissions.
