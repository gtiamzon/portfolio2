import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Work from "../components/Work"
import About from "../components/about"
import Skills from "../components/skills"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Gerald Tiamzon | Full-Stack Developer" />
    <About></About>
    <Work></Work>
    <Skills></Skills>
    <Footer></Footer>
  </Layout>
)

export default IndexPage
