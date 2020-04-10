import React from 'react';
import axios from 'axios';
import Card from './components/Card'
import Nav from './components/Nav'
import './App.css'


class App extends React.Component {
  constructor () {
      super();
      this.state = {
          card: []
      }
  }

  componentDidMount() {
      axios.get(`http://localhost:5000/api/players`)
      .then(response => {
          console.log(response.data)
          this.setState({
              card: response.data
          })
      })
  }

  render() {

    console.log(`card:`, this.state.card)

      return (
          <div className="myApp">

            <Nav />

            <div className="cardBox">
              {this.state.card && this.state.card.map((item) => {
                return <Card name={item.name} country={item.country} searches={item.searches}/>
              })}
            </div>

          </div>
      )
  }
}

export default App;