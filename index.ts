import {format} from 'util';

// these shims let avoid NodeJS dependencies in the .d.ts output
export interface Writable { write(str: string): boolean; }
declare var process: {stderr: Writable};

/**
Level is a mapping from level names (strings) to level values (numbers)
*/
export enum Level {
  notset = 0,
  debug = 10,
  info = 20,
  warning = 30,
  error = 40,
  critical = 50,
}

export class Logger {
  /**
  Create a new Logger instance.

  logger.stream:
  @param {WritableStream} Stream-like object implementing .write(string), E.g.,
         any stream.Writable, like `process.stderr`
  @param {number} level Numeric log level indicating the minimum severity of
         messages to write to the output.
  */
  constructor(public outputStream: Writable = process.stderr,
              public level: Level = Level.notset) { }

  log(level: Level, args: any[]) {
    if (level >= this.level) {
      var text = format.apply(null, args);
      this.outputStream.write(`[${Level[level]}] ${text}\n`);
    }
  }

  debug(...args: any[]): void {
    return this.log(Level.debug, args);
  }
  info(...args: any[]): void {
    return this.log(Level.info, args);
  }
  warning(...args: any[]): void {
    return this.log(Level.warning, args);
  }
  error(...args: any[]): void {
    return this.log(Level.error, args);
  }
  critical(...args: any[]): void {
    return this.log(Level.critical, args);
  }
}

export var logger = new Logger();
