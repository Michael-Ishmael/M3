import React, {Component} from 'react'
import { Dropdown } from 'semantic-ui-react'
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

    handleCategoryChange(e, data){
        this.setState({selectedCategoryId: data.value})
    }

    handleFilterChange(e, data){
        this.setState({selectedFilterId: data.value});
        this.props.onFilterChosen(data.value);
    }

    render(){

        const categoryOptions = this.props.filterCategories.map(c => ({
            key: c.categoryId,
            text: c.description,
            value: c.categoryId,
            disabled: c.maxResponseCount < 10
        }));

        const categoryDropDown = (<Dropdown onChange={(event, data) => this.handleCategoryChange(event, data) } placeholder="Filter By" fluid selection options={categoryOptions} />  )

        let filterDropDown = null;
        if(this.state.selectedCategoryId > -1){
            const filterOptions = this.props.filters
                .filter(f => f.categoryId === this.state.selectedCategoryId)
                .map(f => ({
                    key: f.filterId,
                    text: f.description,
                    value: f.filterId,
                    disabled: f.responseCount < 10
                }))

            filterDropDown = (<Dropdown onChange={(event, data) => this.handleFilterChange(event, data) } placeholder="Choose a filter" fluid selection options={filterOptions} />  )
        }


        return (<div className="benchmark-filters">{categoryDropDown} { filterDropDown }</div> )
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