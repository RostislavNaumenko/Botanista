import React from 'react';
import "./headerSection.scss";
import BlobPreview from "../../../resources/img/Blob_preview.png";

const HeaderSection = () => {
    return (
        <div className='menu-header'>
            <div className='menu-header-title'>
                Week Day

            </div>
            <img src={BlobPreview} alt="" className='menu-header-title-img' />
            <div className='menu-header-workingTime'>
                <div className='menu-header-workingTime-day'>
                    Mo-Fr
                </div>
                <div className='menu-header-workingTime-time'>
                    9:00-15:00
                </div>
            </div>
        </div>

    );
}

export default HeaderSection;