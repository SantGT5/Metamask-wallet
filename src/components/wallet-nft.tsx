import React from "react";

declare global {
  interface Window {
    ethereum?: any;
    web3?: any;
  }
}

export const WalletNFT = () => {
  const [walletAddress, setWalletAddress] = React.useState<any>(null);
  const [nfts, setNfts] = React.useState<any>([]);

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setWalletAddress(accounts[0]);
    }
  };

  const getNFTData = async () => {
    if (!walletAddress) return;

    // const response = await fetch(`https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:${walletAddress}`)

    const response = await fetch(
      `https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:0x60f80121c31a0d46b5279700f9df786054aa5ee5`
    );
    const data = await response.json();
    setNfts(data.items);
  };

  React.useEffect(() => {
    getNFTData();
  }, [walletAddress]);

  console.log(nfts);

  return (
    <div>
      <h1>Wallet NFT</h1>
      <div>Account: {walletAddress}</div>
      <button className="connect-button" onClick={connectWallet}>
        Connect Wallet
      </button>
    </div>
  );
};
