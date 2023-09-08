db = db.getSiblingDB('carCards');

db.createCollection('car');

db.car.insertMany([
        {
            "imageUrl": "images/Audi.jpeg",
            "tradeName": "Audi",
            "model": "Flaschback 300",
            "prize": 50000
        },
        {
            "imageUrl": "images/Opel_Manta_SE.jpeg",
            "tradeName": "Opel",
            "model": "Manta SE",
            "prize": 20000
        },
        {
            "imageUrl": "images/vw_Golf_GL.png",
            "tradeName": "VW",
            "model": "Golf GL",
            "prize": 12000
        },
        {
            "imageUrl": "images/Fiat_500.jpg",
            "tradeName": "Fiat",
            "model": "500",
            "prize": 15000
        },
        {
            "imageUrl": "images/Nissan_GTR.jpg",
            "tradeName": "Nissan",
            "model": "GTR r35",
            "prize": 99900
        },
        {
            "imageUrl": "images/Download.jpeg",
            "tradeName": "Porsche",
            "model": "GT3",
            "prize": 193000
        },
    {
        "imageUrl": "images/toyota-gr-supra-2022-01_0.jpg",
        "tradeName": "Toyota",
        "model": "Supra",
        "prize": 53000
    },
    {
        "imageUrl": "images/mx_7.png",
        "tradeName": "Mazda",
        "model": "MX-7",
        "prize": 15000
    }
]);