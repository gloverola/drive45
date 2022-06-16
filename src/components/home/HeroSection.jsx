import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import EnterIcon from "../../../public/assets/enter-icon.svg";
import { device } from "constants/breakpoints";

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
      <div className='image1-mobile'>
        <Image
          //   loader={myLoader}
          src='/assets/car1.png'
          alt='Picture of the author'
          width={160}
          height={160}
        />
      </div>
      <div className='image2-mobile'>
        <Image
          //   loader={myLoader}
          src='/assets/car2.png'
          alt='Picture of the author'
          width={200}
          height={200}
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
          <Link href='/contact'>
            <a>
              Get started <EnterIcon className='icon' />
            </a>
          </Link>
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

  @media ${device.phone} {
    height: 63vh;
    padding: 0 20px;
  }

  .image1 {
    position: absolute;
    bottom: 0;
    left: -100px;

    @media ${device.phone} {
      display: none;
    }
  }

  .image2 {
    position: absolute;
    bottom: 0;
    right: -100px;

    @media ${device.phone} {
      display: none;
    }
  }
  .image1-mobile {
    position: absolute;
    bottom: 0;
    left: 0;
    display: none;

    @media ${device.phone} {
      display: block;
    }
  }

  .image2-mobile {
    position: absolute;
    bottom: 0;
    right: 0;
    display: none;

    @media ${device.phone} {
      display: block;
    }
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

    @media ${device.phone} {
      width: 100%;
      margin-top: 30px;
      padding: 30px;
      height: 50vh;
    }

    .header {
      max-width: 640px;

      h1 {
        width: 600px;
        font-size: 4.5rem;
        font-weight: 700;
        text-align: center;
        line-height: 83.6px;

        @media ${device.phone} {
          font-size: 2rem;
          width: 270px;
          line-height: 38.2px;
        }

        span {
          color: ${(props) => props.theme.colors.red};
        }
      }
    }

    .row {
      display: flex;
      align-items: center;
      margin-top: 20px;

      @media ${device.phone} {
        width: 100%;
      }

      .line {
        margin: 0 15px;
        width: 2px;
        height: 20px;
        background-color: ${(props) => props.theme.colors.black};
      }

      p {
        font-size: 1.8rem;

        @media ${device.phone} {
          font-size: 0.8rem;
          justify-content: center;
        }
      }
    }

    .cta {
      margin-top: 120px;

      @media ${device.phone} {
        margin-top: 30px;
      }

      button,
      a {
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

        @media ${device.phone} {
          padding: 8px 25px;
          font-size: 1rem;
        }

        .icon {
          margin-left: 10px;
        }
      }
    }
  }
`;
