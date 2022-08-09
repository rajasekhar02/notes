

 ### **awk** \<space\> \<**options**\>"\<**corresponding parameters**\>" \<space\> '/\<reg-exp\>/{<function-name> "$<param(n-1)>"}'
  
<pre> example: 
  awk -F"\n" '/^The integral/{print $NF}'
  
  -F : delimiter option
  
  \"\n\": option parameter
  
  /\<string\>/ : string in between forward slashes is the regular expressions
  
  {print}: function should be enclosed in the {}, **print** is the function name

  \$NF: Filtered Strings separated by the -F delimiter option
</pre>
 #### Reference: https://awk.js.org/, https://linux.die.net/man/1/awk

---  

 ### **grep** \<space\> \<**options**\>"\<**corresponding parameters**\>" \<space\> ' \<string\> or \<reg-exp\>'
  
<pre> example: 
  grep -i 'abcd' -A 12
  
  -i : option to ignore case
  
  \<string\> : string in between forward slashes is the regular expressions

  -A: no of context lines to display after the match
</pre>
 #### Reference: https://linux.die.net/man/1/grep

---

 ### xargs: to pass the output of one function as a argument to the another function
 <pre> eg: 
 ls foundryOutput | awk '{print "./foundryOutput/"$NF}'| **xargs** cat|awk -F"\n" '/^The integral/{print $NF}'</pre>
 #### Reference: https://man7.org/linux/man-pages/man1/xargs.1.html

---
### VIM Editor Commands: https://vim.rtorr.com/
---

ls -la - to see the vim editor .swap files

Ctrl+Q - to unfreeze the vim editor screen

---

[vim insert the same character acroos multiple lines](https://stackoverflow.com/questions/9549729/vim-insert-the-same-characters-across-multiple-lines)

---

# Store file name containing dates and time
 ```console 
  foo@bar:~$ bash ./play.sh Joueur.js chess mygame > "./matches/$(date +"%Y_%m_%d_%I_%M_%p").log"
 ```

---

[linux history command](https://opensource.com/article/18/6/history-command#:~:text=Removing%20history&text=If%20you%20want%20to%20delete,in%20their%20home%20directory%20as%20)

---

[We can Edit Large text file in UNIX without opening it using SED](https://www.gnu.org/software/sed/manual/sed.html)

---

[lsof (list open files)](https://man7.org/linux/man-pages/man8/lsof.8.html) command find out the process which has a file handle on the particular file.

---

Find all processes listening on particular port in linux
 ```console
 foo@bar:~$ netstat -nap | grep <port-number>
 ```
---



