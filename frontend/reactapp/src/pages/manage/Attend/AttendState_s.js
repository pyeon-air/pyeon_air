import styled, { css } from "styled-components";

// theme을 변경하는 btn의 스타일링
// const ThemeSwitchBtn = styled.button`
//   ${({ theme }) => {
//     return css`
//       background-color: ${theme.colors.primary};
//       color: ${theme.colors.secondary};
//       font-size: ${theme.fonts.size.base};
//       border-radius: 2px;
//     `;
//   }}
// `;

const CustomHeader = styled.div`
${({ theme }) => {
return css`
    display: flex;
    p {
        font-size:10px;
    }
`;
}}
`;

// const styledComponents = { ThemeSwitchBtn, CustomHeader };
const styledComponents = { CustomHeader };

export default styledComponents;