import './OrderSummary.css';
import WalletSection from '../WalletSection';
import CouponSection from '../CouponSection';
import { FiRefreshCcw } from 'react-icons/fi';

const OrderSummary = () => {
  return (
    <div className="order-summary">

      {/* TOP card: Plan info */}
      <div className="order-summary__card order-summary__card--plan">
        <h2 className="order-summary__title">
          Order Summary
        </h2>

        {/* Price + Plan */}
        <div className="order-summary__plan-row">
          <div>
            <div className="order-summary__price-row">
              <span className="order-summary__price">₹4,999</span>
              <span className="order-summary__per-month">/month</span>
            </div>
            <span className="order-summary__credits">Includes 5,000 credits/mo.</span>
          </div>
          <div className="order-summary__plan-meta">
            <span className="order-summary__plan-label">Selected Plan</span>
            <span className="order-summary__plan-name">Startup</span>
          </div>
        </div>

        {/* Upgrade button */}
        <button className="order-summary__upgrade-button">
          <FiRefreshCcw size={13} className="order-summary__upgrade-icon" />
          Upgrade to Growth Plan
        </button>
      </div>

      {/* BOTTOM card: Wallet + Coupon + Totals */}
      <div className="order-summary__card order-summary__card--details">
        <WalletSection />
        <CouponSection />

        {/* Price rows */}
        <div className="order-summary__breakdown">
          {/* Subtotal */}
          <div className="order-summary__row">
            <span className="order-summary__label">Subtotal</span>
            <span className="order-summary__value">₹14,999.00</span>
          </div>
          {/* Tax */}
          <div className="order-summary__row">
            <span className="order-summary__label">Tax (18% GST)</span>
            <span className="order-summary__value">₹1,079.64</span>
          </div>
          {/* Total */}
          <div className="order-summary__total-row">
            <span className="order-summary__total-label">Total due today</span>
            <span className="order-summary__total-value">16,078.64</span>
          </div>
        </div>

        {/* Proceed to Payment */}
        <button className="order-summary__payment-button">
          Proceed to Payment
        </button>
      </div>

    </div>
  );
}

export default OrderSummary;
