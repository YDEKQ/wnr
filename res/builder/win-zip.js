const builder = require('electron-builder')
const Platform = builder.Platform

const config = {
    "directories": {
        "output": "packaged/",
        "app": "output/"
    },
    "win": {
        "asarUnpack": [
            "./node_modules/node-notifier/vendor/**"
        ],
        "target": [
            "7z"
        ],
        "icon": "res/icons/iconWin.ico",
        "files": [
            "**/*",
            //! to exclude
            "!res/icons/*Mac*",
            "!res/icons/*.psd"
        ],
        "artifactName": "${productName}-${version}-Win.${ext}"
    }
}

builder.build({
    targets: Platform.WINDOWS.createTarget(),
    config,
})
    .then(m => {
        console.log("Done!")
    })
    .catch(e => {
        console.error(e)
    })