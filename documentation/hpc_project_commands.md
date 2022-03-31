* module load openmpi/4.0.3/gnu/9.2.0

* **module avail**: to find all the available packages to load.

* Reference: [module documentation](https://curc.readthedocs.io/en/latest/compute/modules.html)

* sbatch \<filename\>.sub

* squeue | grep -i 'rp6kp' -A 12

* ls foundryOutput | awk '{print "./foundryOutput/"$NF}'|xargs cat|awk -F"\n" '/^The integral/{print $NF}'

* mpic++ -o "../bin/sievePrimes1" "../src/sievePrimes1.cpp" for cpp compiler

---
MPI Queries

[Send Function through send and receive](https://stackoverflow.com/questions/35868050/mpi-broadcast-variable-of-auto-type)
