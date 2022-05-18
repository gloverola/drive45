import React from "react";
import styled from "styled-components";
import WhatsAppLogo from "../../../public/assets/logo_whatsapp.svg";
import MailLogo from "../../../public/assets/mail-logo.svg";

const StatsSction = () => {
  return (
    <View>
      <div className='image1'>
        <img src='/assets/car3.png' alt='' />
      </div>
      <div className='image2'>
        <img src='/assets/car4.png' alt='' />
      </div>
      <div className='content'>
        <div className='heading'>
          <p>INTERESTING STATS</p>
          <div className='head-text'>
            <h3>Numbers speak</h3>
            <div className='line'></div>
          </div>
        </div>

        <div className='display-view'>
          <div className='display'>
            <div className='cta-view'>
              <p>Contact Us:</p>

              <div className='icons'>
                <a href='http://' target='_blank' rel='noopener noreferrer'>
                  <WhatsAppLogo />
                </a>
                <div className='line'></div>
                <a href='mailto:'>
                  <MailLogo />
                </a>
              </div>
            </div>
            <div className='box box1'>
              <img src='/assets/stat1.png' alt='' />
            </div>
            <div className='box box2'>
              <img src='/assets/stat2.png' alt='' />
            </div>
            <div className='box box3'>
              <img src='/assets/stat3.png' alt='' />
            </div>
          </div>
        </div>
      </div>
    </View>
  );
};

export default StatsSction;

const View = styled.section`
  width: 100vw;
  height: 90vh;
  position: relative;
  margin-top: 500px;

  .image1 {
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .image2 {
    position: absolute;
    bottom: -50px;
    right: 0;

    img {
      width: 600px;
      height: 600px;
    }
  }

  .content {
    width: 1200px;
    height: 100%;
    margin: 0 auto;

    .heading {
      margin-top: 120px;

      p {
        font-size: 1rem;
        font-weight: 700;
        margin-bottom: 8px;
      }

      .head-text {
        display: flex;
        align-items: center;

        h3 {
          font-size: 3rem;
          font-weight: 700;
        }

        .line {
          width: 214px;
          border: 0.5px solid #5f5f5f;
          margin-left: 40px;
        }
      }
    }

    .display-view {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 40px;
      flex-direction: column;

      .display {
        width: 65%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;

        .cta-view {
          display: flex;
          align-items: center;
          margin-top: 900px;

          p {
            font-size: 1.5rem;
            font-weight: 700;
            margin-right: 37px;
          }

          .icons {
            display: flex;
            align-items: center;
          }

          .line {
            width: 2px;
            height: 70px;
            border: 1px solid #5f5f5f;
            margin: 0 40px;
          }
        }

        .box1 {
          position: absolute;
          top: 0px;
          left: 0;
        }

        .box2 {
          position: absolute;
          top: -40px;
          right: 0;
        }
        .box3 {
          position: absolute;
          top: 300px;
          right: 20%;
        }
      }
    }
  }
`;
