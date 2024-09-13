// SPDX-License-Identifier: MIT

pragma solidity 0.8.4;

contract Inbox {

    //State Variables
    string public message;
    
    // Initiate default message at constructor
    constructor(string memory initialMessage) {
        message = initialMessage;
    }
    
    // Update the message variable with a new message.
    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
}