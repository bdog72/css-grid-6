import React, { Component } from 'react'

class App extends Component {
  render () {
    return <div>
      <h1>Resize the window</h1>
      <div className='grid'>
        <header>Header</header>
        <article>
          <h1>Article</h1>
          <p>CONTENT FOR MY EXCELLENT ARTICLE WOULD GO HERE</p>
        </article>
        <aside>Aside</aside>
        <footer>Footer</footer>
      </div>
    </div>
  }
}

export default App
