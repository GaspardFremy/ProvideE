export default data = [

    {
        id: 14991,
        name: 'Tartes aux fraises',
        category: 'Pains Spéciaux',
        price: 4,
        img: 'tartefraises'
    },
    {
        id: 14992,
        name: 'Tarte Citron',
        category: 'Pains Classiques',
        price: 3.8,
        img: 'tartecitron'
    }

]



// <FlatList
//   data={products}
//   keyExtractor={(item) => item.id.toString()}
//   renderItem={({item}) =>
//     <ListItem
//         name={item.name}
//         price={item.price}
//         status={item.status}
//         id={item.id}
//         navigation={this.navigation}
//     />}
// />
