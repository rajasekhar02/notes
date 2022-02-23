jar file compression and extraction references: [UNIX](https://docs.oracle.com/javase/8/docs/technotes/tools/unix/jar.html),[Windows](https://docs.oracle.com/javase/8/docs/technotes/tools/windows/jar.html)

Linux Commands to change the java versions by using set update-alternatives for commands javac, java, jar:

    export JAVA_HOME=/usr/lib/jvm/jdk-17/bin -- to set the java_home as environment variable

    sudo update-java-alternatives -l -- to list all the available alternatives for a command.
    
    sudo update-alternatives --install "/usr/bin/<command-name>" "<command-name>" "/usr/lib/jvm/jdk-17/bin/<command-name>" 1  

Eg: sudo update-alternatives --install     "/usr/bin/jinfo"           "jinfo"      "/usr/lib/jvm/jdk-17/bin/jinfo" 1
