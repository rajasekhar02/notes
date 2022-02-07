  Source: https://jason-williams.co.uk/speeding-up-vscode-extensions-in-2022
  
  1. Learned about the VS Code extension named Dendron
  2. R.A.I.L Model for [measuring the performance](https://web.dev/rail/) => Respose . Animation . idle . Load
  3. **Developer: Startup Performance** is a option available in VS Code which is useful to identify where the time is spent across the application.
  4. Load Code, Call Activate, Event as the important columns in the Developer: Startup Performance.
  5. If we imagine the loading of extensions like a queue from the top image, then it makes sense to have visual changes towards the front and then features that require interaction to be near the back.
  6. Learned about different [module systems in javascript](https://jameshfisher.com/2020/10/04/what-are-umd-modules/)
 
 ### In Extension named Postfix TS following optimizations are suggested: 
 > **Events**: It is required to activate the extension only for Typescript and Javascript files
 > **Load Code**: It is required to use bundler to bundle multiple files and optimize the extension size. Reduce the code generation by removing unwanted compile targets
  
  7. Slow loading of large files can be due to syntactical analysis effects the VS code startup. This is due the usage of regular expressions and usage of inefficient textmate grammar.
  8. Solution for above problem is to us [Tree-sitter](https://tree-sitter.github.io/tree-sitter/) which is new concurrent, incremental parsing system.
  9. Usage of Web assembly https://github.com/jasonwilliams/hello-wasm [source1](https://www.osohq.com/post/building-vs-code-extension-with-rust-wasm-typescript) for  CPU intensive work.
