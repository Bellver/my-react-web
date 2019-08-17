import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Hero">
        <div className="HeroGroup">
          <h1>Hello 👋 <br />I'm Pablo Bellver</h1>
          <p>A thirty-three-year-old designer from Spain currently living in Alicante. I’m also Lead Designer at LynxView, but I'm here growing my unicorn horn.</p>
          <Link to="/contact"><button>Email Me</button></Link>
        </div>
    </div>
  </div>
)

export default IndexPage
