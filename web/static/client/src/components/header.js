import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {

  // renderLinks(){
  //   if(this.props.authenticated){
  //    return ( <li className="nav-item">
  //       <Link className="nav-link" to="/signout">Sign Out</Link>
  //     </li>);
  //   } else {
  //     //show a link to sign in or sign up
  //     return [
  //       <li className="nav-item" key={1}>
  //         <Link className="nav-link" to="/signin">Sign in</Link>
  //       </li>,
  //       <li className="nav-item" key={2}>
  //         <Link className="nav-link" to="/signup">Sign up</Link>
  //       </li>
  //     ];
  //   }
  // }

  renderAdmin(){
    if(this.props.authenticated){
     return (
       <li>
         <a href="form-elements.html">Admin</a>
           <ul>
             <li><Link to="/admin/newpost">New Post</Link></li>
             <li><Link to="/admin/createpage">Create Page</Link></li>
             <li><Link to="/admin">Dashboard</Link></li>
             <li><a href="/signout">Sign Out</a></li>
           </ul>
         </li>);
    }

    return;
  }

  render(){
    return (
      <header className="site-header wrapper" role="banner">
        <div className="row">
          <nav id="site-navigation" className="main-navigation" role="navigation">
            <ul>
              <li><img className="logo" src="images/logo.png" alt="Chuck Conway's logo" /></li>
              <li className="current-menu-item"><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
                {this.renderAdmin()}
              </ul>
          </nav>
        </div>
      </header>

      // <nav className="navbar navbar-light">
      //   <Link to="/" className="navbar-brand" >Redux Auth</Link>
      //     <ul className="nav navbar-nav">
      //       {this.renderLinks()}
      //     </ul>
      // </nav>
    );
  }
}

function mapStateToProps(state){
  return {
    authenticated:state.auth.authenticated
  };
}

export default connect(mapStateToProps)(Header);
