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

        const listSection = dom.querySelector('.grid');
        listSection.appendChild(imageListDom);

        const filterImages = new FilterImages({
            images: images,
            onFilter: (imageHorns) => {
                let filteredImages;
                if (!imageHorns) {
                    filteredImages = images;
                }
                else {
                    filteredImages = images.filter(images => {
                        return images.horns === imageHorns;
                    });
                }
                const updateProps = { images: filteredImages };
                imageList.updateProps(updateProps);
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
                    <section class="menu-section">
                    </section>
                    <div class="grid"></div>
                        
                    
                </main>
        </div>
        `;

    }
}
export default App;