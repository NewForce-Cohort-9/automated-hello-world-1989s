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
    return celebDatabase.celebrities.map(celebrities => ({...celebrities}))
}
export const getCities = () => {
    return cityDatabase.cities.map(cities => ({...cities}))
}
export const getLocations = () => {
    return celebDatabase.landmarks.map(landmarks => ({...landmarks}))
}