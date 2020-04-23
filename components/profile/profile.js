import React from 'react';
import './profile.css'
import PatientProfileUpdate from '../PatientProfileUpdate/PatientProfileUpdate'

class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showClickComp:null,
        }        
    }

    profileupdate = (e) => {
        e.preventDefault();       
        this.setState({showClickComp: <PatientProfileUpdate />})
    }

    trackrecord = (e) => {
        e.preventDefault();
    }

    Oppinments = (e) => {
        e.preventDefault();
    }


    render(){
        const patientprofile = (
            <ul>
            <li>       
                <button onClick={this.profileupdate.bind(this)}>        
                Profile Update
                </button>
            </li>
            <li>
            <button onClick={this.trackrecord.bind(this)}>  
                    Track Your Records
             </button>
            </li>
            <li>
            <button onClick={this.Oppinments.bind(this)}>  
                Oppoinments
                </button>
            </li>
          </ul>
        )



        return (
            <div className="profile-container">
                <header className="profile-header">
                    <nav className="profile-navbar">
                        {patientprofile}
                    </nav>
                </header>
                <main className="showClickComp">  
                 {this.state.showClickComp}
                </main>
            </div>
        )
    }
}

export default Profile