export interface Writable {
    write(str: string): boolean;
}
/**
Level is a mapping from level names (strings) to level values (numbers)
*/
export declare enum Level {
    notset = 0,
    debug = 10,
    info = 20,
    warning = 30,
    error = 40,
    critical = 50,
}
export declare class Logger {
    outputStream: Writable;
    level: Level;
    /**
    Create a new Logger instance.
  
    logger.stream:
    @param {WritableStream} Stream-like object implementing .write(string), E.g.,
           any stream.Writable, like `process.stderr`
    @param {number} level Numeric log level indicating the minimum severity of
           messages to write to the output.
    */
    constructor(outputStream?: Writable, level?: Level);
    log(level: Level, args: any[]): void;
    debug(...args: any[]): void;
    info(...args: any[]): void;
    warning(...args: any[]): void;
    error(...args: any[]): void;
    critical(...args: any[]): void;
}
export declare var logger: Logger;
