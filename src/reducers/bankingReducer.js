const initialState = {
    balance : 0,
    isSavingAccount: false
}
// el recuder es una función de JS nada fuera de lo normal la cual contiene 2 parametros el state y la acción 

export const bankingReducer = (state = initialState, action) => {
        switch (action.type){
            case "DEPOSIT":
                // spread operator para actualizar el balance
                // para fixear un bug 
                // return a brand new state object
            return { ...state, balance: state.balance + action.amount } //logic for deposit
            case "WITHDRAW":
            return { ...state, balance: state.balance - action.amount }    // logic for widhdraw
            case "COLLECT_INTEREST":
            return { ...state, balance: state.balance *1.03 }      // logic for collect
            case "DELETE_ACCOUNT":
            return { ...state, balance: 0 }            //logic for delete
            case "TOGGLE_ACCOUNT":
            return { isSavingAccount: !state.isSavingAccount }
            default:
                return state
        }   
}; 



// actions

// deposit

    const deposit = {
        type: "DEPOSIT",
        amount: 20
    }
    
    // widthdraw

    const withdraw = {
        type: "WITHDRAW",
        amount: 3
    }

    //   colect interest

    const collectInterest = {
        type: "COLLECT_INTEREST"
        
    }

    // delete

    const deleteAccount = {
        type: "DELETE_ACCOUNT"
        
    }