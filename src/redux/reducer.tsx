
import { PayloadAction } from "@reduxjs/toolkit"

const initialState = { value: 0 }

export default function counterReducer(state = initialState, action: PayloadAction<number>) {
  if (action.type === 'counter/increment') {
    return {
      ...state,
      value: state.value + 1
    }
  }
  return state
}

//const initialState = (localStorage.getItem("cart")) ? JSON.parse(localStorage.getItem("cart") || '{cookies: false, cart: []}') : { cookies: false, cart: [] };


// export const fetchReducer = (state = initialState, action) => {
//     const { type, payload } = action
//     switch (type) {
//         case "@fetch.conectando": 
//             state = { ...state, status: "conectando", ...payload }
//             sessionStorage.setItem("dados", JSON.stringify(state))
//             return state
//         case "@fetch.lento": 
//             state = { ...state, status: "lento" }
//             sessionStorage.setItem("dados", JSON.stringify(state))
//             return state
//         case "@fetch.sucesso":
//             state = { ...state, status: "sucesso", resultado: { ...payload } }
//             sessionStorage.setItem("dados", JSON.stringify(state))
//             return state
//         case "@fetch.cancelado":
//             state = { ...state, status: "cancelado", }
//             sessionStorage.setItem("dados", JSON.stringify(state))
//             return state
//         case "@fetch.erro":
//             state = { ...state, status: "erro"  }
//             sessionStorage.setItem("dados", JSON.stringify(state))
//             return state
//             case "@fetch.esgotado":
//             state = { ...state, status: "esgotado" }
//             sessionStorage.setItem("dados", JSON.stringify(state))
//             return state
//         default:
//             return state
//     }
// }