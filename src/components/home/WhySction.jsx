import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import CheckIcon from "../../../public/assets/check-box-icon.svg";
import EnterIcon from "../../../public/assets/enter-icon.svg";
import { device } from "constants/breakpoints";

const WhySction = () => {
  return (
    <View>
      <div className='content'>
        <div className='row'>
          <div className='item'>
            <CheckIcon className='icon' /> <span>Fleet Management</span>
          </div>
          <div className='item'>
            <CheckIcon className='icon' /> <span>Operating Lease</span>
          </div>
          <div className='item'>
            <CheckIcon className='icon' /> <span>Sale and Lease Back</span>
          </div>
          <div className='item'>
            <CheckIcon className='icon' /> <span>Driver Management</span>
          </div>
        </div>

        <div className='heading'>
          <p>OUR VALUE PROPOSITION</p>
          <div className='head-text'>
            <h3>Why Choose Us?</h3>
            <div className='line'></div>
          </div>
        </div>

        <div className='display-view'>
          <div className='display'>
            <Image
              //   loader={myLoader}
              src='/assets/potrait.png'
              alt='Picture of the author'
              width={730}
              height={870}
            />
            <div className='group1'>
              <div className='box1'>
                <div className='circle'>
                  <img src='/assets/t1.png' alt='icon' />
                </div>
                <h3>Technology</h3>
              </div>
              <div className='box2'>
                <div className='circle'>
                  <img src='/assets/t2.png' alt='icon' />
                </div>
                <h3>Convenience</h3>
              </div>
              <div className='box3'>
                <div className='circle'>
                  <img src='/assets/t3.png' alt='icon' />
                </div>
                <h3>Quick TAT</h3>
              </div>
            </div>
            <div className='group2'>
              <div className='box3'>
                <div className='circle'>
                  <img src='/assets/t4.png' alt='icon' />
                </div>
                <h3>Affordability</h3>
              </div>
              <div className='box1'>
                <div className='circle'>
                  <img src='/assets/t5.png' alt='icon' />
                </div>
                <h3>Quality Assurance</h3>
              </div>
              <div className='box2'>
                <div className='circle'>
                  <img src='/assets/t6.png' alt='icon' />
                </div>
                <h3>Peace of Mind</h3>
              </div>
            </div>
          </div>

          <div className='cta-view'>
            <p>So why wait?</p>
            <Link href='/contact'>
              <a>
                Get started <EnterIcon className='icon' />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </View>
  );
};

export default WhySction;

const View = styled.section`
  width: 100vw;
  height: 100%;
  position: relative;
  margin-top: 200px;

  .content {
    width: 1200px;
    height: 100%;
    margin: 0 auto;

    @media ${device.phone} {
      width: 100%;
      padding: 0 20px;
    }

    .row {
      margin-top: 65px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-bottom: 100px;

      .item {
        width: 23%;
        height: 70px;
        background-color: ${(props) => props.theme.colors.grey};
        border-radius: 14px;
        display: flex;
        align-items: center;
        justify-content: center;

        @media ${device.phone} {
          width: 48%;
          height: 50px;
          margin-bottom: 20px;
        }

        .icon {
          margin-right: 10px;

          @media ${device.phone} {
            width: 20px;
            height: 20px;
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
        width: 730px;
        height: 870px;
        background-color: ${(props) => props.theme.colors.grey};
        border-radius: 100px;
        position: relative;

        @media ${device.phone} {
          width: 260px;
          height: 310px;
          border-radius: 28px;
        }

        .group1 {
          position: absolute;
          top: 40px;
          left: -137px;
          width: 275px;
          height: 100%;

          @media ${device.phone} {
            display: flex;
            position: absolute;
            top: 250px;
            left: -10px;
          }

          .box1 {
            width: 100%;
            height: 230px;
            background-color: #ff0101;
            border: 7px solid #ff5f5f;
            box-shadow: -19px 36.2px 63.41px rgba(0, 0, 0, 0.22);
            border-radius: 25.6058px;
            padding: 40px 30px;
            margin-bottom: 37px;

            @media ${device.phone} {
              width: 140px;
              height: 75px;
              border-radius: 5px;
              padding: 5px;
              border: 3px solid #ff5f5f;
              margin-right: 10px;
            }

            .circle {
              width: 57px;
              height: 57px;
              border-radius: 50%;
              background-color: #fff;
              display: flex;
              align-items: center;
              justify-content: center;
              border: 7px solid #ff5f5f;

              @media ${device.phone} {
                width: 30px;
                height: 30px;
                border: 3px solid #ff5f5f;
              }

              img {
                width: 40px;
                height: 40px;

                @media ${device.phone} {
                  width: 15px;
                  height: 15px;
                }
              }
            }

            h3 {
              font-size: 1.6rem;
              color: #fff;
              margin-top: 12px;

              @media ${device.phone} {
                font-size: 0.6rem;
                margin-top: 5px;
              }
            }
          }

          .box2 {
            width: 100%;
            height: 230px;
            background-color: #00ac00;
            border: 7px solid #5ecb5e;
            box-shadow: -19px 36.2px 63.41px rgba(0, 0, 0, 0.22);
            border-radius: 25.6058px;
            padding: 40px 30px;
            margin-bottom: 37px;

            @media ${device.phone} {
              width: 140px;
              height: 75px;
              border-radius: 5px;
              padding: 5px;
              border: 3px solid #5ecb5e;
              margin-right: 10px;
            }

            .circle {
              width: 57px;
              height: 57px;
              border-radius: 50%;
              background-color: #fff;
              display: flex;
              align-items: center;
              justify-content: center;
              border: 7px solid #5ecb5e;

              @media ${device.phone} {
                width: 30px;
                height: 30px;
                border: 3px solid #5ecb5e;
              }

              img {
                width: 40px;
                height: 40px;

                @media ${device.phone} {
                  width: 15px;
                  height: 15px;
                }
              }
            }

            h3 {
              font-size: 1.6rem;
              color: #fff;
              margin-top: 12px;

              @media ${device.phone} {
                font-size: 0.6rem;
                margin-top: 5px;
              }
            }
          }

          .box3 {
            width: 100%;
            height: 230px;
            background-color: #ffc500;
            border: 7px solid #ffda5e;
            box-shadow: -19px 36.2px 63.41px rgba(0, 0, 0, 0.22);
            border-radius: 25.6058px;
            padding: 40px 30px;

            @media ${device.phone} {
              width: 140px;
              height: 75px;
              border-radius: 5px;
              padding: 5px;
              border: 3px solid #ffda5e;
            }

            .circle {
              width: 57px;
              height: 57px;
              border-radius: 50%;
              background-color: #fff;
              display: flex;
              align-items: center;
              justify-content: center;
              border: 7px solid #ffda5e;

              @media ${device.phone} {
                width: 30px;
                height: 30px;
                border: 3px solid #ffda5e;
              }

              img {
                width: 40px;
                height: 40px;

                @media ${device.phone} {
                  width: 15px;
                  height: 15px;
                }
              }
            }

            h3 {
              font-size: 1.6rem;
              color: #000;
              margin-top: 12px;

              @media ${device.phone} {
                font-size: 0.6rem;
                margin-top: 5px;
              }
            }
          }
        }

        .group2 {
          position: absolute;
          right: -167px;
          top: 40px;
          width: 275px;
          height: 100%;

          @media ${device.phone} {
            display: flex;
            position: absolute;
            top: 340px;
            right: -8px;
          }

          .box1 {
            width: 100%;
            height: 230px;
            background-color: #ff0101;
            border: 7px solid #ff5f5f;
            box-shadow: -19px 36.2px 63.41px rgba(0, 0, 0, 0.22);
            border-radius: 25.6058px;
            padding: 40px 30px;
            margin-bottom: 37px;

            @media ${device.phone} {
              width: 140px;
              height: 75px;
              border-radius: 5px;
              padding: 5px;
              border: 3px solid #ff5f5f;
              margin-left: 10px;
            }

            .circle {
              width: 57px;
              height: 57px;
              border-radius: 50%;
              background-color: #fff;
              display: flex;
              align-items: center;
              justify-content: center;
              border: 7px solid #ff5f5f;

              @media ${device.phone} {
                width: 30px;
                height: 30px;
                border: 3px solid #ff5f5f;
              }

              img {
                width: 40px;
                height: 40px;

                @media ${device.phone} {
                  width: 15px;
                  height: 15px;
                }
              }
            }

            h3 {
              font-size: 1.6rem;
              color: #fff;
              margin-top: 12px;

              @media ${device.phone} {
                font-size: 0.6rem;
                margin-top: 5px;
              }
            }
          }

          .box2 {
            width: 100%;
            height: 230px;
            background-color: #00ac00;
            border: 7px solid #5ecb5e;
            box-shadow: -19px 36.2px 63.41px rgba(0, 0, 0, 0.22);
            border-radius: 25.6058px;
            padding: 40px 30px;
            margin-bottom: 37px;

            @media ${device.phone} {
              width: 140px;
              height: 75px;
              border-radius: 5px;
              padding: 5px;
              border: 3px solid #5ecb5e;
              margin-left: 10px;
            }

            .circle {
              width: 57px;
              height: 57px;
              border-radius: 50%;
              background-color: #fff;
              display: flex;
              align-items: center;
              justify-content: center;
              border: 7px solid #5ecb5e;

              @media ${device.phone} {
                width: 30px;
                height: 30px;
                border: 3px solid #5ecb5e;
              }

              img {
                width: 40px;
                height: 40px;

                @media ${device.phone} {
                  width: 15px;
                  height: 15px;
                }
              }
            }

            h3 {
              font-size: 1.6rem;
              color: #fff;
              margin-top: 12px;

              @media ${device.phone} {
                font-size: 0.6rem;
                margin-top: 5px;
              }
            }
          }

          .box3 {
            width: 100%;
            height: 230px;
            background-color: #ffc500;
            border: 7px solid #ffda5e;
            box-shadow: -19px 36.2px 63.41px rgba(0, 0, 0, 0.22);
            border-radius: 25.6058px;
            padding: 40px 30px;
            margin-bottom: 37px;

            @media ${device.phone} {
              width: 140px;
              height: 75px;
              border-radius: 5px;
              padding: 5px;
              border: 3px solid #ffda5e;
            }

            .circle {
              width: 57px;
              height: 57px;
              border-radius: 50%;
              background-color: #fff;
              display: flex;
              align-items: center;
              justify-content: center;
              border: 7px solid #ffda5e;

              @media ${device.phone} {
                width: 30px;
                height: 30px;
                border: 3px solid #ffda5e;
              }

              img {
                width: 40px;
                height: 40px;

                @media ${device.phone} {
                  width: 15px;
                  height: 15px;
                }
              }
            }

            h3 {
              font-size: 1.6rem;
              color: #000;
              margin-top: 12px;

              @media ${device.phone} {
                font-size: 0.6rem;
                margin-top: 5px;
              }
            }
          }
        }
      }

      .cta-view {
        display: flex;
        align-items: center;
        margin-top: 70px;

        @media ${device.phone} {
          margin-top: 150px;
        }

        p {
          font-size: 1.3rem;
          font-weight: 500;
          margin-right: 37px;

          @media ${device.phone} {
            font-size: 0.8rem;
            margin-right: 20px;
          }
        }

        button,
        a {
          padding: 15px 50px;
          background-color: ${(props) => props.theme.colors.green};
          border: none;
          outline: none;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          font-weight: 700;
          color: ${(props) => props.theme.colors.white};
          text-transform: uppercase;
          border-radius: 14px;

          @media ${device.phone} {
            font-size: 1rem;
            padding: 5px 10px;
            border-radius: 8px;
          }

          .icon {
            margin-left: 10px;
          }
        }
      }
    }
  }
`;
