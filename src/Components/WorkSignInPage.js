import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import WorkSignIn from './WorkSignIn'

function App() {
  return (
    <MuiThemeProvider>
      <WorkSignIn />
    </MuiThemeProvider>
  );
}
  
  export default App;