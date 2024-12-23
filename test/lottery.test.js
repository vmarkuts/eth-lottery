const { expect } = require("chai");

//123

describe("Lottery Contract", function () {
    let Lottery, lottery, owner, addr1, addr2;

    beforeEach(async function () {
        Lottery = await ethers.getContractFactory("Lottery");
        [owner, addr1, addr2] = await ethers.getSigners();
        lottery = await Lottery.deploy();
    });

    it("Allows a user to enter", async function () {
        await lottery.connect(addr1).enter({ value: ethers.utils.parseEther("0.02") });
        const players = await lottery.getPlayers();
        expect(players[0]).to.equal(addr1.address);
    });

    it("Only manager can pick a winner", async function () {
        await expect(lottery.connect(addr1).pickWinner()).to.be.revertedWith("Only the manager can call this function");
    });
});