// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Todo {
    
    //struct for custom data type.
    struct Todoitem {
        string title;
        string description;
        bool isDone;        
    }

    Todoitem[] todos; //array of todoitem structs called todos.

    //events
    event TodoCreated();
    event TodoUpdated(uint256 indexed index);

    //functions
    function createTodo(string memory _title, string memory _description) external {
        //todos.push(Todoitem(_title, _description, false)); 1

       /* todos.push(Todoitem({
            title: _title,
            description: _description,
            isDone: false
        })); */

        Todoitem memory td; // variable of type todoitem called td.
        td.title = _title;
        td.description = _description;

        todos.push(td);

        emit TodoCreated();
    }

    //Get all todos and assigns the value to the todos_ return variable
    function getTodos() external view returns(Todoitem[] memory todos_){
        todos_ = todos;
    }

    function getTodo(uint256 _index) external view returns(Todoitem memory){

        require(_index <= todos.length - 1,"index out of bound");

        return todos[_index];
    }

    function updateStatus(uint256 _index) external {

        require(_index <= todos.length - 1, "index out of bound");

        //Reading from storage
        Todoitem storage td = todos[_index];

        td.isDone = !td.isDone;

        emit TodoUpdated(_index);
    }

}