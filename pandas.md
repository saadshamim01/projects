## Pandas

Pandas deals with 3 types of data:

1. Series
2. Dataframe
3. Panel

#### Series

It is 1d array like structure with homogenous data. Size of series is fixed, value are mutable.

- pandas.Series: 1D labelled array **SYNTAX: pandas.Series(data, index, dtype, copy)** . dtype: Checking the type


- Creating empty seriers

```
import pandas as pd
a = pd.Series()
print (a)
```

- Creating series from ndarray

```
import pandas as pd
import numpy as np
data = np.array(['a', 'b', 'c'])
s = pd.Series(data)
print (s)
```

- Creating series from dictionary

```
data = {'a': 0., 'b': 1., 'c': 2.}
s = pd.Series(data)
print (s)
```

- Basic Example

```
s = pd.Series([1,2,3,4,5],index = ['a','b','c','d','e'])
```

### Dataframe

It is a 2d data structure, used to store data in tabular form (rows & columns). Size and values mutable. Arithmetic perations can be performed.

**SYNTAX: pandas.DataFrame( data, index, columns, dtype, copy)**

- Creating empty Dataframe

  ```
  df = pd.DataFrame()
  print (df)
  ```

- Creating pandas using list

  ```
  data = [1, 2, 3, 4, 5]
  df = pd.DataFrame(data)
  ```

  ```
  data = [['Alex',10],['Bob',12],['Clarke',13]]
  df = pd.DataFrame(data,columns=['Name','Age'],dtype=float)
  ```

- Create dataframe using ndarrays and using index

  ```
  data = {'Name': ['Tom', 'Jack'], 'Age': [23, 25]}
  df = pd.DataFrame(data, index = ['rank1', 'rank2'])
  print (df)
  ```

- Column Selection Addition & Deletion

  ```
  d = {'one': pd.Series([1, 2, 3], index = ['a', 'b', c]),
  'two': pd.Series([1, 2, 3, 4], index = ['a', 'b', 'c', 'd'])}
  df = pd.DataFrame(d)
  
  ### Column Addition
  df['three'] = pd.Series([10, 20, 30], index = ['a', 'b', 'c'])
  
  df['four'] = pd.Series(['one'] + df['three'])
  
  ### Column Deletion
  del df ['one']
  print df
  
  df.pop('two')
  print(df)
  ```

- Row Selection Addition & Deletion

  ```
  df = pd.DataFrame([[1, 2], [3, 4]], columns = ['a','b'])
  df2 = pd.DataFrame([[5, 6], [7, 8]], columns = ['a','b'])
  
  ### Splicing of rows
  df = pd.DataFrame(d)
  
  ### Addition of rows
  df = df.append(df2)
  
  ### Deletion of rows
  df = df.drop(0)
  ```

  #### Panel

  



