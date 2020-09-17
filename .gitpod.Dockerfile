FROM gitpod/workspace-dotnet

USER root

RUN apt-get update

# Hopefully prevent angular cli from asking for analytics (y/n question):
ENV NG_CLI_ANALYTICS=ci

