/// <reference path="../../type_declarations/DefinitelyTyped/node/node.d.ts" />
declare module "loge" {
    interface Writable {
        write(str: string): boolean;
    }
    enum Level {
        notset = 0,
        debug = 10,
        info = 20,
        warning = 30,
        error = 40,
        critical = 50,
    }
    /**
    new Logger(<Stream-like Object>, <Number|String>);
    
    logger.stream: Stream-like object implementing .write(string)
      E.g., any stream.Writable, like `process.stderr`
    
    logger._level: Number
      It is set via logger.level, as either a String (resolved using
      Logger._levels) or Number
    */
    class Logger {
        outputStream: Writable;
        level: Level;
        constructor(outputStream?: Writable, level?: Level);
        log(level: Level, args: any[]): void;
        debug(...args: any[]): void;
        info(...args: any[]): void;
        warning(...args: any[]): void;
        error(...args: any[]): void;
        critical(...args: any[]): void;
    }
    var logger: Logger;
}
