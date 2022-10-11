### When Not to Use SQL:

- **Need high Availability in the data**: Indicates the system is always up and there is no downtime
- **Have Large Amounts of Data**
- **Need Linear Scalability**: The need to add more nodes to the system so performance will increase linearly
- **Low Latency**: Shorter delay before the data is transferred once the instruction for the transfer has been received.
- **Need fast reads and write**

### Basic of NoSQL Design

In distributed databases for high availability:

- Horizontally scalable
- Multiple copies of data -> it might not have updated database, **hence eventual consistency.**
  - Helps acheive high availability.
  - if not updated, eventually all database will have same copy.

### CAP Theorem:

According to the CAP theorem, a database can actually only guarantee two out of the three in CAP.

- **Consistency**: Every read from the database gets the latest (and correct) piece of data or an error
- **Availability**: Every request is received and a response is given -- without a guarantee that the data is the latest update
- **Partition Tolerance**: The system continues to work regardless of losing network connectivity between nodes

Apache Cassandra it is about **Eventual Consistency**.

### Apache Cassendra

### Data Modeling in Apache Cassandra:

- Denormalization is not just okay -- it's a must
- Denormalization must be done for fast reads
- Apache Cassandra has been optimized for fast writes
- **ALWAYS think Queries first**
- One table per query is a great strategy
- Apache Cassandra does **not** allow for JOINs between tables

Table Name: music_library column 1: Year column 2: Artist Name column 3: Album Name PRIMARY KEY(year, artist name)

Table Name: artist_library  column 1: Artist Name column 2: Year column 3: Album Name PRIMARY KEY (artist name, year)

### Primary Key

Should be done for unifrom distribution.

Apache Cassandra doesnt support duplicate rows -> overwritten.

- Must be unique
- The PRIMARY KEY is made up of either just the PARTITION KEY or may also include additional CLUSTERING COLUMNS
- A Simple PRIMARY KEY is just one column that is also the PARTITION KEY. A Composite PRIMARY KEY is made up of more than one column and will assist in creating a unique value and in your retrieval queries
- The PARTITION KEY will determine the distribution of data across the system

### Clustering Column

- The clustering column will sort the data in sorted **ascending** order.
- More than one clustering column can be added (or none!)
- From there the clustering columns will sort in order of how they were added to the primary key

### Where Key

- The `WHERE` statement is allowing us to do the fast reads. With Apache Cassandra, we are talking about big data. -> System Failure.

- Data Modeling in Apache Cassandra is query focused, and that focus needs to be on the WHERE clause
- Failure to include a WHERE clause will result in an error

Order: **partition key: ((year), state, city): columns must be used in left to right manner without skipping.**



