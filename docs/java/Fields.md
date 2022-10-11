**Fields**

- Java field is a variable inside a class

```
[access_modifier] [static] [final] type name [= initial value] ;
```

**Initial Field**

```
public class Customer {
    String customerType = "OnlineCustomer";
}
```

**Static**

To access a static field, you dont need to create an instance.

```
public class Customer {
    static String staticField1;
}
```

- No need to create instance of the class.

```
Customer.staticField1 = "value";
System.out.println(Customer.staticField1);
```

**Non Static**

```
public class Customer {
    String field1;
}
```

- Instance needs to be created.

```
Customer customer = new Customer();
customer.field1 = "value";
System.out.println(customer.field1);
```

**Final**

- Values cannot be changed later.
- Adding static makes sense.
- Written in Capital.

```
public class Customer {
    static final String CONSTANT_1 = "Fixed Value";
}
```