## What is SQL?

- SQL stands for Structured Query Language
- SQL lets you access and manipulate databases

Most Useful Commands

- `SELECT` - extracts data from a database
- `UPDATE` - updates data in a database
- `DELETE` - deletes data from a database
- `INSERT INTO` - inserts new data into a database
- `CREATE DATABASE` - creates a new database
- `ALTER DATABASE` - modifies a database
- `CREATE TABLE` - creates a new table
- `ALTER TABLE` - modifies a table
- `DROP TABLE` - deletes a table
- `CREATE INDEX` - creates an index (search key)
- `DROP INDEX` - deletes an index

#### Commands

**SELECT**

```sql
SELECT * FROM table_name;
```

**SELECT DISTINCT**

- Return only distinct (different) values.

```SQL
SELECT DISTINCT column1, column2, ...
FROM table_name;
```

**WHERE CLAUSE**

- Used to extract only those records that fulfill a specified condition

```sql
SELECT column1, column2, ...
FROM table_name
WHERE condition;

SELECT * FROM Customers
WHERE Country='Mexico';

SELECT * FROM Customers
WHERE CustomerID=1;
```

| Operator | Description                                                  |
| :------- | :----------------------------------------------------------- |
| =        | Equal                                                        |
| >        | Greater than                                                 |
| <        | Less than                                                    |
| >=       | Greater than or equal                                        |
| <=       | Less than or equal                                           |
| <>       | Not equal. **Note:** In some versions of SQL this operator may be written as != |
| BETWEEN  | Between a certain range                                      |
| LIKE     | Search for a pattern                                         |
| IN       | To specify multiple possible values for a column             |

**AND, OR and NOT**

The `WHERE` clause can be combined with `AND`, `OR`, and `NOT` operators.

The `AND` and `OR` operators are used to filter records based on more than one condition:

- The `AND` operator displays a record if all the conditions separated by `AND` are TRUE.
- The `OR` operator displays a record if any of the conditions separated by `OR` is TRUE.

The `NOT` operator displays a record if the condition(s) is NOT TRUE.

```sql
# AND
SELECT column1, column2, ...
FROM table_name
WHERE condition1 AND condition2 AND condition3 ...;

SELECT * FROM Customers
WHERE Country='Germany' AND Country='Spain';

# OR
SELECT column1, column2, ...
FROM table_name
WHERE condition1 OR condition2 OR condition3 ...;

SELECT * FROM Customers
WHERE City='Berlin' OR City='München';

# NOT
SELECT column1, column2, ...
FROM table_name
WHERE NOT condition; 

SELECT * FROM Customers
WHERE NOT Country='Berlin'
```

```sql
SELECT * FROM Customers
WHERE Country='Germany' AND (City='Berlin' OR City='München');
```

**ORDER BY**

The `ORDER BY` keyword is used to sort the result-set in ascending or descending order.

The `ORDER BY` keyword sorts the records in ascending order by default. To sort the records in descending order, use the `DESC` keyword.

```sql
SELECT column1, column2, ...
FROM table_name
ORDER BY column1, column2, ... ASC|DESC;

SELECT * FROM Customers
ORDER BY Country;


# This means that it orders by Country, but if some rows have the same Country, it orders them by CustomerName:

SELECT * FROM Customers
ORDER BY Country, CustomerName;

# Sorted ascending by the "Country" and descending by the "CustomerName" column:

SELECT * FROM Customers
ORDER BY Country ASC, CustomerName DESC;


```

#### **INSERT**

The `INSERT INTO` statement is used to insert new records in a table.

```sql
INSERT INTO *table_name* (*column1*, *column2*, *column3*, ...)
VALUES (*value1*, *value2*, *value3*, ...);

INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
VALUES ('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway');
```

###### **NULL**

It is not possible to test for NULL values with comparison operators, such as =, <, or <>.

We will have to use the `IS NULL` and `IS NOT NULL` operators instead.

```sql
SELECT column_names
FROM table_name
WHERE column_name IS NULL;

SELECT column_names
FROM table_name
WHERE column_name IS NOT NULL;
```

#### **UPDATE**

The `UPDATE` statement is used to modify the existing records in a table.

```sql
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;

UPDATE Customers
SET ContactName = 'Alfred Schmidt', City= 'Frankfurt'
WHERE CustomerID = 1;

UPDATE Customers
SET ContactName='Juan'
WHERE Country='Mexico';
```

#### **DELETE**

The `DELETE` statement is used to delete existing records in a table.

```sql
DELETE FROM table_name WHERE condition;
```

###### **TOP**

The `SELECT TOP` clause is used to specify the number of records to return.

```sql
SELECT column_name(s)
FROM table_name
WHERE condition
LIMIT number;

SELECT TOP 3 * FROM Customers;

SELECT * FROM Customers
LIMIT 3;
```

###### **TOP PERCENT**

Selects the first 50% of the records from the "Customers" table 

```sql
SELECT TOP 50 PERCENT * FROM Customers;
```

###### **TOP WHERE**

Select top where the condition is satisfied

```sql
SELECT * FROM Customers
WHERE Country='Germany'
LIMIT 3;
```

###### **MIN & MAX**

```sql
SELECT MIN(column_name)
FROM table_name
WHERE condition;

SELECT MIN(Price) AS SmallestPrice
FROM Products;

SELECT MAX(column_name)
FROM table_name
WHERE condition;

SELECT MAX(Price) AS LargestPrice
FROM Products;
```

#### COUNT(), AVG() and SUM() Functions

The `COUNT()` function returns the number of rows that matches a specified criterion.

The `AVG()` function returns the average value of a numeric column. 

The `SUM()` function returns the total sum of a numeric column. 

```sql
SELECT COUNT(column_name)
FROM table_name
WHERE condition;
```

```sql
SELECT AVG(column_name)
FROM table_name
WHERE condition;
```

```sql
SELECT SUM(column_name)
FROM table_name
WHERE condition;

```

#### SQL LIKE Operator

The `LIKE` operator is used in a `WHERE` clause to search for a specified pattern in a column.

There are two wildcards often used in conjunction with the `LIKE` operator:

-  The percent sign (%) represents zero, one, or multiple characters
-  The underscore sign (_) represents one, single character

```sql
SELECT column1, column2, ...
FROM table_name
WHERE columnN LIKE pattern;
```

| LIKE Operator                  | Description                                                  |
| :----------------------------- | :----------------------------------------------------------- |
| WHERE CustomerName LIKE 'a%'   | Finds any values that start with "a"                         |
| WHERE CustomerName LIKE '%a'   | Finds any values that end with "a"                           |
| WHERE CustomerName LIKE '%or%' | Finds any values that have "or" in any position              |
| WHERE CustomerName LIKE '_r%'  | Finds any values that have "r" in the second position        |
| WHERE CustomerName LIKE 'a_%'  | Finds any values that start with "a" and are at least 2 characters in length |
| WHERE CustomerName LIKE 'a__%' | Finds any values that start with "a" and are at least 3 characters in length |
| WHERE ContactName LIKE 'a%o'   | Finds any values that start with "a" and ends with "o"       |

```sql
SELECT * FROM Customers
WHERE CustomerName NOT LIKE 'a%';
```

#### WildCard

A wildcard character is used to substitute one or more characters in a string.

Wildcard characters are used with the `LIKE` operator. The `LIKE` operator is used in a `WHERE` clause to search for a specified pattern in a column.

| Symbol | Description                                                | Example                                                      |
| :----- | :--------------------------------------------------------- | :----------------------------------------------------------- |
| *      | Represents zero or more characters                         | bl* finds bl, black, blue, and blob                          |
| ?      | Represents a single character                              | h?t finds hot, hat, and hit                                  |
| []     | Represents any single character within the brackets        | h[oa]t finds hot and hat, but not hit                        |
| !      | Represents any character not in the brackets               | h[!oa]t finds hit, but not hot and hat                       |
| -      | Represents any single character within the specified range | c[a-b]t finds cat and cbt                                    |
| #      | Represents any single numeric character                    | 2#5 finds 205, 215, 225, 235, 245, 255, 265, 275, 285, and 295 |

| Symbol | Description                                                | Example                                |
| :----- | :--------------------------------------------------------- | :------------------------------------- |
| %      | Represents zero or more characters                         | bl% finds bl, black, blue, and blob    |
| _      | Represents a single character                              | h_t finds hot, hat, and hit            |
| []     | Represents any single character within the brackets        | h[oa]t finds hot and hat, but not hit  |
| ^      | Represents any character not in the brackets               | h[^oa]t finds hit, but not hot and hat |
| -      | Represents any single character within the specified range | c[a-b]t finds cat and cbt              |

#### IN Operator

The `IN` operator allows you to specify multiple values in a `WHERE` clause.

The `IN` operator is a shorthand for multiple `OR` conditions.

```sql
SELECT column_name(s)
FROM table_name
WHERE column_name IN (value1, value2, ...);

SELECT * FROM Customers
WHERE Country IN ('Germany', 'France', 'UK');

SELECT * FROM Customers
WHERE Country NOT IN ('Germany', 'France', 'UK');
```

```sql
SELECT column_name(s)
FROM table_name
WHERE column_name IN (SELECT STATEMENT);

SELECT * FROM Customers
WHERE Country IN (SELECT Country FROM Suppliers);
```

#### SQL BETWEEN Operator

The `BETWEEN` operator selects values within a given range. The values can be numbers, text, or dates.

The `BETWEEN` operator is inclusive: begin and end values are included. 

```sql
SELECT column_name(s)
FROM table_name
WHERE column_name BETWEEN value1 AND value2;


```

```sql
SELECT * FROM Products
WHERE Price BETWEEN 10 AND 20;

SELECT * FROM Products
WHERE Price NOT BETWEEN 10 AND 20;

SELECT * FROM Products
WHERE ProductName NOT BETWEEN 'Carnarvon Tigers' AND 'Mozzarella di Giovanni'
ORDER BY ProductName;

SELECT * FROM Orders
WHERE OrderDate BETWEEN #07/01/1996# AND #07/31/1996#;

SELECT * FROM Orders
WHERE OrderDate BETWEEN '1996-07-01' AND '1996-07-31';
```

#### Aliases

SQL aliases are used to give a table, or a column in a table, a temporary name.

````sql
SELECT column_name AS alias_name
FROM table_name;

SELECT column_name(s)
FROM table_name AS alias_name;
````

```sql
SELECT o.OrderID, o.OrderDate, c.CustomerName
FROM Customers AS c, Orders AS o
WHERE c.CustomerName='Around the Horn' AND c.CustomerID=o.CustomerID;

-- without alias
SELECT Orders.OrderID, Orders.OrderDate, Customers.CustomerName
FROM Customers, Orders
WHERE Customers.CustomerName='Around the Horn' AND Customers.CustomerID=Orders.CustomerID;

```



