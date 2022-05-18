import React from "react";
import styled from "styled-components";
import Image from "next/image";
import CheckIcon from "../../../public/assets/check-box-icon.svg";
import EnterIcon from "../../../public/assets/enter-icon.svg";

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
              <img src='/assets/group1.png' alt='' />
            </div>
            <div className='group2'>
              <img src='/assets/group2.png' alt='' />
            </div>
          </div>

          <div className='cta-view'>
            <p>So why wait?</p>
            <button>
              Get started <EnterIcon className='icon' />
            </button>
          </div>
        </div>
      </div>
    </View>
  );
};

export default WhySction;

const View = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;

  .content {
    width: 1200px;
    height: 100%;
    margin: 0 auto;

    .row {
      margin-top: 65px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .item {
        width: 23%;
        height: 70px;
        background-color: ${(props) => props.theme.colors.grey};
        border-radius: 14px;
        display: flex;
        align-items: center;
        justify-content: center;

        .icon {
          margin-right: 10px;
        }

        span {
          font-size: 1rem;
          font-weight: 700;
        }
      }
    }

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
        width: 730px;
        height: 870px;
        background-color: ${(props) => props.theme.colors.grey};
        border-radius: 100px;
        position: relative;

        .group1 {
          position: absolute;
          top: 0;
          left: -250px;
        }
        .group2 {
          position: absolute;
          top: 0;
          right: -250px;
        }
      }

      .cta-view {
        display: flex;
        align-items: center;
        margin-top: 70px;

        p {
          font-size: 1.3rem;
          font-weight: 500;
          margin-right: 37px;
        }

        button {
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

          .icon {
            margin-left: 10px;
          }
        }
      }
    }
  }
`;
