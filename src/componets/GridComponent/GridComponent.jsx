import React from 'react';
import styles from './GridComponent.module.css';
import old1 from '../../assets/Group 24.png';
import old2 from '../../assets/Group 17.png';
import old3 from '../../assets/Group 18.png';
import old4 from '../../assets/Group 19.png';

const GridComponent = () => {
    return (
    
        <div className={styles.container}>
            <div className={styles.main}>1
                {/* <img src={old1} alt="Remote Control" />
                <h2>HOMEX Smart IR Remote Control</h2>
                <p>Voice control, phone control, learning extension, one-click scenario, infrared remote control, massive library code.</p>
                <button>View More</button> */}
            </div>
            <div className={styles.second}>2
                {/* <img src={old2} alt="PIR Sensor" />
                <h2>HOMEX Smart PIR Sensor</h2>
                <p>Infrared sensor, intelligent linkage.</p> */}
            </div>
            <div className={styles.third}>3
                {/* <img src={old3} alt="Door Lock" />
                <h2>HOMEX Smart Digital Door Lock</h2>
                <p>Inbuilt WiFi and Bluetooth modules, autolock functionality.</p> */}
            </div>
            <div className={styles.fouth}>4
                {/* <img src={old4} alt="Video Doorbell" />
                <h2>Laxihub Smart Doorbell</h2>
                <p>Rechargeable battery, Wi-Fi 1080p video doorbell with wireless jingle.</p>
                <button>View</button> */}
            </div>
        </div>
    );
};

export default GridComponent;
