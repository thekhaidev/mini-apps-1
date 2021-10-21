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
    console.log(this.state)
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
  }

  render() {
    return (
      <div>
        <form>
          <label>Address 1:
            <input></input>
          </label>

          <br />
          <label>Address 2:
            <input></input>
          </label>

          <label>City:
            <input></input>
          </label>

          <br />
          <label>State:
            <input></input>
          </label>

          <br />
          <label>Zipcode:
            <input></input>
          </label>

          <br />
          <button type="button" onClick={testClick}>Back</button>
          <button onClick={thirdClick}>Next</button>
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
  console.log(e)
  ReactDOM.render(<Form2 />, document.getElementById('root'))
}

const thirdClick = (props) => {
  ReactDOM.render(<Form3 />, document.getElementById('root'))
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