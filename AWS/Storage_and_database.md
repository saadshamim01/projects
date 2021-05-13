
Types of Storage Class

- Object data consists of data, metadata and key(unique identifier.


** Modifying a file in block storage, only changed files are updated. When object storage is modified, entire object updated. **



### 1. Amazon Simple Storage Service (Amazon S3)

- 11 lines of durability: 99.999999999% proba of being intact for 1 year.

- Data stored in 3 facilities.

- Used for storing static website hosting.

**Static Website**: Collection of websites. Done by uploading all files and checking hosting option.

### 2. Amazon S3 Standard-Infrequent Access (S3 Standard-IA)

- Used for less frequently accessed data but requires quick access.

- Ex: Data recovery, backup.

### 3. Amazon S3 Glacier

- Used for retaining data for years for some purpose (ex: audit) but rapid retrieval is not requires. (archieves)

- Glacier Vault Lock policy used to store data and lock your vault.

- **Controls: Write Once/Read many(WORM)**

- Once locked policy cant be changed.

- 3 options for retieval: minutes, hours, directly upload.

- Amazon S3 Lifecycle Management: Moves data automatically between tiers.

- Ex Storing S3 object for 90 days then moving it S3 IA, after 120 days move to glacier.

-










