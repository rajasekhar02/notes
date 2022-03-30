[Explanation about header files](https://docs.microsoft.com/en-us/cpp/cpp/header-files-cpp?view=msvc-170)

[Create header and implementaion files 1](http://www.math.uaa.alaska.edu/~afkjm/csce211/handouts/SeparateCompilation.pdf)

[Create Header and implementation files 2](https://cookierobotics.com/040/)

[Having same names for Class Properties and the constructor parameters](https://stackoverflow.com/questions/268587/can-i-use-identical-names-for-fields-and-constructor-parameters)

[C++ custom comparator for sets](https://usaco.guide/silver/custom-cpp-stl?lang=cpp)

[When to use sets in c++](http://lafstern.org/matt/col1.pdf)

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
