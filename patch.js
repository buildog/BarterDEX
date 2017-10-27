const os = require('os');
const spawn = require('cross-spawn');

if (os.platform() === 'darwin') {
    console.log('fix darwin permissions')
    spawn.sync('npm', ['run', 'fixperms']);
}
