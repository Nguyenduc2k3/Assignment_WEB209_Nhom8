import styled from "styled-components";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

export const WrapperTypeProduct = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    justify-content: flex-start;
    height: 44px;
`

export const WrapperButtonMore = styled(ButtonComponent)`
    &:hover {
        color: #fff;
        background: #3d1a1a;
        span {
            color: #fff;
        }
    }
    width: 100%;
    color: #3d1a1a;
    text-align: center;
    cursor: ${(props) => props.disabled ? 'not-allowed' : 'pointers'}
`

// export const WrapperProducts = styled.div`
//     display: flex;
//     gap: 14px;
//     margin-top:20px;
//     flex-wrap: wrap;
// `
export const WrapperProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 columns with equal width */
  gap: 40px; /* Spacing between grid items */
  margin-top: 20px;
  width: 200px;
  margin-left:200px;
  margin-bottom: 50px;
`
