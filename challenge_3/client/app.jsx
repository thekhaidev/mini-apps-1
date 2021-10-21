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
  }

  render() {
    return (
      <div>
        <form method="post" action="/">
          <label>Name:</label>
          <input></input>
          <br />
          <label>Email</label>
          <input></input>
          <br />
          <label>Password</label>
          <input></input>
        </form>
        <br />
        <button onClick={homePage}>Back</button>
        <button onClick={nextClick}>Next</button>

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
          <label>Address:</label>
          <input></input>
          <br />
          <label>Line 1:</label>
          <input></input>
          <br />
          <label>Line2:</label>
          <input></input>
          <label>City:</label>
          <input></input>
          <br />
          <label>State:</label>
          <input></input>
          <br />
          <label>Zipcode</label>
          <input></input>
        </form>
        <br />
        <button onClick={testClick}>Back</button>
        <button onClick={thirdClick}>Next</button>


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
          <label>Credit Card:</label>
          <input></input>
          <br />
          <label>Expiry:</label>
          <input></input>
          <br />
          <label>CVV:</label>
          <input></input>
          <label>Billing Zip:</label>
          <input></input>
        </form>
        <br />
        <button onClick={nextClick}>Back</button>
        <button onClick={FinalClick}>Next</button>
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
        <button onClick={homePage}>Back</button>
        <button onClick={console.log('Placeholder')}>Confirm Purchase</button>
      </div>
    )
  }
}




// Functions to control rendering
const testClick = (props) => {
  ReactDOM.render(<Form1 />, document.getElementById('root'))
}

const nextClick = (props) => {
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


// Initial rendering
ReactDOM.render(<App />, document.getElementById('root'))