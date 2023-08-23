import styled from "@emotion/styled";

export const All = styled.div`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0; 
    font-family: "Poppins", sans-serif;
    font-weight: 1000;
  }

  .portfolio {
    color: var(rgba(255, 255, 255, 0.9));
    // background: radial-gradient(rgba(43, 55, 96, 1), rgba(11, 16, 35, 1));
    background: #95A9D9;
    .home-title {
      margin-left: 5.2%;
      padding-top: 3%;
      color: white;
    }
  }

  /* main */

  .page {
    min-height: 90vh;
    display: grid;
    grid-template-columns: 5% 1fr 1fr 1fr 5%;

    &.chef,
    &.hairstyle {
      position: absolute;
      bottom: -9.5%;
      left: 0%;
      width: 100%;
      opacity: 0;
      pointer-events: none;
    }

    .hero {
      overflow: hidden;
      height: 500px;
      align-self: center;
      justify-self: center;
      display: flex;

      img {
        width: 180px;
        height: 500px;
        transition: transform 0.3s ease-out;

        &.model-right {
          transform: translate(0%, 10%);
        }

        &.model-left {
          transform: translate(0%, -10%);
        }
      }

      &:hover {
        .model-right,
        .model-left {
          transform: translate(0%, 0%);
        }
      }
    }

    .details {
      grid-column: 2/3;
      align-self: end;
      color: white;

      h1 {
        font-size: 4rem;
        font-weight: 500;
      }

      h2 {
        font-size: 30px;
        font-weight: 400;
        padding: 20px 0;
      }

      p {
        font-size: 1.5rem;
        padding: 20px 0 50px;
      }
    }
  }

  /* slider */

  .pages {
    position: absolute;
    right: 5%;
    top: 50%;
    transform: translateY(-50%);
    color: white;

    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      h3 {
        font-size: 1.5rem;
        padding: 30px;
      }

      svg {
        cursor: pointer;
        opacity: 0.5;
        transform: scale(2);

        &:hover {
          animation: dot 0.5s ease-in-out infinite alternate;
        }
      }

      .active {
        opacity: 0.9;
      }
    }
  }

  @keyframes dot {
    0% {
      transform: scale(2);
    }
    100% {
      transform: scale(4);
    }
  }

  /* menu */

  .nav-open {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 50vh;
    background-color: #fff;
    color: #000;
    z-index: 1;
    display: grid;
    grid-template-columns: 5% 1fr 1fr 5%;
    justify-items: center;
    align-items: center;
    text-align: center;
    transform: translateY(-101%);

    .contact {
      grid-column: 2/3;

      h3 {
        font-size: 1.75rem;
        padding-bottom: 40px;
      }

      p {
        font-size: 1.125rem;
      }
    }

    .social-links {
      display: flex;
      gap: 1.25rem;
    }
  }

  .logo{
    z-index: 2;
    font-size: 30px;
  }

  /* media queries */

  @media (max-width: 1024px) {
    .page {
      grid-template-columns: 5% 1fr 5%;
      grid-template-rows: 2fr 1fr;
      align-items: center;
    }

    .hero {
      grid-column: 2/3;
      height: auto;

      img {
        height: 500px;
      }
    }

    .details {
      grid-row: 2/3;
      grid-column: 2/3;
      text-align: center;

      h1 {
        font-size: 30px;
      }

      h2 {
        font-size: 2.375rem;
        
      }
    }
  }

  @media (max-width: 768px) {
    .hero img {
      height: 400px;
    }

    .details h1 {
      font-size: 2.375rem;
    }

    .details h2 {
      font-size: 1.75rem;
    }
  }
`
