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
            label: "GToE",
            submenu: [
                {
                    label: "About GToE",
                    selector: "orderFrontStandardAboutPanel:"
                },
                { type: "separator" },
                {
                    label: "Quit",
                    accelerator: "Command+Q",
                    click: function() { app.quit(); }
                }
            ]
        },
        {
            label: "Edit",
            submenu: [
                {
                    label: "Undo",
                    accelerator: "CmdOrCtrl+Z",
                    selector: "undo:" },
                {
                    label: "Redo",
                    accelerator: "Shift+CmdOrCtrl+Z",
                    selector: "redo:"
                },
                { type: "separator" },
                {
                    label: "Cut",
                    accelerator: "CmdOrCtrl+X",
                    selector: "cut:"
                },
                {
                    label: "Copy",
                    accelerator: "CmdOrCtrl+C",
                    selector: "copy:"
                },
                {
                    label: "Paste",
                    accelerator: "CmdOrCtrl+V",
                    selector: "paste:"
                },
                {
                    label: "Select All",
                    accelerator: "CmdOrCtrl+A",
                    selector: "selectAll:"
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

