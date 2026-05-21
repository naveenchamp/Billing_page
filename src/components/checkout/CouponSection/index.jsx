import './CouponSection.css';
import { useState } from 'react';
import { FiTag, FiChevronUp } from 'react-icons/fi';

const coupons = [
  { code: 'WELCOME20', desc: '20% off on your first month' },
  { code: 'ANNUAL50',  desc: '50% off on annual plans' },
];

const CouponSection = () => {
  const [selected, setSelected] = useState('WELCOME20');
  const [input, setInput] = useState('');

  return (
    <div className="coupon-section">

      {/* Header row */}
      <div className="coupon-section__header">
        <div className="coupon-section__label-row">
          <FiTag size={14} className="coupon-section__icon" />
          <span className="coupon-section__title">
            Apply Coupon
          </span>
        </div>
        <FiChevronUp size={16} className="coupon-section__chevron" />
      </div>

      {/* Input row */}
      <div className="coupon-section__input-row">
        <input
          type="text"
          placeholder="Enter coupon code"
          value={input}
          onChange={e => setInput(e.target.value)}
          className="coupon-section__input"
        />
        <button className="coupon-section__apply-button">
          Apply
        </button>
      </div>

      {/* Coupon options */}
      {coupons.map(c => (
        <div
          key={c.code}
          onClick={() => setSelected(c.code)}
          className={`coupon-section__option ${selected === c.code ? 'coupon-section__option--selected' : ''}`}
        >
          <div className="coupon-section__option-content">
            <span className="coupon-section__code">
              {c.code}
            </span>
            <span className="coupon-section__description">
              {c.desc}
            </span>
          </div>
          {/* Radio */}
          <div className={`coupon-section__radio ${selected === c.code ? 'coupon-section__radio--selected' : ''}`}>
            {selected === c.code && (
              <div className="coupon-section__radio-dot" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CouponSection;
