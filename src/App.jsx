import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'

export function App() {
  return (
    <>
      <header className="header">
        <nav className="nav">
          <ul>
            <li>Contact</li>
            <li>Skills</li>
            <li>Projects</li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <section id="one">
          <img src="src" alt="Photo of me" />
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
            vel enim similique quaerat veniam modi, odio nemo dolore rerum
            placeat?
          </div>
        </section>
        <section id="two">
          <h2 className="title">Skills</h2>
          <ul>
            <li>Experience</li>
            <li>Work in Progress</li>
          </ul>
        </section>
        <section id="three">
          <h2 className="title">Projects</h2>
          <ul>
            <li>Zip Tennis</li>
            <li>Tamagotchi Pets</li>
            <li>MineSweeper</li>
          </ul>
        </section>
      </main>
      <Switch>
        <Route exact path="/">
          Home
        </Route>
      </Switch>
    </>
  )
}
