import React from "react";
import {ethers} from "ethers"

declare global {
    interface Window {
      ethereum?: any;
      web3?:any
    }
  }

export const WalletCard = () => {
  const [errorMessage, setErrorMessage] = React.useState<any>(null);
  const [defaultAccount, setDefaultAccount] = React.useState(null);
  const [userBalance, setUserBalance] = React.useState<any>(null);
  const [connectButtonText, setConnectButtonText] =
    React.useState("connect Wallet");

  const connectWalletHandle = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result: any) => {
          accountChangeHandler(result[0]);
        });
    } else {
      setErrorMessage("Install MetaMask");
    }
  };

  const accountChangeHandler = (newAccount: any) => {
    setDefaultAccount(newAccount);
    getUserBalance(newAccount.toString());
  };

  const getUserBalance = (address: any) => {
    window.ethereum
      .request({ method: "eth_getBalance", params: [address, "latest"] })
      .then((balance: any) => {
        setUserBalance(ethers.utils.formatEther(balance));
      });
  };

  const chainChangedHandler = () => {
      window.location.reload()
  }
  window.ethereum.on("accountsChanged", accountChangeHandler)
  window.ethereum.on("chainChanged", chainChangedHandler)

  return (
    <div className="walletCard">
      <h4>{"Connection to MetaMask using window.ethereum methods"}</h4>
      <button onClick={connectWalletHandle}>{connectButtonText}</button>
      <div className="accountDisplay">
        <h3>Address: {defaultAccount}</h3>
      </div>
      <div className="balanceDisplay">
        <h3>Balance: {userBalance}</h3>
      </div>
      {errorMessage}
    </div>
  );
};
