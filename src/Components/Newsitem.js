import React from 'react'

const Newsitem = (props) => {
    let {title,description,imageUrl,newsUrl,author,date,source} = props;
    return (
      <div className='my-3'>
        <div className="card" >
          <div>
            <span className ="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{zIndex:'1',left:"80%"}}>
            {source}
          </span>
          </div>
          <img src={!imageUrl?"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg":imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary">By {author?author:"Unknown"} on {new Date(date).toGMTString()} </small></p>
            <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
}

export default Newsitem
