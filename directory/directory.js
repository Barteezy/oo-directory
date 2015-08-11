var Directory = function (name) {
  this.name = name;
  this.files = {};
};
// 
// Directory.prototype.write = function(filename, content){
//   this.files[filename] = content;
// }
//
// Directory.prototype.ls = function(){
//   return Object.keys(this.files).sort()
// }
//
// Directory.prototype.cat = function(filename){
//   return this.files[filename];
// }
//
// Directory.prototype.mv = function(filename1,filename2){
//   this.files[filename2] = this.files[filename1]
//   delete this.files[filename1]
// }
//
// Directory.prototype.cp = function(filename1,filename2){
//   this.files[filename2] = this.files[filename1]
// }

module.exports = Directory;
