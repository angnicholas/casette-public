import { Route, HashRouter, Switch, Redirect } from "react-router-dom";
import { useEffect, useState } from "react";
import SinglePostPage from "./pages/SinglePostPage"
import AllPostsPage from "./pages/AllPostsPage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import Nav from "./components/Nav"
import Footer from "./components/Footer";

function Routes() {

  return (
    <>

      <Nav />
            
      <Switch>
        
        <Route exact path="/">
          <Redirect to="/posts" />
        </Route>

        {/* <Route exact path="/posts">
          <Home />
        </Route> */}

        <Route exact path="/posts">
          <AllPostsPage />
        </Route>

        <Route exact path="/posts/:id">
          <SinglePostPage />
        </Route>

        <Route exact path="/contact">
          <ContactPage />
        </Route>

        <Route exact path="/about">
          <AboutPage />
        </Route>


        
      </Switch>

      <Footer />

    </>
  );
}

export default Routes;
