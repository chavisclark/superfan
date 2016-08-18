var styles = {
  bucket: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'rgba(0, 0, 0, 1)',
      borderRadius: 5,
      boxSizing: 'border-box',
      margin: '10px',
      padding: '15px'
  },
  avatarDiv: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '200px',
    height: '200px',
    backgroundColor: 'orange'
  },
  infoDiv: {
    fontSize: '1em',
    textAlign: 'center'

  },
  nameTag: {
    fontWeight: '1em',
    fontSize: '2em'
  },
  profileDiv: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '40px',
    minHeight: '300px',
  },
  circleDrop: {
    backgroundColor: 'white',
    width: '150px',
    height: '150px'
  },
  profileImage: {
    maxWidth: '130px'
  },
  label: {
      display: 'block',
      background: 'rgba(200, 200, 200, 1)',
      
  },
  clickable: {
      cursor: 'pointer'
  },
  close: {
      background: 'transparent',
      border: 0,
      fontWeight: 'bold',
      position: 'absolute',
      right: 6,
      top: 6
  },
  form: {
      alignItems: 'center',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
  },
  heading: {
      boxSizing: 'border-box',
      marginTop: 0
  },
}

module.exports = styles;