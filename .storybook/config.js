import { configure, addDecorator } from '@kadira/storybook'
import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const req = require.context('../src', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach(req)
}

addDecorator(story => (
  <MuiThemeProvider>
    {story()}
  </MuiThemeProvider>
))

configure(loadStories, module)
