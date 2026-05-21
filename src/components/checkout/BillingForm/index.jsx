import { useState } from 'react';
import './BillingForm.css';
import InputField from '../../common/InputField';
import SelectField from '../../common/SelectField';
import Button from '../../common/Button';
import {
  INDIA_CITY_OPTIONS_BY_STATE,
  INDIA_STATE_OPTIONS,
} from '../../../data/indiaLocations';

const BillingForm = ({ onCancel, onSave }) => {
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const cityOptions = selectedState
    ? INDIA_CITY_OPTIONS_BY_STATE[selectedState] ?? []
    : [];

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setSelectedCity('');
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  return (
    <div className="billing-form">
      <div className="billing-form__header">
        <h1 className="billing-form__title">
          Review your details
        </h1>
      </div>

      <div>
        <h2 className="billing-form__section-title">
          Billing Information
        </h2>

        <div className="billing-form__grid">
          <InputField label="Company Name"        placeholder="abhigyan" />
          <InputField label="Email"               placeholder="abhigyan.pandey@getreelax.com" />
          <InputField label="GST Number (Optional)" placeholder="GST Number" />
          <InputField label="PAN Number (Optional)" placeholder="PAN Number" />
          <InputField label="Premise/House no."   placeholder="Premise/House no." />
          <InputField label="Street"              placeholder="Street" />
          <SelectField
            label="State"
            placeholder="Select state"
            options={INDIA_STATE_OPTIONS}
            value={selectedState}
            onChange={handleStateChange}
          />
          <SelectField
            label="City"
            placeholder={selectedState ? 'Select city' : 'Select state first'}
            options={cityOptions}
            value={selectedCity}
            onChange={handleCityChange}
            disabled={!selectedState}
          />
          <InputField label="Country" value="India" readOnly />
          <InputField label="Pin Code"            placeholder="Pincode" />
        </div>
      </div>


      <div className="billing-form__actions">
        <Button variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="primary" onClick={onSave}>
          Save Details
        </Button>
      </div>
    </div>
  );
}

export default BillingForm;
