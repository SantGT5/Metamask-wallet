import { Link } from "react-router-dom";

export const WalletsConnection = () => {
  return (
    <div>
      <Link to="/metamask">MetaMask Connection</Link>
      <br />
      <br />
      <Link to="/wallet-nft">Any Wallet NFT</Link>
      <br />
      <br />
      <Link to="/wallet-transaction">Wallet Transaction</Link>
      <br />
      <br />
      <Link to="/wallet-smart-contract">Wallet SmartContract</Link>
    </div>
  );
};
