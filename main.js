//-----------------------------------------------------------------------------
//  Google Translate on Electron.
//-----------------------------------------------------------------------------
const {app, BrowserWindow} = require('electron');
const TARGET_URL = 'https://translate.google.com/';

let win;    //! Browser Window object.
function createWindow()
{
    win = new BrowserWindow({width: 1080, height: 800});
    win.loadURL(TARGET_URL);

    win.on('closed', () => {
        win = null; // Dereference the window object.
    });
};


//-----------------------------------------------------------------------------
//  App Events
//-----------------------------------------------------------------------------
app.on('ready', () => {
    createWindow();
});

app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

