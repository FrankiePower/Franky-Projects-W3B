// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./INFT.sol";

contract MyNFT is ERC721URIStorage, Ownable, INFT {
    uint256 private _tokenIds;

    constructor(address initialOwner) ERC721("SuperFranky", "SPFY") Ownable(initialOwner) {}

    function mintNFT(address recipient, string memory tokenURI)
        public
        override
        onlyOwner
        returns (uint256)
    {
        _tokenIds++;

        uint256 newItemId = _tokenIds;
        _mint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }

    function tokenIds() external view override returns (uint256) {
        return _tokenIds;
    }

    // The following functions are inherited from ERC721URIStorage and Ownable,
    // so we don't need to implement them explicitly:
    // balanceOf, ownerOf, tokenURI, name, symbol, supportsInterface
}