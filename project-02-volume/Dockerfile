FROM alpine:latest

LABEL maintainer="docker-workshop"
LABEL description="Demo de Dockerfile mais complexo"

ENV APP_HOME=/usr/src/app

WORKDIR $APP_HOME

RUN apk update && \
    apk add --no-cache coreutils bash

COPY app ./app
COPY entrypoint.sh .

RUN chmod +x entrypoint.sh app/log.sh

VOLUME ["/data"]

ENTRYPOINT ["./entrypoint.sh"]