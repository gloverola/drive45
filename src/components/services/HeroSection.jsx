import React from "react";
import styled from "styled-components";
import CalendarIcon from "../../../public/assets/calendar-icon.svg";
import CarsIcon from "../../../public/assets/cars-icon.svg";
import SettingsIcon from "../../../public/assets/settings-icon.svg";
import FlowerIcon from "../../../public/assets/flower-icon.svg";

const HeroSection = () => {
  return (
    <View>
      <img className='truck' src='/assets/car8.png' alt='truck' />
      <img className='car' src='/assets/car9.png' alt='truck' />
      <div className='content'>
        <div className='display'>
          <h1>Our Services</h1>
          <div className='line'></div>
          <img src='/assets/car7.png' alt='' />
        </div>

        <div className='row'>
          <h3>We have a wide range of services</h3>
          <div className='box-view'>
            <div className='box box1'>
              <CalendarIcon />
              <h3>Fleet Management</h3>
              <p>
                Drive45 to take over and handle the management of existing
                customer owned fleet of cars and trucks.
              </p>
            </div>
            <div className='box box2'>
              <CarsIcon />
              <h3>Fleet Liquidation</h3>
              <p>
                Drive45 technicians are very proficient with the Evaluation and
                Liquidation of all mobile assets with a hassle free process.
              </p>
            </div>
            <div className='box box3'>
              <SettingsIcon />
              <h3>Fleet Maintenance</h3>
              <p>
                Drive45 to take over and handle the maintenance of existing
                customer owned fleet of cars and trucks.
              </p>
            </div>
          </div>
        </div>

        <h2>Other Value Added Services...</h2>
        <div className='row2'>
          <div className='box'>
            <div className='list'>
              <div className='item item-left'>
                <FlowerIcon />
                <p>Fresh (new and used) units leased from Drive45</p>
              </div>
              <div className='item'>
                <FlowerIcon />
                <p>Sale and Lease -back</p>
              </div>
              <div className='item'>
                <FlowerIcon />
                <p>Inspection As A Service (IAAS)</p>
              </div>
              <div className='item'>
                <FlowerIcon />
                <p>Real Time Tracking & Telematics</p>
              </div>
              <div className='item'>
                <FlowerIcon />
                <p>Fresh units bought from Drive45 with financing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </View>
  );
};

export default HeroSection;

const View = styled.section`
  width: 100vw;
  height: 100%;
  padding: 100px 0;
  position: relative;
  margin-bottom: 100px;

  .truck {
    position: absolute;
    top: 900px;
    left: 0;
    width: 800px;
    z-index: 2;
  }

  .car {
    position: absolute;
    bottom: 0px;
    right: 0;
    z-index: 2;
  }

  .content {
    width: 1200px;
    height: 100%;
    margin: 0 auto;

    .display {
      width: 100%;
      height: 340px;
      background-color: #ffe8e8;
      border-radius: 45px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 100px;
      position: relative;

      img {
        position: absolute;
        bottom: -200px;
        right: -50px;
      }

      h1 {
        font-size: 3rem;
        font-weight: 500;
      }

      .line {
        width: 94px;
        height: 5px;
        background-color: ${(props) => props.theme.colors.green};
      }
    }

    .row {
      width: 100%;
      display: flex;
      align-items: flex-start;
      margin-top: 300px;

      h3 {
        font-size: 2rem;
        font-weight: 400;
        max-width: 290px;
      }

      .box-view {
        width: 800px;
        height: 820px;
        background: #ffc500;
        border-radius: 50.9338px;
        margin-left: 40px;
        position: relative;

        .box {
          width: 390px;
          height: 400px;
          background: #ffffff;
          box-shadow: 0px 36.7197px 75.8084px rgba(0, 0, 0, 0.07);
          border-radius: 38.2798px;
          padding: 40px 50px;

          h3 {
            margin: 25px 0;
            font-size: 2.2rem;
            font-weight: 400;
            line-height: 37.9px;
          }

          p {
            line-height: 21.64px;
          }
        }

        .box1 {
          position: absolute;
          left: 135px;
          top: -50px;
        }
        .box2 {
          position: absolute;
          left: 135px;
          bottom: -50px;
        }
        .box3 {
          position: absolute;
          right: -163px;
          top: 190px;
        }
      }
    }

    .row2 {
      width: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      margin-top: 140px;

      .box {
        width: 524px;
        height: 860px;
        background: #ff0101;
        border-radius: 50.9338px;
        position: relative;

        .list {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          position: absolute;
          top: -90px;

          left: -300px;
          .item {
            width: 520px;
            height: 225px;
            background: #ffffff;
            box-shadow: 0px 31.8107px 65.6736px rgba(0, 0, 0, 0.07);
            border-radius: 33.1622px;
            margin-bottom: 40px;
            padding: 30px 40px;

            p {
              font-size: 1.5rem;
              font-weight: 400;
              margin-top: 20px;
            }
          }

          .item-left {
            position: absolute;
            top: 0;
            right: -600px;
          }
        }
      }
    }

    h2 {
      font-size: 2.6rem;
      font-weight: 500;
      margin-top: 200px;
    }
  }
`;
