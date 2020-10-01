import React from 'react';

class ImageCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = { spans: 0 };
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);
        this.setState({ spans });
    }

    render() {
        // const { description, urls } = this.props.image;
        return(
            <a style={{ gridRowEnd: `span ${this.state.spans}` }} href={this.props.image.urls.regular} data-fancybox="images">
                <img ref={this.imageRef} src={this.props.image.urls.thumb}
                alt={this.props.image.alt_description} className="ui image rounded" />
            </a>
        );
    }
}

export default ImageCard;