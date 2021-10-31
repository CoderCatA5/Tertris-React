import React from 'react';
import { StyledCell } from './styles/StyledCell';
import { TETROMINOS } from '../tetrominos'

//implicit return type
const Cell=({type})=>(
    <StyledCell type={type} color={TETROMINOS[type].color}/>
)

export default Cell;