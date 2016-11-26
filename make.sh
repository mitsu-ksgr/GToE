#!/bin/bash

electron-packager . GToE \
    --platform=darwin --arch=all \
    --version=1.4.8 --icon=./images/gtoe.icns \
    --out=./out --overwrite

