# History of Grammars-V4

The grammars-v4 repository was created `Tue Sep 25 16:45:12 2012 -0700`.  The repository was created as a place to hold grammars for [Antlr4](https://www.antlr.org/).  There is also a [grammars-v3](https://github.com/antlr/grammars-v3) repository here which has the grammars from the legacy [grammars-v3 list](https://www.antlr3.org/grammar/list.html).

In Sept of 2012, the only library of formal grammars was the [grammars-v3 list](https://www.antlr3.org/grammar/list.html), and it really wasn't possible to know if the grammars on that list would pass minimal tests.

In order to ensure that the grammars on the tree worked, to a minimal degree, [antlr4test-maven-plugin](https://github.com/antlr/antlr4test-maven-plugin) was written and Travis CI/CD was set up to ensure that every grammar on the tree passed these tests:

* The grammar is parseable by the current version of Antlr
* The generated lexer-parser will parse at least one sample input with the current version of Antlr.

There is no single license for the Antlr4 grammars.  Some of the grammars on the tree were forward-ported from grammrs-v3 and in those cases the original author information was usually included.  Many of the grammars have licensing information in the .g4 file(s).

It has long been the intention of grammars-v4 to provide an ecosystem of grammars for Antlr4 that would enable Antlr4 users to create parsers for the source and target language of thier choice for a wide variety of source languages.  At this time there are a little less than 300-ish source language grammars, and Antlr4 supports many targets including C, Java, C#, Python, JS, Swift and others. 

It has long been a tradition to thank every contributor to grammars-v4 for the time and effort they put into their pull requests.  There is a "thank-you" for every PR when it is pulled onto the tree.  Additionally grammars-v4 aims to be a welcoming community for all contributors both experienced and novice to contribute to, and to learn from.
