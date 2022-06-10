import * as React from "react"
import GlitchClip from "react-glitch-effect/core/GlitchClip"
import GlitchText from "react-glitch-effect/core/GlitchText"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
   
    <GlitchText component='h1'>
           STUDIO MATERIE
           </GlitchText>
           <GlitchText component='h4' style="text-align:center;">
           hello@studiomaterie.com
           </GlitchText>

  
  </Layout>

)

export default IndexPage
 /* props: 
 * color1: string,
 * color2: string,
 * component: string,
 * duration: number,
 * iterationCount: string,
 * disabled: bool,
 * onHover: bool,
 * */