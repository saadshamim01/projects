

**Static VS Non Static**

In the example above, we created a `static` method, which means that it can be accessed without creating an object of the class, unlike `public`, which can only be accessed by objects:

**Constructor**

A constructor in Java is a **special method** that is used to initialize objects. 

**Access Modifiers**

**For class**

| Modifier  | Description                                                  |
| --------- | ------------------------------------------------------------ |
| `public`  | The class is accessible by any other class                   |
| *default* | The class is only accessible by classes in the same package. This is used when you don't specify a modifier. You will learn more about packages in the packages chapter |

**For attributes, methods and constructors**

| Modifier    | Description                                                  |
| :---------- | :----------------------------------------------------------- |
| `public`    | The code is accessible for all classes                       |
| `private`   | The code is only accessible within the declared class        |
| *default*   | The code is only accessible in the same package. This is used when you don't specify a modifier. You will learn more about packages in the [Packages chapter](https://www.w3schools.com/java/java_packages.asp) |
| `protected` | The code is accessible in the same package and **subclasses**. You will learn more about subclasses and superclasses in the [Inheritance chapter](https://www.w3schools.com/java/java_inheritance.asp) |

**For classes**

| Modifier   | Description                                                  |
| :--------- | :----------------------------------------------------------- |
| `final`    | The class cannot be inherited by other classes (You will learn more about inheritance in the [Inheritance chapter](https://www.w3schools.com/java/java_inheritance.asp)) |
| `abstract` | The class cannot be used to create objects (To access an abstract class, it must be inherited from another class. You will learn more about inheritance and abstraction in the [Inheritance](https://www.w3schools.com/java/java_inheritance.asp) and [Abstraction](https://www.w3schools.com/java/java_abstract.asp) chapters) |

**For attributes and methods**

| Modifier       | Description                                                  |
| :------------- | :----------------------------------------------------------- |
| `final`        | Attributes and methods cannot be overridden/modified         |
| `static`       | Attributes and methods belongs to the class, rather than an object |
| `abstract`     | Can only be used in an abstract class, and can only be used on methods. The method does not have a body, for example **abstract void run();**. The body is provided by the subclass (inherited from). You will learn more about inheritance and abstraction in the [Inheritance](https://www.w3schools.com/java/java_inheritance.asp) and [Abstraction](https://www.w3schools.com/java/java_abstract.asp) chapters |
| `transient`    | Attributes and methods are skipped when serializing the object containing them |
| `synchronized` | Methods can only be accessed by one thread at a time         |
| `volatile`     | The value of an attribute is not cached thread-locally, and is always read from the "main memory" |







List: ArrayList, LinkedList, Vector, 

Queue: PriorityQueue, LinkedList



ArrayList is a part of [**collection framework**](https://www.geeksforgeeks.org/collections-in-java-2/) and is present in java.util package. It provides us with dynamic arrays in Java. Though, it may be slower than standard arrays 

- ArrayList inherits [AbstractList](https://www.geeksforgeeks.org/abstractlist-in-java-with-examples/) class and implements [List interface](https://www.geeksforgeeks.org/list-interface-java-examples/).
- ArrayList is initialized by the size. However, the size is increased automatically if the collection grows or shrinks if the [objects](https://www.geeksforgeeks.org/classes-objects-java/) are removed from the collection.
- Java ArrayList allows us to randomly access the list.
- ArrayList can not be used for [primitive types](https://www.geeksforgeeks.org/data-types-in-java/), like int, char, etc. We need a [wrapper class](https://www.geeksforgeeks.org/wrapper-classes-java/) for such cases.
- ArrayList in Java can be seen as a [vector in C++](https://www.geeksforgeeks.org/vector-in-cpp-stl/).
- ArrayList is not Synchronized. Its equivalent synchronized class in Java is [Vector](https://www.geeksforgeeks.org/java-util-vector-class-java/).

```
// ArrayList
//Dynamic array
//Slower than standard arrays
```

- The Queue is used to insert elements at the end of the queue and removes from the beginning of the queue. It follows FIFO concept.
- The Java Queue supports all methods of Collection interface including insertion, deletion etc.
- [LinkedList](https://www.geeksforgeeks.org/linked-list-in-java/), ArrayBlockingQueue and [PriorityQueue](https://www.geeksforgeeks.org/priority-queue-class-in-java-2/) are the most frequently used implementations.
- If any null operation is performed on BlockingQueues, NullPointerException is thrown.
- The Queues which are available in java.util package are Unbounded Queues.
- The Queues which are available in java.util.concurrent package are the Bounded Queues.
- All Queues except the Deques supports insertion and removal at the tail and head of the queue respectively. The Deques support element insertion and removal at both ends.



[**. PriorityQueue:**](https://www.geeksforgeeks.org/priority-queue-class-in-java-2/) PriorityQueue class which is implemented in the collection framework provides us a way to process the objects based on the priority. It is known that a queue follows First-In-First-Out algorithm, but sometimes the elements of the queue are needed to be processed according to the priority, that’s when the PriorityQueue comes into play. Let’s see how to create a queue object using this class.



```
        List<Integer> l1 = new ArrayList<Integer>();

        l1.add(1);
        l1.add(1);
        l1.add(2);
        l1.add(3);
        l1.add(4);

        List<Integer> l2 = new ArrayList<Integer>();

        l1.add(4);
        l1.add(14);
        l1.add(14);

        for (int i=0; i<l1.size();i++){

            System.out.println(l1.get(i));
        }

        System.out.println("CHECKING THE WORKING");

        //ADDING ONE LIST TO ANOTHER, POSITION CAN BE SPECIFIED
        l1.addAll(1,l2);

        //CHECKS THE INDEX OF ELEMENT IN ARRAY
        System.out.println(l1.indexOf(4));

        //CHECKS THE LAST INDEX OF ELEMENT IN ARRAY
        System.out.println(l1.lastIndexOf(1));

        //ITERATING OVER IT
        Iterator<Integer> itr = l1.iterator();
        while(itr.hasNext()){
            System.out.println(itr.next());
        }

        //LIST ITERATOR
        try{
            ListIterator<Integer> itr1 = l1.listIterator(15);

            while (itr1.hasNext()){
                System.out.println(itr1.next() + " ");
            }
        }
        catch(Exception e){
            System.out.println("Exception: " + e);
        }

        //REMOVE()
        l1.add(10);
        l1.remove(8);

        //Sublist
        List<Integer> arrList2 = l1.subList(2,4);
        System.out.println(arrList2);
```

quicksort

```
        ///////////////////////////////////////////
        //QUEUES
        System.out.println("QUEUE");

        Queue<Integer> q = new LinkedList<>();

        for (int i =0; i <= 5; i++){

            q.add(i);
        }
        System.out.println("Initial Queue: " + q);

        //TO VIEW TOP(HEAD) ELEMENT
        int head = q.peek();
        System.out.println("Head is: " + head);

        //TO REMOVE TOP(HEAD) ELEMENT
        q.remove();
        System.out.println("After deleting: " + q);

        //
        q.poll();
        System.out.println("After Polling: " + q);

        //SIZE
        int size = q.size();
        System.out.println("Size of the queue is: " + size);

        //System.out.println("After Polling: " + q.element(););

        Queue<Integer> pq = new PriorityQueue<>();
        pq.add(5);
        pq.add(10);
        pq.add(10);
        pq.add(15);

        System.out.println("Initial priority queue is: " + pq);

        //ITERATING OVER THE QUEUE
        Iterator itr2 = pq.iterator();
        while(itr2.hasNext()){
            System.out.println(itr2.next());
        }

        //TO REMOVE FIRST ELEMENT
        pq.poll();
        System.out.println("After polling: " + pq);

        //TO REMOVE SPECIFIC ELEMENTS
        //pq.remove;
        System.out.println("after remove(): " + pq);

        System.out.println();
        System.out.println();
        System.out.println();System.out.println();

        int partition

    }
```

Quick Sort

```java
package starting;


import java.sql.Array;
import java.util.*;

public class QuickSort {
    public static void main(String[] args) {
        int i;
        int[] arr={90,23,101,45,65,23,67,89,34,23};
        quickSort(arr, 0, 9);
        System.out.println("\n The sorted array is: \n");
        for(i=0;i<10;i++)
            System.out.println(arr[i]);
    }
    public static int partition(int a[], int beg, int end)
    {

        int left, right, temp, loc, flag;
        loc = left = beg;
        right = end;
        flag = 0;
        while(flag != 1)
        {
            while((a[loc] <= a[right]) && (loc!=right))
                right--;
            if(loc==right)
                flag =1;
            else if(a[loc]>a[right])
            {
                temp = a[loc];
                a[loc] = a[right];
                a[right] = temp;
                loc = right;
            }
            if(flag!=1)
            {
                while((a[loc] >= a[left]) && (loc!=left))
                    left++;
                if(loc==left)
                    flag =1;
                else if(a[loc] <a[left])
                {
                    temp = a[loc];
                    a[loc] = a[left];
                    a[left] = temp;
                    loc = left;
                }
            }
        }
        return loc;
    }
    static void quickSort(int a[], int beg, int end)
    {

        int loc;
        if(beg<end)
        {
            loc = partition(a, beg, end);
            quickSort(a, beg, loc-1);
            quickSort(a, loc+1, end);
        }
    }
}


```





Searching List

```
package starting;


import java.sql.Array;
import java.util.*;

public class QuickSort {
    public static void main(String[] args) {

    int[] arr = {10, 23, 15, 8, 4, 3, 25, 30, 34, 2, 19};
    int item, flag = 0;
    Scanner sc = new Scanner(System.in);
    System.out.println("Enter item?");
    item = sc.nextInt();
    for (int i = 0; i< arr.length; i ++){

        if (arr[i] == item){

            flag = i+1;
            break;
        }
        else
            flag = 0;
    }
    if (flag != 0){
        System.out.println("Item found at location: " + flag);
    }
    else{
        System.out.println("Item not found.");
    }

    }
}


```

Binary List

```java
package starting;


import java.sql.Array;
import java.util.*;

public class QuickSort {
    public static void main(String[] args) {

        int[] arr = {16, 19, 20, 23, 45, 56, 78, 90, 96, 100};
        int item, location = -1;
        System.out.println("Enter the item which you want to search");
        Scanner sc = new Scanner(System.in);
        item = sc.nextInt();
        location = binarySearch(arr,0,9,item);
        if(location != -1)
            System.out.println("the location of the item is "+location);
        else
            System.out.println("Item not found");
    }
    public static int binarySearch(int[] a, int beg, int end, int item)
    {
        int mid;
        if(end >= beg)
        {
            mid = (beg + end)/2;
            if(a[mid] == item)
            {
                return mid+1;
            }
            else if(a[mid] < item)
            {
                return binarySearch(a,mid+1,end,item);
            }
            else
            {
                return binarySearch(a,beg,mid-1,item);
            }

        }
        return -1;
    }
}

```



# 

