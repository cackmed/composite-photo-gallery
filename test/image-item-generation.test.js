// IMPORT MODULES under test here:
// import example from '../src/example.js';
import ImageItem from '../Home/image-item.js';
const test = QUnit.test;

const imageItem = new ImageItem;
test('time to test a function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const images = { url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
        title: 'UniWhal',
        description: 'A unicorn and a narwhal nuzzling their horns',
        keyword: 'narwhal',
        horns: 1 };
 
    const expected = `<div class="image-container">
    <img src="${images.url}" alt="${images.title} image">
    <h3>UniWhal</h3>
    <p>Number of Horns:${images.horns}</p>
    </div>`;         
    //Act 
    // Call the function you're testing and set the result to a const

    //Assert
    // Make assertions about what is expected valid result
    assert.htmlEqual(imageItem.renderHTML(images), expected);
});
