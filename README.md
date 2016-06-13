# ionic-ng-compiler

# First install angular, see https://github.com/angular/angular/blob/master/CHANGELOG.md#200-rc0-2016-05-02
$ npm install @angular/compiler-cli typescript@next @angular/platform-server @angular/compiler
# Optional sanity check, make sure TypeScript can compile.
$ ./node_modules/.bin/tsc -p path/to/project
# ngc is a drop-in replacement for tsc.
$ ./node_modules/.bin/ngc -p path/to/project
