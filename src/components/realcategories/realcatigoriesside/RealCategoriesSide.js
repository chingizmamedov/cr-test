import React, { useEffect } from 'react'

export default function RealCategoriesSide(props) {

    const tanList = props.items.map((item, index)=>{
        const activeTab = props.opentab - 1 === index ? true : false
        return <li className={activeTab ? 'realCatItem reaclcatitem_active' : 'reaclcatitem'} onClick={() => props.changeOpenTab(index + 1, item, index + 1)} key={index}>{item}</li>
    })

    return (
        <ul className="realcategories_side">
            {tanList}
        </ul>
    )
}
