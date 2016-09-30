import React, { Component } from 'react'
import '../styles/location.sass'
import { Link } from 'react-router'
import listings from './listings.json'

class Location extends Component {
  static propTypes = {
    coordinates: React.PropTypes.object
  }

  render () {
    const { coordinates } = this.props
    console.log(coordinates)
    const listing = listings.allLocations.find((listing) => {
      return listing.Slug === this.props.params.Slug
    })

    return (
      <div>
        <Link to='/'><button type='button' className='dropdown-toggle'><span>Back to List </span></button></Link>
          <div className='complete-images'>
          <img src={listing.Photo}/>
          </div>
          <div className='complete-text'>
          <h2>{listing.Title}</h2>
          <h3><b>Amenities: </b>{listing.ActivitiesAmenities}</h3><h3><b>Hours: </b>{listing.Hours} | <b>Entrance/Parking Fee: </b>{listing.EntranceFee}</h3>
          <h3><a href={listing.Website}>Visit Website</a> <a href={listing.Phone}>Call Phone</a></h3>
          <p>{listing.Description}</p>
          <iframe className='map'
src={`https://www.google.com/maps/embed/v1/place?q=${listing.Address}&key=AIzaSyCKH6qV66K3QlCU5d-Xr3tX9uEbBE6AQ_o`} allowfullscreen></iframe>
          <a href={`https://www.google.com/maps/dir/${coordinates.latitude},${coordinates.longitude}/${listing.Address}`} target="_blank"><button type='button' className='directions'>Open Directions</button></a>
          </div>
      </div>
    )
  }
}
export default Location
