import React from "react";
import styled from "styled-components";

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
          <img src='/assets/2x2.png' alt='' />
          <img src='/assets/4x4.png' alt='' />
          <img src='/assets/6x6.png' alt='' />
          <img src='/assets/8x8.png' alt='' />
          <img src='/assets/10x10.png' alt='' />
        </div>
      </div>
    </View>
  );
};

export default AssetSection;

const View = styled.section`
  width: 100vw;
  height: 90vh;
  position: relative;
  margin-top: 400px;

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

      img {
        width: 340px;
        height: 300px;
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
