import React from 'react'

import './About.css'

export default () => (
  <div className='About'>
    <article>
      <h1>Background</h1>
      <section>
        <p>
          Recycle Nashville is the brainchild of two Nashvillians interested in
          providing citizens with a simplified resource to learn and practice
          residential recycling in Nashville.
        </p>
        <p>
          This project wouldn’t be possible without the broad existing
          collection of <a target='_blank' href='http://www.nashville.gov/Public-Works/Neighborhood-Services.aspx'>
          recycling resources and services</a> provided by
          the <a target='_blank' href='https://www.nashville.gov/Public-Works'>
          Nashville Department of Public Works</a>. We love public servants!
        </p>
        <p>
          The list of recyclers is manually collected and reviewed for quality,
          but we still make mistakes. If you believe this list is incomplete or
          in error,
          please <a href='mailto:shenfieldmax+recycle-nashville-corrections@gmail.com'>contact
          us</a> with your suggestion.
        </p>
        <p>
          We also rely on volunteers to maintain and improve the site. If you
          are interesting in assisting with data collection and quality
          assurance, or you'd like to contribute to the development and
          maintenance of the site, check out our open list
          of <a target='_blank' href='https://github.com/mshenfield/recycle-nashville/issues'>technical
          and non-technical issues</a>.
        </p>
      </section>
    </article>
  </div>
)
