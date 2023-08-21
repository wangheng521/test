// import React from 'react'
import React, {useEffect, useLayoutEffect,useRef}from 'react'


export default function Test2() {
    const refDom = useRef()
    useEffect(()=>{
  

        console.log('123',refDom.current,document.getElementById('test2'));
      },[])
    
      useLayoutEffect(()=>{
 

        console.log('456',refDom.current,document.getElementById('test2'));
      },[])
  return (
    <div id='test2' ref={refDom}>Test2</div>
  )
}
