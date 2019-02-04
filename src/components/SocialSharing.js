import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faSnapchatGhost } from '@fortawesome/free-brands-svg-icons'

library.add(faFacebookF, faTwitter, faInstagram, faSnapchatGhost)

class SocialSharing extends React.Component {
  render() {
    return (
      <div>
        <h2> Share PearCare on Social Media! </h2>

        <Grid container direction="row" justify="center">
          <Grid item xs={2}>
            <FontAwesomeIcon
              icon={['fab', 'facebook-f']}
              className="facebook icon"
            />
          </Grid>

          <Grid item xs={2}>
            <FontAwesomeIcon
              icon={['fab', 'twitter']}
              className="twitter icon"
            />
          </Grid>

          <Grid item xs={2}>
            <FontAwesomeIcon
              icon={['fab', 'instagram']}
              className="instagram icon"
            />
          </Grid>

          <Grid item xs={2}>
            <FontAwesomeIcon
              icon={['fab', 'snapchat-ghost']}
              className="snapchat icon"
            />
          </Grid>
        </Grid>
      </div>
    )
  }
}
export default SocialSharing
