**How to check if a variable is a string**

The `isinstance` function takes two arguments. The first is your variable. The second is the type you want to check for.

```
>>> var = "a string"
>>> isinstance(var, str)
True
```

```
if type(var) == str:
    print("it's a string!")
```



Division always returns a oating point number.

The // operator per-
forms integer (oor) division and the / operator performs

5.8. INTEGER DIVISION 73oat (true) division. An example for oor division is 50
// 11 = 4. An example for true division is 50 / 11 =4.545454545454546.





```
x = sum(range(0,5, 2))
print(x)
```

```
# Slicing overshooting is fine
word = "galaxy"
print(word[4:50])
```

```
Modulo is your friend here: sim-
ply use the fact that for every thousandth iteration, the

result of i%1000 is zero.
51 % 3 = 0
```



Slicing

```
word = "galaxy"
print(word[:-2] + word[-2:])
```

Arbitary Arguments

```
def func(a, *args):
print(a)
for arg in args:
print(arg)
func("A", "B", "C")
```

Loops

```
words = ['cat', 'mouse']
for word in words:
    print(len(word))
```

```
def func(x):
return x + 1
f = func
print(f(2) + func(2))
```

Recursion

````python
def ping(i):
  if i > 0:
    return pong(i - 1)
  return "0"

def pong(i):
	if i > 0:
    return ping(i - 1)
	return "1"

print(ping(29))
````



Remove second occurane of element

```python
fruits = ["apple", "banana", "cherry", "banana"]

for i in range(0, len(fruits)-1):
    j=0
    if (fruits[i] == "banana"):
        j +=1
        if j == 2:
            del fruits[i]
            break

    print(fruits)

```

### Class

**Using pass**

```python
class Human():
    pass

employee = Human()
employee.height = "6ft"
employee.weight = 57
```

