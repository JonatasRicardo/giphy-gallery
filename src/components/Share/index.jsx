
import React, { useEffect, useState } from 'react';
import { useTheme } from "react-jss";
import PropTypes from 'prop-types';
import useStyles from "./share.styles";

const propTypes = {
  url: PropTypes.string
};

const copyToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

const Share = ({
  url
}) => {
    const [copyFeedback, setCopyFeedback] = useState(false);
    const theme = useTheme();
    const classes = useStyles({ theme });

    const copy = () => {
      copyToClipboard(url)
      setCopyFeedback(true);
    }

    useEffect(() => {
      if (copyFeedback) {
        setTimeout(() => setCopyFeedback(false), 1000);
      }
    }, [copyFeedback]);

    return (
      <div className={classes.share}>
        <button className={classes.copyButton} onClick={copy} disabled={copyFeedback}>
          {copyFeedback ? 'Link Copied' : 'Copy Link'}
        </button>
      </div>
    );
}

Share.propTypes = propTypes;

export default Share;
