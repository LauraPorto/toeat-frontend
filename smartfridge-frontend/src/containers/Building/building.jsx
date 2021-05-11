import React from 'react';
import {connect} from 'react-redux';
import video from '../../assets/video.gif';

const Building = (props) => {

    const name = props.user.user.name;
 
    return (
        <div className="main-building">
            <div className="video-build">
                <img src={video} style={{width: '35em', height: '33em'}} alt='WORKING'></img>
            </div>
            <div className="titles-build">
                <div className="building-title">
                    View in building 
                </div>
                <div className="building-subtitle">
                {name}, estamos trabajando para ofrecerte la mejor experiencia !
                </div>
            </div>
         
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer
    }
}

export default connect(mapStateToProps)(Building);
