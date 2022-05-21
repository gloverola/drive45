import styled from "styled-components";
import Logo from "../../public/assets/logo.svg";
import CloseIcon from "../../public/assets/close-icon.svg";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { device } from "constants/breakpoints";

const routes = [
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

const subMenuAnimate = {
  enter: {
    //     width: "100%",
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
    },
    display: "block",
  },
  exit: {
    //     width: "0%",
    y: -400,
    opacity: 0,
    transition: {
      duration: 0.2,
      delay: 0.1,
    },
    transitionEnd: {
      display: "none",
    },
  },
};

const MobileNavigator = ({ openNav, setOpenNav }) => {
  const router = useRouter();

  const handleCloseNav = () => {
    setOpenNav(false);
  };

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {openNav && (
          <View
            variants={subMenuAnimate}
            initial='exit'
            animate={openNav ? "enter" : "exit"}
            exit='exit'
          >
            <div className='content'>
              {/* ======= Store Name ===== */}
              <div className='logo'>
                <Link href='/'>
                  <a>
                    <Logo className='icon' />
                  </a>
                </Link>
                <button onClick={handleCloseNav}>
                  <CloseIcon />
                </button>
              </div>

              {/* ====== Nav Links ====== */}
              <div className='nav-links'>
                {routes.map((route) => {
                  return (
                    <Link
                      href={route.path}
                      key={route.title}
                      className={router.pathname === route.path ? "active" : ""}
                    >
                      <a onClick={() => setOpenNav(false)}>{route.title}</a>
                    </Link>
                  );
                })}
              </div>
            </div>
          </View>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNavigator;

const View = styled(motion.nav)`
  height: 45vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 20px 20px;
  position: relative;
  z-index: 30000;
  position: fixed;
  top: 0;
  left: 0;

  @media ${device.laptops} {
    display: none;
  }

  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;

    .logo {
      width: 100%;
      margin-bottom: 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      a {
        width: 90%;

        .icon {
          @media ${device.phone} {
            width: 150px;
            height: 60px;
          }
        }
      }

      button {
        background-color: transparent;
        padding: 0;
        outline: none;
        border: none;
      }
    }

    .nav-links {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      a {
        width: 100%;
        display: flex;
        font-weight: 600;
        font-size: 1.2rem;
        color: ${({ theme }) => theme.colors.black};
        transition: all 0.2s ease;
        text-decoration: none;
        text-transform: uppercase;
        margin-bottom: 20px;

        img {
          margin-right: 16px;
        }
      }

      .active {
        color: ${({ theme }) => theme.colors.green};
        /* background-color: ${({ theme }) => theme.colors.purple_600}; */
        border-radius: 4px;
      }
    }
  }
`;
