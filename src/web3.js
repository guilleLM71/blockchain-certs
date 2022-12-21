import Web3 from "web3";

//mismo puerto que la blockchain 
const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");

export default web3;
