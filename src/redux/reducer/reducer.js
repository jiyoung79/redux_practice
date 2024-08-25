let initialState = {
    count: 0,
    id: "",
    password:""
}


function reducer(state = initialState, action) { // reduce는 항상 return 해줘야함
    console.log("action ? ", action);
    // switch문도 가능
    switch (action.type) {
        case "increment":
            return { ...state, count: state.count + 1 }
        case "login":
            return { ...state, id: action.payload.id, password: action.payload.password }
        case "decrement":
            return{...state, count: state.count -1}
        default:
            return { ...state };
            
    }
//     if (action.type === "increment") {
//         // ...spread 문법을 통해 기존 객체 내용을 복사하여 새로운 객체에 전달한다.
//         return { ...state, count: state.count + action.payload.num }
//     }
//     return { ...state };
}

export default reducer;