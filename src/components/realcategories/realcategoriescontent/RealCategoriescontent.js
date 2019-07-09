import React from 'react'

export default function RealCategoriescontent(props) {
        const contentItems = props.contentitem.map((item, index)=> {
            const showTab = props.opentab - 1 === index ? true : false
            return <div style={{display: 'none'}} className={showTab && 'realtabContent-show'} key={index}><span>{item}</span></div>  
    })
    return (
        <div>{contentItems}</div>
    )
}
