#!/usr/bin/env sh
set -eu

platform=''
icon_path=''
case `uname` in
    'Linux')
    platform='linux'
    icon_path='./images/gtoe.iconset/icon_512x512@2x.png'
    ;;
    'Darwin')
    platform='darwin'
    icon_path='./images/gtoe.icns'
    ;;
    *)
    echo "error: not support platform."
    exit 1
    ;;
esac

electron_version=`electron -v | sed -e 's/v//'`

echo "Platform: ${platform}"
echo "ElectronVersion: ${electron_version}"

electron-packager . GToE \
    --platform=${platform} \
    --arch=all \
    --electronVersion=${electron_version} \
    --icon=${icon_path} \
    --asar=true --prune=true \
    --out=./out --overwrite

