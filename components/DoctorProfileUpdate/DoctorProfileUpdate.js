import React from "react";
import "./DoctorProfileUpd.css";

export default class DoctorProfileUpdate extends React.Component {
  constructor(props) {
    super(props);
    const data = JSON.parse(localStorage.getItem("userToken"))
    this.state = {
      username: data.username,
      firstname: data.firstname,
      lastname: data.lastname,
      imr: data.imr,
      hospital_name: data.hospital_name,
      address: data.address,
      specialist: data.specialist,
      openat: data.openat,
      closeat: data.closeat,
      email: data.email,
      usertype: localStorage.getItem("usertype"),
      storeData: {},
    };
    
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
      localStorage.setItem("userToken",JSON.stringify(resp[0]))
      this.setState({storeData: resp[0]})
    })
    .catch(err => console.log(err))
  }


 

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitDocterUpdate = (e) => {
    e.preventDefault();
      const body = JSON.stringify({
      username: this.state.username,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      imr: this.state.imr,
      hospital_name: this.state.hospital_name,
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
        alert("Update Successfull!")
        this.props.history.push('/')
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
              required
            />
            <input
              type="text"
              name="lastname"
              placeholder={this.state.storeData.lastname ? this.state.storeData.lastname : "Last Name"}
              id="lastname"
              onChange={this.onChange}
              required
            />
            <input
              type="text"
              name="username"
              placeholder = {this.state.storeData.username ? this.state.storeData.username : "User Name"}
              onChange={this.onChange}
              id="username"
              required
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
              required
            />
            <input
              type="text"
              name="hospital_name"
              placeholder={this.state.storeData.hospital_name ? this.state.storeData.hospital_name : "Hospital Name"}
              onChange={this.onChange}
              required
            />
            <textarea
              name="address"
              id="address"
              onChange={this.onChange}
              placeholder= {this.state.storeData.address ? this.state.storeData.address : "Address"}
              required
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
                required
              />
              <label>To:</label>
              <input
                type="time"
                name="closeat"
                onChange={this.onChange}
                placeholder= {this.state.storeData.closeat ? this.state.storeData.closeat : "00:00"}
                required
              />      
            </div>
            <input
              type="text"
              name="specialist"
              id="specialist"
              onChange={this.onChange}
              placeholder= {this.state.storeData.specialist ? this.state.storeData.specialist : "Specialist"}
              required
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
