import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    title: PropTypes.string.isRequired,
    classes: PropTypes.string,
    minWidth: PropTypes.string
};

const ReactAdvancedTable = (props) => {
    const {
        title,
        classes = "",
        minWidth = '750'
    } = props;

    return (
        <div>
            {title}
            <table
                className={classes}
                style={'min-width: ' + minWidth}
            >
            </table>
        </div>
    );
}

ReactAdvancedTable.propTypes = propTypes;

export default ReactAdvancedTable;