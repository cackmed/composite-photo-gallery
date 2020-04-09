import Component from '../Component.js';

class FilterImages extends Component {

    onRender(select) {
        const onFilter = this.props.onFilter;
        select.addEventListener('input', () => {
            onFilter(select.value);
        });
    }
    renderHTML() {
        return /*html*/`
        <select class="menu">
                <option value="" selected>All Horns</option>
                <option value="1">1 Horn</option>
                <option value="2">2 Horns</option>
                <option value="3">3 Horns</option>
                <option value="100">100 Horns</option>
            </select>
    `;
    }
}
export default FilterImages;
