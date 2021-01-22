import {
  createUseStyles
} from "react-jss";

import reset from "../../themes/reset";

const useStyles = createUseStyles({
  ...reset,
  wrapper: {
    minHeight: '100vh',
    height: '100%',
    display: 'flex',
    flexFlow: 'wrap',
    justifyContent: 'space-between',
    overflow: 'hidden',
    background: ({
      theme
    }) => theme.dark.background
  },
  imageContainer: {
    maxWidth: '50%',
    padding: ({
      theme
    }) => theme.spacing
  },
  button: {
    background: 'none',
    border: 'none',
    padding: '0',
    outline: 'none',
    cursor: 'pointer',

  },
  image: {
    display: 'block',
    maxWidth: '100%',
    height: 'auto',
    transition: 'all .5s',
    animation: '$zoomIn .5s forwards',
    '&:hover': {
      transform: 'scale(1.5)'
    }
  },
  modalImage: {
    display: 'block',
    maxWidth: '100%',
    height: 'auto',
    maxHeight: '70vh'
  },
  header: {
    padding: ({
      theme
    }) => theme.spacing,
    background: ({
      theme
    }) => theme.dark.background
  },
  footer: {
    padding: ({
      theme
    }) => theme.spacing,
    background: ({
      theme
    }) => theme.dark.background
  },
  title: {
    color: ({
      theme
    }) => theme.dark.primary
  },
  '@keyframes zoomIn': {
    from: {
      transform: 'scale(0)'
    },
    to: {
      transform: 'scale(1)'
    }
  },
});

export default useStyles;
