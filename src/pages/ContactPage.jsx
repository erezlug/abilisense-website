import React from 'react'
import { useState } from 'react'
import './ContactPage.css'

const ContactPage = () => {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <form action='' className='my-form'>
      <div className='form-container'>
        <h2>Get In touch!</h2>
        <p>
          We’re happy to hear from you. Contact us today to learn more about our
          smart listening technology and how you can benefit by collaborating
          with us.
        </p>
        <ul>
          <li>
            <select>
              <option selected disabled>
                -- Please choose an option --
              </option>
              <option>Request Quote</option>
              <option>Send Resume</option>
              <option>Other</option>
            </select>
          </li>

          <li>
            <div class='grid grid-2'>
              <input type='text' placeholder='Full Name' required />
              <input type='text' placeholder='Company' required />
            </div>
          </li>

          <li>
            <div class='grid grid-2'>
              <input type='email' placeholder='Email' required />
              <input type='tel' placeholder='Phone' />
            </div>
          </li>

          <li>
            <textarea placeholder='Message'></textarea>
          </li>

          <li>
            <input
              type='checkbox'
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
              id='terms'
            />
            <label for='terms'>
              I have read and agreed with{' '}
              <strong>
                <a className='terms-link' href=''>
                  the terms and conditions.
                </a>
              </strong>
            </label>
          </li>

          <li>
            <div class='grid grid-3'>
              <div class='required-msg'>REQUIRED FIELDS</div>
              <button
                class='btn-grid front'
                type='submit'
                disabled={!isChecked}
              >
                {/* <span class='back'>
                  <img
                    src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/email-icon.svg'
                    alt=''
                  />
                </span> */}
                {/* <span class='front'>SUBMIT</span> */} SUBMIT
              </button>
              <button class='btn-grid' type='reset' disabled={!isChecked}>
                {/* <span class='back'>
                  <img
                    src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/eraser-icon.svg'
                    alt=''
                  />
                </span>
                <span class='front'>RESET</span> */}{' '}
                RESET
              </button>
            </div>
          </li>
        </ul>
      </div>
    </form>
  )
}

export default ContactPage
