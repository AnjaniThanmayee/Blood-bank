import HospitalListItem from "../HospitalListItem/listitem"
import 'bootstrap/dist/css/bootstrap.css';
import './hospitallist.css'
import { Component } from "react";

class HospitalList extends Component{
    state = {searchInput: ''}

  onSearchInputchange = event => {
    this.setState({searchInput: event.target.value})
  }

    render(){
        const {hlist} = this.props
        const {searchInput} = this.state
        const value = searchInput.toLowerCase()
        const filteredList = hlist.filter(eachPlace =>
          eachPlace.name.toLowerCase().includes(value),
        )
        return(
            <div className="bg-container">
            <div className="searchbox">
              <div>
                <input
                  className="search-input"
                  placeholder="Search"
                  type="search"
                  onChange={this.onSearchInputchange}
                />
              </div>
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
                  alt="search icon"
                  className="search-icon"
                />
              </div>
            </div>
    
            <ul className="places-container">
              {filteredList.map(each => (
                <HospitalListItem key={each.id} hospitalDetails={each} />
              ))}
            </ul>
          </div>
        )
    }
}

export default HospitalList