import React from 'react';
import PropTypes from 'prop-types';

const TableCell = (props) => {
    const {
        classes = '',
        value
    } = props;

    return (
        <td className={classes}>{value}</td>
    );
}

TableCell.propTypes = {
    value: PropTypes.any.isRequired,
    classes: PropTypes.string
};

export default TableCell;