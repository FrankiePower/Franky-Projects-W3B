// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.24;

contract StudentRecord {
    
    // Struct to hold student data
    struct Student {
        uint id;
        string name;
        uint age;
        string course;        
    }

    // Mapping from student ID to  Student struct
    mapping (uint => Student) private students;

    // Event to log student addition
    event StudentAdded(uint id, string name, uint age, string course);

    // Event to log student updates
    event StudentUpdated(uint id, string name, uint age, string course);

    // Maximum number of unique IDs based on 3 digits(0-999)
    uint private constant MAX_ID = 999;

    // Function to generate a hash-based unique ID
    function _generateUniqueId() private view  returns (uint) {

        // Generate a hash
          bytes32 hash = keccak256(abi.encodePacked(block.timestamp,msg.sender));

        // Truncate the hash to a 3-digit ID
        uint shortID = uint(hash) % (MAX_ID + 1);

        return shortID;
    }

    // Add a student record with a unique short ID
    function addStudent(string memory _name, uint _age, string memory _course) public {

        uint newId = _generateUniqueId();

        // Ensure ID is unique
        while (students[newId].id != 0){
            newId = _generateUniqueId();
        }

        students[newId] = Student(newId, _name, _age, _course);

        emit StudentAdded(newId, _name, _age, _course);
    }

    // Update an existing student record
    function updateStudent (
        uint _id,
        string memory _name,
        uint _age,
        string memory _course       
    ) public {
        Student storage student = students[_id];
        require(student.id != 0, "Student does not exist,");
        
        if (bytes(_name).length > 0){
            student.name = _name;
        }

        if (_age != 0){
            student.age = _age;
        }

        if (bytes(_course).length > 0){
            student.course = _course;
        }

    }

    // Retrieve a student record by ID
    function getStudentRecord(uint _id) public view returns(string memory name,uint age, string memory course ) {
        Student memory student =  students[_id];
        require(student.id != 0, 'Student does not exist.');
        return (student.name, student.age, student.course);
    }

    function removeStudentRecord(uint _id) public {
        require(students[_id].id != 0, "Student does not exist");
        delete students[_id];
    }
        
    
}