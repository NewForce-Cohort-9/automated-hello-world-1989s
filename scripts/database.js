// Chile data for landmarks, cities, and celebs and their export functions
const database = {
    chileLandmarks: [
        {
            name: "Valle de la luna",
	        image: 'https://www.gochile.cl/fotos/thumb2/105734-valle-de-la-luna-1.jpg',
	        deathToll: 370,
        },
        {
            name: "Puritama Hot Springs",
	        image: 'https://as1.ftcdn.net/v2/jpg/02/19/77/10/1000_F_219771071_nLKh58g0vKjqV4SyPL6RsZv6ze8Os7JV.jpg',
	        deathToll: 139,
        },
        {
            name: "Atacama Desert: Tres Marias",
	        image: 'https://as1.ftcdn.net/v2/jpg/01/40/50/54/1000_F_140505487_wHVJMvSOoFTm1aAH5htEk84wl5stRHsD.jpg',
	        deathToll: 14003,
        },
        {
            name: "La Moneda Palace",
	        image: 'https://as1.ftcdn.net/v2/jpg/02/43/58/12/1000_F_243581273_YwN5tLBzkxSvl2eM7V0gNsJwJQiBLoTj.jpg',
	        deathToll: 2,
        },
    ],
    chileCities: [
        {
            name: "Santiago",
            image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fsantiago%2520de%2520chile%2F&psig=AOvVaw2UyNndS6xZ2-hwibgbrZAJ&ust=1713813695279000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCND7jNuD1IUDFQAAAAAdAAAAABAE',
            dangerRate: 72.11
        },
        {
            name: "San Pedro de Atacama",
            image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gettyimages.com%2Fdetail%2Fphoto%2Fstreet-scene-from-san-pedro-de-atacama-chile-royalty-free-image%2F950874904&psig=AOvVaw04Bp2_VNwc4emD2OO6Say-&ust=1713814147917000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCND--rCF1IUDFQAAAAAdAAAAABAE',
            dangerRate: 22
        },
        {
            name: "Puente Alto",
            image: 'https://t3.ftcdn.net/jpg/03/79/73/40/360_F_379734048_kWvfaOgCpevNaHqOwLXGXmhiQHLPf8gG.jpg',
            dangerRate: 88.89
        },
        {
            name: "Valparaiso",
            image: 'https://as2.ftcdn.net/v2/jpg/02/97/78/23/1000_F_297782396_cXYSkTf5O3rCXkFABGbb0ujqaWef4JZX.jpg',
            dangerRate: 77.33
        },
    ],
    chileCelebs: [
        {
            name: "Pedro Pascal",
            image: 'https://www.shutterstock.com/editorial/image-editorial/M4T8Q01dM7D2Afx9MTM4NzQ=/pedro-pascal-wearing-prada-arrives-30th-annual-440nw-14364574hs.jpg',
            fact: "The internet's daddy"
        },
        {
            name: "Pablo Neruda",
            image: 'https://t4.ftcdn.net/jpg/06/01/19/71/360_F_601197147_vwtEnFkeaZ1jVjWj1oXxGNsdqVwKdGnC.jpg',
            fact: "Famous past old guy"
        },
        {
            name: "Lorenza Izzo",
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRESAhZp_cMvyWV6o5lDtE9rEhGFjUEZtljuKK5o63Bzg&s',
            fact: "Was born without toenails"
        },
        {
            name: "Horatio Sanz",
            image: 'https://www.shutterstock.com/preview-440/13960976y/46114020/Shutterstock_13960976y.jpg',
            fact: "SNL supperfan"
        },
    ]
}

export const getChileLandmarks = () => {
    return database.chileLandmarks.map(chileLandmarks => ({...chileLandmarks}))
}

export const getChileCities = () => {
    return database.chileCities.map(chileCities => ({...chileCities}))
}

export const getChileCelebs = () => {
    return database.chileCelebs.map(chileCelebs => ({...chileCelebs}))
}

// Japan data for landmarks, cities, and celebs and the export functions
const japanData = {
    celebrities : [
        {
            name:  "Ken Watanabe",
            image: "https://i.pinimg.com/originals/51/ea/eb/51eaebf633a66fb10cd189496f948b39.jpg",
            fact: "He's acted in movies"



        },
        {
            name:  " Shinji Kagawa",
            image: "https://img.bleacherreport.net/img/images/photos/002/583/645/hi-res-185938045-shinji-kagawa-of-manchester-united-looks-on-during-the_crop_exact.jpg?w=1200&h=1200&q=75",
            fact: "He kicks a ball into a net"



        },
        {
            name:  " Naomi Osaka",
            image: "https://media.cnn.com/api/v1/images/stellar/prod/240101120600-01-naomi-osaka-010124.jpg?c=16x9&q=h_833,w_1480,c_fill",
            fact: "She hits a ball over a net"



        },
        {
            name:  "Yuzuru Hanyu",
            image: "https://ca-times.brightspotcdn.com/dims4/default/8eb602e/2147483647/strip/true/crop/1024x576+0+0/resize/1200x675!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F6a%2F3b%2Fc1ec59faf2282aa6b66a21efdb49%2Fla-1518849812-v19jy59km5-snap-image",
            fact: "He slides around on some ice and wins medals"



        },
    ],
    landmarks: [
        {
            name: "Shinsaibashi-suji Shopping Street",
            image: "https://assets-global.website-files.com/63b68194bb4b0152e60727ee/63d23ba3517e0b6fa93e75b1_thumbnail%20(26).jpg",
            deathToll: "991"


        },
        {
            name: "Tokyo National Museum",
            image: "https://www.tripsavvy.com/thmb/5V2vfrojwmCzg8cYoTotZzHBsLY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/tokyonationalmuseum-da510dbea7d648c190c66390eb9a651f.jpg",
            deathToll: "432"
        },
       {
        name: "Botanic Garden Hokkaido University",
        image: "https://upload.wikimedia.org/wikipedia/commons/b/ba/131103_Hokkaido_University_Botanical_Gardens_Sapporo_Hokkaido_Japan19o.jpg",
        deathToll: "1589"
       },
       {
        name: "Kuromon Market",
        image: "https://static.gltjp.com/glt/prd/data/directory/12000/11898/20220102_232524_06e595a3_w1920.jpg",
        deathToll: "943"
       }

    ],
    cities: [
        {
            name: "Osaka",
            image: "https://www.nippon.com/en/ncommon/contents/guide-to-japan/2339170/2339170.jpg",
            crimeIndex: "20.06"
        },
        {
            name: "Hiroshima",
            image: "https://www.japantimes.co.jp/wp-content/uploads/2023/01/np_file_204219.jpeg",
            crimeIndex: "35.29"
        },
        {
            name: "Sapporo",
            image: "https://en.japantravel.com/static/1440x960!/top-page-odori-park-winter.jpeg",
            crimeIndex: "12.37"
        },
        {
            name: "Tokyo",
            image: "https://media.cntraveler.com/photos/60341fbad7bd3b27823c9db2/16:9/w_2560%2Cc_limit/Tokyo-2021-GettyImages-1208124099.jpg",
            crimeIndex: "24.79"
        } 
    ]
}
export const getCelebs = () => {
    return japanData.celebrities.map(celebrities => ({...celebrities}))
}
export const getCities = () => {
    return japanData.cities.map(cities => ({...cities}))
}
export const getLocations = () => {
    return japanData.landmarks.map(landmarks => ({...landmarks}))
}

// Portual data for landmarks, cities, and celebs and the export functions
const portugalData = {
    cities: [
        {
            name: 'Porto', 
            crimeIndex: 31.78,
            pic: 'https://images.surferseo.art/b9a896a1-5675-48e5-b666-d75c88282598.jpeg'
        }, {
            name: 'Lisbon', 
            crimeIndex: 25.35, 
            pic:'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/lisbon-2-50e7b39.jpg?quality=90&resize=556,505'
        }, {
            name: 'Braga',
            crimeIndex: 42.89,
            pic: 'https://lp-cms-production.imgix.net/2019-06/GettyImages-149519944_super%20copy.jpg'
        }, {
            name: 'Coimbra',
            crimeIndex: 25.43,
            pic: 'https://joinatlantis.com/app/uploads/2023/08/iStock-1412885232-1680x1120.jpg'
        }
    
    ], 

    celebrities: [
        {
            name: 'Jose Saramago',
            pic: 'https://calebjross.com/wp-content/uploads/2010/06/jose_saramago01.jpg',
            troll1: 'sold millions of books despite forgetting that punctuation exists',
            troll2: 'kicked himself out of his home country',
            troll3: 'name was an insulting nickname given to his father and accidentally recorded by the village clerk for his birth registration',
            troll4: 'has been described posthumously as so lean that he is practically concave'
        }, {
            name: 'Antonio Horta-Osorio',
            pic: 'https://image.chitra.live/api/v1/wps/b2118cb/77a4a7de-0945-4feb-9310-d6803a473fd7/7/antonio-horta-osorio-679x419.JPG',
            troll1: 'got famous for being  in charge of large buckets of money',
            troll2: 'almost got fired for having an affair on a business trip',
            troll3: 'pushed out of his new fancy job after less than a year for breaking covid restrictions',
            troll4: 'still unemployed? does consulting count?'
        }, {
            name: 'Cristiano Ronaldo',
            pic: 'https://image-cdn.essentiallysports.com/wp-content/uploads/2023-12-01T201553Z_1606558509_UP1EJC11KAG4C_RTRMADP_3_SOCCER-SAUDI-ALH-ANA-REPORT.jpg',
            troll1: 'only 6ft2',
            trolll2: 'famous for kicking a ball and sometimes kicking the ball far',
            troll3: "think he's too famous to pay taxes",
            troll4: 'another dude'
        }, 
        {
            name: 'Alvaro Siza Vieira',
            pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Y_pF7hPM-IVEdfX3XPooFO5-6l0qr17UvjCsr0IKRg&s',
            troll1: 'designs pretty buildings',
            troll2: 'donates his work to Canada. what is he trying to say about Canada???',
            troll3: 'not enough people liked his buildings so he almost closed his doors in 2012',
            troll4: 'turns 91 this year'
        }
    ], 
    landmarks: [
        {
            name: 'Luis I Bridge', 
            pic: 'https://images.pond5.com/night-view-dom-luis-i-footage-086258533_prevstill.jpeg',
            deathToll: 771
        }, {
            name: 'Ponta da Piedade',
            pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXgV-eo4gphpAX1evy5dndV_e8tlQhnpKIaznmx17IqQ&s',
            deathToll: 87
        }, {
            name: 'Chapel of Bones',
            pic:'https://img.atlasobscura.com/fKNup6GW6qRtyKxaHNda0UbZcxTK5KqvgM7r7jx3krM/rt:fit/h:390/q:81/sm:1/scp:1/ar:1/aHR0cHM6Ly9hdGxh/cy1kZXYuczMuYW1h/em9uYXdzLmNvbS91/cGxvYWRzL3BsYWNl/X2ltYWdlcy9lNzJj/MjVjYmY3N2IwYmVl/ZjBfMjUxNDE2MTM3/OV84YzU3NjFjZmUz/X2IuanBn.jpg',
            deathToll: 7777
        }, {
            name: 'Benagil',
            pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3_04we8jly81_sRemlTAJwszC5c4DdNWAzeAAFTX25A&s',
            deathToll: 172
        }
    ]
}


export const getPortugalCities = () => {
    return portugalData.cities.map(cities => ({...cities}))
}

export const getPortugalCelebs = () => {
    return portugalData.celebrities.map(celebrities => ({...celebrities}))
}

export const getPortugalLandmarks = () => {
    return portugalData.landmarks.map(landmarks => ({...landmarks}))
}

//........................****P E R U****................................//
const peruData = {
    landmarks: [
        { 
            name: "Machu Picchu", 
            deathToll: 53429,
            imageUrl: "PeruImages/machu picchu.jpg"
        },
        { 
            name: "Nazca Lines", 
            deathToll: 643,
            imageUrl: "PeruImages/Nazca Lines.jpg"
        },
        { 
            name: "Cusco Historic Center", 
            deathToll: 791328,
            imageUrl: "PeruImages/Cusco Historic Center.jpg"
        },
        { 
            name: "Lake Titicaca", 
            deathToll: 1,
            imageUrl: "PeruImages/Lake Titicaca.jpg"
        }
    ],
    famousPeople: [
        { 
            name: "Mario Vargas Llosa", 
            fact: "A famous Afro-Peruvian singer, composer, and politician.",
            imageUrl: "PeruImages/Mario Vargas Llosa.jpg"
        },
        { 
            name: "Susana Baca", 
            fact: "A renowned novelist and the recipient of the 2010 Nobel Prize in Literature.",
            imageUrl: "PeruImages/Susana Baca.jpg"
        },
        { 
            name: "Paolo Guerrero", 
            fact: "A chef and ambassador of Peruvian cuisine, known worldwide for popularizing dishes such as ceviche.",
            imageUrl: "PeruImages/Paolo Guerrero.jpg"
        },
        { 
            name: "Gaston Acurio", 
            fact: "A prominent footballer who has been a key figure in the Peru national team.",
            imageUrl: "PeruImages/Gaston Acurio.jpg"
        }
    ],
    cities: [
        { 
            name: "Callao", 
            dangerRate: 75.4,
            imageUrl: "PeruImages/Callao.jpg"
        },
        { 
            name: "Trujillo", 
            dangerRate: 5.0,
            imageUrl: "PeruImages/Trujillo.jpg"
        },
        { 
            name: "Lima", 
            dangerRate: 82.2,
            imageUrl: "PeruImages/Lima.jpg"
        },
        { 
            name: "Chimbote", 
            dangerRate: 16.9,
            imageUrl: "PeruImages/Chimbote.jpg"
        }
    ]
}

export const getPeruCities = () => {
    return peruData.cities.map(cities => ({...cities}))
}

export const getPeruCelebs = () => {
    return peruData.famousPeople.map(famousPeople => ({...famousPeople}))
}

export const getPeruLandmarks = () => {
    return peruData.landmarks.map(landmarks => ({...landmarks}))
}

//  Ireland data for landmarks, cities, and celebs and the export functions
const ireland = {
    cities: [
        {
            name: "Dublin",
            level: 75,
            image: "https://st2.depositphotos.com/3592009/5693/i/380/depositphotos_56937455-stock-photo-view-over-dublin.jpg"
        },{
            name: "Waterford",
            level: 65,
            image: "https://st.depositphotos.com/2692701/3176/i/380/depositphotos_31762145-stock-photo-copper-coast-near-bunmahon-county.jpg"
        },{
            name: "Killarney",
            level: 25,
            image: "https://st3.depositphotos.com/1007373/12855/i/450/depositphotos_128553190-stock-photo-waterfall-in-killarney-national-park.jpg"
        },{
            name: "Belfast",
            level: 5,
            image: "https://st3.depositphotos.com/7467032/13097/i/450/depositphotos_130977324-stock-photo-belfast-skyline-in-the-evening.jpg"
        }
    ],
    landmarks: [
        {
            image: "https://cdn.pixabay.com/photo/2019/10/02/10/37/cliff-of-moher-4520630_640.jpg",
            landmark: "Cliffs of Moher",
            deathtoll: 70 
        },{
            image: "https://images.pond5.com/gothic-aerial-rock-cashel-castle-footage-123534546_iconl.jpeg",
            landmark: "Rock of Cashel",
            deathtoll: 230 
        },{
            image: "https://i.pinimg.com/564x/e4/49/3c/e4493c59e1e413045eb8db0a8fd73930.jpg",
            landmark: "NewGrange",
            deathtoll: 5 
        },{
            image: "https://travelingcanucks.com/wp-content/uploads/2016/07/ireland-road-trip-giants-causeway-024.jpg",
            landmark: "The Giants Causeway",
            deathtoll: 50
        }

    ],
    celebrities: [
        {
            name: "Liam Neeson",
            image: "https://st2.depositphotos.com/5326338/8790/i/450/depositphotos_87906732-stock-photo-actor-liam-neeson.jpg",
            fact: "He will find you."
        },{
            name: "Bram Stoker",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Bram_Stoker_1906.jpg/595px-Bram_Stoker_1906.jpg",
            fact: "Father of Horror."
        },{
            name: "Pierce Broson",
            image: "https://st.depositphotos.com/5326338/55295/i/450/depositphotos_552957650-stock-photo-pierce-brosnan-los-angeles-premiere.jpg",
            fact: "A Smolder a day keeps you feeling okay."
        },{
            name: "Bono",
            image: "https://www.capitalpictures.com/img-get/I0000ycnLu3Ldoq4/s/600/600/U221009-10.jpg",
            fact: "Glasses are cool. During the Day and the Night."
        }
    ]
}

export const getIrelandcities = () => {
    return ireland.cities.map(city => ({...city}))
}

export const getIrelandlandmarks = () => {
    return ireland.landmarks.map(landmark => ({...landmark}))
}

export const getIrelandcelebrities = () => {
    return ireland.celebrities.map(celebrities =>({...celebrities}))
}
