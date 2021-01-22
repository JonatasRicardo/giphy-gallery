import {
  createUseStyles
} from "react-jss";

const useStyles = createUseStyles({
  modal: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    zIndex: -1,
    opacity: 0,
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    transition: 'all .5s',
    '&.is-open': {
      animation: '$fadeIn .15s forwards'
    }
  },
  close: {
    background: ({
      theme
    }) => theme.dark.background,
    color: ({
      theme
    }) => theme.dark.primary,
    border: 0,
    padding: ({
      theme
    }) => theme.spacing,
    outline: 'none',
    cursor: 'pointer'
  },
  spinner: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    margin: '-20px 0 0 -20px'
  },
  content: {
    position: 'relative'
  },
  modalBody: {
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    padding: ({
      theme
    }) => theme.spacing
  },
  modalOverlay: {
    background: ({
      theme
    }) => theme.dark.primary,
    opacity: .6,
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
  '@keyframes fadeIn': {
    from: {
      zIndex: -1,
      opacity: 0
    },
    to: {
      zIndex: 1,
      opacity: 1
    }
  },
  '@keyframes fadeOut': {
    from: {
      zIndex: 1,
      opacity: 1

    },
    to: {
      zIndex: -1,
      opacity: 0
    }
  }
});

export default useStyles;
