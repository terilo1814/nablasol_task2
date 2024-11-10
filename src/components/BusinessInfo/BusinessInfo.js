import React from 'react'
import './BusinessInfo.css'
import Tooltip from '../Tooltip/Tooltip'

const BusinessInfo = ({ information, onInformationChange }) => {

  const handleChange = (e) => {
    const { name, value } = e.target
    onInformationChange({ [name]: value })
  }

  return (
    <div className='business-container'>
      <div className='business-heading'>
        <p className='step2'>Step 2</p>
        <p className='business-title'>Business Information</p>
        <p className='business-desc'>Please, enter information about your company.</p>
      </div>

      <p className='general-heading'>GENERAL INFORMATION</p>

      <div className='business-details'>

        <div className='input-section'>
          <label>Brand Name</label>
          <input type='text'
            value={information.brandName}
            onChange={handleChange}
            name='brandName'
            placeholder='Input Your Brand Name'
          />
        </div>

        <div className='input-section'>
          <label>Brand Type<Tooltip text={`Local: Brands with distribution in 3 divisions or less OR multiple divisions
             but a total of 150 stores or less.National:Brands with distribution in 4 or more divisions or in more than 150 stores`} />
          </label>
          <input type='text'
            value={information.brandType}
            onChange={handleChange}
            name='brandType'
            placeholder='Input Your Brand Type'
          />
        </div>

        <div className='input-section'>
          <label>Street Address</label>
          <input type='text'
            value={information.street}
            onChange={handleChange}
            name='street'
            placeholder='Input Your Street Address'
          />
        </div>

        <div className='input-section'>
          <label>City</label>
          <input type='text'
            value={information.city}
            onChange={handleChange}
            name='city'
            placeholder='Input City'
          />
        </div>

        <div className='input-section'>
          <label>Zip Code</label>
          <input type='number'
            value={information.zip}
            onChange={handleChange}
            name='zip'
            placeholder='Input Zip Code'
          />
        </div>

        <div className='input-section'>
          <label>Tax ID Number</label>
          <input type='number'
            value={information.taxId}
            onChange={handleChange}
            name='taxId'
            placeholder='Input Tax ID Number'
          />
        </div>
      </div>

      <div className='document-section'>
        <p className='document-heading'>DOCUMENT</p>
        <p className='document-desc'>Once the following documents aresigned, you'll be ready to get started</p>
        <div className='document-input'>
          <span>Electronically sign the agreement(s) </span>
          <span className='correct'>✔️</span>
        </div>
        <button className='btn'>&gt;</button>
        <div className='document-input'>
          <span>Non adult beverage Kroger market supplier waiver and release</span>
          <span className='close'>❌</span>
        </div>
        <button className='btn'>&gt;</button>

        <p className='document-heading'>COI PDF UPLOAD</p>
        <p className='document-desc'>Once the following documents aresigned, you'll be ready to get started</p>
        <div className='document-input'>
          <span>Electronically sign the agreement(s) </span>
          <span className='correct'>✔️</span>
        </div>
        <button className='btn'>&gt;</button>
      </div>

    </div>
  )
}

export default BusinessInfo