import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import Loader from './Loader';
import './App.css'
import { Waypoint } from 'react-waypoint';

class App extends React.Component {
    state = { 
        images: [],
        theme: 'light',
        loading: false,
        loadMore: false,
        noOfPages: 0,
        currentPage: 1,
        searchTerm: ""
    };

    async componentDidMount() {
        this.setState({ loading: true });
        this.setState({ loadMore: false });
        const unsplashInstance = new unsplash();
        const response = await unsplashInstance.getLatestPhotos(1);
        console.log(response);
        this.setState({ images: response.data });
        this.setState({ loading: false });
        this.setState({ loadMore: true });
        this.setState({ noOfPages: response.data })
    }

    onSearchSubmit = async term => {
        this.setState({ loading: true });
        this.setState({ loadMore: false });
        this.setState({ searchTerm: term });
        const unsplashInstance = new unsplash();
        const response = await unsplashInstance.getSearchPhotos(term, 1);
        console.log(response.data.total_pages);
        this.setState({ noOfPages: response.data.total_pages });
        this.setState({ images: response.data.results });
        this.setState({ loading: false });
        this.setState({ loadMore: true });
    }

    changeTheme= () => {
        if(this.state.theme === "light") {
            document.cookie = 'theme=light';
            this.setTheme(this.state.theme)
        } else {
            document.cookie = 'theme=dark';
            this.setTheme(this.state.theme)
        }
    }

    setTheme(theme) {
        if (theme === "light") {
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

    loadMoreData = async () => {
        console.log("loading more data");
        const unsplashInstance = new unsplash();
        var response;
        var newImages = [];
        if (this.state.searchTerm === "") {
            response = await unsplashInstance.getLatestPhotos(this.state.currentPage + 1);
            newImages = this.state.images.concat(response.data);
        } else {
            response = await unsplashInstance.getSearchPhotos(this.state.searchTerm, this.state.currentPage + 1);
            newImages = this.state.images.concat(response.data.results);
        }
        this.setState({ images: newImages });
        this.setState({ currentPage: this.state.currentPage + 1 });
    };

    render() {
        return(
            <div>
                <div className="ui container">
                    <SearchBar onSubmit={this.onSearchSubmit} />
                </div>
                {this.state.loading ? <Loader theme={this.state.theme}/> : <ImageList images={this.state.images} />}
                {this.state.loadMore && <Waypoint onEnter={this.loadMoreData}><p>..</p></Waypoint>}
                {/* <ImageList images={this.state.images} /> */}
                <button className="circular ui icon button massive" id="theme-changer-btn" onClick={this.changeTheme}>
                    <i className="icon lightbulb outline" id="theme-icon" />
                </button>
                <a href="https://github.com/varunmoghe/reactimagesearch" target="_blank" rel="noopener noreferrer">
                    <div className="ui labeled button" tabIndex={0} id="github-btn">
                        <div className="ui basic blue button">
                            <i className="fork icon" /> Github
                        </div>
                        <i className="ui right pointing blue label"></i>
                    </div>
                </a>
            </div>
        );
    }
}
export default App;