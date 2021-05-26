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
import pandas as pd
data = [['Alex',10],['Bob',12],['Clarke',13]]
df = pd.DataFrame(data,columns=['Name','Age'],dtype=float)
```





