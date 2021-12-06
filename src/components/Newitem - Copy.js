import React, { Component } from 'react'

export class Newitem extends Component {

    
    render() {
        let {title,description,imageUrl,newsUrl,author,date} = this.props
        return (
            <div>
                <div className="card">
                <img src={!imageUrl?"https://images.newindianexpress.com/uploads/user/imagelibrary/2021/12/1/w600X390/covidshield-PTI_1_2.jpg":imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}......</p>
                    <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read more</a>
                    
                </div>
                </div>
            </div>
        )
    }
}

export default Newitem
