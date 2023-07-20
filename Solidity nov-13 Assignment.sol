// SPDX-License-Identifier: MIT
pragma solidity  0.8.20;
contract assignment
{
    uint[] array=[1, 2, 3, 4, 5, 6];
    function remove(uint index) public returns (uint[] memory)
    {
        for(uint i = index;i<array.length-1;i++)
        {
            array[i]=array[i+1];
        } 
        array.pop();
        return array;
    }
}