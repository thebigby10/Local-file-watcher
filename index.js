//import file system_node
const fs = require("fs");

//gettting all the file paths of the command line argument
let filePaths = process.argv;
//removes the 1st 2 element
for(let i=2;i<filePaths.length;i++){
  filePaths[i-2] = filePaths[i];
}
filePaths.pop();
filePaths.pop();

//checks the file status every n second, to reduce cpu overhead
setInterval(() => {
  
}, filePaths.length);
