import styles from "./Drawer.module.css";
import { IconButton } from "@material-ui/core";
import Menu from "@material-ui/icons/Menu";
import ChevronRight from "@material-ui/icons/ChevronRight";
import { useRouter } from "next/router";

export default function Drawer({ handleOpen, handleHide, show }) {
  const router = useRouter();

  let classes = styles.sideDrawer;
  if (show) {
    classes = `${styles.sideDrawer} ${styles["open"]}`;
  }
  return (
    <>
      <IconButton
        className={styles.showButton}
        aria-label="open drawer"
        onClick={handleOpen}
      >
        <Menu fontSize="large" style={{ fill: "#fcf7ed" }} />
      </IconButton>
      <div className={classes}>
        <div className={styles.closeIconContainer}>
          <IconButton onClick={handleHide}>
            <ChevronRight className={styles.closeIcon} />
          </IconButton>
        </div>
        <div className={styles.listItem} onClick={() => router.push("/")}>
          <p className={styles.listItemText}>Home</p>
        </div>
        <div className={styles.listItem} onClick={() => router.push("/museum")}>
          <p className={styles.listItemText}>Supermarket</p>
        </div>
        <div className={styles.listItem}>
          <p className={styles.listItemText}>Garden</p>
        </div>
      </div>
    </>
  );
}
