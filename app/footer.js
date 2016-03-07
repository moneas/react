import React from 'react';
import axios from 'axios';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: null
        };
    }
    render() {
        let {message} = this.state;
        return (
            <footer className="footer" id="join-us">
                <p>Footer</p>
            </footer>
        );
    }
};

export default Footer;