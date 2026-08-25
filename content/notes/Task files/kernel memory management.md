---
title: "kernel memory management"
tags:
  - fetus
---
## virtual memory 
- as the name suggests. not actual memory. used when more memory is needed than is physically available. uses storage from harddrives or any other storage device available 
- slower than actual ram. allows multitasking and program isolation
## virtual address space
- a range of memory addresses a given program can use. each program has its own
## paging/swapping
- moves the data thats not needed that much from the ram to storage in blocks called pages. this process is called swapping
## pages and page frames
- **pages**: fixed size blocks of virtual memory used to divide a process's address space
- **page frames**: fixed size blocks of physical memory (ram) that hold the pages
- page size = page frame size 
- typical size = 4KB (4096 bytes). some systems support multiple page sizes<br>
![[OSPaging.png]]
## memory management unit (MMU)
- a hardware component in the cpu 
- translates virtual addresses to physical ones in the ram or storage using [[#page table]]s, [[#page table base register (PTBR)]]s and [[#translation lookaside buffer (TLB)]]s
## page fault
- happens when a process tries to access a page thats been swapped to storage
- the MMU detects it and tells the OS to load it back into ram for usage
## page table 
- primarily stored in physical ram within kernel space of the OS's virtual memory
- each process has its own page table 
- isnt part of the MMU itself
- used to translate virtual addresses to physical ones. essentially acting as a map
- each entry in the page table is called PTE for short. they contain info on virtual pages like
	- physical frame number of the page location
	- status bits indicating validity/modification(dirty)/accessed
	- protection bits specifying access perms like rwx
- hierarchical multi level page tables exists to let us handle large memory address spaces 
## page table base register (PTBR)
- stores the base address of a process's page table in physical memory
- used by the MMU to find the page table for memory address translation 
## translation lookaside buffer (TLB)
- a cache for recent translations from the [[#page table]]. speeds up memory access.
- is tipically small. storing 64-512 entries
- when the cpu needs to access memory it first checks the TLB
	- if it finds a transtation in it its a "TLB hit" and if not its a "TLB miss" and proceeds to consult the page table
- if data is written. its first written to the cache and then eventually written into the underlying storage device
### commands to check stuff
- `free`
- `vmstat` - memory usage + swap activity
- `top/htop`
- `proc/meminfo` - mem usage + statistics 