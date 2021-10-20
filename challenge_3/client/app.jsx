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
        <td>Ha</td>
        <td>Ha</td>
        <td>Ha</td>
      </tr>
      <tr>
        <td>Ha</td>
        <td>Ha</td>
        <td>Ha</td>
      </tr>
      <tr>
        <td>Ha</td>
        <td>Ha</td>
        <td>Ha</td>
      </tr>
      </tbody>
    </table>
    )
  }
}

class AnotherTest extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>AHA. GOT EM</h1>
      </div>
    )
  }


}

const testClick = (props) => {
  ReactDOM.render(<AnotherTest />, document.getElementById('root'))
}

ReactDOM.render(<App />, document.getElementById('root'))