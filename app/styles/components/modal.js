var styles = {
    backdrop: {
        background: 'rgba(0, 0, 0, 0.8)',
        boxSizing: 'border-box',
        height: '100%',
        left: 0,
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: -1
    },
    popup: {
        background: 'rgba(255, 255, 255, 0.9)',
        borderRadius: 5,
        boxSizing: 'border-box',
        minHeight: 200,
        padding: 20,
        position: 'relative',
        minWidth: 300,
        color: 'black'
    },
    popupContainer: {
        alignItems: 'center',
        boxSizing: 'border-box',
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        left: 0,
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 11
    }
}

module.exports = styles;