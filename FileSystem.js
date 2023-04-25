const path = require('path');
const fs = require('fs');
class FileSystemExample {
  constructor(){
    this.uploadsFolderPath = path.join(__dirname,'uploads');
    this.logFile = path.join(__dirname,"uploads","logs.txt");
  }
  createFolder(){
    fs.mkdir(this.uploadsFolderPath,(err)=>{
      if(err){
        throw new Error(err);
      }else{
        console.log(`Folder created successfully`);
      }
    })
  }
  createFile(){
    fs.writeFile(this.logFile,"",(err)=>{
      if(err){
        console.log(err);
      }
      console.log("File created successfully");
    })
  }
  updateFile(){
    let message = "This is an important message"
    fs.writeFile(this.logFile,message,(err)=>{
      if(err){
        console.log(err);
      }
      console.log("File updated!");
    })
  }
readFile(){
  fs.readFile(this.logFile,'utf-8',(err,data)=>{
    if(err){
      throw new Error(err);
    }
    console.log(`Message: ${data}`);
  })
}
  deleteFile(){
    fs.unlink(this.logFile,(err)=>{
      if(err){
        throw new Error(err);
      }
      else{
        console.log(`File Deleted!`);
      }
    })
  }
  deleteFolder(){
    fs.readdirSync(this.uploadsFolderPath).forEach(file=>{
      fs.unlinkSync(path.join(this.uploadsFolderPath,file))
    })
    fs.rmdirSync(this.uploadsFolderPath)
  }
}
let fileSystem = new FileSystemExample();
