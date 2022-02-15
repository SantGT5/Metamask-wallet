import "./App.css";
import { Route, Routes } from "react-router-dom";

// Components
import { WalletsConnection } from "./components/wallets-connection";
import { WalletCard } from "./components/wallet-metamask";
import { WalletNFT } from "./components/wallet-nft";
import { WalletTransaction } from "./components/wallet-transaction";
import { WalletSmartContract } from "./components/MetaMask SmartContract/wallet-contract"

function App() {
  return (
    <Routes>
      <Route path="/" element={<WalletsConnection />} />
      <Route path="/metamask" element={<WalletCard />} />
      <Route path="/wallet-nft" element={<WalletNFT />} />
      <Route path="/wallet-transaction" element={<WalletTransaction />} />
      <Route path="/wallet-smart-contract" element={<WalletSmartContract />} />
    </Routes>
  );
}

export default App;
