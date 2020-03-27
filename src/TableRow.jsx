import React from 'react';
import PropTypes from 'prop-types';

const TableRow = (props) => {
    const {
        classes = ''
    } = props;

    return (
        <tr className={classes}></tr>
    )
};

TableRow.propTypes = {
    classes: PropTypes.string
};

export default TableRow;