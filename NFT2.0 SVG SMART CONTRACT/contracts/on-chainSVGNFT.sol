// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/Base64.sol";

contract SVGNFT is ERC721Enumerable {
    using Strings for uint256;

    uint256 private _tokenIds;
    mapping(uint256 => string) private _tokenSVGs;

    constructor() ERC721("On-Chain SVG NFT", "OCSNFT") {}

    function mintNFT(string memory svgData) public returns (uint256) {
        _tokenIds++;
        uint256 newItemId = _tokenIds;
        _safeMint(msg.sender, newItemId);
        _tokenSVGs[newItemId] = svgData;
        return newItemId;
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
       // require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");

        string memory svg = _tokenSVGs[tokenId];
        string memory imageURI = svgToImageURI(svg);
        return formatTokenURI(tokenId, imageURI);
    }

    function svgToImageURI(string memory svg) internal pure returns (string memory) {
        string memory baseURL = "data:image/svg+xml;base64,";
        string memory svgBase64Encoded = Base64.encode(bytes(svg));
        return string(abi.encodePacked(baseURL, svgBase64Encoded));
    }

    function formatTokenURI(uint256 tokenId, string memory imageURI) internal pure returns (string memory) {
        return string(
            abi.encodePacked(
                "data:application/json;base64,",
                Base64.encode(
                    bytes(
                        abi.encodePacked(
                            '{"name": "SVG NFT #', 
                            tokenId.toString(), 
                            '", "description": "A fully on-chain SVG NFT", "image":"', 
                            imageURI,
                            '"}'
                        )
                    )
                )
            )
        );
    }
}