import Component from '../Component.js';
import ImageItem from './image-item.js';


class ImageList extends Component {
    renderHTML() {
        return /*html*/` 
            <div class="grid"></div>
            `;
    }
    onRender(dom) {
        const images = this.props.images;

        images.forEach(image => {
            const props = { image: image };
            const imageItem = new ImageItem(props);
            const imageItemDom = imageItem.renderDom();
            dom.appendChild(imageItemDom);
        });
    }
}
export default ImageList;
