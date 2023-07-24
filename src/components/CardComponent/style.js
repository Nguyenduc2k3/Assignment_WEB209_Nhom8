import { Card } from "antd";
import styled from "styled-components";

// export const WrapperCardStyle = styled(Card)`
//     width: 200px;
//     & img {
//         height: 200px;
//         width: 100%;
//         border-radius:12px 12px 0 0;
//     },
//     position: relative;
//     background-color: ${props => props.disabled ? '#ccc' : '#fff'};
//     cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'}
// `
export const WrapperCardStyle = styled(Card)`
  width: 200px;
  position: relative;
  background-color: ${props => (props.disabled ? '#ccc' : '#fff')};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};

  & img {
    height: 200px;
    width: 100%;
    border-radius: 12px 12px 0 0;
    transition: transform 0.2s ease-in-out; /* Add smooth transition on transform */
  }

  &:hover img {
    transform: scale(1.1); /* Zoom in by 10% on hover */
  }
`;




export const StyleNameProduct = styled.div`
    font-weight: 400;
    font-size: 15px;
    line-height: 16px;
    color: rgb(56, 56, 61);
    font-weight: 400;
`

export const WrapperReportText = styled.div`
    font-size: 11px;
    color: rgb(128, 128, 137);
    display: flex;
    align-items: center;
    margin: 6px 0 0px;
`

export const WrapperPriceText = styled.div`
    color: rgb(255, 66, 78);
    font-size: 16px;
    font-weight: 500;
`

export const WrapperDiscountText = styled.span`
    color: rgb(255, 66, 78);
    font-size: 12px;
    font-weight: 500;
`

export const WrapperStyleTextSell = styled.span`
    font-size: 15px;
    line-height: 24px;
    color: rgb(120, 120, 120)
`