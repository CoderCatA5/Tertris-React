export const STAGE_HEIGHT=20;
export const STAGE_WIDTH=12;


export const createStage=()=>
    Array.from(
    
    //creates new empty array from STAGE_HEIGHT
        Array(STAGE_HEIGHT),()=>
            
            new Array(STAGE_WIDTH).fill([0,'clear'])
            //Inside each row fills it with cell parameters
            //0 stands for nothing
            //'merge' when tetrominos collides
    )