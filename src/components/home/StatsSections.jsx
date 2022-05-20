import { device } from "constants/breakpoints";
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
            <div className='boxes'>
              <div className='box box1'>
                <h3>19</h3>
                <p>Location</p>
              </div>
              <div className='box box2'>
                <h3>
                  500,000 <br /> <span>kilometers</span>
                </h3>
                <p>MILEAGE COVERED</p>
              </div>
              <div className='box box3'>
                <h3>$1.4m</h3>
                <p>VALUE OF ASSETS UNDER MANAGEMENT</p>
              </div>
            </div>

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

  @media ${device.phone} {
    margin-top: 150px;
    height: 100%;
    height: 30vh;
    margin-bottom: 100px;
  }

  .image1 {
    position: absolute;
    bottom: 0;
    left: 0;

    img {
      @media ${device.phone} {
        width: 200px;
        height: 150px;
        bottom: -100px;
      }
    }
  }

  .image2 {
    position: absolute;
    bottom: -50px;
    right: 0;

    @media ${device.phone} {
      bottom: 10px;
    }

    img {
      width: 600px;
      height: 600px;

      @media ${device.phone} {
        width: 180px;
        height: 170px;
        bottom: 0;
      }
    }
  }

  .content {
    width: 1200px;
    height: 100%;
    margin: 0 auto;

    @media ${device.phone} {
      padding: 0 20px;
      width: 100%;
    }

    .heading {
      margin-top: 120px;

      p {
        font-size: 1rem;
        font-weight: 700;
        margin-bottom: 8px;

        @media ${device.phone} {
          font-size: 0.8rem;
        }
      }

      .head-text {
        display: flex;
        align-items: center;

        h3 {
          font-size: 3rem;
          font-weight: 700;

          @media ${device.phone} {
            font-size: 1.4rem;
          }
        }

        .line {
          width: 214px;
          border: 0.5px solid #5f5f5f;
          margin-left: 40px;

          @media ${device.phone} {
            width: 100px;
            margin-left: 20px;
          }
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
        flex-direction: column;

        @media ${device.phone} {
          width: 100%;
          justify-content: flex-start;
          align-items: flex-start;
        }

        .cta-view {
          display: flex;
          align-items: center;
          margin-top: 100px;

          @media ${device.phone} {
            margin-top: 50px;
            width: 100%;
            flex-direction: column;
            justify-content: center;
          }

          p {
            font-size: 1.5rem;
            font-weight: 700;
            margin-right: 37px;

            @media ${device.phone} {
              font-size: 0.8rem;
              margin-bottom: 10px;
            }
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

            @media ${device.phone} {
              height: 50px;
            }
          }
        }

        .boxes {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: flex-end;

          @media ${device.phone} {
            margin-top: 100px;
          }

          .box1 {
            width: 253px;
            height: 287px;
            background-color: #fff;
            border: 7px solid #f3f3f3;
            border-radius: 20px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            margin-bottom: 20px;
            margin-right: 30px;

            h3 {
              font-size: 5rem;
              font-weight: 700;

              @media ${device.phone} {
                font-size: 2rem;
              }
            }

            p {
              font-weight: 700;
              text-transform: uppercase;

              @media ${device.phone} {
                font-size: 0.8rem;
              }
            }

            @media ${device.phone} {
              width: 116px;
              height: 132px;
              border-radius: 10px;
            }
          }

          .box2 {
            width: 295px;
            height: 336px;
            background-color: #fff;
            border: 7px solid #f3f3f3;
            border-radius: 20px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            margin-bottom: 20px;

            h3 {
              font-size: 3rem;
              font-weight: 700;
              text-align: center;
              line-height: 30px;
              margin-bottom: 16px;

              @media ${device.phone} {
                font-size: 1.5rem;
                line-height: 20px;
              }

              span {
                font-size: 2rem;

                @media ${device.phone} {
                  font-size: 1rem;
                }
              }
            }

            p {
              font-weight: 700;
              text-transform: uppercase;

              @media ${device.phone} {
                font-size: 0.7rem;
              }
            }

            @media ${device.phone} {
              width: 136px;
              height: 155px;
              border-radius: 10px;
            }
          }

          .box3 {
            width: 319px;
            height: 363px;
            background-color: #fff;
            border: 7px solid #f3f3f3;
            border-radius: 20px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;

            h3 {
              font-size: 3rem;
              font-weight: 700;
              text-align: center;
              line-height: 30px;
              margin-bottom: 16px;

              @media ${device.phone} {
                font-size: 2rem;
              }

              span {
                font-size: 2rem;

                @media ${device.phone} {
                  font-size: 1rem;
                }
              }
            }

            p {
              font-weight: 700;
              text-transform: uppercase;
              text-align: center;

              @media ${device.phone} {
                font-size: 0.7rem;
              }
            }

            @media ${device.phone} {
              width: 147px;
              height: 167px;
              border-radius: 10px;
            }
          }
        }
      }
    }
  }
`;
