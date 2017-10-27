const os = require('os');
const spawn = require('cross-spawn');

if (os.platform() === 'darwin' || os.platform() === 'linux') {
    console.log('fix linux permissions')
    spawn.sync('npm', ['run', 'fixperms']);
}
