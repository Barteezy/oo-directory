var Directory = require('../directory');

describe('Directory', function() {

  it("has a name", function() {

    var directory = new Directory('workspace');
    expect(directory.name).toEqual('workspace');

    directory = new Directory('filestuff');
    expect(directory.name).toEqual('filestuff');

    directory = new Directory('luke');
    expect(directory.name).toEqual('luke');

  });
  //
  // it("returns filenames in alphabetical order with ls", function() {
  //   var directory = new Directory('workspace');
  //   expect(directory.ls()).toEqual([]);
  //
  //   directory.write("foo.txt", "w00t!");
  //   expect(directory.ls()).toEqual(["foo.txt"]);
  //
  //   directory.write("bar.txt", "Hello world");
  //   expect(directory.ls()).toEqual(["bar.txt", "foo.txt"]);
  // });
  //
  // it("returns the content of the given file with cat", function() {
  //   var directory = new Directory('workspace');
  //
  //   directory.write("foo.txt", "w00t!");
  //   expect(directory.cat('foo.txt')).toEqual("w00t!");
  //
  //   directory.write("bar.txt", "Hello world");
  //   expect(directory.cat('bar.txt')).toEqual("Hello world");
  // });
  //
  // it("changes the name of a given file to another name with mv", function() {
  //   var directory = new Directory('workspace');
  //
  //   directory.write("bar.txt", "Hello world");
  //   directory.mv("bar.txt", "foo.txt");
  //
  //   expect(directory.cat('foo.txt')).toEqual('Hello world');
  //   expect(directory.ls()).toEqual(['foo.txt']);
  // });
  //
  // it("copies one object to another with cp", function() {
  //   var directory = new Directory('workspace');
  //
  //   directory.write("bar.txt", "Hello world");
  //   directory.cp("bar.txt", "foo.txt");
  //   directory.write("bar.txt", "I've changed");
  //
  //   expect(directory.cat('foo.txt')).toEqual('Hello world');
  //   expect(directory.cat('bar.txt')).toEqual("I've changed");
  //   expect(directory.ls()).toEqual(['bar.txt', 'foo.txt']);
  // });


});
