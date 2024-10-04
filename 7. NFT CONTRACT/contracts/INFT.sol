// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol";

interface INFT is IERC721, IERC721Metadata {
    function mintNFT(address recipient, string memory tokenURI) external returns (uint256);
    function tokenIds() external view returns (uint256);
}