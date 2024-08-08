import React, { useEffect,useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const spinnerStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1000
};

const News =(props)=> {
    
    const [articles, setarticles] = useState([])
    const [page, setpage] = useState(1)
    const [totalResults, settotalResults] = useState(0)
    const[loading,setLoading] = useState(0);

    const UpdateNews = async ()=> {
        setLoading(1);
        props.setProgress(0);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=98f030c033cc4925b44f15c560845593&nt&page=${page}&pageSize=${props.pageSize}`;
        props.setProgress(25);
        let data = await fetch(url);
        props.setProgress(50);
        let parsedData = await data.json();
        props.setProgress(75);
        setarticles(parsedData.articles);
        settotalResults(parsedData.totalResults);
        props.setProgress(100);
        setLoading(0);
    }
    
  
    useEffect(()=>{UpdateNews();}, [])

    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=98f030c033cc4925b44f15c560845593&nt&page=${page+1}&pageSize=${props.pageSize}`
        setpage(page+1);
        let data = await fetch(url);
        let parsedData = await data.json();
        setTimeout(() => {
            setarticles(articles.concat(parsedData.articles))
        }, 500);
    };

    const capitalizeFirstLetter = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

        return (
            <> 
                <div className='container my-3'>
                    
                    <div style={{marginTop:"80px"}}></div> 
                    <div className='container d-flex justify-content-center flex-grow-1' style={{color:"gold",fontFamily:"cursive"}}><h3>&larr; Top {capitalizeFirstLetter(props.category)} Bulletins &rarr;</h3></div>
                    <InfiniteScroll
                        dataLength={articles.length}
                        next={fetchMoreData}
                        hasMore={articles.length < totalResults -10 }
                        loader={<Spinner/>}
                    >
                        <div className='container' style={spinnerStyle}>{loading && <Spinner/>}</div>
                        <div className='container'>
                            <div className='row'>
                                {articles.map((element) => {
                                     if (element.url !== "https://removed.com"){
                                        return <div className='col-md-4' key={element.url}>
                                            <NewsItem title={element.title ? element.title.slice(0, 80) : ""}
                                                imgurl={element.urlToImage ? element.urlToImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq8rRXu_m5FAcZWKEyLzHBYM8KFuUfwKuLEw&s"}
                                                newsUrl={element.url}
                                                author={element.author}
                                                time={element.publishedAt}
                                                NewsAgency={element.source.name} />
                                        </div>
                                    }
                                })}
                            </div>
                        </div>
                    </InfiniteScroll>
                </div><br />
            </>
        )
    }


News.defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'general',
    NewsHeading: 'News'
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    NewsHeading: PropTypes.string
}
export default News
