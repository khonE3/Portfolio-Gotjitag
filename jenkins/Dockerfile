FROM jenkins/jenkins:lts

USER root

# Install necessary system tools
RUN apt-get update && apt-get install -y curl unzip

# Install Bun
ENV BUN_INSTALL=/usr/local/bun
ENV PATH=$BUN_INSTALL/bin:$PATH
RUN curl -fsSL https://bun.sh/install | bash -s "bun-v1.1.0" && \
    mv /root/.bun/bin/bun /usr/local/bin/bun && \
    chmod +x /usr/local/bin/bun

# Install Vercel CLI globally using Bun
RUN bun install -g vercel

# Verify installations
RUN bun --version && vercel --version

USER jenkins
