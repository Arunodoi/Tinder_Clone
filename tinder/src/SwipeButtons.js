import React from 'react'
import "./SwipeButtons.css";
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import  IconButton  from '@material-ui/core/IconButton';

function SwipeButtons() {
    return (
        <div className="swipeButtons">

            <IconButton className = "swipeButtons_repeat">
            <ReplayIcon fontSize = "Large" />
            </IconButton>
            <IconButton className = "swipeButtons_left">
            <CloseIcon fontSize = "Large"/>
            </IconButton>
            <IconButton className = "swipeButtons_star">
            <StarRateIcon fontSize = "Large" />
            </IconButton>
            <IconButton className = "swipeButtons_right">
            <FavoriteIcon fontSize = "Large" />
            </IconButton>
            <IconButton className = "swipeButtons_lightning">
            <FlashOnIcon fontSize = "Large"/>
            </IconButton>
             
        </div>
    )
}

export default SwipeButtons
