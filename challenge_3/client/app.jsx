class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Yo this is an app</h1>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))