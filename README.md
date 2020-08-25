# Defi-Arb-Bot
arbitrage bot, looks for prices differences on uniswap and kyber. Uses flashloan to make a trade between 2 exchanges.

    npm install
    
    curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -

    sudo apt-get install -y nodejs

    truffle migrate --network mainnet --reset
    
    node run-arbitrage.js
