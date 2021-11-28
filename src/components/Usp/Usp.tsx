import './Usp.scss'
import {uspData} from '../../data/data'

export const Usp = () => {
    return(
        <div className='usp-div'>
        <div className='usp-container'>
            <h1>Why join Part-time Entrepreneurs Network?</h1>
            <p>We help people start and grow great businesses</p>
            <div>
                <div className='usp-grid'>
             {uspData.map(data => {
                 return(
                     <div key={data.title}>
                    <img src={data.image}/>
                    <h3>{data.title}</h3>
                    <p>{data.details}</p>
                    </div>
                 )
             })}
                </div>
            </div>
        </div>
        </div>
    )
}