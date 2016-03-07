import {Component} from 'react';
import {render} from 'react-dom';
import Navbar from './navbar';
import Post from './post';
import Footer from './footer';

class Hello extends Component {
    render() {
        return (
            <div>
                <Navbar />

                <div className="page-container app-content">
                    <div className="page-loader-container">
                        <article className="page-blog add show shown categorised">
                            <Post />
                        </article>
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
}

class About extends Component {
    render() {
        return (
            <div>
                <Navbar />

                <div className="page-container app-content">
                     <p>About</p>
                    <Footer />
                </div>
            </div>
        );
    }
}

render(<Hello />, document.getElementById('root'));

var onButtonClick = function () {
    //call alertMessage method from the reference of a React Element! 
    render(<About />, document.getElementById('root'));
    //call static alertMessage method from the reference of a React Class! 
    console.log("clicked!");
}
