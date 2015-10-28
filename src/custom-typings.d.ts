declare module "systemjs-builder" {
  export default class{
    constructor(rootDir: string, oufFile: string)
    buildStatic(src: string, dst: string, options: any)
  }
}


declare module "gh-pages" {
  export function publish(outDir: string, cb: any)
}

interface Object {
  assign(target: any, ...sources: any[]): any;
}