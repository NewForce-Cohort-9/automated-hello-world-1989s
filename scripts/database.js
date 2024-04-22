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

// Portugal data for landmarks, cities, and celebs and the export functions
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
            troll3: 'think he\'s too famous to pay taxes',
            troll4: 'another dude'
        }, {
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