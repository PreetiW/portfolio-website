import * as React from 'react';
import './BasicInfo.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface Props {
    name: string;
    designation: string;
    profileImg?: string;
}

function BasicInfo({ name, designation, profileImg = '' }: Props) {
    return(
        <>
            {   
                (profileImg.length !== 0) ?
                <img src={profileImg} className="profile-image" /> :
                <FontAwesomeIcon icon="user-circle" size="3x" className="default-image" />
            }
            <div className="text-large">{name}</div>
            <div className="text-medium">{designation}</div>
        </>
    );

}

export default BasicInfo;