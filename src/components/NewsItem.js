import React from 'react'

const NewsItem =(props)=> {

    let {title,imgurl,newsUrl,author, time,NewsAgency} = props;
    return (
      <div className='my-3'>
        <div className="card " data-bs-theme="dark">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger " style={{left:'50%',zIndex:'1',fontFamily:"serif",color:"lightyellow"}}>{NewsAgency}</span>
            <img src={imgurl} className="card-img-top" alt="..."  style={{height:250}} />
            <div className="card-body">
                <h4 className="card-title" style={{fontFamily:"fangsong"}}>{title}...</h4>
                <p className="card-text"  style={{fontFamily:"Math"}}><small>By {(!author)?"Unknown":author} <br/> {new Date(time).toGMTString()}</small></p>
                <a href={newsUrl} target = "_blank" className="btn btn-sm btn-primary" style={{fontFamily:"emoji"}}> Read More </a>
            </div>
        </div>
      </div>
    
    )
  }


export default NewsItem
