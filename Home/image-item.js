import Component from '../Component.js';


class ImageItem extends Component {
    renderHTML() { 
        const image = this.props.image;
        return /*html*/` 
        <div class="image-container">
            <img src="${image.url}" alt="${image.title} image">
                <h3>${image.title}</h3>
                <p>Number of Horns:${image.horns}</p>
            </div>
    `;
    }
    
}
export default ImageItem;