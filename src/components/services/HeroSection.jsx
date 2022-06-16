import React from "react";
import styled from "styled-components";
import CalendarIcon from "../../../public/assets/calendar-icon.svg";
import CarsIcon from "../../../public/assets/cars-icon.svg";
import SettingsIcon from "../../../public/assets/settings-icon.svg";
import HireIcon from "../../../public/assets/hire-icon.svg";
import FlowerIcon from "../../../public/assets/flower-icon.svg";
import { device } from "constants/breakpoints";

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
            <div className='boxes'>
              <div className='box box1'>
                <CalendarIcon className='icon' />
                <h3>Fleet Management</h3>
                <p>
                  Drive45 to take over and handle the management of existing
                  customer owned fleet of cars and trucks.
                </p>
              </div>
              <div className='box box2'>
                <CarsIcon className='icon' />
                <h3>Fleet Liquidation</h3>
                <p>
                  Drive45 technicians are very proficient with the Evaluation
                  and Liquidation of all mobile assets with a hassle free
                  process.
                </p>
              </div>
              <div className='box box3'>
                <SettingsIcon className='icon' />
                <h3>Fleet Maintenance</h3>
                <p>
                  Drive45 to take over and handle the maintenance of existing
                  customer owned fleet of cars and trucks.
                </p>
              </div>
              <div className='box box4'>
                <HireIcon className='icon' />
                <h3>Hire Purchase</h3>
                <p>
                  Stress free & flexible structured rent to own services for
                  salary earners, with premium value-added services, built to
                  eliminate the stress of mobility within the urban cities.
                </p>
              </div>
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

  @media ${device.phone} {
    padding: 50px 0;
    margin-bottom: 200px;
  }

  .truck {
    position: absolute;
    top: 900px;
    left: 0;
    z-index: 2;
    width: 700px;

    @media ${device.phone} {
      top: 1350px;
    }
  }

  .car {
    position: absolute;
    bottom: 0px;
    right: -100px;
    z-index: 2;

    @media ${device.phone} {
      bottom: -50px;
      width: 250px;
    }
  }

  .content {
    width: 1200px;
    height: 100%;
    margin: 0 auto;

    @media ${device.phone} {
      width: 100%;
      padding: 0 20px;
    }

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

      @media ${device.phone} {
        padding: 50px 40px;
        height: 250px;
        justify-content: flex-start;
        border-radius: 20px;
      }

      img {
        position: absolute;
        bottom: -200px;
        right: -50px;

        @media ${device.phone} {
          right: 0;
          bottom: -80px;
        }
      }

      h1 {
        font-size: 3rem;
        font-weight: 500;

        @media ${device.phone} {
          font-size: 1.8rem;
        }
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

      @media ${device.phone} {
        flex-direction: column;
        margin-top: 100px;
      }

      h3 {
        font-size: 2rem;
        font-weight: 400;
        max-width: 290px;

        @media ${device.phone} {
          max-width: 100%;
          text-align: center;
          font-size: 1rem;
          margin-bottom: 40px;
        }
      }

      .box-view {
        width: 800px;
        height: 820px;
        background: #ffc500;
        border-radius: 50.9338px;
        margin-left: 40px;
        position: relative;

        @media ${device.phone} {
          width: 100%;
          height: 1030px;
          border-radius: 20px;
          margin-left: 0;
          margin-top: 30px;
        }

        .boxes {
          display: flex;
          width: 840px;
          justify-content: space-between;
          flex-wrap: wrap;
          position: absolute;
          left: 135px;
          top: -50px;
          z-index: 4;

          @media ${device.phone} {
            flex-direction: column;
            left: 50px;
          }

          .box {
            width: 390px;
            height: 400px;
            background: #ffffff;
            box-shadow: 0px 36.7197px 75.8084px rgba(0, 0, 0, 0.07);
            border-radius: 38.2798px;
            padding: 40px 50px;
            margin-bottom: 40px;

            @media ${device.phone} {
              width: 240px;
              height: 210px;
              border-radius: 20px;
              padding: 15px;
              margin-bottom: 20px;
            }

            .icon {
              @media ${device.phone} {
                display: block;
              }
            }

            h3 {
              margin: 25px 0;
              font-size: 2.2rem;
              font-weight: 400;
              line-height: 37.9px;

              @media ${device.phone} {
                font-size: 1rem;
                margin: 5px 0;
                line-height: 16px;
                font-weight: 600;
                text-align: left;
              }
            }

            p {
              line-height: 21.64px;

              @media ${device.phone} {
                font-size: 0.7rem;
                line-height: 16px;
              }
            }
          }
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

        @media ${device.phone} {
          width: 100%;
          border-radius: 20px;
          height: 900px;
        }

        .list {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          position: absolute;
          top: -90px;
          z-index: 5;

          @media ${device.phone} {
            left: 30px;
            top: -50px;
          }

          left: -300px;

          .item {
            width: 520px;
            height: 225px;
            background: #ffffff;
            box-shadow: 0px 31.8107px 65.6736px rgba(0, 0, 0, 0.07);
            border-radius: 33.1622px;
            margin-bottom: 40px;
            padding: 30px 40px;

            @media ${device.phone} {
              width: 80%;
              height: 150px;
              border-radius: 20px;
              padding: 12px 20px;
              margin-bottom: 20px;
            }

            p {
              font-size: 1.5rem;
              font-weight: 400;
              margin-top: 20px;

              @media ${device.phone} {
                font-size: 1rem;
                margin-top: 0;
              }
            }
          }

          .item-left {
            position: absolute;
            top: 0;
            right: -600px;

            @media ${device.phone} {
              position: initial;
              right: 0;
            }
          }
        }
      }
    }

    h2 {
      font-size: 2.6rem;
      font-weight: 500;
      margin-top: 200px;

      @media ${device.phone} {
        font-size: 1.8rem;
      }
    }
  }
`;
