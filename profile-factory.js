const Profiler = require("./profile");

exports.create = (label) => {
    if (process.env.NODE_ENV === 'development') {
        return new Profiler(label); //[1]
    } else if (process.env.NODE_ENV === 'production') {
        return { //[2]
            start: function () {
            },
            end: function () {
            }
        }
    } else {
        throw new Error('Must set NODE_ENV');
    }
};