const { app, BrowserWindow, Menu, MenuItem } = require('electron/main')

function createWindow () {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })

    win.loadURL('http://ms2.localhost:3000/')

    win.setMenuBarVisibility(false);
}

const menu = new Menu()
menu.append(new MenuItem({
    label: 'Electron',
    submenu: [{
        role: 'help',
        accelerator: process.platform === 'darwin' ? 'Alt+Cmd+I' : 'Alt+Shift+I',
        click: () => { alert('Electron rocks!') }
    }]
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

