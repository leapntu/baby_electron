const {app, BrowserWindow} = require('electron')
const {ipcMain} = require('electron')
var fs = require('fs')

let win

function createWindow () {
  win = new BrowserWindow({width: 800, height: 600, fullscreen: false})
  // Uncomment to have developer tools open at run
  // win.webContents.openDevTools()
  win.loadURL(`file://${__dirname}/html/index.html`)
  win.on('closed', () => {
    win = null
  })
}

ipcMain.on('write_data', (event, data) => {
  console.log(data)
  file_name = data.name + "_" + data.age + "_" + data.ra
  file_input = ""
  file_input += "look_record"
  var i = 0
  while (i < data.look_record.length) {
    file_input += ", " + data.look_record[i]
    i += 1
  }
  file_input += "\nstimuli_record"
  i = 0
  while (i < data.stimuli_record.length) {
    file_input += ", " + data.stimuli_record[i][0] + "; " + data.stimuli_record[i][1]
    i += 1
  }
  file_input += "\n"
  fs.writeFile(__dirname+"/data/"+file_name, file_input)
  event.returnValue = "written"
})

app.on('ready', createWindow)
app.on('window-all-closed', () => {
  app.quit()
})
