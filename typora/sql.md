## SQL

Types of Joins

- `(INNER) JOIN`: Returns records that have matching values in both tables
- `LEFT (OUTER) JOIN`: Returns all records from the left table, and the matched records from the right table
- `RIGHT (OUTER) JOIN`: Returns all records from the right table, and the matched records from the left table
- `FULL (OUTER) JOIN`: Returns all records when there is a match in either left or right table

![SQL INNER JOIN](https://www.w3schools.com/sql/img_innerjoin.gif) ![SQL LEFT JOIN](https://www.w3schools.com/sql/img_leftjoin.gif) ![SQL RIGHT JOIN](https://www.w3schools.com/sql/img_rightjoin.gif) ![SQL FULL OUTER JOIN](https://www.w3schools.com/sql/img_fulljoin.gif)



### INNER JOIN 

```sql
SELECT Orders.OrderDate, Orders.CustomerID, Customers.CustomerID, Customers.CustomerName
FROM Orders
INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID;
```

Inner Join 3 Tables

```sql
SELECT Orders.CustomerId, Customers.CustomerName, Shippers.ShipperName
FROM((Orders
INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID)
INNER JOIN Shippers ON Orders.ShipperID = Shippers.ShipperID);
```

### LEFT JOIN

SQL statement will select all customers, and any orders they might have:

```sql
SELECT Customers.CustomerName, Orders.OrderID
FROM Customers
LEFT JOIN ORDERS ON Customers.CustomerID = Orders.CustomerID
ORDER BY Customers.CustomerName;
```

**Note:** The `LEFT JOIN` keyword returns all records from the left table (Customers), even if there are no matches in the right table (Orders).

### RIGHT JOIN

```sql
SELECT Orders.OrderID, Employees.LastName, Employees.FirstName
FROM Orders
RIGHT JOIN Employees ON Orders.EmployeeID = Employees.EmployeeID
ORDER BY Orders.OrderID;
```

**Note:** The `RIGHT JOIN` keyword returns all records from the right table (Employees), even if there are no matches in the left table (Orders).



