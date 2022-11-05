import React from "react"
import Layout from "../components/Layout"

import { base_url } from "../env/globals"

export default function Home() {
  return (
    <Layout>
      <div className="container text-center">
        <div className="row" >
          <div className="col p-0">
            <img src={`${base_url}imgs/faceFocusWaterpixels.png`} className="w-100" alt="andres_face" />
            <p>Hi!</p>
            <p>
              This is my personal web page.
            </p>
            <p>
              This personal website itself is the product of a hand-ons self-study project in which I was learning how Flexbox and CSS grid works in practice.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
