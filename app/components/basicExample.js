import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Prompt,
  Link
} from 'react-router-dom'

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
        <li><Link to="/redirect">Redirect</Link></li>        
      </ul>

      <hr />

      <Route path="/redirect" render={() => <Redirect to="/Redirectdemo" />} />
      <Prompt when={false} message="您确定您要离开当前页面吗？" />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
      <Route path="/Redirectdemo" component={Redirectdemo} />
    </div>
  </Router >
)

const Home = () => (
  <div>
    <h2>
      Home
      1、exact
exact是Route下的一条属性，一般而言，react路由会匹配所有匹配到的路由组价，exact能够使得路由的匹配更严格一些。

exact的值为bool型，为true是表示严格匹配，为false时为正常匹配。
    </h2>
  </div>
)
const Redirectdemo = () => (
  <div>
    <h2>
    Redirect
    </h2>
  </div>
)
const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )} />
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

export default BasicExample