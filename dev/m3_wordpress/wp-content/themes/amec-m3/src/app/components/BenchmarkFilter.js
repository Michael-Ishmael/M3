import React, {Component} from 'react'
import {Dropdown} from 'semantic-ui-react'
import PropTypes from "prop-types";

class BenchmarkFilter extends Component {

    constructor(props) {
        super(props);
        this.initialiseState();
    }

    initialiseState() {

        this.state = {
            selectedCategoryId: -1,
            selectedFilterId: -1,
        }
    }

    handleCategoryChange(e, data) {
        this.setState({selectedCategoryId: data.value})
    }

    handleFilterChange(e, data) {
        this.setState({selectedFilterId: data.value});
        const label = data.options.filter(o => o.value === data.value)[0].text;
        this.props.onFilterChosen(data.value, label);
    }

    handleClearClick() {
        this.setState({
            selectedCategoryId: -1,
            selectedFilterId: -1,
        });
        this.props.onFilterChosen(-1, null)
    }

    render() {

        const categoryOptions = this.props.filterCategories.map(c => ({
            key: c.categoryId,
            text: c.description,
            value: c.categoryId,
            disabled: c.maxResponseCount < 10
        }));
        const catVal = this.state.selectedCategoryId >= 0 ? this.state.selectedCategoryId : "";
        const categoryDropDown = (<Dropdown onChange={(event, data) => this.handleCategoryChange(event, data)} value={catVal}
                                            placeholder="Benchmark my scores against" fluid selection options={categoryOptions}/>);

        let filterDropDown = null;
        if (this.state.selectedCategoryId > -1) {
            const filterOptions = this.props.filters
                .filter(f => f.categoryId === this.state.selectedCategoryId)
                .map(f => ({
                    key: f.filterId,
                    text: f.description,
                    value: f.filterId,
                    disabled: f.responseCount < 10
                }));

            filterDropDown = (<Dropdown text="" onChange={(event, data) => this.handleFilterChange(event, data)}
                                        placeholder="Choose a filter" fluid selection options={filterOptions}/>)
        }

        let clearFilter = null;
        if (this.state.selectedCategoryId > -1) {
            clearFilter = (
                <a className="clear-filter-icon" title="Clear Filter" onClick={() => this.handleClearClick()}><i
                    className="fas fa-times"/></a>);
        }

        return (<div className="benchmark-filters">{categoryDropDown} {filterDropDown} {clearFilter} </div>)
    }


};

BenchmarkFilter.proptypes = {
    filterCategories: PropTypes.arrayOf(PropTypes.shape({
        categoryId: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        responseCount: PropTypes.number.isRequired,
    })),
    filters: PropTypes.arrayOf(PropTypes.shape({
        categoryId: PropTypes.number.isRequired,
        filterId: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        responseCount: PropTypes.number.isRequired,
    })),
    onFilterChosen: PropTypes.func.isRequired
};

export default BenchmarkFilter