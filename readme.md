# Ethereum Lottery Smart Contract

This project is a simple Ethereum lottery smart contract written in Solidity. Users can participate in the lottery by sending Ether to the contract. After a set time or number of participants, a winner is randomly selected, and the collected funds are sent to the winner.

# Clone the repository
git clone https://github.com/yourusername/lottery-contract.git
cd lottery-contract

# Install dependencies
npm install

# Compile the contract
npx hardhat compile

# Test the contract
npx hardhat test

# Deploy the contract (use .env for your private key and Infura/Alchemy URL)
npx hardhat run scripts/deploy.js --network rinkeby

# Example Interaction

// Enter the lottery
await contract.enter({ value: ethers.utils.parseEther("0.02") });

// Pick a winner (manager only)
await contract.pickWinner();