* module load openmpi/4.0.3/gnu/9.2.0

* **module avail**: to find all the available packages to load.

* Reference: [module documentation](https://curc.readthedocs.io/en/latest/compute/modules.html)

* module show <module-name> -  this commands give the information about the module like path where the module is installed etc.

---

slurm

* sbatch \<filename\>.sub

* squeue | grep -i 'rp6kp' -A 12

* ls foundryOutput | awk '{print "./foundryOutput/"$NF}'|xargs cat|awk -F"\n" '/^The integral/{print $NF}'

* mpic++ -o "../bin/sievePrimes1" "../src/sievePrimes1.cpp" for cpp compiler

---
MPI Queries

[Struct Serialization in C and transfer over mpi](https://stackoverflow.com/questions/9864510/struct-serialization-in-c-and-transfer-over-mpi)

[Send Function through send and receive](https://stackoverflow.com/questions/35868050/mpi-broadcast-variable-of-auto-type)

[MPI Send Struct with a vector property](https://stackoverflow.com/questions/36021305/mpi-send-struct-with-a-vector-property-in-c)

[MPI C Send 2d array of structures](https://stackoverflow.com/questions/20228772/mpi-c-send-2d-array-of-structures)

[mpi-c-derived-types-struct-of-vectors](https://stackoverflow.com/questions/18992701/mpi-c-derived-types-struct-of-vectors)

[sending-blocks-of-2d-array-in-c-using-mpi](https://stackoverflow.com/questions/9269399/sending-blocks-of-2d-array-in-c-using-mpi/9271753#9271753)

[MPI Custom Types](https://www.codingame.com/playgrounds/349/introduction-to-mpi/custom-types)

[Strange Segmentation Fault from mpi](https://stackoverflow.com/questions/12212476/strange-segmentation-fault-from-mpi)

---
  
CUDA Commands
  
  Below command is useful to compile the cuda file having cublas dependency. 
  
  -I - to include the include file from external path
  
  -L - to include the library from the external path
  
 ```shell 
 nvcc ./source/matrix_mm.cu  -lcublas -lculibos -I /share/apps/common/nvidia/hpc-sdk/20.11/Linux_x86_64/20.11/math_libs/include -L /share/apps/common/nvidia/hpc-sdk/20.11/Linux_x86_64/20.11/math_libs/lib64 -o myCublasApp
  ```
