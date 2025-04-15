# Jupyter + DevOps
DevOps crestomathy in jupyter notebooks.  

## Installation

1. install node
2. run `npm install`
3. run `npm run interpret "command"` to select code where command matches a line in the notebook markdown with a question mark `?` in it.
4. run `npm run import -- "express service"` then visit [http://localhost:8080/import/node%20express.ipynb](http://localhost:8080)
5. use `const importer = require('../Core'); const {exportedCell} = importer.import('anything with a question mark')` 
  from entry cells to import cells from other notebooks into the current notebook

## Features

1. Export code from cells `npm run import -- "notebook export" "['index.js label or code search']"
2. Multi-lingual, convert python to nodejs and back again
3. Support for dozens of Jupyter kernels, built in (Coming soon!)
4. Extendable, just add a notebook and use a `?` in markdown to indicate how you want the following code cell to be referenced
5. Multi-interface, CLI, web-host, Matlab GUI, MFC, Jupyter, etc (Coming soon!)
6. RPC support (GCloud, AWS, Express, etc), run notebook cells from a public service
7. Use cells like function calls, and notebooks like modules

## TODO

1. DONE: Self-hosted / no-dependencies
2. DONE: [Documentation export](https://jupyter.briancullinan.com)
3. Multi-lingual, runs from R/Matlab (DONE: Python, C#, C, C++, ES/CommonJS interops)
4. Logic merging (as opposed to line merging and feature branching, the enemies of code organization)
5. [Aspects oriented](https://en.wikipedia.org/wiki/Aspect-oriented_programming) eg [Morpheus](https://github.com/briancullinan2/morpheus/blob/main/library/repl/attrib.js)
6. DONE: Make a public meeting request scheduling app
7. Make an admin panel menu and RPC functions like media server/swagger has
8. Clone other necessary services like google calendar and google maps
9. User arcan-fe to pull out audio attributes and make a music duplicate finder, do the same with images
10. Add a gist feature with an editor in git index.ipynb, save to the local git-bare filesystem

