declare module "systemjs-builder" {
  class Builder {
    constructor(rootDir: string, oufFile: string)
    buildStatic(src: string, dst: string, options: any)
  }

  export = Builder;
}

declare module "gh-pages" {
  export function publish(outDir: string, cb: any)
}


interface Object {
  assign(target: any, ...sources: any[]): any;
}