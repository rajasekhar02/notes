Producer Consumer Locality

Imaging Pipeline have two questions to answer:

1. In what order should it computes its values ?
   In a Matrix, there are different ways to traverse

   1. Traversing row wise
   2. Traversing Column Wise
   3. Traversing row wise, but tranversing in vector of width four row elements
   4. Parallel y (distribute across parallel threads), along with Vectorize by 4 row elements.
   5. Split rows and columns into tiles of 4

2. When should it compute its inputs?
   1. All at once, ahead of time. Means computing all the intermediate values before starting to compute the output (lack locality)
   2. Computing the intermediate values as and when needed then discarding the values. This process results in **redundant recompute**.
   3. As needed, reusing old values. But introduces the serial dependency which does not allow to parallelize the program.**(Poor parallelism)**

Existing Languages make Optimizations hard:

| Parallelism    | locatity |
| -------------- | -------- |
| vectorization  | fusion   |
| multithreading | tiling   |

C - parallelism + tiling + fusion are hard to write or automate

CUDA, OpenCL, shaders - data parallelism is easy, fusion is hard.

Libraries don't help:
BLAS, IPP, MKL, OpenCV, MATLAB

Optimized kernels compose into inefficient pipelines (no fusion)

### Optimization Patterns:

Vectorize row , parallelize along y direction

C++ terminologies Need to learn:

1. Overloading operators
2. Templates
3. Header File linking and working
4. Inheritance and Polymorphism
5. Defining Interfaces.

Need to Learn CUDA Programming for GPU programming

Halide Scheduler need to explored

http://github.com/Halide

* automatic scheduling in Halide: http://graphics.cs.cmu.edu/projects/halidesched/mullapudi16_halidesched.pdf
* [PolyMage Tool](http://mcl.csa.iisc.ernet.in/polymage.html) is used to find the efficient schedules
* Method used by the PolyMage Tool for finding the effective schedule is [polyhedral analysis](https://johnwickerson.github.io/papers/looppipelining_TCAD17.pdf).
* FPGA acceletors are designed by using High Level Systhesis method. One of the tool for HLS is Vivado which converts the C program to a Verilog/VHDL.
