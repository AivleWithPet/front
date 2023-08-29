import styled from "@emotion/styled";

const gray = '#8E9AAF';
const skyblue = '#EEF3FF';
const pink = '#EAC7CC';
const white = '#f6f6f6';
// const pink = 'rgba(234, 199, 204, 0.8)'; // darken(pale, 20%)
const pale = 'darken(pale, 20%)'
const lavender = '#CBC0D3';

/*
  container -> joinContainer
  pinkbox -> bluebox
*/

export const All = styled.div`
  background: ${skyblue};

  .joinContainer {
    margin: auto;
    width: 650px;
    height: calc(100vh - 84px);
    position: relative;
  }
  .welcome {
    background: ${white};
    width: 650px;
    height: 415px;
    position: absolute;
    top: 25%;
    border-radius: 5px;
    box-shadow: 5px 5px 5px rgba(0,0,0,.1);
  }
  .bluebox {
    position: absolute;
    top: -10%;
    left: 5%;
    // background: ${pale};
    background: #565C69;
    width: 320px;
    height: 500px;
    border-radius: 5px;
    box-shadow: 2px 0 10px rgba(0,0,0,.1);
    transition: all .5s ease-in-out;
    z-index: 2;
  }
  .nodisplay {
    display:none;
    transition: all .5s ease;
  }
  .leftbox, .rightbox {
    position: absolute;
    width: 50%;
    transition: 1s all ease;
  }
  
  .leftbox {
    left: -2%;
  }
  .rightbox {
    right: -2%;
  }
  
  /* font & button styling */
  h1 {
    // font-family: $sans-serif;
    text-align: center;
    margin-top: 75px;
    text-transform: uppercase;
    color: ${white};
    font-size: 2em;
    letter-spacing: 8px;
  }
  
  .title {
    // font-family: $serif;
    color: ${gray};
    font-size: 1.8em;
    line-height: 1.1em;
    letter-spacing: 3px;
    text-align: center;
    font-weight: 300;
    margin-top: 20%;
  }
  .desc {
    margin-top: 3%;
  }
  .account {
    margin-top: 45%;
    font-size: 10px;
  }
  p {
    // font-family: $sans-serif;
    font-size: .7em;
    letter-spacing: 2px;
    color: ${gray};
    text-align: center;
  }
  
  span {
    color: ${pink};
  }
  
  .pet {
    position: absolute;
    width: 180px;
    height: 120px;
    top: 41%;
    left: 22%;
    opacity: .7;
  }
  
  .smaller {
    width: 180;
    height: 115px;
    top: 42%;
    left: 22%;
    opacity: .9;
  }
  
  button {
    padding: 12px;
    // font-family: $sans-serif;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 11px;
    border-radius: 10px;
    margin: auto;
    outline: none;
    display: block;
    &:hover {
      // background: ${pale};
      background: #565C69;
      // color: ${white};
      color: white;
      transition: background-color 1s ease-out;
    }
  }
  
  .button {
    margin-top: 3%;
    // background: ${white};
    background: white;
    // color: ${pink};
    color: #95A9D9;
    // border: solid 1px ${pale};
    border: solid 1px #95A9D9;
  }
  
  /* form styling */
  
  form {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 7px;
  }
  .more-padding{
    color: gray;
    padding-top: 35px;

    .submit {
      margin-top: 45px;
    }
  }
  .submit {
    margin-top: -5px;
    // margin-bottom: 20px;
    padding: 12px;
    border-color: ${pale};
    &:hover {
      // background: ${lavender};
      background: rgb(142, 154, 175);
    }
  }
  
  input {
    // background: ${pale};
    background: #565C69;
    width: 65%;
    color: white;
    border: none;
    // border-bottom: 1px solid rgba(${white}, 0.5);
    border-bottom: 1px solid white;
    padding: 9px;
    margin: 7px;
    &::placeholder {
      color: white;
      letter-spacing: 2px;
      font-size: 1.0em;
      font-weight: 100;
    }
    &:focus {
      color: ${pink};
      outline: none;
      border-bottom: 1.2px solid ${pink};
      font-size: 1em;
      transition: .8s all ease;
      &::placeholder {
        opacity: 0;
      }
    }
  }
  
  label {
    // font-family: $sans-serif;
    color: white;
    font-size: 0.8em;
    letter-spacing: 1px;
  }
  
  .checkbox {
    display: inline;
    white-space: nowrap;
    position: relative;
    left: -62px;
    top: 5px;
  }
  
  input[type=checkbox] {
    width: 20px;
    background: ${pink};
  }
  
  .checkbox input[type="checkbox"]:checked + label {
    color: ${pink};
    transition: .5s all ease;
  }
`