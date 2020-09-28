import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import './App.css'

class App extends React.Component {
    state = { images: [], theme: 'light' };
    onSearchSubmit = async term => {
        const response = await unsplash.get('/search/photos', {
            params: {
                query: term,
                per_page: 30
            }            
        });
        // .then(response => {
        //     console.log(response.data.results);
        // });

        this.setState({ images: response.data.results });
        console.log(this.state.images)
    }

    changeTheme= () => {
        if(this.state.theme === "light") {
            document.querySelector('body').style.transition = 'background-color 0.3s ease';
            document.querySelector('body').style.backgroundColor = "#242424";
            document.getElementById('theme-icon').className = "icon lightbulb";
            document.getElementById('search-input').id = "search-input-dark";
            this.setState({ theme: 'dark'});
        } else {
            document.querySelector('body').style.backgroundColor = "#ffffff";
            document.getElementById('theme-icon').className = "icon lightbulb outline";
            document.getElementById('search-input-dark').id = "search-input";
            this.setState({theme: 'light'});
        }
    }

    render() {
        return(
            <div>
                <div className="ui container">
                    <SearchBar onSubmit={this.onSearchSubmit} />
                </div>
                <ImageList images={this.state.images} />
                <button className="circular ui icon button massive" id="theme-changer-btn" onClick={this.changeTheme}>
                    <i className="icon lightbulb outline" id="theme-icon" />
                </button>
                <a href="https://github.com/varunmoghe/reactimagesearch" target="_blank">
                    <div className="ui labeled button" tabIndex={0} id="github-btn">
                        <div className="ui basic blue button">
                            <i className="fork icon" /> Github
                        </div>
                        <a className="ui right pointing blue label"></a>
                    </div>
                </a>
            </div>
        );
    }
}
export default App;