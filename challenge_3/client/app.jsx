// require axios from 'axios'

// Components

var data = {}
class App extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div>
        <h1>Yo this is an app</h1>
        <Test />
        <button onClick={testClick}>Click me plz</button>
      </div>
    )
  }
}

class Test extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <table>
        <tbody>
          <tr>
            <td>Item 1</td>
            <td>Item 2</td>
            <td>Item 3</td>
          </tr>
          <tr>
            <td>Item 4</td>
            <td>Item 5</td>
            <td>Item 6</td>
          </tr>
          <tr>
            <td>Item 6</td>
            <td>Item 7</td>
            <td>Item 8</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

class Form1 extends React.Component {
  _isMounted = false

  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }


  handleChange(e) {

    const name = e.target.name
    const value = e.target.value
    data[name] = value
    console.log(data)
    console.log(name, value)
  }

  handleSubmit(e) {
    ReactDOM.render(<Form2 data={this.state} handleChange={this.handleChange} />, document.getElementById('root'))
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form id="form1" onSubmit={this.handleSubmit}>
          <label htmlFor="name" id="name">Name:
            <input id="name" type="text" name="name" onChange={this.handleChange}></input>
          </label>
          <br />
          <label>Email:
            <input id="email" name="email" onChange={this.handleChange}></input>
          </label>
          <br />
          <label>Password:
            <input id="password" name="password" onChange={this.handleChange}></input>
          </label>
          <br />
          <button type="button" onClick={homePage}>Back</button>
          <button type="submit">Next</button>
        </form>


      </div>
    )
  }


}

class Form2 extends React.Component {
  _isMounted = false;
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this._isMounted = true;
    console.log('props', this.props.data)
    console.log('state', this.state)
  }


  componentWillUnmount() {
    this._isMounted = false;
  }

  handleSubmit(e) {
    ReactDOM.render(<Form3 data={this.props.data} handleChange={this.props.handleChange} />, document.getElementById('root'))
    e.preventDefault();
    // console.log('This is doing something')

  }

  render() {

    return (
      <div>
        {/* {console.log(this.state)} */}
        <form id="form2" onSubmit={this.handleSubmit}>
          <label>Address 1:
            <input name="address1" onChange={this.props.handleChange}></input>
          </label>
          <br />
          <label>Address 2:
            <input name="address2" onChange={this.props.handleChange}></input>
          </label>

          <label>City:
            <input name="city" onChange={this.props.handleChange}></input>
          </label>

          <br />
          <label>State:
            <input name="state" onChange={this.props.handleChange}></input>
          </label>

          <br />
          <label>Zipcode:
            <input name="zip" onChange={this.props.handleChange}></input>
          </label>

          <br />
          <button type="button">Back</button>
          <button type="submit">Next</button>
        </form>
      </div>
    )
  }
}

class Form3 extends React.Component {
  _isMounted = false;
  constructor(props) {
    super(props)


    this.handleSubmit = this.handleSubmit.bind(this)


  }

  componentDidMount() {
    this._isMounted = true;
    // console.log('props', this.props.data)
    // console.log('state', this.state)
    // console.log(data)
    // this.setState({
    //   name: data.name,
    //   email: data.email,
    //   password: data.password,
    //   address1: data.address1,
    //   address2: data.address2,
    //   city: data.city,
    //   state: data.state,
    //   zip: data.zip,
    //   cc: data.cc,
    //   cc_exp: data.cc_exp,
    //   ccv: data.ccv,
    //   billzip: data.billzip
    // })
  }


  componentWillUnmount() {
    this._isMounted = false;
  }

  handleSubmit(e) {
    ReactDOM.render(<FinalForm data={this.props.data} handleChange={this.props.handleChange} />, document.getElementById('root'))
    e.preventDefault();
    // console.log('This is doing something')

  }

  render() {
    { console.log('state', this.state) }
    { console.log('props', this.props) }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Credit Card:
            <input name="cc" onChange={this.props.handleChange}></input>
          </label>

          <br />
          <label>Expiry:
            <input name="cc_exp" onChange={this.props.handleChange}></input>
          </label>

          <br />
          <label>CVV:
            <input name="ccv" onChange={this.props.handleChange}></input>
          </label>

          <label>Billing Zip:
            <input name="billzip" onChange={this.props.handleChange}></input>
          </label>

          <br />
          <button type="button" onClick={nextClick}>Back</button>
          <button type="submit">Next</button>
        </form>

      </div>
    )
  }
}

class FinalForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: data.name,
      email: data.email,
      password: data.password,
      address1: data.address1,
      address2: data.address2,
      city: data.city,
      state: data.state,
      zip: data.zip,
      cc: data.cc,
      cc_exp: data.cc_exp,
      ccv: data.ccv,
      billzip: data.billzip
    }
    this.handleCheckout = this.handleCheckout.bind(this)
  }

  handleCheckout(e){
    axios.post('/api/customers', {
     data: this.state
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
       <ol>
         <li>Name: {data.name}</li>
         <li>Email: {data.email}</li>
         <li>Address 1: {data.address1}</li>
         <li>Address 2: {data.address2}</li>
         <li>City: {data.city}</li>
         <li>State: {data.state}</li>
         <li>Zip: {data.zip}</li>
       </ol>

        <br />
        <button type="button" onClick={homePage}>Back</button>
        <button type="button" onClick={this.handleCheckout}>Confirm Purchase</button>
      </div>
    )
  }
}




// Functions to control rendering
const testClick = (props) => {
  ReactDOM.render(<Form1 />, document.getElementById('root'))
}

const nextClick = (e, props) => {
  // console.log(e)
  ReactDOM.render(<Form2 />, document.getElementById('root'))
}

const thirdClick = (props) => {
  // ReactDOM.render(<Form3 />, document.getElementById('root'))
  // console.log(this.props)
}
const FinalClick = (props) => {
  ReactDOM.render(<FinalForm />, document.getElementById('root'))
}

const homePage = (props) => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

// Functions to handle event changes
const testFunction = () => {
  console.log('This worked')
}


// Initial rendering
ReactDOM.render(<App />, document.getElementById('root'))