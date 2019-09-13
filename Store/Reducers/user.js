const initialSate = {
    basket : [

    ],
    sum : 0,
}

function editUser(state = initialSate, action, value) {
    let nextState
    switch (action.type) {
        case 'EDIT_PRODUCT':
        //On regarde si le produit est déjà dans le panier
            nextState = {
                ...state,
                basket: state.basket,
                sum : sum
            }

            return nextState || state
    default:
        return state
    }
}


export default editUser
