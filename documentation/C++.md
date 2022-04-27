[Explanation about header files](https://docs.microsoft.com/en-us/cpp/cpp/header-files-cpp?view=msvc-170)

[Create header and implementaion files 1](http://www.math.uaa.alaska.edu/~afkjm/csce211/handouts/SeparateCompilation.pdf)

[Create Header and implementation files 2](https://cookierobotics.com/040/)

[Having same names for Class Properties and the constructor parameters](https://stackoverflow.com/questions/268587/can-i-use-identical-names-for-fields-and-constructor-parameters)

[C++ custom comparator for sets](https://usaco.guide/silver/custom-cpp-stl?lang=cpp)

[When to use sets in c++](http://lafstern.org/matt/col1.pdf)

[how can i use an array of function pointers](https://stackoverflow.com/questions/252748/how-can-i-use-an-array-of-function-pointers)

[variable declared as extern](https://stackoverflow.com/questions/1433204/how-do-i-use-extern-to-share-variables-between-source-files)

[How to cast int to enum in c](https://stackoverflow.com/questions/11452920/how-to-cast-int-to-enum-in-c)

[How to cast int to string](https://stackoverflow.com/questions/5590381/easiest-way-to-convert-int-to-string-in-c)

[IO on Binary Files](https://www.eecs.umich.edu/courses/eecs380/HANDOUTS/cppBinaryFileIO-2.html)

---
Books need to refer

https://www.thegeekstuff.com/2016/02/c-plus-plus-11/

https://learning.oreilly.com/library/view/a-tour-of/9780134998053/?ar=

https://www.stroustrup.com/C++11FAQ.html#std-random

https://learning.oreilly.com/library/view/effective-modern-c/9781491908419/ch01.html?sso_link=yes&sso_link_from=university-of-missouri

---

Creating Anonymous String Array in C++
```c++
   std::cout<<((const std::string[]){"asdf","asdf"})[0]<<std::endl;
```
---

To Find the size of the Array when size is not Given
```c++
  template<typename T, size_t N>
  constexpr std::size_t size(T (&)[N]){
      return N;
  }
  
  std::cout<<size(stringArrs)<<std::endl;
```
