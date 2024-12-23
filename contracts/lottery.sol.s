// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Lottery {
    address public manager;
    address[] public players;

    constructor() {
        manager = msg.sender; // Manager is the contract deployer
    }

    function enter() public payable {
        require(msg.value > .01 ether, "Minimum ETH to enter is 0.01");
        players.push(msg.sender);
    }

    function random() private view returns (uint) {
        return uint(keccak256(abi.encodePacked(block.difficulty, block.timestamp, players)));
    }

    function pickWinner() public restricted {
        require(players.length > 0, "No players have entered the lottery");
        uint index = random() % players.length;
        address winner = players[index];
        payable(winner).transfer(address(this).balance);
        players = new address Reset the lottery
    }

    modifier restricted() {
        require(msg.sender == manager, "Only the manager can call this function");
        _;
    }

    function getPlayers() public view returns (address[] memory) {
        return players;
    }
}