* module load openmpi/4.0.3/gnu/9.2.0

* sbatch \<filename\>.sub

* squeue | grep -i 'rp6kp' -A 12

* ls foundryOutput | awk '{print "./foundryOutput/"$NF}'|xargs cat|awk -F"\n" '/^The integral/{print $NF}'
