import React from 'react';

import style from "./index.module.scss"

import Text from '../Text/index';

const About = () => {
    return (
        <div className={style.about}>
            <div className={style.about__prew}>
                <div className={style.about__title}> о бренде</div>
            </div>
            <div className={style.about__container}>
                <div className={style.about__content}>
                <Text />

                </div>
            </div>
        </div>
    );
};

export default About;