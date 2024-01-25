import React, { useEffect, useState } from 'react'

import {
    SFullDateDiv, SDaySpan, STimeSpan, SdayInnerDiv, STimewrapper
} from './datestyled'

const Date = ({ formattedTime, formattedDay, formattedDate }) => {

    return (
        <SFullDateDiv>
            <SdayInnerDiv>
                <SDaySpan>{formattedDay}</SDaySpan>
                <SDaySpan>{formattedDate}</SDaySpan>
            </SdayInnerDiv>
            <STimewrapper>
                <STimeSpan>{formattedTime} </STimeSpan>
            </STimewrapper>
        </SFullDateDiv>
    )
}

export default Date