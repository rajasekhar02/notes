### Analytical Modeling of parallel program
* A parallel system is the combination of an algorithm and the parallel architecture on which it is implemented. So we need to consider their overhead in performance analysis of the parallel program 
* Below diagram show that in addition to the computation the time also spent on interprocess communication,idiliing and excess computation(not involved in serial.
 ![05fig01](https://user-images.githubusercontent.com/13390833/156657947-74bb8b60-e2ba-46d9-8334-4d2895d167dc.gif)
* Metrics used for parallel systems are 
   * *Execution time*: time elapsed between the beginning and the end of its execution on a sequential computer.
      * T<sub>s</sub>: Serial Runtime
      * T<sub>p</sub>: Parallel Runtime
   * *Total Parallel Overheaad ( T<sub>o</sub> )*: total time collectively spent by all the processing elements over and above that required by the fastest known sequential algorithm for solving the same problem on single processing element.
                               
     T<sub>o</sub> = pT<sub>p</sub>-T<sub>s</sub>
   * *Speed up*: Speedup is a measure that captures the relative benefit of solving a problem in parallel. It is defined as the ratio of the time taken to solve a problem on a single processing element to the time required to solve the same problem on a parallel computer with p identical processing elements. Given a parallel algorithm, it is fair to judge its performance with respect to the fastest sequential algorithm for solving the same problem on a single processing element.
   
      Eg: Consider the example of parallelizing bubble sort (Section 9.3.1). Assume that a serial version of bubble sort of 105 records takes 150 seconds and a serial quicksort can sort the same list in 30 seconds. If a parallel version of bubble sort, also called odd-even sort, takes 40 seconds on four processing elements, it would appear that the parallel odd-even sort algorithm results in a speedup of 150/40 or 3.75. However, this conclusion is misleading, as in reality the parallel algorithm results in a speedup of 30/40 or 0.75 with respect to the best serial algorithm.    
      * Theoretically, speedup can never exceed the number of processing elements, p. 
      * In practice, a speedup greater than p is sometimes observed (a phenomenon known as superlinear speedup). This usually happens when the work performed by a serial algorithm is greater than its parallel formulation or due to hardware features that put the serial implementation at a disadvantage.
  * *Efficiency ( E )*: it is defined as the ratio of speedup to the number of processing elements. it is a measure of the fraction of time for which a processing element is usefully employed
      * In practice, speedup (S) is less than p and efficiency is between zero and one
      ```math
        E = S/p
      ```
   *  *Cost ( p &#8226; T<sub>p</sub> )*:  Cost reflects the sum of the time that each processing element spends solving the problem. 
          
      >   Cost = T<sub>p</sub> + T<sub>p</sub> + ....p(processors) = p &#8226; T<sub>p</sub>
      * A parallel system is said to be cost-optimal if the cost of solving a problem on a parallel computer has the same asymptotic growth (in Θ terms) as a function of the input size as the fastest-known sequential algorithm on a single processing element.
   * Isoefficiency metric of Scalability: 
       * For a given problem size(W), as we increase the number of processing elements(p), the overall efficiency of the parallel system goes down. This phenomenon is common to all parallel systems.
       * In many cases, the efficiency of a parallel system increases if the problem size(W) is increased while keeping the number of processing elements(p) constant.
       ![05fig23](https://user-images.githubusercontent.com/13390833/156667008-d0d08ab4-c2e1-41c6-9d85-d6cd313148d6.gif)
       * For different parallel systems, the problem size must increase at different rates in order to maintain a fixed efficiency as the number of processing elements is increased.
       *  This rate determines the degree of scalability of the parallel system.
       
       Equation 5.10. 
       
       ![05fig24](https://user-images.githubusercontent.com/13390833/156667986-663d2829-afe1-4a99-b564-83cb78698268.gif)
       
       Equation 5.11. 
       
       ![05fig25](https://user-images.githubusercontent.com/13390833/156668018-78ab7b0b-4ba6-4617-9884-fd58da4b1187.gif)  
       
       Equation 5.12. 
       
       ![05fig26](https://user-images.githubusercontent.com/13390833/156667962-db39a02f-aca3-43a3-9b84-af2c53b7485f.gif)
       
       
       
       In Equation 5.12, if the problem size is kept constant and p is increased, the efficiency decreases because the total overhead To increases with p. If W is increased keeping the number of processing elements fixed, then for scalable parallel systems, the efficiency increases. This is because To grows slower than Θ(W) for a fixed p. For these parallel systems, efficiency can be maintained at a desired value (between 0 and 1) for increasing p, provided W is also increased.

        For different parallel systems, W must be increased at different rates with respect to p in order to maintain a fixed efficiency. For instance, in some cases, W might need to grow as an exponential function of p to keep the efficiency from dropping as p increases. Such parallel systems are poorly scalable. The reason is that on these parallel systems it is difficult to obtain good speedups for a large number of processing elements unless the problem size is enormous. On the other hand, if W needs to grow only linearly with respect to p, then the parallel system is highly scalable. That is because it can easily deliver speedups proportional to the number of processing elements for reasonable problem sizes.

        For scalable parallel systems, efficiency can be maintained at a fixed value (between 0 and 1) if the ratio To/W in Equation 5.12 is maintained at a constant value. For a desired value E of efficiency,

        Equation 5.13. 
        
        ![05fig27](https://user-images.githubusercontent.com/13390833/156667902-fd3a600e-d4e7-4115-ad35-6d6db4e2e448.gif)

        The Isoefficiency Function
        Let K = E/(1 − E) be a constant depending on the efficiency to be maintained. Since To is a function of W and p, Equation 5.13 can be rewritten as

        Equation 5.14. 
        
        ![05fig28](https://user-images.githubusercontent.com/13390833/156668307-4ced1c72-1e02-4174-b2cb-86a280bec5e2.gif)

        * From Equation 5.14, the problem size W can usually be obtained as a function of p by algebraic manipulations. This function dictates the growth rate of W required to keep the efficiency fixed as p increases. We call this function the isoefficiency function of the parallel system. The isoefficiency function determines the ease with which a parallel system can maintain a constant efficiency and hence achieve speedups increasing in proportion to the number of processing elements.
        * A small isoefficiency function means that small increments in the problem size are sufficient for the efficient utilization of an increasing number of processing elements, indicating that the parallel system is highly scalable. However, a large isoefficiency function indicates a poorly scalable parallel system. The isoefficiency function does not exist for unscalable parallel systems, because in such systems the efficiency cannot be kept at any constant value as p increases, no matter how fast the problem size is increased.

  * *Degree of Concurrency and the Isoefficiency Function*: The degree of concurrency is a measure of the number of operations that an algorithm can perform in parallel for a problem of size W; it is independent of the parallel architecture.
     ```
     EXAMPLE 5.17 EFFECT OF CONCURRENCY ON ISOEFFICIENCY FUNCTION
    Consider solving a system of n equations in n variables by using Gaussian elimination (Section 8.3.1). The total amount of 
    computation is Θ(n3). But then variables must be eliminated one after the other, and eliminating each variable requires Θ(n2) 
    computations. Thus, at most Θ(n<sup>2</sup>) processing elements can be kept busy at any time. Since W = Θ(n3) for this problem, the 
    degree of concurrency C(W) is Θ(W2/3) and at most Θ(W2/3) processing elements can be used efficiently. On the other hand, 
    given p processing elements, the problem size should be at least Ω(p3/2) to use them all. Thus, the isoefficiency function of 
    this computation due to concurrency is Θ(p3/2). 
    ```
----

 
