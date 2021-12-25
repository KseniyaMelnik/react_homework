import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './HW11.module.css'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div className={s.container}>
                <div>
                    <div className={s.valueContainer}>{value1}</div>
                    <SuperRange
                        onChangeRange={setValue1}
                        value={value1}
                        // сделать так чтоб value1 изменялось
                    />
                </div>

                <div className={s.doubleRangeContainer}>
                    <span>{value1}</span>
                    <SuperDoubleRange
                        setValue1={setValue1}
                        setValue2={setValue2}
                        value1={value1}
                        value2={value2}


                        // сделать так чтоб value1 и value2 изменялось
                    />
                    <span>{value2}</span>
                </div>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
