# Student Registration Contract

```
This smart contract, called `StudentRecord`, is designed to manage student records on the blockchain. Here's a summary:

Struct: A `Student` struct stores a student's ID, name, age, and course.

Mapping: It uses a mapping to associate unique student IDs with their corresponding student data.

Events: The contract emits two events, `StudentAdded` and `StudentUpdated`, to log whenever a student is added or updated.

Unique ID Generation: The contract generates a 3-digit unique ID for each student using a hash function based on the block timestamp and the sender's address.

**Functions:**
- `addStudent`: Adds a new student with a unique ID and logs the event.
- `updateStudent`: Updates an existing student's details by ID.
- `getStudentRecord`: Retrieves a student's record by their ID.
- `removeStudentRecord`: Deletes a student's record by their ID.

```

# Deployed to Lisk-Sepolia and Verified

```
Contract Deployed to: 0x85dE0882112F798058a6819e0D51a863Ac80563A
```

- https://sepolia-blockscout.lisk.com//address/0x85dE0882112F798058a6819e0D51a863Ac80563A#code
