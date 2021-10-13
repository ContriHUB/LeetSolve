import styled, {css} from "styled-components";

export const Pagination = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const PaginationItem = styled.button`
    background: transparent;
    padding: 10px 15px;
    color: white;
    font-family: "Cool Font";
    border: 2px solid #ff00e0;
    border-radius: 50%;
    height: 45px;
    width: 45px;
    position: relative;
    margin: 0 5px;
    cursor: pointer;

    ${(props) =>
        props &&
        props.active &&
        css`
            color: #39ff14;
        `}
`;

export const Prev = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid #ff00e0;
    padding: 10px;
    color: white;
    font-family: "Cool Font";
    margin: 0 10px;
    cursor: pointer;

    ${(props) =>
        props &&
        props.active === false &&
        css`
            color: #888;
        `}
`;

export const Next = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid #ff00e0;
    padding: 10px;
    color: white;
    font-family: "Cool Font";
    margin: 0 10px;
    cursor: pointer;

    ${(props) =>
        props &&
        props.active === false &&
        css`
            color: #888;
        `}
`;


//   .paginationItem.active {
//     border: 1px solid #888;
//     color: #888;
//     pointer-events: none;
//   }
  
//   .prev.disabled,
//   .next.disabled {
//     pointer-events: none;
//     box-shadow: none;
//     color: #999;
//   }