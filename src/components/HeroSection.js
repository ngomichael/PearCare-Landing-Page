import React from 'react'
import Grid from '@material-ui/core/Grid'
import Fab from '@material-ui/core/Fab'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { lightBlue } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    primary: lightBlue,
  }
})

class HeroSection extends React.Component {
  render() {
    return (
      <div id="hero">
        <Grid container direction="row">
          <Grid container direction="column" xs={8}>
            <h2> Find a Therapist and Find Mental Healing </h2>
            <p>
              PearCare makes it easy to find the therapist you need. <br />
              No more waiting: no more problems.{' '}
            </p>
            <MuiThemeProvider theme={theme}>
            <div class="hero-button">
              <Fab variant="extended" color="primary" aria-label="Add">
                Learn More
              </Fab>
            </div>
            </MuiThemeProvider>
          </Grid>
          <Grid container direction="column" justify="center" xs={4}>
            <img
              id="hero-image"
              src={require('../images/cute-pear.jpg')}
              alt="cute pear logo"
            />
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default HeroSection
