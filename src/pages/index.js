import React from "react"
import Layout from "../components/Layout"

import { base_url } from "../env/globals"

export default function Home() {
  return (
    <Layout>
      <div className="container text-center">
        <div>Hello world!</div>
        <img src={`${base_url}imgs/faceFocusWaterpixels.png`} alt="andres_face" />
      </div>
    </Layout>
  )
}
