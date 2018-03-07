import React from 'react'

//Example of how to make a basic json object array processor which outputs html

const processDataArray = (props) => {
  let hotelInfo = props.hotelInformation.map(function (data, i) {
    return (
      <div id={'hotel'+i} className='row' key={i}>
        <div className="col-md-7 col-sm-7">
          <img className="img-responsive" src={data.image} alt="City Hotel"/>
        </div>
        <div  className="col-md-5 col-sm-5" >
          <h3>{data.title}</h3>
          <p> {data.body}</p>
          <p>
            <strong>Tel:&nbsp;</strong>{data.telephone}<br/>
            <strong>Email:&nbsp;</strong><a href={'mailto:'+data.email}>data.email</a><br/>
            <strong>Web: </strong><a href={data.web}>{data.web}</a>
          </p>
          <a className="btn btn-primary" href={data.web}>Book Now <i className="fa fa-angle-right"></i></a>
        </div>
      </div>
    )
  })
  return hotelInfo
}

//how to use that processor
const Hotel = (props) => {
  return (
    <div id='hotels'>
      {processDataArray(props)}
    </div>
  )
}

export default Hotel
