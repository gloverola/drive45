import React from "react";
import styled from "styled-components";
import TargetIcon from "../../../public/assets/target-icon.svg";
import VisionIcon from "../../../public/assets/vision-icon.svg";
import CheckIcon from "../../../public/assets/check-box-icon.svg";
import { device } from "constants/breakpoints";

const HeroSection = () => {
  return (
    <View>
      <div className='content'>
        <div className='display'>
          <h1>About Us</h1>
          <div className='line'></div>
          <img src='/assets/car5.png' alt='' />
        </div>

        <div className='row1'>
          <div className='box'>
            <div className='layer1'>
              <div className='icon-view'>
                <TargetIcon className='icon' />
              </div>
              <div className='col'>
                <p>what drives us</p>
                <h3>Mission Statement</h3>
              </div>
            </div>
            <div className='layer2'>
              <p>
                Adding value to our Client by solving their mobility needs
                through tech enabled services
              </p>
            </div>
          </div>
          <div className='list'>
            <div className='item'>
              <CheckIcon className='icon' /> <span>Fleet Management</span>
            </div>
            <div className='item'>
              <CheckIcon className='icon' /> <span>Operating Lease</span>
            </div>
          </div>
        </div>

        <div className='row2'>
          <div className='list'>
            <div className='item'>
              <CheckIcon className='icon' /> <span>Driver Management</span>
            </div>
            <div className='item'>
              <CheckIcon className='icon' /> <span>Sale and Lease Back</span>
            </div>
          </div>

          <div className='box'>
            <div className='layer1'>
              <div className='icon-view'>
                <VisionIcon />
              </div>
              <div className='col'>
                <p>what drives us</p>
                <h3>Mission Statement</h3>
              </div>
            </div>
            <div className='layer2'>
              <p>
                Adding value to our Client by solving their mobility needs
                through tech enabled services
              </p>
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

  @media ${device.phone} {
    padding: 50px 0;
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
      background-color: #e0ffe0;
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
        bottom: -100px;
        right: -50px;

        @media ${device.phone} {
          right: 0;
          bottom: -50px;
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

    .row1 {
      width: 100%;
      display: flex;
      align-items: center;
      margin-top: 100px;

      @media ${device.phone} {
        flex-direction: column;
      }

      .box {
        width: 620px;
        height: 225px;
        background-color: ${(props) => props.theme.colors.green};
        border: 7.31474px solid #e0ffe0;
        box-shadow: 29.259px 37.8276px 66.2611px rgba(0, 0, 0, 0.09);
        border-radius: 26.7571px;
        padding: 30px 50px;
        margin-right: 40px;

        @media ${device.phone} {
          width: 100%;
          height: 100%;
          padding: 20px;
          margin-right: 0;
        }

        .layer1 {
          width: 100%;
          display: flex;
          align-items: center;
          margin-bottom: 16px;
          color: ${(props) => props.theme.colors.white};

          .icon-view {
            width: 78px;
            height: 78px;
            border-radius: 50%;
            background-color: #5dcb5e;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 12px;

            @media ${device.phone} {
              width: 60px;
              height: 60px;
            }
          }

          .col {
            p {
              font-size: 0.8rem;
              text-transform: uppercase;

              @media ${device.phone} {
                font-size: 0.7rem;
              }
            }

            h3 {
              font-size: 2rem;
              font-weight: 600;

              @media ${device.phone} {
                font-size: 1rem;
              }
            }
          }
        }

        .layer2 {
          p {
            font-size: 1.3rem;
            line-height: 30.7px;
            color: ${(props) => props.theme.colors.white};

            @media ${device.phone} {
              font-size: 0.8rem;
              line-height: 16px;
            }
          }
        }
      }

      .list {
        @media ${device.phone} {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 20px;
        }
        .item {
          width: 270px;
          height: 70px;
          background-color: ${(props) => props.theme.colors.grey};
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding: 0 30px;
          margin: 15px 0;

          @media ${device.phone} {
            padding: 0 10px;
            width: 48%;
            height: 50px;
          }

          .icon {
            margin-right: 10px;

            @media ${device.phone} {
              display: none;
            }
          }

          span {
            font-size: 1rem;
            font-weight: 700;

            @media ${device.phone} {
              font-size: 0.8rem;
            }
          }
        }
      }
    }

    .row2 {
      width: 100%;
      display: flex;
      align-items: center;
      margin-top: 100px;
      justify-content: flex-end;

      @media ${device.phone} {
        flex-direction: column-reverse;
        margin-top: 40px;
      }

      .box {
        width: 620px;
        height: 225px;
        background-color: #ffc500;
        border: 7.31474px solid #fff0bd;
        box-shadow: 29.259px 37.8276px 66.2611px rgba(0, 0, 0, 0.09);
        border-radius: 26.7571px;
        padding: 30px 50px;
        margin-left: 40px;

        @media ${device.phone} {
          width: 100%;
          height: 100%;
          padding: 20px;
          margin-left: 0;
        }

        .layer1 {
          width: 100%;
          display: flex;
          align-items: center;
          margin-bottom: 16px;
          color: ${(props) => props.theme.colors.black};

          .icon-view {
            width: 78px;
            height: 78px;
            border-radius: 50%;
            background-color: #fff0bd;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 12px;

            @media ${device.phone} {
              width: 60px;
              height: 60px;
            }
          }

          .col {
            p {
              font-size: 0.8rem;
              text-transform: uppercase;

              @media ${device.phone} {
                font-size: 0.7rem;
              }
            }

            h3 {
              font-size: 2rem;
              font-weight: 500;

              @media ${device.phone} {
                font-size: 1rem;
              }
            }
          }
        }

        .layer2 {
          p {
            font-size: 1.3rem;
            line-height: 30.7px;
            color: ${(props) => props.theme.colors.black};

            @media ${device.phone} {
              font-size: 0.8rem;
              line-height: 16px;
            }
          }
        }
      }

      .list {
        @media ${device.phone} {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 20px;
        }

        .item {
          width: 300px;
          height: 70px;
          background-color: ${(props) => props.theme.colors.grey};
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding: 0 30px;
          margin: 15px 0;

          @media ${device.phone} {
            padding: 0 10px;
            width: 48%;
            height: 50px;
          }

          .icon {
            margin-right: 10px;

            @media ${device.phone} {
              display: none;
            }
          }

          span {
            font-size: 1rem;
            font-weight: 700;

            @media ${device.phone} {
              font-size: 0.7rem;
            }
          }
        }
      }
    }
  }
`;
