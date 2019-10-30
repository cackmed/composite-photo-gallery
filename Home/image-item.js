import Component from '../Component.sj';

class ImageItem extends Component {
    renderHtml() {
        return /*html*/` 
        <div class="image-container">
            <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" alt="Uniwhal image">
                <h3>Uniwhal</h3>
                <p>Horns: 1</p>
            </div>
    `;
    }
}
export default ImageItem;