const profilerFactory = require("./profile-factory");

console.log('Program start');
var profiler = profilerFactory.create("Simple");
profiler.start();
setTimeout(() => {
    console.log('Program end');
    profiler.end();
}, 3000)
