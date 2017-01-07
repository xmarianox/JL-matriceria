import React, { Component } from 'react';
// components
import ImageGallery from 'react-image-gallery';
import '../../node_modules/react-image-gallery/styles/scss/image-gallery.scss'
// styles
import '../styles/components/MainImageSlider.scss';

class MainImageSlider extends Component {

    _handleImageLoad(event) {
        console.log(`Image loaded ${event.target}`);
    }

    render() {
        const images = [
            {
                original: 'http://lorempixel.com/1000/600/nature/1/',
                originalAlt: 'Imagen 1',
                description: 'Imagen 1'
            },
            {
                original: 'http://lorempixel.com/1000/600/nature/2/',
                originalAlt: 'Imagen 2',
                description: 'Imagen 3'
            },
            {
                original: 'http://lorempixel.com/1000/600/nature/3/',
                originalAlt: 'Imagen 3',
                description: 'Imagen 3'
            }
        ]

        return (
           <div className="MainImageSlider">
               <ImageGallery 
                    ref={i => this._imageGallery = i}
                    items={images}
                    slideInterval={2000}
                    showThumbnails={false}
                    showFullscreenButton={false}
                    showPlayButton={false}
                    showBullets={true}
                    onImageLoad={this.handleImageLoad}
                />
           </div>
        );
    }
}

export default MainImageSlider;