
function orientations() {
    /* Android Orientation */
    var orientated = window.screen.orientation || window.screen.mozOrientation || window.screen.msOrientation || null;
    
    /* Check */
    if ( orientated && orientated.type ) {
    
        /* Landscape */
        if ( orientated.type === 'landscape' || orientated.type === 'landscape-primary' || orientated.type === 'landscape-secondary' ) {
            return 'landscape';
    
        /* Portrait */
        } else {                                
            return 'portrait';
        }
    
    }
}

orientations();