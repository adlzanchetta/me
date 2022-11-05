import React from "react"
import Layout from "../components/Layout"

export default function CV() {
  return (
    <Layout>
      <div className="container">
        <div className="row"><div className="col-12">
          <h1>Curriculum Vitæ</h1>
          <section>
            <h2>Interests</h2>
            <p>Web development.</p>
          </section>
          <section>
            <h2>Work experience</h2>
            
          </section>
          <section>
            <h2>Technical collaborations</h2>
          </section>
          <section>
            <h2>Education</h2>
            <ul>
              <li>
                <p><strong>Graduate studies - PhD Level</strong> | McMaster University</p>
                <p>From 2018-Sep. to Current</p>
              </li>
              <li>
                <p><strong>MSc Degree</strong> | The University of Iowa</p>
                <p>From 2015-May to 2017-May</p>
              </li>
              <li>
                <p><strong>Bachelor Degree in Environmental Engineering</strong> | Unesp</p>
                <p>From 2010-Jan to 2014-Dec</p>
              </li>
              <li>
                <p><strong>Bachelor Degree in Computer Sciences</strong> | Unicamp</p>
                <p>From 2006-Jan to 2009-Dec</p>
              </li>
            </ul>
          </section>
        </div></div>
      </div>
    </Layout>
  )
}