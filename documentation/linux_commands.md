

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
