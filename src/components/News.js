import React, { Component } from 'react'
import Loadings from './Loadings';
import Newitem from './Newitem'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


// import Newsitem from './components/Newsitem';

export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize : 15,
        category : 'general',
    };
    static propTypes = {
        country: PropTypes.string,
        pageSize : PropTypes.number,
        category : PropTypes.string,
    };
    articles = [
        {
        "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
        },
        "author": null,
        "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
        "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
        "publishedAt": "2020-04-27T11:41:47Z",
        "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
        "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
        },
        "author": null,
        "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
        "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
        "publishedAt": "2020-03-30T15:26:05Z",
        "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
        ]
    constructor(props){
        super(props);
        this.state = {
            articles : [],
            loading : true,
            page : 1,
            pageSize : 15,
            totalArticles:0
        };
        document.title = `${this.props.category} - News monkey`;
    }
    async updateNews(pageNumber){
        this.props.setProgress(10);
        this.setState({loading:true})
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=88671c775ffd4948ae0d365ddd5390e2&pageSize=${this.props.pageSize}&page=${this.state.page}`
        let data =await fetch(url)
        let parseData = await data.json()
        this.props.setProgress(10);

        this.setState({loading:false})
        // console.log(parseData)
        this.setState({articles: parseData.articles,totalArticles: parseData.totalResults})
        this.props.setProgress(100);

    }
    async componentDidMount(){
        this.updateNews()
    }
    handleNextClick = async () =>{
        this.setState({
            page:this.state.page+1,
        })
        this.updateNews()

    }
    handlePrevClick = async ()=>{
        this.setState({
            page:this.state.page-1,
        })
        this.updateNews()

    }
    fetchMoreData = async () => {
        this.setState({page:this.state.page+1})
        this.setState({loading:true})
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=88671c775ffd4948ae0d365ddd5390e2&pageSize=${this.props.pageSize}&page=${this.state.page}`
        let data =await fetch(url)
        let parseData = await data.json()
        this.setState({loading:false})
        // console.log(parseData)
        this.setState({articles: this.state.articles.concat(parseData.articles),totalArticles: parseData.totalResults})
        
      };
    render() {
        return (
            
            <div className="container my-3 text-center">
                <h2>News monkey - top headline</h2>
                {this.state.loading && <Loadings/>};
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalArticles}
                    loader={<Loadings/>}
                    >
                <div className="container">
                <div className="row">
                {this.state.articles.map((elements)=>{
                    return <div className="col-md-4" key={elements.url}>
                    
                    <Newitem title={elements.title?elements.title.slice(0,45) : ""} description={elements.description? elements.description.slice(0,88):""} imageUrl={elements.urlToImage?elements.urlToImage:""} newsUrl={elements.url?elements.url:""} author={elements.author?elements.author:"unkonwn"} date={elements.publishedAt}/>
                    </div>
                })}
                </div>
                </div>
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between">
                <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; privious</button>
                <button disabled={this.state.page >= Math.ceil(this.state.totalArticles/15)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div> */}
            </div>
        )
    }
}

export default News
