import React from "react";
import styled from "styled-components";
import MonumentLogo from "../../../public/assets/monument-logo.svg";
import PZLogo from "../../../public/assets/pz-logo.svg";
import EngeeLogo from "../../../public/assets/engee-logo.svg";
import PrimaLogo from "../../../public/assets/prima-logo.svg";
import BatLogo from "../../../public/assets/bat-logo.svg";
import JotnaLogo from "../../../public/assets/jotna-logo.svg";
import JotnaLogo2 from "../../../public/assets/jotna-logo2.svg";
import LacaseraLogo from "../../../public/assets/lacasera-logo.svg";
import MonumentLogo2 from "../../../public/assets/monument-logo2.svg";
import PZLogo2 from "../../../public/assets/pz-logo2.svg";
import EngeeLogo2 from "../../../public/assets/engee-logo2.svg";
import PrimaLogo2 from "../../../public/assets/prima-logo2.svg";
import BatLogo2 from "../../../public/assets/bat-logo2.svg";
import LacaseraLogo2 from "../../../public/assets/lacasera-logo2.svg";
import { device } from "constants/breakpoints";

const BrandSection = () => {
  return (
    <View>
      <div className='content'>
        <div className='heading'>
          <p>OUR CLIENTELLE</p>
          <div className='row'>
            <div className='line'></div>
            <h3>Brands that trust us</h3>
            <div className='line'></div>
          </div>
        </div>

        <div className='images'>
          <BatLogo className='icon logo5' />
          <MonumentLogo className='icon logo1' />
          <PZLogo className='logo2' />
          <EngeeLogo className='icon logo3' />
          <LacaseraLogo className='logo4' />
          <PrimaLogo className='icon logo6' />
          <JotnaLogo className='icon logo4' />
        </div>
        <div className='images-mobile'>
          <BatLogo2 className='icon logo5' />
          <MonumentLogo2 className='icon logo1' />
          <PZLogo2 className='logo2' />
          <LacaseraLogo2 className='logo6' />
          <EngeeLogo2 className='icon logo3' />
          <JotnaLogo2 className='icon logo7' />
          <PrimaLogo2 className='icon logo4' />
        </div>
      </div>
    </View>
  );
};

export default BrandSection;

const View = styled.section`
  width: 100vw;
  height: 100%;
  position: relative;
  margin-top: 150px;
  margin-bottom: 300px;

  @media ${device.phone} {
    margin-bottom: 200px;
  }

  .content {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;

    @media ${device.phone} {
      width: 100%;
      padding: 0 20px;
    }

    .images {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      margin-top: 90px;

      @media ${device.phone} {
        display: none;
      }

      .icon {
        margin-right: 20px;
      }

      .logo6 {
        margin-left: 20px;
      }
    }

    .images-mobile {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      margin-top: 50px;
      display: none;

      @media ${device.phone} {
        display: flex;
      }

      .icon {
        margin-right: 10px;
        margin-top: 20px;
      }

      .logo7 {
        margin-left: 20px;
      }
      .logo6 {
        margin-left: 20px;
      }
    }

    .heading {
      p {
        font-weight: 700;
        margin-bottom: 12px;
        text-align: center;

        @media ${device.phone} {
          font-size: 0.8rem;
        }
      }

      .row {
        display: flex;
        align-items: center;
        justify-content: center;

        .line {
          width: 214px;
          border: 0.5px solid #5f5f5f;

          @media ${device.phone} {
            width: 40px;
          }
        }

        h3 {
          font-size: 3rem;
          font-weight: 500;
          margin: 0 20px;

          @media ${device.phone} {
            font-size: 1.1rem;
            margin: 0 10px;
          }
        }
      }
    }
  }
`;
