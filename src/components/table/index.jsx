import React from 'react';
import PropTypes from 'prop-types';

function Table(props) {
    let {tableHead} = props;
    return (
        <table className=''>
            <thead>
            <tr>
                {
                    tableHead.map((head, index) => {
                        return <th key={index}>{head}</th>
                    })
                }
            </tr>
            </thead>
            {props.children}
        </table>
    )
}

Table.propTypes = {
    tableHead: PropTypes.array.isRequire,
};

Table.defaultProps = {
    tableHead: ["First Column", "Second Column", "Third Column", '.....']
};

export default Table;