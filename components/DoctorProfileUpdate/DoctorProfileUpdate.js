import React from "react";
import "./DoctorProfileUpd.css";

export default class DoctorProfileUpdate extends React.Component {
  constructor(props) {
    super(props);

  
    this.state = {
      username: '',
      firstname: '',
      lastname: '',
      imr: '',
      hospitalname: '',
      address: '',
      specialist: '',
      openat: '',
      closeat: '',
      email: localStorage.getItem("userToken"),
      usertype: localStorage.getItem("usertype"),
      storeData: {},
    };
    
    this.onChange = this.onChange.bind(this)
    this.submitDocterUpdate = this.submitDocterUpdate.bind(this);
  }
  componentDidMount(){
    this.getUserData()
  }


 
  getUserData = () => {
    const body = JSON.stringify({
      email: this.state.email,
      usertype: this.state.usertype
    })

    fetch("http://localhost:4000/profile",{
      method: "POST",
      headers:{
        "Content-type": "application/json"
      },
      body
    })
    .then(respon => respon.json())
    .then(resp => {
      this.setState({storeData: resp[0]})
      console.log(this.state.storeData)
    })
    .catch(err => console.log(err))
  }


 

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitDocterUpdate = (e) => {

    e.preventDefault();
    
    const body = JSON.stringify({
      username: this.state.firstname,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      imr: this.state.imr,
      hospitalname: this.state.hospitalname,
      address: this.state.address,
      specialist: this.state.specialist,
      openat: this.state.openat,
      closeat: this.state.closeat,
      usertype: this.state.usertype,
      email: this.state.email,
    });

    fetch("http://localhost:4000/update_profile", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body,
    })
      .then((reponse) => reponse.json)
      .then((res) => {
        console.log(res)
        alert("Update Successfull! LogOut and Login again to see effect")
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="d-contain">
        <div className="D-form">
          <h1>Profile Update</h1>
          <form className="form-horiz">
            <input
              type="text"
              name="firstname"
              placeholder={this.state.storeData.firstname ? this.state.storeData.firstname : "First Name"}
              id="firstname"
              onChange={this.onChange}
            />
            <input
              type="text"
              name="lastname"
              placeholder={this.state.storeData.lastname ? this.state.storeData.lastname : "Last Name"}
              id="lastname"
              onChange={this.onChange}
            />
            <input
              type="text"
              name="username"
              placeholder = {this.state.storeData.username ? this.state.storeData.username : "User Name"}
              onChange={this.onChange}
              id="username"
            />
            <input
              type="text"
              name="email"
              placeholder={this.state.storeData.email}
              id="email"
              disabled
            />
            <input
              type="text"
              name="imr"
              placeholder={this.state.storeData.imr ? this.state.storeData.imr : "Indian Medical Registration No"}
              onChange={this.onChange}
            />
            <input
              type="text"
              name="hospitalname"
              placeholder={this.state.storeData.hospital_name ? this.state.storeData.hospital_name : "Hospital Name"}
              onChange={this.onChange}
            />
            <textarea
              placeholder="Enter Your Hospital Address"
              name="address"
              id="address"
              onChange={this.onChange}
              placeholder= {this.state.storeData.address ? this.state.storeData.address : "Address"}
            />
            <br />
            <label>Working Hours :</label>
            <div className="workhour">
              <label>From:</label>
              <input
                type="time"
                name="openat"
                onChange={this.onChange}
                placeholder= {this.state.storeData.openat ? this.state.storeData.openat : "00:00"}
              />
              <label>To:</label>
              <input
                type="time"
                name="closeat"
                onChange={this.onChange}
                placeholder= {this.state.storeData.closeat ? this.state.storeData.closeat : "00:00"}
              />      
            </div>
            <input
              type="text"
              placeholder="Specialist"
              name="specialist"
              id="specialist"
              onChange={this.onChange}
              placeholder= {this.state.storeData.specialist ? this.state.storeData.specialist : "Specialist"}
            />
            <input
              type="submit"
              title= "Update Profile"
              name="updateProfile"
              id="updateProfile"
              onClick={this.submitDocterUpdate}
            />
          </form>
        </div>
      </div>
    );
  }
}
