import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Header = ({text}) => (
    <section className="header">
        <Link to={'/'}>
            <div className="home">
                <p>HOME</p>
            </div>
        </Link>
        {text}
        <Link to={'/faq'}>
            <div className="faq">
                <p>FAQ</p>
            </div>
        </Link>
    </section>
);

Header.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Header;
