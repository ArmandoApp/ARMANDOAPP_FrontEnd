import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import ListOfService from './ListOfService'

const App = () => (
  <MuiThemeProvider>
    <ListOfService />
  </MuiThemeProvider> 
);

export default App;