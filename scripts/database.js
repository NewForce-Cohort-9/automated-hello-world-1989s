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