import { createAction } from "@reduxjs/toolkit"

// export const addNameAction = (value) => {
//    return { type: 'name', payload: value } 
// }

// export const addNumberAction = (value) => {
//    return { type: 'number', payload: value } 
// }

export const addNameAction = createAction('name')
export const addNumberAction = createAction('number')

