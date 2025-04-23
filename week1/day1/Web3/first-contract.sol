// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.16 <0.9.0;
// The first line tells you that the source code is licensed under the GPL version 3.0.
// Machine-readable license specifiers are important in a setting where publishing the source code is the default.

contract SimpleStorage {
    uint storedData;

    function set(uint x) public {
        storedData = x;
    }

    function get() public view returns (uint) {
        return storedData;
    }
}