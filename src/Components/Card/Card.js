import './Card.css'
import List from '../List/List';
import Plans from '../Plans/Plans';
import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const Card = (props)=> {
    return(
        <div className={`Card ${props.plan.name}`}>
            <h1 className="Plan-name">{props.plan.name}</h1>
            <h6 className="price">{props.plan.price}<span className="period">/month</span></h6>
            <hr/>
            <ol className="list">
            {
                props.plan.available.map((item, index) => {
                    return <li className={`available item-${index}`}><FaCheck/> <span><b>{item.highlighted}</b></span><span>{item.normal}</span></li>
                })
            }
            {
                props.plan.notavailable.map((item) => {
                    return <li className="not-available"><FaTimes/><span><b>{item.highlighted}</b></span><span> {item.normal}</span></li>
                })
            }
            </ol>
            <button className="button" type="submit">BUTTON</button>
            {/* <div className="available" >{props.plan.available}</div> */}
            {/* <div className="notAvailable">{props.plan.notAvaiable}</div> */}
        </div>
    );
}

export default Card;