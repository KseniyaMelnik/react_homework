import React, {ChangeEvent, useState} from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {changeThemeC} from "./bll/themeReducer";
import {AppStoreType} from "../h10/bll/store";

const themes = ['dark', 'red', 'green', 'blue', 'yellow'];

function HW12() {
    const theme = useSelector<AppStoreType, string>(state => state.theme.theme)
    const dispatch = useDispatch();
    const onChangeCallback = (e: HTMLInputElement) => dispatch(changeThemeC(e + ""));

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            <div className={s.container}>
                <SuperRadio
                    name={'radio'}
                    options={themes}
                    value={theme}
                    onChangeOption={onChangeCallback}
                    theme={theme}
                />
            </div>

            <hr/>
        </div>
    );
}

export default HW12;
