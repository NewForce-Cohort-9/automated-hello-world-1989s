//........................****P E R U****................................//
const peruFactsDatabase = {
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

export let getPeru = () => {
    return peruFactsDatabase.landmarks.map(landmarks => ({...landmarks}))
    return peruFactsDatabase.cities.map(cities => ({...cities}))
    return peruFactsDatabase.famousPeople.map(famousPeople => ({...famousPeople}))
}
