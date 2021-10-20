class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Yo this is an app</h1>
        <Test />
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
      <div>
        This is another test
      </div>
    )
  }
}



ReactDOM.render(<App/>, document.getElementById('root'))