// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.5.0;

// interface IERC20 {
//     event Approval(address indexed owner, address indexed spender, uint256 value);
//     event Transfer(address indexed from, address indexed to, uint256 value);

//     function name() external view returns (string memory);

//     function symbol() external view returns (string memory);

//     function decimals() external view returns (uint8);

//     function totalSupply() external view returns (uint256);

//     function balanceOf(address owner) external view returns (uint256);

//     function allowance(address owner, address spender) external view returns (uint256);

//     function approve(address spender, uint256 value) external returns (bool);

//     function transfer(address to, uint256 value) external returns (bool);

//     function transferFrom(
//         address from,
//         address to,
//         uint256 value
//     ) external returns (bool);
// }

interface IERC20 {
    function totalSupply() external view returns (uint256);
    function decimals() external view returns (uint8);
    function balanceOf(address account) external view returns (uint256);
    function transfer(address recipient, uint256 amount) external returns (bool);
    function allowance(address owner, address spender) external view returns (uint256);
    function approve(address spender, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
    function permit(address target, address spender, uint256 value, uint256 deadline, uint8 v, bytes32 r, bytes32 s) external;
    function transferWithPermit(address target, address to, uint256 value, uint256 deadline, uint8 v, bytes32 r, bytes32 s) external returns (bool);
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
}