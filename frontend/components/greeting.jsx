import React from 'react';
import { Link } from 'react-router';


class Greeting extends React.Component {
  constructor() {
    super();

    this.log_out = this.log_out.bind(this);
    this.yourname = this.yourname.bind(this);
    this.startSearch = this.startSearch.bind(this);
  }


  log_out() {
    this.props.logout().then(() => this.props.router.push('/login'));
  }

  yourname() {
    if (this.props.currentUser) {
      return (<Link to={`/profile/${this.props.currentUser.id}`}>{this.props.currentUser.firstname}</Link>);
    } else {
      return "";
    }
  }

  startSearch(e) {
    e.preventDefault();
    console.log('search not implemented yet :)');
  }

  render() {
    return (
        <header className="main-header">
          <div className="main-header-container">

            <div className="searchbar-component">
              <div className="header-logo">♠</div>
              <form className="header-searchbar" onSubmit={this.startSearch}>
                <input type="text" name="" value="" placeholder="Search Facebook" />
                <button type="submit" name="submit"><i className="material-icons">search</i></button>
              </form>
            </div>

            <div className="navigation-component">

              <ul className="navigation-text">
                <li>{this.yourname()}</li>
                <li><a href="#">Home</a></li>
              </ul>

              <ul className="navigation-icons">
                <li><i className="material-icons">group</i></li>
                <li><i className="material-icons">question_answer</i></li>
                <li><i className="material-icons">public</i></li>
              </ul>

              <ul className="privacy-icons">
                <li><button type="button" value="Log Out" onClick={this.log_out}><i className="material-icons">lock</i></button></li>
                <li><i className="material-icons">arrow_drop_down</i></li>
              </ul>
            </div>
          </div>
        </header>
    );
  }
};

export default Greeting;
