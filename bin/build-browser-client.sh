#!/bin/bash

set -e

scriptDir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"

: "${APP_ENV:=development}"

cd $scriptDir/../

set -a
source ./env/.env.${APP_ENV}
set +a

git clone https://github.com/filecoin-saturn/browser-client.git

cd browser-client

if [[ "$APP_ENV" == "production" ]]; then
    latestTag=$(git describe --tags)
    git checkout ${latestTag}
fi

npm ci

distDir=dist
outDir=../out/

echo "STATIC_ORIGIN $STATIC_ORIGIN"

npm run build -- -o $distDir

# Must run after next generates the out/
cp $distDir/widget.js $outDir
cp $distDir/saturn-sw.js $outDir
cp $distDir/saturn-sw-core.js $outDir
