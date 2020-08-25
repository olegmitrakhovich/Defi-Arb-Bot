var artifacts = require('truffle-artifactor');
var TestContract = artifacts.require("./contracts/Flashloan.sol");

// Run unit tests to populate my contract
// ...
// ...

// getGasPrice returns the gas price on the current network
TestContract.web3.eth.getGasPrice(function(error, result){ 
    var gasPrice = Number(result);
    console.log("Gas Price is " + gasPrice + " wei"); // "10000000000000"

    // Get Contract instance
    TestContract.deployed().then(function(instance) {

        // Use the keyword 'estimateGas' after the function name to get the gas estimation for this particular function 
        return instance.giveAwayDividend.estimateGas(1);

    }).then(function(result) {
        var gas = Number(result);

        console.log("gas estimation = " + gas + " units");
        console.log("gas cost estimation = " + (gas * gasPrice) + " wei");
        console.log("gas cost estimation = " + TestContract.web3.fromWei((gas * gasPrice), 'ether') + " ether");
    });
});