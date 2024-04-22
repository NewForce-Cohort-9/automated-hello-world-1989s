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