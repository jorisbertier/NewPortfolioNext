// import React from 'react'
// import styled from 'styled-components'

// const Logo = styled.img `
//     padding-right: 5px;
//     padding-left: 5px;
//     height: 30px;
//     width: 30px;
//     height: ${(props) => props.size}px;
//     width: ${(props) => props.size}px;
// `

// export const LogoStack = ({logo, size}) => {

//   return (
//     <Logo src={logo} size={size} />
//   )
// }
import React from 'react';

export default function LogoStack({ logo, size = 25, color }) {
    return (
        <img
            src={logo}
            alt="Logo"
            className="px-1"
            style={{ height: `${size}px`, width: `${size}px` }}
        />
    );
};