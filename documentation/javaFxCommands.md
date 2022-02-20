To build the jar file:
  https://github.com/openjfx/samples/tree/master/CommandLine/Non-modular/CLI
  
Use of Jlink Library:
  https://medium.com/azulsystems/using-jlink-to-build-java-runtimes-for-non-modular-applications-9568c5e70ef4
  https://stackoverflow.com/questions/52969440/bundle-javafx-app-with-openjdk-11-runtime
  
Command to generate Java Documentation:
javadoc --module-path ../javafx-sdk-17.0.2/lib --add-modules javafx.controls,javafx.fxml,javafx.base -d docs HelloWorld.java

Command to Execute a java program containing javafx
java --module-path ../javafx-sdk-17.0.2/lib --add-modules javafx.controls,javafx.fxml,javafx.base helloworld.HelloWorld

Command to compile a java program containing javafx
javac -d . HelloWorld.java --module-path ../javafx-sdk-17.0.2/lib --add-modules javafx.controls,javafx.fxml

Command to execute a java program from different folder
java --module-path ../javafx-sdk-17.0.2/lib --add-modules javafx.controls,javafx.fxml -cp ../Demo code.Demo

Command to generate java documentation with private variables and author
javadoc --module-path ../javafx-sdk-17.0.2/lib --add-modules javafx.controls,javafx.fxml,javafx.base -d docs -author -version -private src/Demo.java

change jar file permissions:
chmod a+rx demo.jar

Jar File Documentation:
https://docs.oracle.com/javase/7/docs/technotes/tools/windows/jar.html
