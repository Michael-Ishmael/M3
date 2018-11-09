import React from 'react';
import { css } from 'react-emotion';
import { GridLoader } from 'react-spinners';
import PropTypes from 'prop-types'

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

class LoaderSpinner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }
    render() {

        let size = this.props.size ? Math.min(50, Math.max(2, this.props.size)) : 20;

        return (
            <div className='m3-loader'>
                <GridLoader
                    className={override}
                    sizeUnit={"px"}
                    size={size}
                    color={'#FE6105'}
                    loading={true}
                />
            </div>
        )
    }
}

LoaderSpinner.propTypes = {
  size: PropTypes.number.isRequired
};

export default LoaderSpinner

