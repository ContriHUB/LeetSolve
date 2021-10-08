import styled, { css } from 'styled-components';
export const StyledPaginationContainer = styled.div`
.paginate-ul
{
    display:flex;
    list-style:none;
    width:99%;
    padding:1em 0;
    justify-content:space-around;
    align-items:center;
    background-image:url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%2339FF14FF' stroke-width='3' stroke-dasharray='10%2c 17' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
}
.prevnext,.active{
background:green;
}
.paginate-ul li{
    cursor:pointer;
    padding:0.5em;
    &:hover{
        background-color:red;
    }
}
.dots{

}
`;