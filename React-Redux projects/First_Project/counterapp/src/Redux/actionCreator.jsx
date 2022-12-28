export const increment=()=>{
    return {type: "increment"}

}
export const decrement=()=>{
    return {type: "decrement"}

}
export const incrementBy=(payload)=>{
    return {type: "incrementBy", payload}

}
export const changeBackgroundColor=(payload)=>{
    return {type: "changeColor", payload}

}
export const resetBackgorundColor =()=>{
    return {type: "resetColor"}
}