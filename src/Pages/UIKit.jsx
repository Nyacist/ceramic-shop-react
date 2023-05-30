import React from 'react';
import style from './UIKit.module.scss'
import MainButton from "../Components/UI/button/mainButton";
import Counter from "../Components/UI/counter/counter";

const UiKit = () => {
    return (
        <div>
            <h2>UI Kit</h2>
            <div className={style.wrapper}>
                <div className={style.grid}>
                    <MainButton
                    >
                        Показать в каталоге
                    </MainButton>
                    <MainButton
                        version={"dark"}
                    >
                        Показать в каталоге
                    </MainButton>
                    <MainButton
                    >
                        Перейти в корзину
                    </MainButton>
                    <MainButton
                        version={"dark"}
                    >
                        Перейти в корзину
                    </MainButton>
                </div>
                <div className={style.counterWrapper}>
                    <Counter />
                    <Counter />
                </div>
            </div>
        </div>
    );
};

export default UiKit;