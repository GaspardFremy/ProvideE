export default data = [
    {
        id: 14990,
        name: 'Pain aux châtaignes',
        category: 'Pains Spéciaux',
        price: 3.9,
        img: require('../assets/products/pain_chataigne.png'),
        quantity: 0,
        description: 'Baguette à la farine de blé, levure et sel'
    },
    {
        id: 14991,
        name: 'Pains aux noix',
        category: 'Pains Classiques',
        price: 3.8,
        img: require('../assets/products/pain_noix.png'),
        quantity: 0,
        description: 'Baguette à la farine de blé, levure et sel'
    },
    {
        id: 1600,
        name: 'Tourte Auvergnate',
        category: 'Pains Spéciaux',
        price: 7,
        img: require('../assets/products/auvergnate.png'),
        quantity: 0,
        description: 'Baguette à la farine de blé, levure et sel'
    },
    {
        id: 1601,
        name: 'Tourte de Meule',
        category: 'Pains Spéciaux',
        price: 6.8,
        img: require('../assets/products/meule.png'),
        quantity: 0,
        description: 'Baguette à la farine de blé, levure et sel'
    },
    {
        id: 1602,
        name: "Pain d\'Antan",
        category: 'Pains Spéciaux',
        price: 5,
        img: require('../assets/products/pain_antan.png'),
        quantity: 0,
        description: 'Baguette à la farine de blé, levure et sel'
    },
    {
        id: 1603,
        name: 'demi Pain Forestier',
        category: 'Pains Spéciaux',
        price: 7,
        img: require('../assets/products/pain_forestier.png'),
        quantity: 0,
        description: 'Baguette à la farine de blé, levure et sel'
    },
    {
        id: 1604,
        name: 'Pain Maison',
        category: 'Pains Spéciaux',
        price: 4,
        img: require('../assets/products/pain_maison.png'),
        quantity: 0,
        description: 'Baguette à la farine de blé, levure et sel'
    },

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
