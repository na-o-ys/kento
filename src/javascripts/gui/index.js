import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { createStore } from "redux"
import reducers from "./reducers"
import KentoApp from "./container/KentoApp.js"
import JKFPlayer from "json-kifu-format"

function start(game, turn) {
  let store = createStore(
    reducers,
    { game, turn }
  )

  render(
    <Provider store={store}>
      <KentoApp />
    </Provider>,
    document.getElementById("main")
  )
}

export default start
