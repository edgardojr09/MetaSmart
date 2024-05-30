// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

contract BeHealthy {

    function WaterPerDay(uint Glass) public pure{
        require(Glass == 8, "You need 8 glasses of water per day to be healthy");
    }

    function SleepPerDay(uint Sleep) public pure{
        if(Sleep != 8){
            revert("You need 8 hours sleep to be healthy");
        }
    }

    function EatTimesPerDay(uint Eat) public pure{
        assert(Eat <= 3 && Eat >= 3);
    }
}
