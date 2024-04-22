const ireland = {
    cities: [
        {
            name: Dublin,
            level: 75%,
            image: https://st2.depositphotos.com/3592009/5693/i/380/depositphotos_56937455-stock-photo-view-over-dublin.jpg
        },{
            name: Waterford,
            level: 65%,
            image: https://st.depositphotos.com/2692701/3176/i/380/depositphotos_31762145-stock-photo-copper-coast-near-bunmahon-county.jpg
        },{
            name: Killarney,
            level: 25%,
            image: https://st3.depositphotos.com/1007373/12855/i/450/depositphotos_128553190-stock-photo-waterfall-in-killarney-national-park.jpg
        },{
            name: Belfast,
            level: 5%,
            image: https://st3.depositphotos.com/7467032/13097/i/450/depositphotos_130977324-stock-photo-belfast-skyline-in-the-evening.jpg
        }
    ],
    landmarks: [
        {
            image: https://cdn.pixabay.com/photo/2019/10/02/10/37/cliff-of-moher-4520630_640.jpg,
            landmark: Cliffs of Moher,
            deathtoll: 70 
        },{
            image: https://images.pond5.com/gothic-aerial-rock-cashel-castle-footage-123534546_iconl.jpeg,
            landmark: Rock of Cashel,
            deathtoll: ~1200 
        },{
            image: https://i.pinimg.com/564x/e4/49/3c/e4493c59e1e413045eb8db0a8fd73930.jpg,
            landmark: NewGrange,
            deathtoll: 5 
        },{
            image: https://travelingcanucks.com/wp-content/uploads/2016/07/ireland-road-trip-giants-causeway-024.jpg,
            landmark: The Giants Causeway,
            deathtoll: 50
        }

    ],
    celebrities: [
        {
            name: Liam Neeson,
            image: https://st2.depositphotos.com/5326338/8790/i/450/depositphotos_87906732-stock-photo-actor-liam-neeson.jpg,
            fact: "He will find you."
        },{
            name: Bram Stoker,
            image: https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Bram_Stoker_1906.jpg/595px-Bram_Stoker_1906.jpg,
            fact: "Father of Horror."
        },{
            name: Pierce Broson,
            image: https://st.depositphotos.com/5326338/55295/i/450/depositphotos_552957650-stock-photo-pierce-brosnan-los-angeles-premiere.jpg,
            fact: "A Smolder a day keeps you feeling okay."
        },{
            name: Bono,
            image: https://www.capitalpictures.com/img-get/I0000ycnLu3Ldoq4/s/600/600/U221009-10.jpg,
            fact: "Glasses are cool. During the Day and the Night."
        }
    ]
}


export const getIcities = () => {
    return ireland.cities.map(city => ({...city}))
}

export const getIlandmarks = () => {
    return ireland.landmarks.map(landmark => ({...landmark}))
}