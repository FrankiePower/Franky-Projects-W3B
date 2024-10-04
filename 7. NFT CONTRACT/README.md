# NFT Contract

```
This smart contract, called MyNFT, is an ERC-721 (Non-Fungible Token) implementation that allows the minting of unique NFTs (tokens) with metadata on the Ethereum blockchain. It leverages OpenZeppelin libraries for additional functionality and security. Here's a summary:

Inherits: It inherits from ERC721URIStorage (which allows storing metadata with a token) and Ownable (which restricts certain functions to the contract owner).
Constructor: Initializes the contract with a name ("SuperFranky") and symbol ("SPFY"), and sets the initial owner.Y
Token Counter: Tracks the number of tokens issued with the _tokenIds variable.
Functions:

mintNFT: Allows the contract owner to mint a new NFT, assign it to a recipient, and associate it with a metadata URI (using tokenURI). The token ID is auto-incremented to ensure uniqueness.


Deployed to Lisk-Sepolia and Verified

Contract Deployed to: 0x9Dc6AC213cA061a248E1FaFA90a312Be09c26189
```

- https://sepolia-blockscout.lisk.com/address/0x9Dc6AC213cA061a248E1FaFA90a312Be09c26189#code
