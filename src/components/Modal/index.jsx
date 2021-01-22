import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from "react-jss";
import useStyles from "./modal.styles";
import Spinner from "../Spinner";

const propTypes = {
  open: PropTypes.bool,
  children: PropTypes.node,
  onClose: PropTypes.func
};

const GalleryModal = ({
    open,
    children,
    onClose = () => {}
}) => {
    const [show, setShow] = useState(open);
    const theme = useTheme();
    const classes = useStyles({ theme });

    useEffect(() => {
        setShow(open);
    }, [open, children]);

    const closeModal = () => {
        setShow(false);
        onClose();
    };

    return (
        <div className={`${classes.modal} ${['', 'is-open'][Number(show)]}`} role="dialog" data-id="modal">
            <div className={classes.modalBody} >
                <button
                  className={classes.close}
                  onClick={closeModal}
                >
                  Close
                </button>
                <div className={classes.spinner}><Spinner /></div>
                <div className={classes.content}>{children}</div>
            </div>
            <div className={classes.modalOverlay} onClick={closeModal} />
        </div>
    );
}

GalleryModal.propTypes = propTypes;

export default GalleryModal;
