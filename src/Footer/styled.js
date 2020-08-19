import styled from "styled-components";

export const StyledFooter = styled.footer`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 20px;
    text-align: center;

    @media (max-width: 767px) {
        position: unset;
    }
`;