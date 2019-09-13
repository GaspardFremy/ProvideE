// const initialState = {
//     order : [
//         {
//             id: 14097,
//             dueDate: 'Lundi 04 Mai',
//             name: 'Jeudi aprem',
//             status: 'pending',
//             content : [
//                 {
//                     id: 14988,
//                     name: 'Baguette Tradition',
//                     price: 1.2,
//                     quantity: 10
//
//                 },
//                 {
//                     id: 14989,
//                     name: 'Baguette Campagne',
//                     price: 1.6,
//                     quantity: 5,
//
//                 }
//             ]
//         },
//         {
//             id: 14117,
//             dueDate: 'Mercredi 06 Mai',
//             name: 'Vendreddi aprem',
//             status: 'pending',
//             content : [
//                 {
//                     id: 14988,
//                     name: 'Baguette Tradition',
//                     price: 1.2,
//                     quantity: 20
//
//                 },
//                 {
//                     id: 14989,
//                     name: 'Baguette Campagne',
//                     price: 1.6,
//                     quantity: 15,
//
//                 }
//             ]
//         }
//     ]
// }
// 
// function addOrder(state = initialState) {
//     let nextState
//     switch (action.type) {
//         case 'ADD_ORDER':
//
//             let newEntry = {
//                 "id" : action.value.id,
//                 "dueDate" : action.value.dueDate,
//                 "createdAt" : action.value.dueDate,
//                 "name" : action.value.name,
//                 "status" : action.value.status,
//                 "content" : action.value.content
//             }
//             order.push(newEntry)
//
//             nextState = {
//                 ...state,
//                 order: state.order
//             }
//
//             return nextState || state
//     default:
//         return state
//     }
// }
//
//
// export default addOrder
