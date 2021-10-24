## Collections

Python has 4 collection data types: 

- **List**: A list is declared in square brackets, it is mutable, stores duplicate values and elements can be accessed using indexes.
- **Typle**: A tuple is ordered and immutable in nature, although duplicate entries can be there inside a tuple.
- **Sets**: A set is unordered and declared in square brackets. It is not indexed and does not have duplicate entries as well.
- **Dictionary**: A dictionary has key value pairs and is mutable in nature. We use square brackets to declare a dictionary.

It also has specialized data structures which basically covers for the shortcomings of the four data types:

---

**namedtuple( )**

- Returns a tuple with a named entry, which means there will be a name assigned to each value in the tuple.
- Overcomes the problem of accessing the elements using the index values. 
- With namedtuple( ) it becomes easier to access these values, since you do not have to remember the index values to get specific elements.

```python
from collection import namedtuple

a = namedtuple('name', 'age')
s = a('Tom', '23')
print(s)

# From List
s.make(['Tom', 23])
```

---

**deque**

-  optimized list to perform insertion and deletion easily.

```
from collection import deque

a = ['a', 'e', 'i', 'o', 'u'] 
a1 = deque(a)
print(a1)

# Insert operations
a1.append('a')
a1.appendLeft('e')

# Delete operations
a1.pop()
a1.popLeft()

```

**chainmap**



1. Counter
2. OrderedDict
3. defaultdict
4. UserDict
5. UserList
6. UserString

 