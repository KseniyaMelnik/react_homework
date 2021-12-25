import React, {ChangeEvent, useState} from 'react'
import {Box, MuiThemeProvider, Slider} from "@material-ui/core";


type SuperDoubleRangePropsType = {
    setValue1?: (value: number) => void
    setValue2?: (value: number) => void
    value1: number
    value2: number

    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        value1, value2, setValue1, setValue2,
        // min, max, step, disable, ...
    }
) => {
    const handleChange = (event: ChangeEvent<{}>, newValue: number | number[]) => {

        if (Array.isArray(newValue)) {
            setValue1 && setValue1(newValue[0])
            setValue2 && setValue2(newValue[1])
        }
    }


    return (
        <Box sx={{width: 200}}>

            <Slider
                color={'primary'}
                value={[value1, value2]}
                onChange={handleChange}
            />
        </Box>
    )
}


export default SuperDoubleRange
