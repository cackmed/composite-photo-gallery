import Component from '../Component.js';
import Header from './header.js';
import ImageList from './image-list.js';
import FilterImages from './filter-images.js';
import images from '../data/images.js';

class App extends Component {
    
    onRender(dom){
        const header = new Header;
        const headerDom = header.renderDOM();
        dom.prepend(headerDom);

        const props = {
            images: images
        };

        const imageList = new ImageList(props);
        const imageListDom = imageList.renderDOM();

        const listSection = dom.querySelector('.image-placement');
        listSection.appendChild(imageListDom);
        const filterImages = new FilterImages({    
            images: images,
            onFilter: (imagehorns) => {
                let filteredImages;
                if (!imagehorns) {
                    filteredImages = images;
                }
                else {
                    filteredImages = images.filter(image => {
                        return image.horns === imagehorns;
                    });
                }
                const updateProps = { images: filteredImages };
                imageList.update(updateProps);
            }
        });
        const filterImagesDom = filterImages.renderDOM();

        const optionsSection = dom.querySelector('.menu-section');
        optionsSection.appendChild(filterImagesDom);
    }
    renderHTML() {
        return /*html*/` 
        <div>
        
                <main>
                    <section class="menu-section"></section>
                    <section class="image-placement"></section>
                        
                    
                </main>
        </div>
        `;

    }
}
export default App;