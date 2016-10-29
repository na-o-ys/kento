// @flow
import React from "react"
import ReactDOM from "react-dom"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import RaisedButton from "material-ui/RaisedButton"

const App = () => (
  <MuiThemeProvider>
    <SampleComponent />
  </MuiThemeProvider>
)

const SampleComponent = () => (
  <RaisedButton label="Default" />
)

export const start = () => {
  ReactDOM.render(
    <App />,
    document.getElementById("main")
  )
}
