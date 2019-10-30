import Component from '../Component.js';

class Header extends Component {
    renderHTML() {
        return /*html*/`
        <header class="header">
        <img src="./assets/placeholder-logo-2.png" id="logo"> 
        <h1 class="title">Photo Gallary</h1>
    </header>
    `;
    }
}
export default Header;