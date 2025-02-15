import React from 'react';
import MediaQuery from 'react-responsive';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import classes from './TeamMembers.module.css';

const TeamMembers = () => {
  return (
    <div id={classes.teamMembers}>
      <h2 className={classes.heading}>Meet the Team</h2>
      <MediaQuery minWidth={769} maxWidth={1440}>
        <div className={classes.teamPhotos}>
          <div className={`${classes.photo1}`}>
            <div className={`${classes.photo} ${classes.p1}`}></div>
            <h4>ANKITA</h4>
            <p>Data Analyst</p>
          </div>

          <div className={`${classes.photo2}`}>
            <div className={`${classes.photo} ${classes.p2}`}></div>
            <h4>ESTHER</h4>
            <p>UX Designer</p>
          </div>

          <div className={`${classes.photo3}`}>
            <div className={`${classes.photo} ${classes.p3}`}></div>
            <h4>INANO</h4>
            <p>Digital Consultancy</p>
          </div>

          <div className={`${classes.photo4}`}>
            <div className={`${classes.photo} ${classes.p4}`}></div>
            <h4>TINA</h4>
            <p>Software Developer</p>
          </div>
        </div>
      </MediaQuery>

      <MediaQuery minWidth={320} maxWidth={768}>
        <Swiper className={`mySwiper ${classes.swiper}`} spaceBetween={20}>
          <SwiperSlide>
            <div className={`${classes.teamMember1}`}>
              <div className={`${classes.photo} ${classes.p1}`}></div>
              <h4 className="pink">ANKITA</h4>
              <p className="pink">Data Analyst</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={`${classes.teamMember1}`}>
              <div className={`${classes.photo} ${classes.p2}`}></div>
              <h4 className="blue">ESTHER</h4>
              <p className="blue">UX Designer</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={`${classes.teamMember1}`}>
              <div className={`${classes.photo} ${classes.p3}`}></div>
              <h4 className="armyGreen">INANO</h4>
              <p className="armyGreen">Digital Consultancy</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={`${classes.teamMember1}`}>
              <div className={`${classes.photo} ${classes.p4} orange`}></div>
              <h4 className="orange">TINA</h4>
              <p className="orange">Software Developer</p>
            </div>
          </SwiperSlide>
        </Swiper>
        <p className={classes.swipeText}>← Swipe to see →</p>
      </MediaQuery>
    </div>
  );
};

export default TeamMembers;
