import React from 'react'

export default function Son(props) {
    const {a} = props
    console.log(a,'a/........');
    console.log(props,'props....');
  return (
    <div>Son</div>
  )
}
