export const todoReducer = (state,action)=>{
    switch (action.type) {
       case "agregar":
         return [...state, action.payload]   
               
        case "quitar":
         return state.filter (todo=>todo.id !== action.payload );
               
         case "tuggle":
            return state.map (todo=>
                (todo.id===action.payload)
                ?{...todo, done: !todo.done}
                : todo
                )
        
        /* este es otro modo de hacerlo pero es mas largo
        case "tuggle":
         return state.map( todo =>{
             if (todo.id ===action.payload) {
                    return{...todo, done: !todo.done}
                } else {
                    return todo;
                }
        }) */
    
        default:
            return state;
    }

}