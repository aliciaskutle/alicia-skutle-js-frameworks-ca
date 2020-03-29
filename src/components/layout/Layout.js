import React from "react";
import Home from "../home/Home";
import Contact from "../contact/Contact";
import GameDetails from "../games/GameDetails";
import Favourites from "../favourites/Favourites";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Layout() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Nav.Item>
          <Nav.Link href="/">
            <Link to="/">Home</Link>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="/contact" eventKey="link-1">
            <Link to="/contact">Contact</Link>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="/favourites" eventKey="link-2">
            <Link to="/favourites">Favourites</Link>
          </Nav.Link>
        </Nav.Item>
      </Navbar>

      <Switch>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/game/:id">
          <GameDetails />
        </Route>
        <Route path="/game/favourites">
          <Favourites />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default Layout;
