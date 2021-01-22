import React, { useEffect, useState } from 'react';
import { useTheme } from 'react-jss';

import Modal from '../Modal';
import Share from '../Share';
import useStyles from './gallery.styles';
import { getGifs } from '../../api';

function random_rgba(index = 1, alpha = 1) {
  const round = Math.round;
  const base = index+1;
  return `rgb(${round(50/base*base/2)},${round(255/base*base/2)},${round(base*3)},${alpha})`;
}

const Gallery = () => {
  const [gifs, setGifs] = useState([]);
  const [modal, setModal] = useState(null);
  const theme = useTheme();
  const classes = useStyles({ theme });

  const loadData = async () => {
    const result = await getGifs();
    setGifs(result.data.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const closeModal = () => setModal(null);
  const openModal = ({ images, title, index, url, user = {} }) => {
    setModal(
      <Modal open onClose={() => closeModal()}>
        <header className={classes.header}>
          <h1 className={classes.title}>{title}</h1>
        </header>
        <img
          className={classes.modalImage}
          src={images.fixed_height_downsampled.url}
          width={images.fixed_height_downsampled.width*2}
          height={images.fixed_height_downsampled.height*2}
          alt={title}
          style={{ background: random_rgba(index, 0.8) }}
        />
        <footer className={classes.footer}>
            <a
              className={classes.user}
              href={user.profile_url ?? '#'}
              target="_blank"
            >
              @{user.display_name ?? 'anonymous'}
            </a>
          <Share url={images.fixed_height_downsampled.url} />
        </footer>
      </Modal>
    );
  };

  return (
    <div className={classes.wrapper} data-testid="gallery">
      {gifs.map(({ images, id, title, url, user }, index) => (
        <div className={classes.imageContainer} key={id} data-testid="image-container">
          <button
            className={classes.button}
            onClick={() => openModal({ images, title, index, url, user })}
            data-testid="button-open-modal"
          >
            <picture>
              <img
                className={classes.image}
                src={images.fixed_height_downsampled.url}
                width={images.fixed_height_downsampled.width/2}
                height={images.fixed_height_downsampled.height/2}
                alt={title}
                style={{ background: random_rgba(index) }}
              />
            </picture>
          </button>
        </div>
      ))}
      {modal}
    </div>
  );
};

export default Gallery;
