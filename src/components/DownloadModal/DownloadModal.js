import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';

import AppStore from "../../assets/images_2/AppStore.png";
import GooglePlay from "../../assets/images_2/GooglePlay.png";
import modalPhone from "../../assets/images_2/modalPhone.webp";
import closeIconX from "../../assets/images_2/closeIconX.svg";
import { closeModal } from '../../redux/actions/paybekActions';

const styles = {
  modalWrapper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    height: 225,
    background: '#1652F0',
    border: "solid #1652F0 1px",
    borderRadius: 10,
    backgroundColor: '#1652F0',
    boxShadow: 24,
    display: "flex",
    justifyContent: "space-around",
  },

  mobileModalWrapper: {
    position: 'absolute',
    top: "50%",
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: 570,
    width: 300,
    background: '#1652F0',
    border: "solid #1652F0 1px",
    borderRadius: 10,
    backgroundColor: '#1652F0',
    boxShadow: 24,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },


  modalLeftSide: {
    width: "45%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },

  mobileModalLeftSide: {
    width: "90%",
    height: "45%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },

  modalRightSide: {
    position: "relative",
    width: "45%",
  },

  mobileModalRightSide: {
    position: "relative",
    width: "90%",
  },

  modalTitle: {
    color: "#FFFFFF",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 32,
    textAlign: "center",
  },
  modalDefination: {
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 12,
    color: "#FFFFFF",
    textAlign: "center",
  },
  marketsWrapper: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  appStore: {
    width: 110,
    height: 35,
    backgroundImage: `url(${AppStore})`,
    backgroundRepeat: "no-repeat",
    cursor: "pointer",
  },
  googlePlay: {
    width: 110,
    height: 35,
    backgroundImage: `url(${GooglePlay})`,
    backgroundRepeat: "no-repeat",
    cursor: "pointer",
  },

  phonePicture: {
    backgroundImage: `url(${modalPhone})`,
    backgroundRepeat: "no-repeat",
    height: 315,
    width: 200,
    position: "absolute",
    bottom: -2,
  },

  mobilePhonePicture: {
    backgroundImage: `url(${modalPhone})`,
    backgroundRepeat: "no-repeat",
    height: 315,
    width: 200,
    position: "absolute",
    top: -1,
    left: 40,
  },

  closeButton: {
    width: 36,
    height: 36,
    backgroundImage: `url(${closeIconX})`,
    backgroundRepeat: "no-repeat",
    position: "absolute",
    top: 5,
    right: 0,
    cursor: "pointer",
  },

  mobileCloseButton: {
    width: 36,
    height: 36,
    backgroundImage: `url(${closeIconX})`,
    backgroundRepeat: "no-repeat",
    position: "absolute",
    bottom: 210,
    right: -20,
    cursor: "pointer",
  },

};

function DownloadModal() {

  const openModal = useSelector(state => state.paybek.isOpenModal);

  const mobileSize = useMediaQuery(`(max-width:650px)`);

  return (
    <div>
      <Modal
        open={openModal}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box style={mobileSize ? styles.mobileModalWrapper : styles.modalWrapper}>
          <Box style={mobileSize ? styles.mobileModalLeftSide : styles.modalLeftSide}>
            <Typography style={styles.modalTitle} variant="p" component="p">
              Download the Paybek app
            </Typography>
            <Typography style={styles.modalDefination} variant="p" component="p">
              Easy download from the AppStore and Playmarket
            </Typography>
            <Box style={styles.marketsWrapper}>
              <Box variant="a" component="a"
                href="https://apps.apple.com/uz/app/paybek/id1605546414"
                target="_blank"
                style={styles.appStore}></Box>
              <Box
                variant="a" component="a"
                href="https://play.google.com/store/apps/details?id=com.mobile.paybek"
                target="_blank"
                style={styles.googlePlay}></Box>
            </Box>
          </Box>
          <Box style={mobileSize ? styles.mobileModalRightSide : styles.modalRightSide}>
            <Box style={mobileSize ? styles.mobilePhonePicture : styles.phonePicture}></Box>
            <Box onClick={closeModal} style={mobileSize ? styles.mobileCloseButton : styles.closeButton}></Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
export default DownloadModal;