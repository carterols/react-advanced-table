import React from 'react';
import PropTypes from 'prop-types';

const TableCellHeader = (props) => {
    const {
        classes = "",
        value
    } = props;

    return (
        <th className={classes}>{value}</th>
    )
}

TableCellHeader.propTypes = {
    classes: PropTypes.string,
    value: PropTypes.any.isRequired
}

export default TableCellHeader;