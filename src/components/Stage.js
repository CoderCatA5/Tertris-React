import React from 'react';

import Cell from './Cell'

const Stage=({stage})=>(
    <div>

        {stage.map(row=>row.map((cell,x)=> <Cell key={x} type={cell[0]}/>))}
    </div>
);
//takes the stage prop which is a javascript 2D array
//maps it according to rows
//Maps each row will parameters cell and x and renders cell


export default Stage;
