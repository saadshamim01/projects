|    **Features**     | **Stack**                                                    | **Heap**                                                     |
| :-----------------: | ------------------------------------------------------------ | ------------------------------------------------------------ |
|      *Memory*       | Stack memory is used only by one thread of execution.        | Heap memory is used by all the parts of the application.     |
|      *Access*       | Stack memory can’t be accessed by other threads.             | Objects stored in the heap are globally accessible.          |
| *Memory Management* | Follows LIFO manner to free memory.                          | Memory management is based on the generation associated with each object. |
|     *Lifetime*      | Exists until the end of execution of the thread.             | Heap memory lives from the start till the end of application execution. |
|       *Usage*       | Stack memory only contains local primitive and reference variables to objects in heap space. | Whenever an object is created, it’s always stored in the Heap space. |



### **JDK, JRE and JVM**

| **JDK**                                                      | **JRE**                                                      | **JVM**                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| It stands for Java Development Kit.                          | It stands for Java Runtime Environment.                      | It stands for Java Virtual Machine.                          |
| It is the tool necessary to compile, document and package Java programs. | JRE refers to a runtime environment in which Java bytecode can be executed. | It is an abstract machine. It is a specification that provides a run-time environment in which Java bytecode can be executed. |
| It contains JRE + development tools.                         | It’s an implementation of the JVM which physically exists.   | JVM follows three notations: Specification, **Implementation,** and **Runtime Instance**. |

#### Access

| **Modifier**                     | **Default** | **Private** | **Protected** | **Public** |
| -------------------------------- | ----------- | ----------- | ------------- | ---------- |
| *Same class*                     | YES         | YES         | YES           | YES        |
| *Same Package subclass*          | YES         | NO          | YES           | YES        |
| *Same Package non-subclass*      | YES         | NO          | YES           | YES        |
| *Different package subclass*     | NO          | NO          | YES           | YES        |
| *Different package non-subclass* | NO          | NO          | NO            | YES        |

JIT Run Time

JIT stands for Just-In-Time compiler in Java. It is a program that helps in converting the Java bytecode into instructions that are sent directly to the processor. By default, the JIT compiler is enabled in Java and is activated whenever a Java method is invoked. The JIT compiler then compiles the bytecode of the invoked method into native machine code, compiling it “just in time” to execute. Once the method has been compiled, the JVM summons the compiled code of that method directly rather than interpreting it. This is why it is often responsible for the performance optimization of Java applications at the run time.





Method vs Constructor

| **Methods**                                         | **Constructors**                                             |
| --------------------------------------------------- | ------------------------------------------------------------ |
| 1. Used to represent the behavior of an object      | 1. Used to initialize the state of an object                 |
| 2. Must have a return type                          | 2. Do not have any return type                               |
| 3. Needs to be invoked explicitly                   | 3. Is invoked implicitly                                     |
| 4. No default method is provided by the compiler    | 4. A default constructor is provided by the compiler if the class has none |
| 5. Method name may or may not be same as class name | 5. Constructor name must always be the same as the class name |