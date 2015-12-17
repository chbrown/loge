var util_1 = require('util');
/**
Level is a mapping from level names (strings) to level values (numbers)
*/
(function (Level) {
    Level[Level["notset"] = 0] = "notset";
    Level[Level["debug"] = 10] = "debug";
    Level[Level["info"] = 20] = "info";
    Level[Level["warning"] = 30] = "warning";
    Level[Level["error"] = 40] = "error";
    Level[Level["critical"] = 50] = "critical";
})(exports.Level || (exports.Level = {}));
var Level = exports.Level;
var Logger = (function () {
    /**
    Create a new Logger instance.
  
    logger.stream:
    @param {WritableStream} Stream-like object implementing .write(string), E.g.,
           any stream.Writable, like `process.stderr`
    @param {number} level Numeric log level indicating the minimum severity of
           messages to write to the output.
    */
    function Logger(outputStream, level) {
        if (outputStream === void 0) { outputStream = process.stderr; }
        if (level === void 0) { level = Level.notset; }
        this.outputStream = outputStream;
        this.level = level;
    }
    Logger.prototype.log = function (level, args) {
        if (level >= this.level) {
            var text = util_1.format.apply(null, args);
            this.outputStream.write("[" + Level[level] + "] " + text + "\n");
        }
    };
    Logger.prototype.debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        return this.log(Level.debug, args);
    };
    Logger.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        return this.log(Level.info, args);
    };
    Logger.prototype.warning = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        return this.log(Level.warning, args);
    };
    Logger.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        return this.log(Level.error, args);
    };
    Logger.prototype.critical = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        return this.log(Level.critical, args);
    };
    return Logger;
})();
exports.Logger = Logger;
exports.logger = new Logger();
