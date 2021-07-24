import React from 'react'
import Layout from "../components/layout";
import Timer from "../components/timer"
import Particles from 'react-particles-js';

const particlesOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 600
      }
    }
  }
};

class IndexPage extends React.Component {
  state={
    email: ''
  }
  handleV = (e) => {
    this.setState({ email: e.target.value })
  }
  render() {
    return(
      <Layout>
        <div className="bgimg">
          <div className="bg-layout">
          <Particles className="particles" params={particlesOptions} />
            <div className="middle">
              <div className="content">
                <div className="mb-auto"></div>
                <div className="px-3">
                  <h1 className="h1">HALF LAB RESEARCH</h1>
                  <h2 className="h2">Site under construction</h2>
                </div>
              </div>
            </div>
            <div className="bottomleft" style={{'text-align':'center', width:'100%'}}>
              <p className="small fst-italic fs-6">The website is implemented the content of the novel European privacy rules.</p>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
