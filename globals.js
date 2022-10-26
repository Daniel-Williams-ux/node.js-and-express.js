// Globals -No WINDOW (no window objects because no browser)

//__dirname - path to current directory
// __filename - file name
// require - function to use modules(commonJS)
// module - info about current module(file)
// process - info about env where the program is being executed

console.log(__dirname) // /home/runner/mynodejs
console.log(__filename) // /home/runner/mynodejs/global.js

setInterval(() => {
  console.log('hello world') //hello world will print every seconds
}, 1000)
