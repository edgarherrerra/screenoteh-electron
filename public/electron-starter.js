const electron = require('electron');
const axios = require('axios')
const FormData = require('form-data');
const form = new FormData();


// Module to control application life.
const app = electron.app;
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');
const isDev = require('electron-is-dev');
const os = require('os');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow({ width: 800, height: 600 });

    // and load the index.html of the app.
    mainWindow.loadURL(isDev ? 'http://localhost:3001' : `file://${path.join(__dirname, '../build/index.html')}`);

    // Open the DevTools.
    mainWindow.webContents.openDevTools();

    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null
    })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow()
    }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

const desktopPath = `${os.userInfo().homedir}/Desktop`;
const fs = require('fs');
const nameEn = 'Screen'



let screenShoots = fs.readdirSync(desktopPath).filter((file) => {
    return file.indexOf(nameEn) !== -1;
})

let fullFilePath = []
for (var i = 0; i < screenShoots.length; i++) {
    fullFilePath.push(`${desktopPath}/${screenShoots[i]}`)
}

// fullFilePath.forEach((url, i) => {
//     fs.readFile(url, (err, imageData) => {
//         console.log('entra')
//         if (err) {
//             console.log(err)
//         }
//         form.append(`file${i}`, imageData, {
//             filepath: url,
//             contentType: 'multipart/form-data'
//         })
//     })
// })


// setTimeout(function() {
//     axios.post('http://localhost:3000/screenshots', form, {
//         headers: form.getHeaders(),
//     }).then(response => {
//         console.log('success! ', response.data);
//     }).catch(err => {
//         console.log(err);
//     })
// }, 2000)
