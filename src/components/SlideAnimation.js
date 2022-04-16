import React from "react";
import styled, { keyframes, css } from 'styled-components';
import './SlideAnimation.css'

export const Animation = styled.div`
  animation-duration: 0.5s;
  ${props => props.direction
    ? css`animation-name: ${props.direction}` 
    : css`animation-name: slideInRight`}
  
`

const slideInRight = keyframes`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0%);
  }
`;


const slideInLeft = keyframes`
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0%);
  }
`;


export const TextBox = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  border: solid 1pt black;
  color: black;

  font-family: 'Catamaran', sans-serif;
  height: 20rem;
  width: 100%;
  flex-direction: column;
  font-size: 20pt;
  padding: 30px;
  box-shadow: 0 5px #666;

  animation-duration: 0.5s;
  ${props => props.direction
    ? css`animation-name: ${props.direction}` 
    : css`animation-name: slideInRight`}
`;