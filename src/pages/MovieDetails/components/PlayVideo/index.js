import React from 'react';
import PropTypes from 'prop-types';
import { YOUTUBE_URL } from '../../../../constants/api';

const PlayVideo = (props) => {
  const { id } = props;

  let src = null;

  if (id) {
    src = `${YOUTUBE_URL}${id}`;
  } else {
    src = `${YOUTUBE_URL}1bjLOyUuoAM`;
  }

  return (
    <div className="play-video">
      <iframe
        title="myFrame"
        src={src}
        frameBorder="0"
        allowFullScreen
      />
    </div>
  )
}

PlayVideo.propTypes = {
  id: PropTypes.string,
}

PlayVideo.defaultProps = {
  id: undefined,
};

export default PlayVideo;