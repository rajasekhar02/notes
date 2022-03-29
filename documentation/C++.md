https://docs.microsoft.com/en-us/cpp/cpp/header-files-cpp?view=msvc-170
https://cookierobotics.com/040/
http://www.math.uaa.alaska.edu/~afkjm/csce211/handouts/SeparateCompilation.pdf
http://gtad.sourceforge.net/
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
