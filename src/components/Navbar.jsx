import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";
import { device } from "constants/breakpoints";
import Logo from "../../public/assets/logo.svg";

const navLinks = [
  {
    title: "home",
    path: "/",
  },
  {
    title: "about",
    path: "/about",
  },
  {
    title: "services",
    path: "/services",
  },
  {
    title: "contact us",
    path: "/contact",
  },
];

const Navbar = () => {
  const router = useRouter();

  return (
    <View>
      <div className='content'>
        <div className='logo-view'>
          <Logo />
        </div>

        <div className='nav-links'>
          {navLinks.map((link) => {
            return (
              <li key={link?.title}>
                <Link href={link?.path}>
                  <a
                    className={
                      router?.pathname === link?.path ? "activeLink" : ""
                    }
                  >
                    {link?.title}
                  </a>
                </Link>
              </li>
            );
          })}
        </div>
      </div>
    </View>
  );
};

export default Navbar;

const View = styled.nav`
  width: 100vw;
  height: 90px;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.black};
  z-index: 100;

  @media ${device.tablet} {
    padding: 0 40px;
  }
  @media ${device.phone} {
    padding: 0 20px;
  }

  .content {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media ${device.phone} {
      width: 100%;
    }

    .nav-links {
      display: flex;
      width: 500px;
      align-items: center;
      justify-content: space-between;

      li {
        text-decoration: none;
        list-style: none;

        a {
          text-transform: uppercase;
          color: ${(props) => props.theme.colors.black};
          font-weight: 600;
          transition: all 0.3s ease-in-out;
          position: relative;

          &:before {
            content: "";
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: -5px;
            left: 0;
            background-color: ${(props) => props.theme.colors.green};
            -webkit-transform: scaleX(0);
            transform: scaleX(0);
            -webkit-transition: all 0.3s ease-in-out 0s;
            transition: all 0.3s ease-in-out 0s;
          }

          &:hover::before {
            visibility: visible;
            -webkit-transform: scaleX(1);
            transform: scaleX(1);
          }

          &:hover {
            color: ${(props) => props.theme.colors.green};
          }
        }

        .activeLink {
          text-transform: uppercase;
          color: ${(props) => props.theme.colors.green};
          font-weight: 600;
          transition: all 0.3s ease-in-out;
          position: relative;

          &:before {
            content: "";
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: -5px;
            left: 0;
            background-color: ${(props) => props.theme.colors.green};
            -webkit-transition: all 0.3s ease-in-out 0s;
            transition: all 0.3s ease-in-out 0s;
            visibility: visible;
            -webkit-transform: scaleX(1);
            transform: scaleX(1);
          }
        }
      }
    }
  }
`;
