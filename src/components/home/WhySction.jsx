import React from "react";
import styled from "styled-components";
import Image from "next/image";
import CheckIcon from "../../../public/assets/check-box-icon.svg";

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
          <div className='dispalay'>
            <Image
              //   loader={myLoader}
              src='/assets/potrait.png'
              alt='Picture of the author'
              width={730}
              height={870}
            />
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
      align-items: flex-start;

      .display {
        width: 730px;
        height: 870px;
        background-color: ${(props) => props.theme.colors.grey};
        border-radius: 100px;
      }
    }
  }
`;
