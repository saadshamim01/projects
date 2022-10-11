# Synchronized

Multi-threaded programs may often come to a situation where multiple threads try to access the same resources and finally produce erroneous and unforeseen results. 

- Java provides a way of creating threads and synchronizing their task by using synchronized blocks. 
- Synchronized blocks in Java are marked with the synchronized keyword. 
- A synchronized block in Java is synchronized on some object. 
- All synchronized blocks synchronized on the same object can only have one thread executing inside them at a time. 
- All other threads attempting to enter the synchronized block are blocked until the thread inside the synchronized block exits the block.

```
// Only one thread can execute at a time. 
// sync_object is a reference to an object
// whose lock associates with the monitor. 
// The code is said to be synchronized on
// the monitor object
synchronized(sync_object)
{
   // Access shared variables and other
   // shared resources
}
```

The synchronization is mainly used to

1. To prevent thread interference.
2. To prevent consistency problem.

