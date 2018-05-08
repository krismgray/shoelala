import React from 'react';
import { Header, Button, Divider, Dropdown } from 'semantic-ui-react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Home.css';


const options = [
  { key: 'wedding', text: 'Wedding Shoes', value: 'wedding'},
  { key: 'birth', text: 'Childs Birth', value: 'birth'},
  { key: 'job', text: 'New Job', value: 'job'},
  { key: 'fancy', text: 'Feeling Fancy', value: 'fance'},
  { key: 'casual', text: 'Casual', value: 'casual'},
]

class Home extends React.Component {
  state = { category: '' }


  render() {
    let { category } = this.state;
    return(
      <div>
        <div className='topmenu'>
          <div className='myshoes'>
            <Link to='/'>
              <Button secondary>Home</Button>
            </Link>
            <Link to='/MyShoes'>
              <Button primary>My Shoes</Button>
            </Link>
          </div>
          <div className='title'>
            <p>SHOE LALA!</p>
          </div>
        </div>
        <Divider />
        <div className='dropdown'>
          <Dropdown
            placeholder="Filter by category"
            selection
            options={options}
            onChange={ (e, data) => this.setState({ category: data.value }) }
            value={category}
          />
        </div>
        <div className='body'>

        </div>
      </div>
    )
  }

}

export default Home;
