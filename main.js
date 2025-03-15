const { app, BrowserWindow, Menu, MenuItem, nativeTheme } = require('electron/main')

function createWindow () {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        },
        backgroundColor: '#121212', // Dark background color
        titleBarOverlay: {
            color: '#121212',
            symbolColor: '#FFFFFF'
        }
    })

    // Set dark mode for the app
    nativeTheme.themeSource = 'dark'

    // Load from our local Express server instead of the previous URL
    win.loadURL('http://localhost:5000/')

    win.setMenuBarVisibility(false);
    
    // Optional: Open DevTools for debugging
    win.webContents.openDevTools()
}

const menu = new Menu()
menu.append(new MenuItem({
    label: 'EZ App',
    submenu: [
        {
            label: 'Reload',
            accelerator: 'CmdOrCtrl+R',
            click: (_, focusedWindow) => {
                if (focusedWindow) focusedWindow.reload()
            }
        },
        {
            role: 'toggleDevTools',
            accelerator: process.platform === 'darwin' ? 'Alt+Cmd+I' : 'Alt+Shift+I'
        },
        { type: 'separator' },
        { role: 'quit' }
    ]
}))

Menu.setApplicationMenu(menu)

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})

