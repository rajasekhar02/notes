jar file compression and extraction references: [UNIX](https://docs.oracle.com/javase/8/docs/technotes/tools/unix/jar.html),[Windows](https://docs.oracle.com/javase/8/docs/technotes/tools/windows/jar.html)

Linux Commands to change the java versions by using set update-alternatives for commands javac, java, jar:

    export JAVA_HOME=/usr/lib/jvm/jdk-17/bin -- to set the java_home as environment variable

    sudo update-java-alternatives -l -- to list all the available alternatives for a command.
    
    sudo update-alternatives --install "/usr/bin/<command-name>" "<command-name>" "/usr/lib/jvm/jdk-17/bin/<command-name>" 1  

    Eg: sudo update-alternatives --install     "/usr/bin/jinfo"           "jinfo"      "/usr/lib/jvm/jdk-17/bin/jinfo" 1

sudo chmod +x /home/mike/Downloads/minecraft.jar -- command to make a jar file executable

[how-run-a-jar-file-with-a-double-click in ubuntu](https://askubuntu.com/questions/192914/how-run-a-jar-file-with-a-double-click)

In ubuntu the path of jdk & jvm is ```/usr/lib/jvm/```

sudo update-alternatives --config java -- to change the currently executed jdk version.

In ubuntu(especially in my laptop) the java-8 is at path variable: $JAVA_8_HOME

In ubuntu(especially in my laptop) the java-17 is at path variable: $JAVA_HOME




