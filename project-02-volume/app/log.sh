#!/bin/sh

echo "Executando aplicação..."
date >> /data/app.log
tail -f /data/app.log