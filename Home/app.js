import Component from '../Component.js';
import Header from './header.js';
import ImageList from './image-list.js';
import FilterImages from './filter-images.js';
import images from '../data/images.js';

class App extends Component {
    
    onRender(dom){
        const headerDom = Header.renderDom();
        dom.prepend(headerDom);

        const props = {
            images: images
        };

        const imageList = new ImageList(props);
        const imageListDom = imageList.renderDom();

        const listSection = dom.querySelector('.list-section');
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
        const filterImagesDom = filterImages.renderDom();

        const optionsSection = dom.querySelector('.options-section');
        optionsSection.appendChild(filterImagesDom);
    }
    renderHTML() {
        return /*html*/` 
        <div>
        
                <main>
                    <section class="menu-section">
                    </section>
                    
                        
                    
                </main>
        </div>
        `;

    }
}
export default App;