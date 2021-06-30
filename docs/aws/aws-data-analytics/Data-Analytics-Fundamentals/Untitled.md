## Redshift

### Sort



**An interleaved sort** key gives equal weight to each column in the sort key, so query predicates can use any subset of the columns that make up the sort key, in any order

The performance improvements you gain by implementing an interleaved sort key should be weighed against increased load and vacuum times.

Don’t use an interleaved sort key on columns with monotonically increasing attributes, such as identity columns, dates, or timestamps.

A compound sort key is more efficient when query predicates use a prefix, which is a subset of the sort key columns in order. 

**Compound sort** keys might speed up joins, GROUP BY and ORDER BY operations, and window functions that use PARTITION BY and ORDER BY. For example, a merge join, which is often faster than a hash join, is feasible when the data is distributed and presorted on the joining columns. Compound sort keys also help improve compression.

The performance benefits of compound sorting decrease when queries depend only on secondary sort columns, without referencing the primary columns. COMPOUND is the default sort type.

**Compression**

A *compression encoding* specifies the type of compression that is applied to a column of data values as rows are added to a table.

ENCODE AUTO is the default for tables. Amazon Redshift automatically manages compression encoding for all columns in the table. If you specify compression encoding for any column in the table, the table is no longer set to ENCODE AUTO. Amazon Redshift no longer automatically manages compression encoding for all columns in the table. 

- Columns that are defined as BOOLEAN, REAL, or DOUBLE PRECISION data types are assigned RAW compression.
- Columns that are defined as SMALLINT, INTEGER, BIGINT, DECIMAL, DATE, TIMESTAMP, or TIMESTAMPTZ data types are assigned AZ64 compression.
- Columns that are defined as CHAR or VARCHAR data types are assigned LZO compression.

Creating Table

Create your tables with `DISTSTYLE AUTO`. If you do so, then Amazon Redshift uses automatic table optimization to choose the data distribution style.

A COPY command is the most efficient way to load a table. You can also add data to your tables using INSERT commands, though it is much less efficient than using COPY.

Amazon Redshift Spectrum external tables are read-only. You can't COPY or INSERT to an external table. Need IAM permission.

After your initial data load, if you add, modify, or delete a significant amount of data, you should follow up by running a VACUUM command to reorganize your data and reclaim space after deletes. You should also run an ANALYZE command to update table statistics.

Elastic Resize adds or removes nodes from a single Redshift cluster within minutes to manage its query throughput. For example, an ETL workload for certain hours in a day or month-end reporting may need additional Redshift resources to complete on time. Concurrency Scaling adds additional cluster resources to increase the overall query concurrency.

No. Concurrency Scaling is a massively scalable pool of Redshift resources and customers do not have direct access.

Redshift Spectrum currently supports Gzip and Snappy compression.