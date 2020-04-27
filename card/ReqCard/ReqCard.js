import React from 'react';
import  './reqCard.css'

class ReqCard extends React.Component {
    render() { 
        return ( 
            <div className="reqcard">
                <h4>{this.props.ele.patient_name}</h4>
                <div className="reqbutts">
                <button className="accept">Accept</button> 
                <button className="reject">Reject</button>
                </div>
            </div>
         );
    }
}
 
export default ReqCard;