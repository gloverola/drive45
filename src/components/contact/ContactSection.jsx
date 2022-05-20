import React from "react";
import styled from "styled-components";
import EnterIcon from "../../../public/assets/enter-icon.svg";

const ContactSection = () => {
  return (
    <View>
      <div className='content'>
        <div className='display'>
          <h1>Contact Us</h1>
          <div className='line'></div>
          <img src='/assets/car10.png' alt='car' />
        </div>

        <div className='heading'>
          <h2>Got a message for us?</h2>
          <p>Our Customer Experience team is just few texts away.</p>
        </div>

        <div className='row'>
          <form>
            <div className='input'>
              <label htmlFor='name'>Full Name</label>
              <input type='text' placeholder='Enter here' />
            </div>
            <div className='input'>
              <label htmlFor='name'>Email Address</label>
              <input type='email' placeholder='Enter here' />
            </div>
            <div className='input'>
              <label htmlFor='name'>Phone Number</label>
              <input type='text' placeholder='Enter here' />
            </div>
            <div className='input'>
              <label htmlFor='name'>Message</label>
              <textarea rows={7} type='text' placeholder='Enter here' />
            </div>
            <button type='submit'>
              SEND MESSAGE <EnterIcon className='icon' />
            </button>
          </form>
          <div className='image-view'>
            <img src='/assets/man.png' alt='man holding phone' />
          </div>
        </div>
      </div>
    </View>
  );
};

export default ContactSection;

const View = styled.section`
  width: 100vw;
  height: 100%;
  padding: 100px 0;
  position: relative;
  margin-bottom: 100px;

  .content {
    width: 1200px;
    height: 100%;
    margin: 0 auto;

    .display {
      width: 100%;
      height: 340px;
      background-color: #fff9e4;
      border-radius: 45px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 100px;
      position: relative;

      img {
        position: absolute;
        bottom: -100px;
        right: -30px;
      }

      h1 {
        font-size: 3rem;
        font-weight: 500;
      }

      .line {
        width: 94px;
        height: 5px;
        background-color: ${(props) => props.theme.colors.green};
      }
    }

    .heading {
      margin-top: 70px;

      h2 {
        font-size: 3rem;
        font-weight: 500;
      }

      p {
        font-size: 1.5rem;
      }
    }

    .row {
      width: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin-top: 90px;

      form {
        width: 55%;

        .input {
          width: 100%;
          display: flex;
          flex-direction: column;
          margin-bottom: 30px;

          input {
            height: 58px;
            border: none;
            outline: none;
            background-color: #f6f6f6;
            border-radius: 9px;
            margin-top: 5px;
            padding: 20px;
            resize: none;
          }

          textarea {
            border: none;
            outline: none;
            background-color: #f6f6f6;
            border-radius: 9px;
            margin-top: 5px;
            padding: 20px;
            resize: none;
          }
        }

        button {
          width: 400px;
          height: 70px;
          margin-top: 50px;
          cursor: pointer;
          outline: none;
          border: none;
          border-radius: 7px;
          background-color: ${(props) => props.theme.colors.green};
          padding: 15px 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${(props) => props.theme.colors.white};
          font-weight: 700;
          text-transform: uppercase;
          font-size: 1.6rem;

          .icon {
            margin-left: 20px;
          }
        }
      }

      .image-view {
        width: 40%;
        display: flex;
        justify-content: flex-end;
        img {
          width: 100%;
        }
      }
    }
  }
`;