import { device } from "constants/breakpoints";
import React from "react";
import styled from "styled-components";

const advantages = [
  {
    id: "01",
    text1: "Brand Agnostic",
    text2:
      "Drive45 is brand agnostic and as such possesses the wide latitude to serve a vast array of our customer’s vehicular needs and automobile brand demands.",
  },
  {
    id: "02",
    text1: "Wide OEM Partnership Spectrum",
    text2:
      "Since we are brand agnostic, we are able to forge broad relationships and partnerships that return value to the business and opens wider doors of opportunities.",
  },
  {
    id: "03",
    text1: "Fleet Management System (FMS)",
    text2:
      "Drive45 maintains its own FMS where all its vehicles are tracked, monitored and from which reports & data is generated for strategic decision making.",
  },
  {
    id: "04",
    text1: "Broad Asset Class",
    text2:
      "Drive45’s willingness to assure customer satisfaction is notable by the broad range of asset class it leases…ranging from 2 to 10 wheeler vehicles.",
  },
];

const AdvantageSection = () => {
  return (
    <View>
      <img src='/assets/car6.png' alt='' className='car6' />
      <div className='content'>
        <h3>Our Advantage</h3>

        <div className='list'>
          {advantages?.map((item) => {
            return (
              <div className='item' key={item?.id}>
                <div className='num-view'>
                  <span>{item?.id}</span>
                </div>
                <div className='col'>
                  <h3>{item?.text1}</h3>
                  <p>{item?.text2}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </View>
  );
};

export default AdvantageSection;

const View = styled.section`
  width: 100vw;
  height: 100%;
  padding: 100px 0;
  background-color: #f4f4f4;
  position: relative;
  margin-bottom: 100px;

  @media ${device.phone} {
    padding: 40px 0;
    padding-bottom: 200px;
  }

  img {
    position: absolute;
    bottom: 50px;
    right: -150px;

    @media ${device.phone} {
      bottom: -70px;
      width: 300px;
      height: 260px;
    }
  }

  .content {
    width: 1200px;
    height: 100%;
    margin: 0 auto;

    @media ${device.phone} {
      height: 100%;
      padding: 0 20px;
    }

    h3 {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 50px;

      @media ${device.phone} {
        font-size: 1.8rem;
        margin-bottom: 20px;
      }
    }

    .list {
      width: 100%;

      .item {
        width: 100%;
        display: flex;
        align-items: flex-start;
        padding: 35px 0;
        /* border-bottom: 0.5px solid #5f5f5f; */

        @media ${device.phone} {
          padding: 20px 0;
        }

        .num-view {
          width: 85px;
          height: 85px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          background-color: #ff0101;
          border: 8px solid #f6c1c1;
          margin-right: 30px;

          @media ${device.phone} {
            width: 40px;
            height: 40px;
            border: 3px solid #f6c1c1;
            margin-right: 10px;
          }

          span {
            font-size: 2.5rem;
            font-weight: 700;

            @media ${device.phone} {
              font-size: 1.2rem;
            }
          }
        }

        .col {
          p {
            max-width: 470px;
            font-size: 1.125rem;
            line-height: 25.6px;

            @media ${device.phone} {
              font-size: 0.8rem;
              max-width: 250px;
              line-height: 16px;
            }
          }

          h3 {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 10px;

            @media ${device.phone} {
              font-size: 1rem;
              max-width: 250px;
            }
          }
        }
      }
    }
  }
`;
