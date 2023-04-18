import React from 'react'
import Style from './Box.module.css'

const index = () => {
    return (
        <div className={Style.box}>
            <div className={Style.box1}>
                <div className={Style.boxContent}>
                    <div className={Style.content1}>
                        2
                    </div>
                    <div className={Style.content2}>
                        Projects
                    </div>

                </div>
                <div className={Style.line}></div>
            </div>
            &emsp;
            <div className={Style.box1}>
                <div className={Style.boxContent}>
                    <div className={Style.content1}>
                        2
                    </div>
                    <div className={Style.content2}>
                        Treks
                    </div>
                </div>
                <div className={Style.line}></div>
            </div>
            <div className={Style.box1}>
                <div className={Style.boxContent}>
                    <div className={Style.content1}>
                        ∞
                    </div>
                    <div className={Style.content2}>
                        Happiness
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index