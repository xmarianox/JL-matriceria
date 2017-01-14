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

    _renderItem(item) {
        // const onImageError = this.props.onImageError || this._handleImageError
        // onError={onImageError.bind(this)}
        return (
            <figure className='image-gallery-image'>
                <img
                    src={item.original}
                    alt={item.originalAlt}
                    srcSet={item.srcSet}
                    sizes={item.sizes}
                    onLoad={this.props.onImageLoad}
                />
                { item.description &&
                   <figcaption>
                    <p>{item.description}</p>
                   </figcaption>
                }
            </figure>
        )
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
                    showNav={false}
                    showBullets={true}
                    onImageLoad={this.handleImageLoad}
                    renderItem={this._renderItem.bind(this)}
                />
           </div>
        );
    }
}

export default MainImageSlider;