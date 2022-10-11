Inheritence (IS-A)

Aggrefation (HAS-A)



- Code reuse is also best achieved by aggregation when there is no is-a relationship.
- Inheritance should be used only if the relationship is-a is maintained throughout the lifetime of the objects involved; otherwise, aggregation is the best choice.

## Multithreading

In Java, Multithreading refers to a process of executing two or more threads simultaneously for maximum utilization of the CPU. A thread in Java is a ***lightweight process\*** requiring fewer resources to create and shares the process resources.

Few more advantages of Multithreading are:

- Multithreading saves time as you can perform multiple operations together.
- The threads are independent, so it does not block the user to perform multiple operations at the same time and also, if an exception occurs in a single thread, it does not affect other threads.

Threads can be created by using two mechanisms :

- Extending the Thread class
- Implementing the Runnable Interface

#### Life Cycle of Thread

1. New
2. Runnable
3. Running
4. Non-Runnable (Blocked)
5. Terminated

#### MultiTasking

Multitasking is a process of executing multiple tasks simultaneously. We use multitasking to utilize the CPU. Multitasking can be achieved in two ways:

<img src="https://static.javatpoint.com/images/java-multithreading.png">

**Process-based Multitasking (Multiprocessing)**

- Each process has an address in memory. In other words, each process allocates a separate memory area.
- A process is heavyweight.
- Cost of communication between the process is high.
- Switching from one process to another requires some time for saving and loading [registers](https://www.javatpoint.com/register-memory), memory maps, updating lists, etc.

**Thread-based Multitasking (Multithreading)**

- Threads share the same address space.
- A thread is lightweight.
- Cost of communication between the thread is low.

#### Thread Class vs Runnable Interface

- If we extend the Thread class, our class cannot extend any other class because Java doesn’t support multiple inheritance. But, if we implement the Runnable interface, our class can still extend other base classes.
- We can achieve basic functionality of a thread by extending Thread class because it provides some inbuilt methods like yield(), interrupt() etc. that are not available in Runnable interface.
- Using runnable will give you an object that can be shared amongst multiple threads.

Few more advantages of Multithreading are:

- Multithreading saves time as you can perform multiple operations together.
- The threads are independent, so it does not block the user to perform multiple operations at the same time and also, if an exception occurs in a single thread, it does not affect other threads.



## **Thread Creation**

While multithreading in Java, you can create a thread using two ways:

1. By extending Thread class
2. By implementing the Runnable interface

## **What is Thread Class?**

Thread class provides the methods and constructors to create and perform operations on a thread. Thread class extends Object class and implements the Runnable interface.



- hread()
- Thread(String name)
- Thread(Runnable r)
- Thread(Runnable r,String name) --> MOST COMMON



