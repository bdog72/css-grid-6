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
      <div className='grid1'>
        <div className='one'>Box 1</div>
        <div className='two'>Box 2</div>
        <div className='three'>Box 3</div>
        <div className='four'>Box 4</div>
      </div>
    </div>
  }
}

export default App
