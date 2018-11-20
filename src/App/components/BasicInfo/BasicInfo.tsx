import * as React from 'react';
import './BasicInfo.css';
import logo from '../../../logo.svg';

export interface Props {
    name: string;
    designation: string;
    profileImg?: string;
}


function BasicInfo({ name, designation, profileImg = logo }: Props) {
    
    return(
        <>
            <img src={profileImg} className="profile-image" />
            <div className="text-large">{name}</div>
            <div className="text-medium">{designation}</div>
        </>
    );

}

export default BasicInfo;