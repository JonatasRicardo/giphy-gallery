import {
  createUseStyles
} from "react-jss";

const useStyles = createUseStyles({
  share: {
    display: 'flex',
    justifyContent: 'center'
  },
  copyButton: {
    background: ({
      theme
    }) => theme.dark.primary,
    color: ({
      theme
    }) => theme.dark.background,
    border: 0,
    padding: ({
      theme
    }) => theme.spacing,
    outline: 'none',
    cursor: 'pointer'
  }
});

export default useStyles;
