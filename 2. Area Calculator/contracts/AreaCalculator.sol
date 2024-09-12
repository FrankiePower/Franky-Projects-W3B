// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

contract areaCalculator{

uint256 area;

    function Triangle (uint256 _base, uint256 _height) public returns(uint256){
        area = (_base * _height)/2;
        return area;
    }

    function Square (uint256 _side) public returns(uint256){
      area =  _side * _side;
        return  area;
    }

    function Rectangle(uint256 _length, uint256 width) public returns(uint256){
        area = _length * width;
        return area;
    }

    function getArea() public view returns(uint256){
        return area;
    }
}