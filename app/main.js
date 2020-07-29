const { app, BrowserWindow } = require('electron');

String.prototype.trim = function() {
  return this.replace(/^\s+|\s+$/g, "");
};

const cc=console.log;
//const isDEV=true;
const _process_env_NODE_DEV =
  (typeof process.env.NODE_DEV === "undefined") ?
    "__NONE__" :
    process.env.NODE_DEV.trim();

//const isDEV = (process.env.NODE_DEV.trim() === 'Maix');
const isDEV = (process.env.NODE_DEV === 'Maix');
/*
const t = ' msg +  ';
cc('t: "' + t + '"');
cc('t.trim(): "' + t.trim() + '"');
*/

cc('process.env.NODE_ENV: ' + process.env.NODE_ENV);
//const t2 = process.env.NODE_DEV;
//cc('t2: "' + t2 + '"');
cc('_process_env_NODE_DEV: "' + _process_env_NODE_DEV + '"');
cc('isDEV: ' + isDEV);
if (isDEV) {
  cc('electron-reload: << ON! >>');
  require('electron-reload')(__dirname + '/..');
} else {
  cc('electron-reload: << off >>');
}

function createWindow () {
  console.log(' =JS=> createWindow() starts [ + String.prototype.trim ]');
  let win = new BrowserWindow({
    width: 900,
    height: 700,
    frame: true, //false,
    transparent: false, //true,
    webPreferences: {
      nodeIntegration: true
    }
  });
  //win.setMenu(null);
  win.webContents.openDevTools();

  win.loadFile('index.html');
}

app.on('ready', createWindow);
