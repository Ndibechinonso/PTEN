import { Button } from '../Button/Button'
import './IntroText.scss'
export const IntroText = () =>{
    return(
        <div className='intro' id='intro'>
        <h1>Find the right <span style={{fontWeight: '700', color: '#55f'}}>support</span> to start and grow<br /> your business today.</h1>
       {/* <div className='search-container'> 
       <div className='input-container'><input type='text' placeholder='Search' />
       <select>
            <option>All</option>
            <option>Content</option>
            <option>Advicers</option>
            <option>Services</option>
            <option>Webinars</option>
            <option>Others</option>
        </select>
        </div>
            
            <Button text='Search' class='buttonClass'/>
            </div> */}
            <small>Not sure where to start? <span style={{color: '#55f', fontWeight: '700'}}>Make a Plan</span> today.</small>
    </div>
    )
}