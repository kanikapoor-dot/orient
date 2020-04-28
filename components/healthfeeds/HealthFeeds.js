import React, { Component } from 'react';
import FeedCard from '../../card/feedcard/Feeds';
import './/healthfeeds.css'

class HealthFeeds extends Component {
    constructor(props) {
        super(props);
        this.state = {
            healthfeed :[],
            url: "http://newsapi.org/v2/everything?q=health&language=en&pageSize=50&apiKey=5c44f45f1d46444d9803729299a8f8a5"
      
        }
        
    }
    componentDidMount(){
        this.gethealthfeeds(this.state.url)
    }

    gethealthfeeds = async(url) => {
        const feedholder = []
        let result = []

        await fetch(url)
        .then(res => res.json())
        .then(resp => {
            result = resp.articles
        });
   
        if(result){
            result.forEach((feed) => {
                const framed = <FeedCard key={feed.title} feeds={feed} />
                feedholder.push(framed)
            })
        }else {
            return null
        }
        this.setState({healthfeed: feedholder})
    }

    render() { 
        return ( 
            <div className="healthcontain">
            <div className="healthcard">
                {this.state.healthfeed.length > 0 ? this.state.healthfeed : <h1>loading .....</h1>}
            </div>
            </div>
         );
    }
}
 
export default HealthFeeds;