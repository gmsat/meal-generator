import React from 'react';

const ShowErrorMessage = ({error}) => {
    return (
        <div>An error has occurred: ${error.message}</div>
    );
};

export default ShowErrorMessage;