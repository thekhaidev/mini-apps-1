// Components
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

  constructor(props) {
    super(props)

    this.state = {
      name: "",
      email: "",
      password: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zipcode: "",
      cc: "",
      cc_exp: "",
      ccv: "",
      billingzip: ""
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }



  handleChange(e) {
    const name = e.target.name
    const value = e.target.value
    this.setState({[name]: value});
    console.log(name, value)
  }

  handleSubmit(e) {
    ReactDOM.render(<Form2 data={this.state} handleChange={this.handleChange}/>, document.getElementById('root'))
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form id="form1" onSubmit={this.handleSubmit}>
          <label htmlFor="name" id="name">Name:
            <input id="name" type="text" name="name" value={this.state.value} onChange={this.handleChange}></input>
          </label>
          <br />
          <label>Email:
            <input id="email" name="email" value={this.state.value} onChange={this.handleChange}></input>
          </label>
          <br />
          <label>Password:
            <input id="password" name="password" value={this.state.value} onChange={this.handleChange}></input>
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
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      email: "",
      password: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zipcode: "",
      cc: "",
      cc_exp: "",
      ccv: "",
      billingzip: ""
    }
  }



  render() {

    return (
      <div>
        <form>
          <label>Address 1:
            <input name="address1" value={this.state.value} onChange={this.props.handleChange}></input>
          </label>
          <br />
          <label>Address 2:
            <input name="address2" value={this.state.value} onChange={this.props.handleChange}></input>
          </label>

          <label>City:
            <input name="city" value={this.state.value} onChange={this.props.handleChange}></input>
          </label>

          <br />
          <label>State:
            <input name="state" value={this.state.value} onChange={this.props.handleChange}></input>
          </label>

          <br />
          <label>Zipcode:
            <input name="zipcode" value={this.state.value} onChange={this.props.handleChange}></input>
          </label>

          <br />
          <button type="button" onClick={testClick}>Back</button>
          <button>Next</button>
        </form>
      </div>
    )
  }
}

class Form3 extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <form>
          <label>Credit Card:
            <input></input>
          </label>

          <br />
          <label>Expiry:
            <input></input>
          </label>

          <br />
          <label>CVV:
            <input></input>
          </label>

          <label>Billing Zip:
            <input></input>
          </label>

          <br />
          <button type="button" onClick={nextClick}>Back</button>
          <button onClick={FinalClick}>Next</button>
        </form>

      </div>
    )
  }
}

class FinalForm extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        Test
        <br />
        <button type="button" onClick={homePage}>Back</button>
        <button onClick={console.log('Placeholder')}>Confirm Purchase</button>
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