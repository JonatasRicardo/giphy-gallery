import {
  createUseStyles
} from "react-jss";

const useStyles = createUseStyles({
  spinner: {
    width: '40px',
    height: '40px',
    position: 'relative'
  },
  doubleBounce: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    backgroundColor: ({
      theme
    }) => theme.dark.primary,
    opacity: '0.6',
    position: 'absolute',
    top: '0',
    left: '0',
    animation: '$sk-bounce 2.0s infinite ease-in-out',
  },
  doubleBounce2: {
    animationDelay: '-1.0s',
  },
  '@keyframes sk-bounce': {
    '0%, 100%': {
      transform: 'scale(0.0)'
    },
    '50%': {
      transform: 'scale(1.0)'
    }
  }
});

export default useStyles;
