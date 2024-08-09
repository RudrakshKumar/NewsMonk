import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const spinnerStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1000
};

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [loading, setLoading] = useState(false);

    const UpdateNews = async () => {
        setLoading(true);
        props.setProgress(0);
        const apiKey = process.env.REACT_APP_API_KEY;
        console.log(apiKey);
        // const proxy = 'https://cors-anywhere.render.com/'; // Use if needed
        let url = `https://newsdata.io/api/1/latest?apikey=${apiKey}&language=en&category=${props.category}`;
        props.setProgress(25);
        let data = await fetch(url);
        props.setProgress(50);
        let parsedData = await data.json();
        props.setProgress(75);
        setPage(parsedData.nextPage);
        setArticles(parsedData.results);
        setTotalResults(parsedData.totalResults);
        props.setProgress(100);
        setLoading(false);
    }

    useEffect(() => { UpdateNews(); }, []);

    const fetchMoreData = async () => {
        const apiKey = process.env.REACT_APP_API_KEY;
        // const proxy = 'https://cors-anywhere.render.com/'; // Use if needed
        let url = `https://newsdata.io/api/1/latest?apikey=${apiKey}&language=en&category=${props.category}&page=${page}`;
        console.log(url);
        let data = await fetch(url);
        let parsedData = await data.json();
        setPage(parsedData.nextPage);
        setTimeout(() => {
            setArticles(articles.concat(parsedData.results));
        }, 500);
    };

    const capitalizeFirstLetter = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    return (
        <>
            <div className='container my-3'>
                <div style={{ marginTop: "80px" }}></div>
                <div className='container d-flex justify-content-center flex-grow-1' style={{ color: "gold", fontFamily: "cursive" }}>
                    <h3>&larr; {capitalizeFirstLetter(props.category)} Bulletins &rarr;</h3>
                </div>
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length < totalResults - 5}
                    loader={<Spinner />}
                >
                    <div className='container' style={spinnerStyle}>{loading && <Spinner />}</div>
                    <div className='container'>
                        <div className='row'>
                            {articles.map((element) => {
                                 if (element.dupliate == "false") {
                                    return (
                                        <div className='col-md-4' key={element.url}>
                                            <NewsItem
                                                title={element.title ? element.title.slice(0, 80) : ""}
                                                imgurl={element.image_url ? element.image_url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq8rRXu_m5FAcZWKEyLzHBYM8KFuUfwKuLEw&s"}
                                                newsUrl={element.link}
                                                author={element.creator}
                                                time={element.pubDate}
                                                NewsAgency={element.source_name}
                                            />
                                        </div>
                                    );
                                 }
                                return null;
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
export default News;
