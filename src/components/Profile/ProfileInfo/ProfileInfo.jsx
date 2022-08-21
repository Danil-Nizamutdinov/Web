import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import pi from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';


function ProfileInfo(props) {

    if (!props.profile) {
        return <Preloader/>
    }

    return(
        <div>
            <div>
                <img src="https://avatars.mds.yandex.net/i?id=071cc90820434e8bb07924ca0e9cd923-5885656-images-thumbs&n=13" width='100%' height='100px'/>
            </div>

            <div className={pi.profile_info}>
                <div>
                    <img src={props.profile.photos.large} width='200px' height='200px'/>
                </div>
                <ProfileStatus status='Привет, это мой статус'/>
            </div>
        </div>
    )

}

export default ProfileInfo;