w# Collections

<img src="https://www.programcreek.com/wp-content/uploads/2009/02/java-collection-hierarchy.jpeg?ezimgfmt=ng%3Awebp%2Fngcb12%2Frs%3Adevice%2Frscb12-1">

## ArrayList

Java **ArrayList** class uses a *dynamic [array](https://www.javatpoint.com/array-in-java)* for storing the elements. It is like an array, but there is *no size limit*. We can add or remove elements anytime. So, it is much more flexible than the traditional array. 

- Java ArrayList class can contain duplicate elements.
- Java ArrayList class maintains insertion order.
- Java ArrayList class is non [synchronized](https://www.javatpoint.com/synchronization-in-java).
- Java ArrayList allows random access because array works at the index basis.
- In ArrayList, manipulation is little bit slower than the LinkedList in Java because a lot of shifting needs to occur if any element is removed from the array list.
-  It's elements can be **accessed directly by using the get and set method**.
- **Note:** The default initial capacity of an ArrayList is pretty small. It is a good habit to construct the ArrayList with a higher initial capacity. This can avoid the resizing cost.

## LinkedList

- Java LinkedList class can contain duplicate elements.
- Java LinkedList class maintains insertion order.
- Java LinkedList class is non synchronized.
- In Java LinkedList class, manipulation is fast because no shifting needs to occur.
- Java LinkedList class can be used as a list, stack or queue.
- LinkedList implements Queue interface which adds more methods than ArrayList and Vector, such as offer(), peek(), poll(), etc.
- Its performance on **add and remove is better than Arraylist, but worse on get and set methods.**

Time Complexity: 

State Complexity: 

Functions

- linkedList.add();
- linkedList.remove("element");
- linkedList.remove(0);
- linkedList.removeAll(linkedList2);
- linkedList.removeFirst();
- linkedList.removeLast();
- linkedList.FirstOccurance();
- linkedList.clear();

Reverse List:

```
Iterator i=ll.descendingIterator();  
while(i.hasNext()){  
    System.out.println(i.next());  
}  
```

Printing LinkedList

```
    Book b1 = new Book("saad","saad", 500);
    Book b2 = new Book("harry potter", "jkrowling", 700);

    LinkedList<Book> bookList = new LinkedList<>();

    bookList.add(b1);
    bookList.add(b2);


    for (Book book: bookList){
        System.out.println("Book: " + book.name + " Author Name " + book.author + " Book Pages: " + book.pages);
    }
```

Differences between LinkedList and ArrayList

| ArrayList                                                    | LinkedList                                                   |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| 1) ArrayList internally uses a **dynamic array** to store the elements. | LinkedList internally uses a **doubly linked list** to store the elements. |
| 2) Manipulation with ArrayList is **slow** because it internally uses an array. If any element is removed from the array, all the bits are shifted in memory. | Manipulation with LinkedList is **faster** than ArrayList because it uses a doubly linked list, so no bit shifting is required in memory. |
| 3) An ArrayList class can **act as a list** only because it implements List only. | LinkedList class can **act as a list and queue** both because it implements List and Deque interfaces. |
| 4) ArrayList is **better for storing and accessing** data.   | LinkedList is **better for manipulating** data.              |

<img src = "https://www.programcreek.com/wp-content/uploads/2013/03/arraylist-vs-linkedlist-complexity.png">

- ArrayList has O(n) time complexity for arbitrary indices of add/remove, but O(1) for the operation at the end of the list.
- LinkedList has O(n) time complexity for arbitrary indices of add/remove, but O(1) for operations at end/beginning of the List.

Converting from Array to List

```java
//Printing array
String[] arr = {"Apple", "Banana"};
System.out.println("Printing array: " + Arrays.toString(arr));

List<String> list = new ArrayList<>();
for(String fruit: arr){
  list.add(fruit);
}
System.out.println("Printing List: " + list);

```

Converting from List to Array

```java
List<String> fruitList = new ArrayList<>();
fruitList.add("Apple");
fruitList.add("Mango");

String[] array = fruitList.toArray(new String[fruitList.size()]);
System.otu.println(Arrays.toString(array));
```

Functions

- list.get(1);
- list.set(2, "Mango");

Sorting List

```java
List<Integer> l1 = new ArrayList<>();
l1.add(23);
l1.add(54);
Collection.sort(l1);
System.out.println(l1);
```

Iterating over a list

```java
List<String> al=new ArrayList<String>();    
        al.add("Amit");    
        al.add("Vijay");    
        al.add("Kumar");    
        al.add(1,"Sachin");    
        ListIterator<String> itr=al.listIterator();    

        while(itr.hasNext()){         
        System.out.println("index:"+itr.nextIndex()+" value:"+itr.next()); 
        
//Reverse Direction
                while(itr.hasPrevious()){    
          
        System.out.println("index:"+itr.previousIndex()+" value:"+itr.previous());    
        }    
```

| ArrayList                                                    | **Vector**                                                   |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| Array List is not synchronized.                              | Vector is synchronized.                                      |
| Array List is fast as it’s non-synchronized.                 | Vector is slow as it is thread safe.                         |
| If an element is inserted into the Array List, it increases its Array size by 50%. | Vector defaults to doubling size of its array.               |
| Array List does not define the increment size.               | Vector defines the increment size.                           |
| Array List can only use Iterator for traversing an Array List. | Vector can use both Enumeration and Iterator for traversing. |

## HashSet

Java HashSet class is used to create a collection that uses a hash table for storage. It inherits the AbstractSet class and implements Set interface.

The important points about Java HashSet class are:

- HashSet stores the elements by using a mechanism called **hashing.**
- HashSet contains unique elements only & duplicates will be removed automatically.
- HashSet allows null value.
- HashSet class is non synchronized.
- HashSet doesn't maintain the insertion order. Here, elements are inserted on the basis of their hashcode.
- HashSet is the best approach for search operations.
- The initial default capacity of HashSet is 16, and the load factor is 0.75.
- **A list can contain duplicate elements whereas Set contains unique elements only.**
- Elements are not ordered. **The add, remove, and contains methods have constant time complexity O(1).**

Functions

- add()
- addAll()
- remove()
- removeAll()
- removeIf(str-> str.contains("lol"))
- clear()

```java
HashSet<Integer> hs1 = new HashSet<>();
```

## LinkedHashSet

Java LinkedHashSet class is a Hashtable and Linked list implementation of the set interface. It inherits HashSet class and implements Set interface.

The important points about Java LinkedHashSet class are:

- Java LinkedHashSet class contains unique elements only like HashSet.
- Java LinkedHashSet class provides all optional set operation and permits null elements.
- Java LinkedHashSet class is non synchronized.
- **The time complexity of basic methods is O(1).**

**HashSet** is *unordered* and *unsorted* Set.
**LinkedHashSet** is the *ordered version* of HashSet. The underlying used data structure is **Doubly-Linked-List**.

Same functions as HashSet.

```java
LinkedHashSet<Integer> set1 = new LinkedHashSet<>();
```

## TreeSet

Java TreeSet class implements the Set interface that uses a tree for storage. It inherits AbstractSet class and implements the NavigableSet interface. The objects of the TreeSet class are stored in ascending order.

The important points about Java TreeSet class are:

- Java TreeSet class contains unique elements only like HashSet.
- Java TreeSet class access and retrieval times are quiet fast.
- Java TreeSet class doesn't allow null element.
- Java TreeSet class is non synchronized.
- Java TreeSet class maintains ascending order.
- **The elements in a set are sorted, but the add, remove, and contains methods has time complexity of O(log (n))**
- It offers several methods to deal with the ordered set like first(), last(), headSet(), tailSet(),

TreeSet class implements the NavigableSet interface. The NavigableSet interface extends SortedSet, Set, Collection and Iterable interfaces in hierarchical order.

Functions

- pollFirst(): Removes the first element
- pollLast(): Removes the last element
- headSet(int: 3, inclusive: true): Used as a limit setter for a tree set
- subSet("A", false, "E",true): Return a subset of the existing TreeSet within a range mentioned in the parameter.
- tailSet("C", false):  used to set a point of start for a tree set

## Queue

Java Queue interface orders the element in FIFO(First In First Out) manner. In FIFO, first element is removed first and last element is removed at last.

**Priority Queue**

The PriorityQueue class provides the facility of using queue. But it does not orders the elements in FIFO manner. It inherits AbstractQueue class.

The elements in PriorityQueue must be of Comparable type. String and Wrapper classes are Comparable by default. To add user-defined objects in PriorityQueue, you need to implement Comparable interface.

**Insertion order isnt maintained**. Orders it in asscending manner for integers.

- PriorityQueue doesn’t permit null.
- We can’t create PriorityQueue of Objects that are non-comparable
- PriorityQueue are unbound queues.
- The head of this queue is the least element with respect to the specified ordering. If multiple elements are tied for least value, the head is one of those elements — ties are broken arbitrarily.
- Since PriorityQueue is not thread-safe, so java provides [PriorityBlockingQueue](https://www.geeksforgeeks.org/priorityblockingqueue-class-in-java/#:~:text=PriorityBlockingQueue is an unbounded blocking,and supplies blocking retrieval operations.&text=PriorityBlockingQueue class and its iterator,the Collection and Iterator interfaces.) class that implements the [BlockingQueue](https://www.geeksforgeeks.org/blockingqueue-interface-in-java/#:~:text=Methods in Blocking Queue Interface&text=Removes all available elements from,them to the given collection.&text=Removes at most the given,them to the given collection.) interface to use in java multithreading environment.
- The queue retrieval operations poll,  remove,  peek, and element access the element at the head of the queue.
- It provides O(log(n)) time for add and poll methods.

PriorityQueue(): Creates with the default initial capacity (11) using their natural order.

We can access only the head of the queue.

- **boolean add(E element):** This method inserts the specified element into this priority queue.
- **public peek()**: This method retrieves, but does not remove, the head of this queue, or returns null if this queue is empty.
- **public poll():** This method retrieves and removes the head of this queue, or returns null if this queue is empty.

## Map Interface

A map contains values on the basis of key, i.e. key and value pair. Each key and value pair is known as an entry. A Map contains unique keys.

A Map is useful if you have to search, update or delete elements on the basis of a key.

There are two interfaces for implementing Map in java: Map and SortedMap, and three classes: HashMap, LinkedHashMap, and TreeMap.

There are two interfaces for implementing Map in java: Map and SortedMap, and three classes: HashMap, LinkedHashMap, and TreeMap.

<img src = "https://static.javatpoint.com/images/core/java-map-hierarchy.png" width="600" height="300">



- A Map doesn't allow duplicate keys, but you can have duplicate values. 
- HashMap and LinkedHashMap allow null keys and values, but TreeMap doesn't allow any null key or value.
- **A Map can't be traversed, so you need to convert it into Set using *keySet()* or *entrySet()* method.**

| Class                                                        | Description                                                  |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [HashMap](https://www.javatpoint.com/java-hashmap)           | HashMap is the implementation of Map, but it doesn't maintain any order. |
| [LinkedHashMap](https://www.javatpoint.com/java-linkedhashmap) | LinkedHashMap is the implementation of Map. It inherits HashMap class. It maintains insertion order. |
| [TreeMap](https://www.javatpoint.com/java-treemap)           | TreeMap is the implementation of Map and SortedMap. It maintains ascending order. |



Functions

Traversing a map

```
for (Map.Entry m:map.entrySet()){
    System.out.println(m.getKey() + " " + m.getValue());
}
```

Arranging by key or value

```
        Map<Integer, String> map = new HashMap<>();
        Map<Integer, String> map = new HashMap<>();

        map.put(100, "Amit");
        map.put(132, "Saad");
        map.put(123, "Sameer");

        //Ascending Order comparingByKey()
        map.entrySet().stream().sorted(Map.Entry.comparingByKey())
                .forEach(System.out::println);

        //Descending Order comparingByKey()
        map.entrySet().stream().sorted(Map.Entry.comparingByKey(Comparator.reverseOrder()))
                .forEach(System.out::println);

        //Ascending Order comparingByValue()
        map.entrySet().stream().sorted(Map.Entry.comparingByValue())
                .forEach(System.out::println);

        //Descending Order comparingByValue()
        map.entrySet().stream().sorted(Map.Entry.comparingByKey(Comparator.reverseOrder()))
                .forEach(System.out::println);

    }
```

## HashMap

**HashMap** class implements the Map interface which allows us *to store key and value pair*, where keys should be unique. If you try to insert the duplicate key, it will replace the element of the corresponding key. It is easy to perform operations using the key index like updation, deletion, etc.

- Java HashMap contains values based on the key.
- Java HashMap contains **only unique keys**.
- Java HashMap may have one null key and multiple null values.
- Java HashMap is non synchronized.
- Java HashMap maintains **no order**.
- The initial default capacity of Java HashMap class is 16 with a load factor of 0.75.

Functions

- put(): Insert elements in map
- putIfAbsent(key, "Value"): If key not present then add to map
- putAll(anotherMap): Add one map to another
- replace(key, "newValue"): Replaces it with new value for a given key
- replaceAll((k,v) -> "Ajay"): Replaces all values with given
- remove(key): Remove by key
- remove(value): Remove by value
- remove(key, value): Remove by key & value
- getKey(): To get keys
- getValue(): To get values
- entrySet(): Method of Map interface to get the instance of Map.Entry.

Iterating in HashMap

```java
    for (Map.Entry m: map.entrySet()){
        System.out.println(m.getKey() + " " + m.getValue());
    }
```



#### Working of HashMap

**Hashing:** It is the process of converting an object into an integer value. The integer value helps in indexing and faster searches.

HashMap contains an array of the nodes, and the node is represented as a class. It uses an array and LinkedList data structure internally for storing Key and Value. There are four fields in HashMap.

- **equals():** It checks the equality of two objects. It compares the Key, whether they are equal or not. It is a method of the Object class. It can be overridden. If you override the equals() method, then it is mandatory to override the hashCode() method.
- **hashCode():** This is the method of the object class. It returns the memory reference of the object in integer form. The value received from the method is used as the bucket number. The bucket number is the address of the element inside the map. Hash code of null Key is 0.
- **Buckets:** Array of the node is called buckets. Each node has a data structure like a LinkedList. More than one node can share the same bucket. It may be different in capacity.

The default size of HashMap is 16 (0 to 15).

put() method, then it calculates the hash code of the Key "Aman." Suppose the hash code of "Aman" is 2657860. To store the Key in memory, we have to calculate the index.

#### Calculating Index

Index minimizes the size of the array. The Formula for calculating the index is:

```Index = hashcode(Key) & (n-1) 
Index = hashcode(Key) & (n-1)  
```

Where n is the size of the array. Hence the index value for "Aman" is:

```Index = 2657860 & (16-1) = 4 
Index = 2657860 & (16-1) = 4  
```

The value 4 is the computed index value where the Key and value will store in HashMap.

#### Hash Collision

This is the case when the calculated index value is the same for two or more Keys. Let's calculate the hash code for another Key "Sunny." Suppose the hash code for "Sunny" is 63281940. To store the Key in the memory, we have to calculate index by using the index formula.

```Index=63281940 & (16-1) = 4 
Index=63281940 & (16-1) = 4  

```

The value 4 is the computed index value where the Key will be stored in HashMap. In this case, equals() method check that both Keys are equal or not. If Keys are same, replace the value with the current value. Otherwise, connect this node object to the existing node object through the LinkedList. Hence both Keys will be stored at index 4.

<img src = "https://static.javatpoint.com/images/core/working-of-hashmap-in-java4.png">

#### get() method in HashMap

get() method is used to get the value by its Key. It will not fetch the value if you don't know the Key. When get(K Key) method is called, it calculates the hash code of the Key.

Suppose we have to fetch the Key "Aman." The following method will be called.

```java
map.get(new Key("Aman")); 
```

It generates the hash code as 2657860. Now calculate the index value of 2657860 by using index formula. The index value will be 4, as we have calculated above. get() method search for the index value 4. It compares the first element Key with the given Key. If both keys are equal, then it returns the value else check for the next element in the node if it exists. In our scenario, it is found as the first element of the node and return the value 19.

Let's fetch another Key "Sunny."

The hash code of the Key "Sunny" is 63281940. The calculated index value of 63281940 is 4, as we have calculated for put() method. Go to index 4 of the array and compare the first element's Key with the given Key. It also compares Keys. In our scenario, the given Key is the second element, and the next of the node is null. It compares the second element Key with the specified Key and returns the value 29. It returns null if the next of the node is null.

## LinkedHashMap

Java LinkedHashMap class is Hashtable and Linked list implementation of the Map interface, with predictable iteration order. It inherits HashMap class and implements the Map interface.

- Java LinkedHashMap contains values based on the key.
- Java LinkedHashMap contains **unique elements.**
- Java LinkedHashMap may have one null key and multiple null values.
- Java LinkedHashMap is non synchronized.
- Java LinkedHashMap maintains **insertion order.**
- The initial default capacity of Java HashMap class is 16 with a load factor of 0.75.

Functions

- keySet(): Return key sets
- values(): Return the value sets
- entrySet(): Return key and value set
- remove(key): Returns the value for the given key

Iterating over a Object

```java
package starting;

import java.util.*;

public class QuickSort {
    public static void main(String[] args) {

        LinkedHashMap<Integer, Book> map = new LinkedHashMap<>();

        Book b1=new Book(101,"Let us C","Yashwant Kanetkar","BPB",8);
        Book b2=new Book(102,"Data Communications & Networking","Forouzan","Mc Graw Hill",4);
        Book b3=new Book(103,"Operating System","Galvin","Wiley",6);

        map.put(2, b2);
        map.put(1, b1);
        map.put(3, b3);

        for(Map.Entry<Integer,Book> entry: map.entrySet()){

            int key = entry.getKey();
            Book b = entry.getValue();
            System.out.println(key + "Details");
            System.out.println(b.id + " " + b.name + " " + b.author + " " + b.publisher + " " + b.quantity);
        }
    }
}

class Book {

    int id;
    String name, author, publisher;
    int quantity;

    Book(int id, String name, String author, String publisher, int quantity) {

        this.id = id;
        this.name = name;
        this.author = author;
        this.publisher = publisher;
        this.quantity = quantity;

    }
}
```

## TreeMap

It provides an efficient means of storing key-value pairs in sorted order.

The important points about Java TreeMap class are:

- Java TreeMap contains values based on the key. It implements the NavigableMap interface and extends AbstractMap class.
- Java TreeMap contains only unique elements.
- Java TreeMap cannot have a null key but can have multiple null values.
- Java TreeMap is non synchronized.
- Java TreeMap maintains ascending order.

**Functions**

- put(): Adds key value pair to tree
- remove(): Removes key value pair
- descendingKeySet(): Returns key in descending order
- descendingMap(): Return key value pair in descending order
- headMap(102,true): Returns key-value pairs whose keys are less than the specified key.
- tailMap(102,true): Returns key-value pairs whose keys are greater than or equal to the specified key.
- subMap(100, false, 102, true): Returns key-value pairs exists in between the specified key

| HashMap                              | TreeMap                              |
| :----------------------------------- | :----------------------------------- |
| 1) HashMap can contain one null key. | TreeMap cannot contain any null key. |
| 2) HashMap maintains no order.       | TreeMap maintains ascending order.   |

Transvering through a map

```
for(Map.Entry<Integer, Book> m: map.entrySet()){

    int k = m.getKey();
    Book b = m.getValue();

    System.out.println("Key value: " + k + " Book value: " + b.id + " | " + b.name + " | " + b.author + " | " + b.publisher + " | " + b.quantity);
```

## Java HashTable

Java Hashtable class implements a hashtable, which maps keys to values. It inherits Dictionary class and implements the Map interface.

- A Hashtable is an array of a list. Each list is known as a bucket. The position of the bucket is identified by calling the hashcode() method. A Hashtable contains values based on the key.
- Java Hashtable class contains unique elements.
- Java Hashtable class doesn't allow null key or value.
- Java Hashtable class is synchronized.
- The initial default capacity of Hashtable class is 11 whereas loadFactor is 0.75.

Functions

- put(): Adds key value pair
- remove(): Removes key value pair
- getOrDefault(key, "default"): If key not present then return with default
- putIfAbsent(key, "Value"): if key value pair exists then returns the current value, if the key value pair doesnt exist return updated pair

HashMap and Hashtable both are used to store data in key and value form. Both are using hashing technique to store unique keys.

| HashMap                                                      | Hashtable                                                    |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| 1) HashMap is **non synchronized**. It is not-thread safe and can't be shared between many threads without proper synchronization code. | Hashtable is **synchronized**. It is thread-safe and can be shared with many threads. |
| 2) HashMap **allows one null key and multiple null values**. | Hashtable **doesn't allow any null key or value**.           |
| 3) HashMap is a **new class introduced in JDK 1.2**.         | Hashtable is a **legacy class**.                             |
| 4) HashMap is **fast**.                                      | Hashtable is **slow**.                                       |
| 5) We can make the HashMap as synchronized by calling this code Map m = Collections.synchronizedMap(hashMap); | Hashtable is internally synchronized and can't be unsynchronized. |
| 6) HashMap is **traversed by Iterator**.                     | Hashtable is **traversed by Enumerator and Iterator**.       |
| 7) Iterator in HashMap is **fail-fast**.                     | Enumerator in Hashtable is **not fail-fast**.                |
| 8) HashMap inherits **AbstractMap** class.                   | Hashtable inherits **Dictionary** class.                     |

## EnumSet

Java EnumSet class is the specialized Set implementation for use with enum types. It inherits AbstractSet class and implements the Set interface.

Declaring enum

```java
enum days{
    SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY
}
```

```java
        Set<days> set = EnumSet.of(days.TUESDAY, days.THURSDAY);

        Iterator<days> iter = set.iterator();
        while(iter.hasNext()){
            System.out.println(iter.next());
        }
```

To print all/none the enum values

```java
        Set<days> set1 = EnumSet.allOf(days.class);
        System.out.println("Week Days:"+set1);

        Set<days> set2 = EnumSet.noneOf(days.class);
        System.out.println("Week Days:"+set2);
```

## EnumMap

Java EnumMap class is the specialized Map implementation for enum keys. It inherits Enum and AbstractMap classes.

| Method | Description                                                  |                                                              |
| :----- | :----------------------------------------------------------- | ------------------------------------------------------------ |
| 1      | [clear()](https://www.javatpoint.com/post/java-enummap-clear-method) | It is used to clear all the mapping from the map.            |
| 2      | [clone()](https://www.javatpoint.com/post/java-enummap-clone-method) | It is used to copy the mapped value of one map to another map. |
| 3      | [containsKey()](https://www.javatpoint.com/post/java-enummap-containskey-method) | It is used to check whether a specified key is present in this map or not. |
| 4      | [containsValue()](https://www.javatpoint.com/post/java-enummap-containsvalue-method) | It is used to check whether one or more key is associated with a given value or not. |
| 5      | [entrySet()](https://www.javatpoint.com/post/java-enummap-entryset-method) | It is used to create a set of elements contained in the EnumMap. |
| 6      | [equals()](https://www.javatpoint.com/post/java-enummap-equals-method) | It is used to compare two maps for equality.                 |
| 7      | [get()](https://www.javatpoint.com/post/java-enummap-get-method) | It is used to get the mapped value of the specified key.     |
| 8      | [hashCode()](https://www.javatpoint.com/post/java-enummap-hashcode-method) | It is used to get the hashcode value of the EnumMap.         |
| 9      | [keySet()](https://www.javatpoint.com/post/java-enummap-keyset-method) | It is used to get the set view of the keys contained in the map. |
| 10     | [size()](https://www.javatpoint.com/post/java-enummap-size-method) | It is used to get the size of the EnumMap.                   |
| 11     | [Values()](https://www.javatpoint.com/post/java-enummap-values-method) | It is used to create a collection view of the values contained in this map. |
| 12     | [put()](https://www.javatpoint.com/post/java-enummap-put-method) | It is used to associate the given value with the given key in this EnumMap. |
| 13     | [putAll()](https://www.javatpoint.com/post/java-enummap-putall-method) | It is used to copy all the mappings from one EnumMap to a new EnumMap. |
| 14     | [remove()](https://www.javatpoint.com/post/java-enummap-remove-method) | It is used to remove the mapping for the given key from EnumMap if the given key is present. |

Enum Example

```java
    public enum Days{
        SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY
    }

    public static void main(String[] args) {

        EnumMap<Days, String> map = new EnumMap<Days, String>(Days.class);

        map.put(Days.MONDAY, "1");
        map.put(Days.MONDAY, "1");
        map.put(Days.TUESDAY, "2");
        map.put(Days.WEDNESDAY, "3");
        map.put(Days.THURSDAY, "4");

        for (Map.Entry m: map.entrySet()){

            System.out.println(m.getKey() + " | " + m.getValue());
        }
```

Book Enum Map Example

```java
package starting;

import java.util.*;

class Book {
    int id;
    String name,author,publisher;
    int quantity;
    public Book(int id, String name, String author, String publisher, int quantity) {
        this.id = id;
        this.name = name;
        this.author = author;
        this.publisher = publisher;
        this.quantity = quantity;
    }
}

public class QuickSort {


    public enum Keys{ One, Two, Three};

    public static void main(String[] args) {

        EnumMap<Keys, Book> map = new EnumMap<Keys, Book>(Keys.class);

        Book b1=new Book(101,"Let us C","Yashwant Kanetkar","BPB",8);
        Book b2=new Book(102,"Data Communications & Networking","Forouzan","Mc Graw Hill",4);
        Book b3=new Book(103,"Operating System","Galvin","Wiley",6);

        map.put(Keys.One, b1);
        map.put(Keys.Two, b2);
        map.put(Keys.Three, b3);

        for (Map.Entry<Keys, Book> m: map.entrySet()){

            Keys k = m.getKey();
            Book b = m.getValue();
            System.out.println(k);

            System.out.println(b.id+" "+b.name+" "+b.author+" "+b.publisher+" "+b.quantity);
        }

    }
}
```

## Collections Class

Java collection class is used exclusively with static methods that operate on or return collections. It inherits Object class.

- Java Collection class supports the **polymorphic algorithms** that operate on collections.
- Java Collection class throws a **NullPointerException** if the collections or class objects provided to them are null.

Functions

- Collections.add(): Adds elements to list or array
- Collections.addAll(list, "element 1", "element 2")
- Collections.addAll(list, list1)
- Collections.max(list)
- Collections.min(list)

```
List<String> list = new ArrayList<>();
list.add("C");
list.add("D");
System.out.println("Printing list items: " + list);

String[] strArr = {"C++", "JAVA"};

Collections.addAll(list, "HEllo", "BOY");

Collections.addAll(list, strArr);
System.out.println("Printing list collection items: " + list);
```

## Sorting in Collection

We can sort the elements of:

1. String objects
2. Wrapper class objects
3. User-defined class objects

**Collections** class provides static methods for sorting the elements of a collection. If collection elements are of a Set type, we can use TreeSet. However, we cannot sort the elements of List. Collections class provides methods for sorting the elements of List type elements.

- Collections.sort(): Sorting String Objects

- Collections.sort(l, Collections.reverseOrder());

  ```java
         //Sorting
          Collections.sort(l);
  
          //Reverse Sorting
          Collections.sort(l, Collections.reverseOrder());
  
          Iterator itr = l.iterator();
          while(itr.hasNext()){
              System.out.println(itr.next());
          }
  
  ```

**Example to sort Wrapper class objects**

```
al.add(Integer.valueOf(201));  
al.add(Integer.valueOf(101));  
al.add(230);//internally will be converted into objects as Integer.valueOf(230)  
  
Collections.sort(al);  
```

### Example to sort user-defined class objects

```java
public class QuickSort {
    public static void main(String[] args) {
        ArrayList<Student> al=new ArrayList<Student>();
        al.add(new Student("Viru"));
        al.add(new Student("Saurav"));
        al.add(new Student("Mukesh"));
        al.add(new Student("Tahir"));

        Collections.sort(al);
        for (Student s : al) {
            System.out.println(s.name);
        }
    }
}

class Student implements Comparable<Student>{
    public String name;

    public Student(String name){
        this.name = name;

    }

    public int compareTo(Student person){
        return name.compareTo(person.name);
    }

}

```

## Comparable Interface

Java Comparable interface is used to order the objects of the user-defined class. This interface is found in java.lang package and contains only one method named compareTo(Object). It provides a single sorting sequence only, i.e., you can sort the elements on the basis of single data member only. For example, it may be rollno, name, age or anything else.

### compareTo(Object obj) method

**public int compareTo(Object obj):** It is used to compare the current object with the specified object. It returns

- positive integer, if the current object is greater than the specified object.
- negative integer, if the current object is less than the specified object.
- zero, if the current object is equal to the specified object.

We can sort the elements of:

1. String objects
2. Wrapper class objects
3. User-defined class objects

### Collections class

**Collections** class provides static methods for sorting the elements of collections. If collection elements are of Set or Map, we can use TreeSet or TreeMap. However, we cannot sort the elements of List. Collections class provides methods for sorting the elements of List type elements.

### Method of Collections class for sorting List elements

**public void sort(List list):** It is used to sort the elements of List. List elements must be of the Comparable type.

#### Note: String class and Wrapper classes implement the Comparable interface by default. So if you store the objects of string or wrapper classes in a list, set or map, it will be Comparable by default.

Sorting on rollno

```java
import java.util.*;

public class QuickSort{
    public static void main(String[] args) {

        ArrayList<Student> al = new ArrayList<Student>();

        al.add(new Student(101,"Vijay",23));
        al.add(new Student(106,"Ajay",27));
        al.add(new Student(105,"Jai",21));

        Collections.sort(al, Collections.reverseOrder());

        for(Student student: al){
            System.out.println(student.rollno + " | " + student.name + " | " + student.age);

        }
    }
}

class Student implements Comparable<Student>{

    int rollno;
    String name;
    int age;
    Student (int rollno, String name, int age){

        this.rollno = rollno;
        this.name = name;
        this.age = age;
      
    }

    public int compareTo(Student st){

        if (age==st.age)
            return 0;
        else if (age > st.age)
            return 1;
        else
            return -1;

    }
}
```

For reverse order

```java
    public int compareTo(Student st){
        if(age==st.age)
            return 0;
        else if(age<st.age)
            return 1;
        else
            return -1;
    }
}    

or use
  Collections.sort(al, Collections.reverseOrders);
```

## Comparator Interface

**Java Comparator interface** is used to order the objects of a user-defined class.

This interface is found in java.util package and contains 2 methods compare(Object obj1,Object obj2) and equals(Object element).

It provides multiple sorting sequences, i.e., you can sort the elements on the basis of any data member, for example, rollno, name, age or anything else.

| Method                                       | Description                                                  |
| :------------------------------------------- | :----------------------------------------------------------- |
| public int compare(Object obj1, Object obj2) | It compares the first object with the second object.         |
| public boolean equals(Object obj)            | It is used to compare the current object with the specified object. |
| public boolean equals(Object obj)            | It is used to compare the current object with the specified object. |

#### Collections class

**Collections** class provides static methods for sorting the elements of a collection. If collection elements are of Set or Map, we can use TreeSet or TreeMap. However, we cannot sort the elements of List. Collections class provides methods for sorting the elements of List type elements also.

#### Method of Collections class for sorting List elements

**public void sort(List list, Comparator c):** is used to sort the elements of List by the given Comparator.

```
package starting;

import java.util.*;

public class QuickSort {
    public static void main(String[] args) {

        List<Student> l = new LinkedList<>();

        l.add(new Student(101, "Vijay", 23));
        l.add(new Student(106, "Ajay", 27));
        l.add(new Student(105, "Jai", 21));

        System.out.println("Sorting by name");
        //Sorting by Name
        Collections.sort(l, new NameComparator());
        for (Student s1:l) {
            System.out.println(s1.rollno + " " + s1.name + " " + s1.age);
        }

        System.out.println("Sorting by age");
        //Sorting by age
        Collections.sort(l, new AgeComparator());
        for (Student s1:l) {
            System.out.println(s1.rollno + " " + s1.name + " " + s1.age);
        }

        System.out.println("Sorting by rollno");
        //Sorting by rollno
        Collections.sort(l, new RollnoComparator());
        for (Student s1:l) {
            System.out.println(s1.rollno + " " + s1.name + " " + s1.age);
        }
    }
}

class Student {

    int rollno;
    String name;
    int age;
    Student (int rollno, String name, int age){

        this.rollno = rollno;
        this.name = name;
        this.age = age;

    }

}

class AgeComparator implements Comparator<Student>{

    public int compare(Student s1, Student s2){

        if (s1.age == s2.age)
            return 0;
        else if (s1.age > s2.age)
            return 1;
        else
            return -1;

    }
}

class NameComparator implements Comparator<Student>{

    public int compare(Student s1, Student s2){

        return s1.name.compareTo(s2.name);
    }
}

class RollnoComparator implements Comparator<Student>{

    public int compare(Student s1, Student s2){

        if (s1.rollno == s2.rollno)
            return 0;
        else if (s1.rollno > s2.rollno)
            return 1;
        else
            return -1;
    }
}
```

## ArrayList vs Vector 

| ArrayList                                                    | Vector                                                       |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| 1) ArrayList is **not synchronized**.                        | Vector is **synchronized**.                                  |
| 2) ArrayList **increments 50%** of current array size if the number of elements exceeds from its capacity. | Vector **increments 100%** means doubles the array size if the total number of elements exceeds than its capacity. |
| 3) ArrayList is **not a legacy** class. It is introduced in JDK 1.2. | Vector is a **legacy** class.                                |
| 4) ArrayList is **fast** because it is non-synchronized.     | Vector is **slow** because it is synchronized, i.e., in a multithreading environment, it holds the other threads in runnable or non-runnable state until current thread releases the lock of the object. |
| 5) ArrayList uses the **Iterator** interface to traverse the elements. | A Vector can use the **Iterator** interface or **Enumeration** interface to traverse the elements. |

```java
 public static void main(String args[]){    
     
  List<String> al=new ArrayList<String>();//creating arraylist    
  al.add("Sonoo");//adding object in arraylist    
  al.add("Michael");    
  al.add("James");    
  al.add("Andy");    
  //traversing elements using Iterator  
  Iterator itr=al.iterator();  
  while(itr.hasNext()){  
   System.out.println(itr.next());  
  }    
 }    
```

```java
  Vector<String> v=new Vector<String>();//creating vector  
  v.add("umesh");//method of Collection  
  v.addElement("irfan");//method of Vector  
  v.addElement("kumar");  
  //traversing elements using Enumeration  
  Enumeration e=v.elements();  
  while(e.hasMoreElements()){  
   System.out.println(e.nextElement());  
  }  
 }      

```

## Java Vector

**Vector** is like the *dynamic array* which can grow or shrink its size. Unlike array, we can store n-number of elements in it as there is no size limit. It is a part of Java Collection framework since Java 1.2. It is found in the java.util package and implements the *List* interface, so we can use all the methods of List interface here.

- Vector is synchronized.
- Java Vector contains many legacy methods that are not the part of a collections framework.

```
          Vector<String> vec = new Vector<String>();  
```

Functions

- add("Tom"): Adding elements using add() method of List 
- addElement("Rat"): Adding elements using addElement() method of Vector
- size(): Check size 
- capacity(): Check capacity
- contains("Tiger"): Checking if Tiger is present or not in this vector 
- remove((Integer)200): method to delete the first occurence of an element 
- remove(4)): Remove the element at index 4 
- in.removeElementAt(5): Remove an element     
- hashCode(): Get the hashcode for this vector
- get(1): Get the element at specified index 
- 
- 
- 

```sql

```



