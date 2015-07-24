/// <reference path="type_declarations/DefinitelyTyped/node/node.d.ts" />

import {format} from 'util';

//// export module loge {

export interface Writable {
  write(str: string): boolean;
}

declare var process: {stderr: Writable};

// Level is a mapping from level names (strings) to level values (numbers)
export enum Level {
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
export class Logger {
  constructor(public outputStream: Writable = process.stderr,
              public level: Level = Level.notset) { }

  log(level: Level, args: any[]) {
    if (level >= this.level) {
      var text = format(args);
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

//// }
