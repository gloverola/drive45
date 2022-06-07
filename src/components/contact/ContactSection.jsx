import { device } from "constants/breakpoints";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import EnterIcon from "../../../public/assets/enter-icon.svg";
import emailjs from "@emailjs/browser";
import { Oval } from "react-loader-spinner";
import toast from "react-hot-toast";

const ContactSection = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    setLoading(true);
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ra6cw5t",
        "template_ud790qz",
        form.current,
        "TWF6QSH0kscyhfZmf"
      )
      .then(
        (result) => {
          setLoading(false);
          toast.success("Message sent successfully!");
        },
        (error) => {
          setLoading(false);
          toast.error("Unable to send message, please try again");
        }
      );
  };

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
          <form onSubmit={sendEmail} ref={form}>
            <div className='input'>
              <label htmlFor='name'>Full Name</label>
              <input
                type='text'
                name='user_name'
                placeholder='Enter here'
                required
              />
            </div>
            <div className='input'>
              <label htmlFor='user_email'>Email Address</label>
              <input
                type='email'
                name='user_email'
                placeholder='Enter here'
                required
              />
            </div>
            <div className='input'>
              <label htmlFor='user_phone'>Phone Number</label>
              <input
                type='text'
                name='user_phone'
                placeholder='Enter here'
                required
              />
            </div>
            <div className='input'>
              <label htmlFor='message'>Message</label>
              <textarea
                rows={7}
                type='text'
                name='message'
                placeholder='Enter here'
                required
              />
            </div>
            <button type='submit'>
              {loading ? (
                <Oval color='#FFF' height={30} width={30} />
              ) : (
                <>
                  SEND MESSAGE <EnterIcon className='icon' />
                </>
              )}
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

  @media ${device.phone} {
    padding: 50px 0;
  }

  .content {
    width: 1200px;
    height: 100%;
    margin: 0 auto;

    @media ${device.phone} {
      width: 100%;
      padding: 0 20px;
    }

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

      @media ${device.phone} {
        padding: 50px 40px;
        height: 250px;
        justify-content: flex-start;
        border-radius: 20px;
      }

      img {
        position: absolute;
        bottom: -100px;
        right: -30px;

        @media ${device.phone} {
          right: 0;
          bottom: -50px;
        }
      }

      h1 {
        font-size: 3rem;
        font-weight: 500;

        @media ${device.phone} {
          font-size: 1.8rem;
        }
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
        font-weight: 700;

        @media ${device.phone} {
          font-size: 1.5rem;
        }
      }

      p {
        font-size: 1.5rem;

        @media ${device.phone} {
          font-size: 1rem;
        }
      }
    }

    .row {
      width: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin-top: 90px;

      @media ${device.phone} {
        flex-direction: column-reverse;
        margin-top: 30px;
      }

      form {
        width: 55%;

        @media ${device.phone} {
          width: 100%;
        }

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

          @media ${device.phone} {
            width: 100%;
            height: 50px;
            font-size: 1.2rem;
          }

          .icon {
            margin-left: 20px;
          }
        }
      }

      .image-view {
        width: 40%;
        display: flex;
        justify-content: flex-end;

        @media ${device.phone} {
          width: 100%;
        }

        img {
          width: 100%;
        }
      }
    }
  }
`;
