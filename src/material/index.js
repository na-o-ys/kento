// @flow
import injectTapEventPlugin from "react-tap-event-plugin"
import docReady from "doc-ready"
import { start } from "./App"

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

docReady(() => {
  start()
})