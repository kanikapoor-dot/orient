import React from "react";
import DocterBatchCard from "../../card/DoctorBatchCard/DoctorBatchCard";
import "./FindDoctor.css";

class FindDocter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      batchCard: [],
      search_doc: '',
    };
  }
  componentDidMount() {
    this.getDocList(this.state.search_doc);
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value})
  }

  submitSearch(e){
    e.preventDefault()
    this.getDocList(this.state.search_doc)
  }

  getDocList(search_doc) {
    const temp = [];

    const body = JSON.stringify({
      search_doc: search_doc
    })

    fetch("http://localhost:4000/find_doc",{
      method: "POST",
      headers:{
        "Content-type":"application/json"
      },
      body
    })
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
        <header className="search-doc">
          <input type="text"
          placeholder="Find doctors by specialist eg.Dental"
          name="search_doc"
          id="search_doc"
          onChange = {this.onChange.bind(this)}
          />
          <input type="submit" 
          title="Search"
          name="submit"
          value="Search"
          onClick={this.submitSearch.bind(this)}
          />
        </header>
          <main className="list-container">
        {this.state.batchCard ? this.state.batchCard : <h1>Loading...</h1>}
        </main>
      </div>
    );
  }
}

export default FindDocter;
