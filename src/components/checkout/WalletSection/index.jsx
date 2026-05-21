import './WalletSection.css';
import { FiCreditCard } from 'react-icons/fi';

const WalletSection = () => {
  return (
    <div className="wallet-section">
      {/* Left: icon + text */}
      <div className="wallet-section__content">
        <FiCreditCard size={16} className="wallet-section__icon" />
        <div className="wallet-section__text">
          <span className="wallet-section__title">
            Wallet Balance
          </span>
          <span className="wallet-section__balance">
            ₹500.00 available
          </span>
        </div>
      </div>

      {/* Right: Apply */}
      <button className="wallet-section__apply">
        Apply
      </button>
    </div>
  );
}

export default WalletSection;
