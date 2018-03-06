import {format} from 'util'

/** Structural subset of NodeJS.WritableStream required for logging */
export interface WritableStream {
  write(buffer: Buffer | string, cb?: Function): boolean
  write(str: string, encoding?: string, cb?: Function): boolean
}

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
   * Create a new Logger instance.
   *
   * @param outputStream Stream-like object implementing .write(string).
   *        E.g., `process.stderr`.
   * @param level Numeric log level indicating the minimum severity of
   *        messages to write to outputStream.
   */
  constructor(public outputStream: WritableStream = process.stderr,
              public level: Level = Level.notset) { }

  log(level: Level, args: any[]) {
    if (level >= this.level) {
      const text = format.apply(null, args)
      this.outputStream.write(`[${Level[level]}] ${text}\n`)
    }
  }

  debug(...args: any[]): void {
    return this.log(Level.debug, args)
  }
  info(...args: any[]): void {
    return this.log(Level.info, args)
  }
  warning(...args: any[]): void {
    return this.log(Level.warning, args)
  }
  error(...args: any[]): void {
    return this.log(Level.error, args)
  }
  critical(...args: any[]): void {
    return this.log(Level.critical, args)
  }
}

export const logger = new Logger()
