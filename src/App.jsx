import './App.css';
import Navbar from './components/layout/Navbar';
import BillingForm from './components/checkout/BillingForm';
import OrderSummary from './components/checkout/OrderSummary';
import { FiArrowLeft } from 'react-icons/fi';

const App = () => {
  return (
    <div className="app-shell">
      <Navbar />

      <main className="app-main">
        
        {/* Back to plans - exact Figma specs: Inter 500, 14px, #6B7280, line-height 20px */}
        <button className="app-back-button">
          <FiArrowLeft size={14} className="app-back-icon" />
          Back to plans
        </button>

        {/* Two column layout */}
        <div className="app-content-grid">
          <BillingForm />
          <OrderSummary />
        </div>

      </main>
    </div>
  );
}

export default App;
