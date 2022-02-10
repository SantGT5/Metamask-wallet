import "./App.css";
import { Route, Routes } from "react-router-dom";

// Components
import { WalletsConnection } from "./components/wallets-connection"
import { WalletCard } from "./components/wallet-metamask";
import { WalletNFT } from "./components/wallet-nft"

function App() {
  return (
    <Routes>
      <Route path="/" element={<WalletsConnection />} />
      <Route path="/metamask" element={<WalletCard />} />
      <Route path="/wallet-nft" element={<WalletNFT />} />
    </Routes>
  );
}

export default App;
