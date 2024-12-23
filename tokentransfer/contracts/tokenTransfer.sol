// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract TokenTransferHelper {

    // token address
    IERC20 public token = 0xac485391EB2d7D88253a7F1eF18C37f4242D1A24;
    // Event to log transfers
    event TransferCompleted(
        address indexed token,
        address indexed from,
        address indexed to,
        uint256 amount
    );

    /**
     * @notice Approves and transfers tokens in a single transaction
     * @param token The address of the ERC20 token
     * @param to The recipient address
     * @param amount The amount of tokens to transfer
     * @return success Whether the transfer was successful
     */
    function approveAndTransfer(
        address to,
        uint256 amount
    ) external returns (bool success) {
        require(to != address(0), "Invalid recipient address");
        require(amount > 0, "Amount must be greater than 0");

        IERC20 tokenContract = IERC20(token);
        
        // First approve the contract to spend tokens
        require(
            tokenContract.approve(address(this), amount),
            "Approval failed"
        );

        // Then transfer the tokens
        require(
            tokenContract.transferFrom(msg.sender, to, amount),
            "Transfer failed"
        );

        emit TransferCompleted(token, msg.sender, to, amount);
        return true;
    }

    /**
     * @notice Gets the current allowance for this contract
     * @param token The address of the ERC20 token
     * @param owner The address of the token owner
     * @return The current allowance
     */
    function getAllowance(
        address owner
    ) external view returns (uint256) {
        return IERC20(token).allowance(owner, address(this));
    }
}