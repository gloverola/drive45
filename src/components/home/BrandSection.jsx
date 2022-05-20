import React from "react";
import styled from "styled-components";
import MonumentLogo from "../../../public/assets/monument-logo.svg";
import PZLogo from "../../../public/assets/pz-logo.svg";
import EngeeLogo from "../../../public/assets/engee-logo.svg";
import PrimaLogo from "../../../public/assets/prima-logo.svg";
import BatLogo from "../../../public/assets/bat-logo.svg";
import LacaseraLogo from "../../../public/assets/lacasera-logo.svg";

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
          <MonumentLogo className='icon' />
          <PZLogo />
          <EngeeLogo className='icon' />
          <PrimaLogo className='icon' />
          <BatLogo className='icon' />
          <LacaseraLogo />
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

  .content {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;

    .images {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      margin-top: 90px;

      .icon {
        margin-right: 20px;
      }
    }

    .heading {
      p {
        font-weight: 700;
        margin-bottom: 12px;
        text-align: center;
      }

      .row {
        display: flex;
        align-items: center;
        justify-content: center;

        .line {
          width: 214px;
          border: 0.5px solid #5f5f5f;
        }

        h3 {
          font-size: 3rem;
          font-weight: 500;
          margin: 0 20px;
        }
      }
    }
  }
`;
