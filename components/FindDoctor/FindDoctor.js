import React from "react";
import DocterBatchCard from "../../card/DoctorBatchCard/DoctorBatchCard";
import "./FindDoctor.css";

class FindDocter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      batchCard: [],
    };
  }
  componentDidMount() {
    this.getDocList();
  }

  getDocList() {
    const temp = [];
    fetch("http://localhost:4000/find_doc")
    .then(res => res.json())
      .then((resp) => {
        
        if (resp) {
            resp.forEach((resu) => {
              const newtemp = <DocterBatchCard key={resu.email} pro={resu} />;
              temp.push(newtemp);
            });
          } else {
            return null;
          }
          this.setState({ batchCard: temp });
      })    
  }

  render() {
    return (
      <div className="finddoc-container">
          <div className="list-container">
        {this.state.batchCard ? this.state.batchCard : <h1>Loading...</h1>}
        </div>
      </div>
    );
  }
}

export default FindDocter;
