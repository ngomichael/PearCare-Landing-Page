import React from 'react'
import Grid from '@material-ui/core/Grid'
import Fab from '@material-ui/core/Fab'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  overrides: {
    MuiFab: {
      // override root styles for the button component.
      root: {
        // Name of the rule
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        color: 'white',
        maxHeight: 150,
        maxWidth: 175,
        padding: '5px 30px',
        marginLeft: 140,
      },
    },
  },
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
              <Fab variant="extended" color="primary" aria-label="Add">
                Learn More
              </Fab>
            </MuiThemeProvider>
          </Grid>
          <Grid container direction="column" justify="center" xs={4}>
            <img
              id="hero-image"
              src={require('../images/cute_pear.png')}
              alt="cute pear logo"
            />
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default HeroSection
