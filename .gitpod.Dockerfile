FROM gitpod/workspace-dotnet

USER root

RUN apt-get update && apt-get -y -o APT::Install-Suggests="true" install dotnet-sdk-3.1 && \
    rm -rf /var/lib/apt/lists/*;
