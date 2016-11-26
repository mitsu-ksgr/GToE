//-----------------------------------------------------------------------------
//  Google Translate on Electron.
//-----------------------------------------------------------------------------
const {app, BrowserWindow, Menu} = require('electron');
const TARGET_URL = 'https://translate.google.com/';

let win = null;    //! Browser Window object.
function createWindow()
{
    win = new BrowserWindow({width: 1080, height: 800});
    win.loadURL(TARGET_URL);

    win.on('closed', () => {
        win = null; // Dereference the window object.
    });
};

function setupMenu()
{
    Menu.setApplicationMenu(Menu.buildFromTemplate([
        {
            label: 'GToE',
            submenu: [
                { role: 'about' },
                { type: 'separator' },
                { role: 'hide' },
                { role: 'hideothers' },
                { role: 'unhide' },
                { type: "separator" },
                { role: 'quit' }
            ]
        },
        {
            label: 'Edit',
            submenu: [
                { role: 'undo' },
                { role: 'redo' },
                { type: "separator" },
                { role: 'cut' },
                { role: 'copy' },
                { role: 'paste' },
                { role: 'pasteandmatchstyle' },
                { role: 'delete' },
                { role: 'selectall' }
            ]
        },
        {
            label: 'View',
            submenu: [
                { role: 'reload' },
                { role: 'toggledevtools' },
                { type: 'separator' },
                { role: 'resetzoom' },
                { role: 'zoomin' },
                { role: 'zoomout' },
                { type: 'separator' },
                { role: 'togglefullscreen' }
            ]
        },
        {
            label: 'Window',
            submenu: [
                { role: 'minimize' },
                { role: 'close' }
            ]
        },
        {
            label: 'Help',
            submenu: [
                {
                    label: 'Get sources',
                    click: function() {
                        require('electron').shell.openExternal('https://github.com/mitsu-ksgr/GToE');
                    }
                }
            ]
        }
    ]));
}


//-----------------------------------------------------------------------------
//  App Events
//-----------------------------------------------------------------------------
app.on('ready', () => {
    createWindow();
    setupMenu();
});

app.on('activate', () => {
    if (win === null) {
        createWindow();
        setupMenu();
    }
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

