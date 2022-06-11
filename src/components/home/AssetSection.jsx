import { device } from "constants/breakpoints";
import React from "react";
import styled from "styled-components";

const assets = [
  {
    id: "1",
    type: "Two wheelers",
    image: "/assets/2x2.png",
  },
  {
    id: "2",
    type: "Four wheelers",
    image: "/assets/4x4.png",
  },
  {
    id: "3",
    type: "Six wheelers",
    image: "/assets/6x6.png",
  },
  {
    id: "4",
    type: "Eight wheelers",
    image: "/assets/8x8.png",
  },
  {
    id: "5",
    type: "10 - 12 wheelers",
    image: "/assets/10x10.png",
  },
];

const AssetSection = () => {
  return (
    <View>
      <div className='content'>
        <div className='heading'>
          <p>TYPES OF VEHICLES THAT WE OFFER</p>
          <div className='row'>
            <div className='line'></div>
            <h3>Broad Assets Class</h3>
            <div className='line'></div>
          </div>
        </div>

        <div className='images'>
          {assets?.map((asset) => {
            return (
              <div className='image' key={asset?.type}>
                <img src={asset?.image} alt={asset?.type} />
                <div className='overlay'>
                  <span>{asset?.type}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </View>
  );
};

export default AssetSection;

const View = styled.section`
  width: 100vw;
  height: 100%;
  position: relative;
  margin-top: 300px;

  @media ${device.phone} {
    margin-top: 500px;
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
        display: flex;
        align-items: flex-start;
        justify-content: center;
      }

      .image {
        width: 319px;
        height: 300px;
        position: relative;
        border-radius: 25.61px;
        margin-right: 40px;
        border: 7px solid rgba(0, 0, 0, 0.09);
        margin-bottom: 30px;

        @media ${device.phone} {
          width: 40%;
          height: 122px;
          border-radius: 10px;
          margin-right: 20px;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 25.61px;
        }

        .overlay {
          width: 100%;
          height: 142px;
          background: linear-gradient(
            0deg,
            #000000 0%,
            rgba(0, 0, 0, 0) 92.96%
          );
          border-radius: 0px 0px 25.6058px 25.61px;
          position: absolute;
          bottom: 0px;
          left: 0;

          @media ${device.phone} {
            height: 64px;
            border-radius: 0 0 10px 10px;
          }

          span {
            font-size: 1.8rem;
            font-weight: 500;
            color: #fff;
            position: absolute;
            bottom: 20px;
            left: 20px;

            @media ${device.phone} {
              font-size: 1rem;
              bottom: 10px;
              left: 10px;
            }
          }
        }
      }
    }

    .heading {
      p {
        font-weight: 700;
        margin-bottom: 12px;
        text-align: center;

        @media ${device.phone} {
          font-size: 0.8rem;
          margin-top: 50px;
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
