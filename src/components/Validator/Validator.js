import React from 'react';

import './Validator.css'


const Validator = (props) => {
    const len = parseInt(props.children);
    let validatorText;

    if (len === 0)
        validatorText = null;
    else if (len < 4)
        validatorText = (
            <p className="Validator-invalid">
                Text too short!
            </p>
        );
    else if (len > 10)
        validatorText = (
            <p className="Validator-invalid">
                Text too long!
            </p>
        );
    else
        validatorText = (
            <p className="Validator-valid">
                It seems nice!
            </p>
        );

    return(
        <div className="Validator">
            <p>Length: { len }</p>
            { validatorText }
        </div>
    );
}

export default Validator;