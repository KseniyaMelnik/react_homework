import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {loadingAC} from "./bll/loadingReducer";
import {AppStoreType} from "./bll/store";
import {Preloader} from "./Preloader";
import s from "./HW10.module.css"

function HW10() {
    const dispatch = useDispatch();
    const loading = useSelector<AppStoreType, boolean>((state) => state.loading.isLoading)
    // useSelector, useDispatch

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 2000);
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

          <div className={s.container}>
              {/*should work (должно работать)*/}
              {loading
                  ? (
                      <Preloader />
                  ) : (
                      <div>
                          <SuperButton onClick={setLoading}>set loading...</SuperButton>
                      </div>
                  )
              }
          </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
