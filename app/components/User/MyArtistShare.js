var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../../styles/components/user');

function MyArtistShare (props) {
  var { onClosePopup,
        name,
        stagename,
        facebookShare,
        twitterShare
      } = props;

  return (
    <div className='middle' style={styles.form}>
        <button style={styles.close} onClick={onClosePopup}>X</button>
        <h3 style={styles.heading}>
          Promote {!name ? stagename : name}!
        </h3>
        <ul className="header-main__social">
          <li>
            <button className="btn-social facebook" onClick={facebookShare} type="submit">
              Share
              <i className="fa fa-facebook fa-lg"></i>
            </button>
          </li>
          <li>
            <button className="btn-social twitter" onClick={twitterShare} type="submit">
              Share
              <i className="fa fa-twitter fa-lg"></i>
            </button>
          </li>
        </ul>
        <p className='space-top'>In the real-world... 
          <br /> These share links are set up to use the hostname. 
        </p>
    </div>
  )
}

module.exports = MyArtistShare;