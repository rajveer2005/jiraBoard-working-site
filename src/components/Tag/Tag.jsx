import React from 'react'
import "./Tag.css"

const Tag = (props) => {
    const {tagName, selectTag , selected} = props;
    const tagStyle = {
      DEV : {backgroundColor : "#0458ff"},
      QA : {backgroundColor : "#04ff8a"},
      PO : {backgroundColor : "#c9ff04"},
    }
const tagKeyMap = {
    "DEV" : "DEV",
    "QA" : "QA",
    "Product Owner" : "PO"
}
const key = tagKeyMap[tagName];

  return (
    <>
      <button type='button'
      style={selected ? tagStyle[key] : {}}
       className='tag'
       onClick={()=>{
        selectTag(tagName)
      }} >
        {tagName}
      </button>
      
    </>
    
  )
}

export default Tag;
