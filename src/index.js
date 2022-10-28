import React from "react";
import  ReactDOM  from "react-dom/client";
import './index.css';

class App extends React.Component {
    state = {
        content:'',
        author:''
    };

    fetchData = () => {
        fetch("https://api.quotable.io/random")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                this.setState({
                    content: data.content,
                    author: '- '+data.author
                });
            });
    }

    componentDidMount () {
        this.fetchData();
    }

    handleClick = () => {
        this.fetchData();
    }

    render() {
        const {content, author} = this.state;
        return (
                <div id="quote-box">
                    <p id="text">{content}</p>    
                    <p id="author">{author}</p>  
                    <div className="lastRow">
                        <div className="socialMedias">
                            <a id="tweet-quote" href="https://twitter.com/intent/tweet" target="_blank" rel="noreferrer">
                                <i className="fa-brands fa-twitter" id="tweet"></i>
                            </a>
                            <a href="https://www.facebook.com/sharer/sharer.php?u=#url" target="_blank" rel="noreferrer" >
                                <i className="fa-brands fa-facebook" id="facebook"></i>
                            </a>
                        </div>
                        <button id="new-quote" onClick={this.handleClick}>New Quote</button>
                    </div>    
                </div>
        );
    }
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
