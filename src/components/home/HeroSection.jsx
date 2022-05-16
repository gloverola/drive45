import React from "react";
import styled from "styled-components";
import Image from "next/image";
import EnterIcon from "../../../public/assets/enter-icon.svg";

const HeroSection = () => {
  return (
    <View>
      <div className='image1'>
        <Image
          //   loader={myLoader}
          src='/assets/car1.png'
          alt='Picture of the author'
          width={500}
          height={500}
        />
      </div>
      <div className='image2'>
        <Image
          //   loader={myLoader}
          src='/assets/car2.png'
          alt='Picture of the author'
          width={500}
          height={500}
        />
      </div>
      <div className='content'>
        <div className='header'>
          <h1>
            Your <span>first choice</span> mobility solution
          </h1>
        </div>

        <div className='row'>
          <p>Reliability</p>
          <div className='line'></div>
          <p>Convenience</p>
          <div className='line'></div>
          <p>Efficiency</p>
        </div>

        <div className='cta'>
          <button>
            Get started <EnterIcon className='icon' />
          </button>
        </div>
      </div>
    </View>
  );
};

export default HeroSection;

const View = styled.section`
  width: 100vw;
  height: calc(100vh - 90px);
  position: relative;

  .image1 {
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .image2 {
    position: absolute;
    bottom: 0;
    right: 0;
  }

  .content {
    width: 1200px;
    height: 80vh;
    margin: 0 auto;
    background-color: ${(props) => props.theme.colors.grey};
    border-radius: 46px;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px;

    .header {
      max-width: 640px;

      h1 {
        width: 600px;
        font-size: 4.5rem;
        font-weight: 700;
        text-align: center;
        line-height: 83.6px;

        span {
          color: ${(props) => props.theme.colors.red};
        }
      }
    }

    .row {
      display: flex;
      align-items: center;
      margin-top: 20px;

      .line {
        margin: 0 15px;
        width: 2px;
        height: 20px;
        background-color: ${(props) => props.theme.colors.black};
      }

      p {
        font-size: 1.8rem;
      }
    }

    .cta {
      margin-top: 120px;
      button {
        padding: 20px 50px;
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
`;
