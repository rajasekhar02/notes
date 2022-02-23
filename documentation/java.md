jar file compression and extraction references: [UNIX](https://docs.oracle.com/javase/8/docs/technotes/tools/unix/jar.html),[Windows](https://docs.oracle.com/javase/8/docs/technotes/tools/windows/jar.html)

Linux Commands to set update alternatives for javac, java, jar:
    sudo update-alternatives --install "/usr/bin/<command-name>" "<command-name>" "/usr/lib/jvm/jdk-17/bin/<command-name>" 1  
Eg: sudo update-alternatives --install     "/usr/bin/jinfo"           "jinfo"      "/usr/lib/jvm/jdk-17/bin/jinfo" 1
