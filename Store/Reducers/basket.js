const initialSate = {
    basket : [

    ],
    sum : 0,
}

function editBasket(state = initialSate, action, value) {
    let nextState
    switch (action.type) {
        case 'EDIT_PRODUCT':
        //On regarde si le produit est déjà dans le panier
        let product = state.basket.find(product => product.id == action.value.id);

        if (product != null) {
            //rmettre à jour les info sur les quantités;
            product.quantity = action.value.quantity;

        } else {
            //ajouter le produits et les infos dessus
            let newEntry = {
                "id" : action.value.id,
                "name" : action.value.name,
                "price" : action.value.price,
                "quantity" : action.value.quantity
            }
            basket.push(newEntry);
        }
            // console.log('basket :');
            // console.log(state.basket);

            let sum = 0;
            state.basket.forEach(function(element) {
                let sub_sum = element.price * element.quantity
                sum = Math.round( (sum + sub_sum) * 10 ) / 10;
            });

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


export default editBasket
