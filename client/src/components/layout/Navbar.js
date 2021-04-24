import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: {isAuthenticated, loading }, logout }) => {
	const authLinks = (
		<ul>
      <li>
          <Link to='/profiles'>
            Developers
          </Link>
      </li>
       <li>
          <Link to='/posts'>
            Posts
          </Link>
      </li>
			<li>
       		<Link to='/dashboard'>
       			<i className='fas fa-user' />{' '}
       			<span className='hide-sm'>Dashboard</span>
       		</Link>
      </li>
      <li>
        <a onClick={logout} href='#!'>
	        <i className='fas fa-sign-out-alt' />{' '}
	        <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </ul>
	);

	const guestLinks = (
    <div className="guestLinks">
		  <ul>
       		<li>
       			<Link to='/register'>
       				Register
       			</Link>
       		</li>
        	<li>
        		<Link to='/login'>
        			Login
        		</Link>
        	</li>
      </ul>
    </div>
	);

	return(
		<nav className="navbar bg-dark">
	        	<Link to='/'>
            <h1>
	        		<i className="fas fa-laptop-code"></i> Developer Network
	        	</h1>
            </Link>
	        	{ !loading && (<Fragment><h1>{ isAuthenticated ? authLinks : guestLinks }</h1></Fragment>) }
	    </nav>
	);
};

Navbar.propTypes = {
	logoug: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);