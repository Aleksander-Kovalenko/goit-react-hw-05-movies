import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  min-height: 100vh;
`;

export const Ring = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  animation: ring 2s infinite;
   {
    @keyframes ring {
      0% {
        transform: rotate(0deg);
        box-shadow: 1px 5px 2px #e65c00;
      }
      50% {
        transform: rotate(180deg);
        box-shadow: 1px 5px 2px #18b201;
      }
      100% {
        transform: rotate(360deg);
        box-shadow: 1px 5px 2px #0456c8;
      }
    }
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50%;

    height: 100%;
    width: 100%;
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
  }
`;

export const Content = styled.span`
  color: #737373;
  text-transform: upperCase;
  letter-spacing: 1px;
  font-size: 20px;
  line-height: 200px;

  animation: text 3s linear;
`;
