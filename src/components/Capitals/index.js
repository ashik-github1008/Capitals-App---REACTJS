import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {country: countryAndCapitalsList[0].country}

  onChangeDropDown = event => {
    const filterCountry = countryAndCapitalsList.filter(
      eachCountry => eachCountry.id === event.target.value,
    )
    this.setState({country: filterCountry[0].country})
  }

  render() {
    const {country} = this.state

    return (
      <div className="app-container">
        <div className="main-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div>
            <select
              id="options"
              name="options"
              onChange={this.onChangeDropDown}
              className="select-element"
            >
              {countryAndCapitalsList.map(eachCountry => (
                <option value={eachCountry.id} key={eachCountry.id}>
                  {eachCountry.capitalDisplayText}
                </option>
              ))}
            </select>
            <label htmlFor="options">is capital of which country?</label>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
