// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.


      const activeWindows = require('electron-active-window');
 
		setInterval(function(){
			activeWindows().getActiveWindow().then((result)=>{
				if(result.windowClass != 'electron.exe'){
			    	console.log(result)
			    }
			});
		},2000)

		const exec = require('child_process').exec;

		// function execute(command, callback) {
		//     exec(command, (error, stdout, stderr) => { 
		//         callback(stdout); 
		//     });
		// };

		// // call the function
		// execute('C:/Users/sarthak/AppData/Local/Programs/workpuls-agent/Workpuls.exe', (output) => {
		//     console.log('output',output);
		// });