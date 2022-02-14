import "./App.css";
import { Route, Routes } from "react-router-dom";

// Components
import { WalletsConnection } from "./components/wallets-connection";
import { WalletCard } from "./components/wallet-metamask";
import { WalletNFT } from "./components/wallet-nft";
import { WalletTransaction } from "./components/wallet-transaction";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WalletsConnection />} />
      <Route path="/metamask" element={<WalletCard />} />
      <Route path="/wallet-nft" element={<WalletNFT />} />
      <Route path="/wallet-transaction" element={<WalletTransaction />} />
    </Routes>
  );
}

export default App;
