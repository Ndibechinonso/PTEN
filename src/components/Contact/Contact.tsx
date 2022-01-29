import React from 'react'
import { Button } from '../Button/Button'
import './Contact.scss'
export const Contact = () => {
    return(
        <div className='contact-container'>
            <div className='contact-content'>
           <h1>
           Still have questions about <br/>P-TEN?
           </h1>
           <p>
           Get in touch with us and we’ll put you on the right 
           track towards making a bold business move.
           </p>
           <form className='form-div'>
               <div>
                   <label htmlFor='firstname'>FIRST NAME</label>
                   <input id='firstname' type='string'/>
               </div>
               <div>
                   <label>LAST NAME</label>
                   <input id='lastname' type='string'/>
               </div>
               <div>
                   <label>EMAIL ADDRESS</label>
                   <input id='email' type='email' />
               </div>
               <div>
                   <label>COMPANY</label>
                   <input id='company' type='string'/>
               </div>
               <div style={{marginRight: 'auto'}}>
                   <Button text='Submit' className='form-btn'/>
               </div>
           </form>
           </div>
        </div>
    )
}