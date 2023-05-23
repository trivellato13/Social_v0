import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./CONVITEINFO.module.css";
const CONVITEINFO = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLabelText1Click = useCallback(() => {
    // Please sync "COLAB" to the project
  }, []);

  const onButton1Click = useCallback(() => {
    // Please sync "CONVITE_ON" to the project
  }, []);

  const onButton2Click = useCallback(() => {
    // Please sync "CONVITE_OFF" to the project
  }, []);

  return (
    <div className={styles.conviteInfo}>
      <div className={styles.barsStatusBarIphoneL}>
        <div className={styles.battery}>
          <div className={styles.border} />
          <img className={styles.capIcon} alt="" src="/cap.svg" />
          <div className={styles.capacity} />
        </div>
        <img className={styles.wifiIcon} alt="" src="/wifi.svg" />
        <img
          className={styles.cellularConnectionIcon}
          alt=""
          src="/cellular-connection.svg"
        />
        <div className={styles.timeStyle}>
          <div className={styles.time}>9:41</div>
        </div>
      </div>
      <div className={styles.miniSocial}>Mini Social</div>
      <div className={styles.festaDaSocialContainer}>
        <p className={styles.festaDaSocial}>Festa da Social galera!</p>
        <p className={styles.festaDaSocial}>&nbsp;</p>
        <p className={styles.festaDaSocial}>
          Levem roupas para piscina, e lembrem que faz frio de noite
        </p>
        <p className={styles.festaDaSocial}>&nbsp;</p>
        <p className={styles.festaDaSocial}>
          Pedimos por gentileza que respeitem o espaço e joguem o lixo no lixo
        </p>
        <p className={styles.festaDaSocial}>&nbsp;</p>
        <p className={styles.festaDaSocial}>
          A social vai contar com churras, agua e refrigerante na faixa
        </p>
        <p className={styles.festaDaSocial}>&nbsp;</p>
        <p className={styles.festaDaSocial}>O evento já começou lá no feed!</p>
      </div>
      <div className={styles.component8}>
        <div className={styles.buttonParent}>
          <div className={styles.button}>
            <div className={styles.label}>Descrição</div>
          </div>
          <Button
            className={styles.button1}
            variant="outlined"
            color="primary"
            href="/convite-loc"
            onClick={onButtonClick}
          >
            Localização
          </Button>
          <div className={styles.button2}>
            <div className={styles.label1} onClick={onLabelText1Click}>
              Colaboração
            </div>
          </div>
        </div>
      </div>
      <Button
        className={styles.button3}
        sx={{ width: 175 }}
        variant="outlined"
        color="primary"
        href="/convite-on"
        onClick={onButton1Click}
      >
        ON
      </Button>
      <Button
        className={styles.button4}
        sx={{ width: 189 }}
        variant="outlined"
        color="primary"
        href="/convite-off"
        onClick={onButton2Click}
      >
        OFF
      </Button>
      <img
        className={styles.conviteInfoChild}
        alt=""
        src="/rectangle-470@2x.png"
      />
      <div className={styles.jul01}>Jul 01 - 2:00PM</div>
      <div className={styles.social}>Social</div>
      <img className={styles.conviteInfoItem} alt="" src="/ellipse-68@2x.png" />
    </div>
  );
};

export default CONVITEINFO;
