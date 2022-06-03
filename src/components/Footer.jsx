import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Logo from "../../public/assets/logo.svg";
import FacebookLogo from "../../public/assets/facebook-logo.svg";
import LinkedInLogo from "../../public/assets/linkedin-logo.svg";
import TwitterLogo from "../../public/assets/twitter-logo.svg";
import EnterIcon from "../../public/assets/enter-icon.svg";
import { device } from "constants/breakpoints";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  return (
    <View>
      {router.pathname === "/" ? (
        <div className='car'>
          <img src='/assets/car-footer.png' alt='car' />
        </div>
      ) : null}
      <div className='content'>
        <div className='col1'>
          <div className='logo-view'>
            <Logo />
          </div>
          <p>
            Adding value to our Client by solving their mobility needs through
            tech enabled services
          </p>
          <div className='socials'>
            <div className='icons'>
              <a href='http://' target='_blank' rel='noopener noreferrer'>
                <FacebookLogo />
              </a>
              <a
                href='https://www.linkedin.com/company/drive45-mobility-limited/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <LinkedInLogo />
              </a>
              <a href='http://' target='_blank' rel='noopener noreferrer'>
                <TwitterLogo />
              </a>
            </div>
            <p>©{new Date().getFullYear()}. Drive45mobility.com</p>
          </div>
        </div>
        <div className='col2'>
          <Link href='/about'>
            <a>About Us</a>
          </Link>
          <Link href='/services'>
            <a>Services</a>
          </Link>
          <Link href='/contact'>
            <a>Contact Us</a>
          </Link>
          <a href='http://' target='_blank' rel='noopener noreferrer'>
            Terms of Use
          </a>
          <a href='http://' target='_blank' rel='noopener noreferrer'>
            Privacy Policy
          </a>
        </div>

        <div className='newsletter'>
          <h3>Newsletter</h3>
          <p>
            Sign up now for our mailing list to get all latest news & updates
            from Drive45mobility.com
          </p>
          <input type='email' name='email' placeholder='johndoe@gmail.com' />
          <button>
            Subscribe <EnterIcon className='icon' />
          </button>
        </div>
      </div>
    </View>
  );
};

export default Footer;

const View = styled.footer`
  width: 100vw;
  height: 400px;
  background-color: #f3f2f2;
  position: relative;

  @media ${device.phone} {
    height: 500px;
  }

  .car {
    position: absolute;
    top: -290px;
    left: 0;

    @media ${device.phone} {
      display: none;
    }
  }

  .content {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    position: relative;
    padding: 40px 0;
    display: flex;
    padding-top: 60px;

    @media ${device.phone} {
      width: 100%;
      padding: 140px 20px;
    }

    .newsletter {
      width: 483px;
      height: 353px;
      position: absolute;
      top: -50px;
      right: 0;
      background-color: #ffc500;
      border-radius: 25px;
      padding: 30px 40px;

      @media ${device.phone} {
        width: 90%;
        height: 220px;
        border-radius: 10px;
        right: 20px;
        top: -100px;
        padding: 20px;
      }

      h3 {
        font-size: 3rem;
        font-weight: 700;

        @media ${device.phone} {
          font-size: 1rem;
        }
      }

      p {
        font-size: 1.3rem;
        font-weight: 600;
        line-height: 23.8px;
        margin-bottom: 20px;

        @media ${device.phone} {
          font-size: 0.8rem;
          line-height: 16px;
        }
      }

      input {
        width: 100%;
        height: 50px;
        border-radius: 7px;
        border: none;
        outline: none;
        background-color: #fff;
        padding: 15px 20px;

        @media ${device.phone} {
          height: 40px;
        }

        &:placeholder {
          color: #e3e3e3;
          font-weight: 700;
        }
      }

      button {
        width: 100%;
        height: 50px;
        margin-top: 25px;
        cursor: pointer;
        outline: none;
        border: none;
        border-radius: 7px;
        background-color: ${(props) => props.theme.colors.green};
        padding: 15px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: ${(props) => props.theme.colors.white};
        font-weight: 700;
        text-transform: uppercase;

        @media ${device.phone} {
          height: 40px;
          margin-top: 15px;
        }
      }
    }

    .col2 {
      display: flex;
      flex-direction: column;
      margin-left: 60px;
      margin-top: 30px;

      @media ${device.phone} {
        margin-left: 40px;
      }

      a {
        margin-bottom: 25px;
        color: ${(props) => props.theme.colors.black};
        font-weight: 700;

        @media ${device.phone} {
          font-size: 0.8rem;
        }
      }
    }

    .col1 {
      p {
        font-size: 1.3rem;
        font-weight: 500;
        margin-top: 8px;
        margin-bottom: 60px;
        max-width: 400px;

        @media ${device.phone} {
          font-size: 0.8rem;
          max-width: 200px;
        }
      }

      .socials {
        display: flex;
        align-items: center;

        @media ${device.phone} {
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
        }

        .icons {
          display: flex;
          align-items: center;
          margin-right: 10px;

          svg {
            margin-right: 10px;
            @media ${device.phone} {
              margin-right: 5px;
            }
          }
        }

        p {
          margin: 0;
        }
      }
    }
  }
`;
