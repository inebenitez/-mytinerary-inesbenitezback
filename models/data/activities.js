import 'dotenv/config.js'
import { connect } from 'mongoose'
import Activity from '../Activity.js'
import Itinerary from '../Itinerary.js'


const activities = [{
    name: "Hikking Tour",
    photo: "https://i.im.ge/2022/09/07/OfQSzP.Depositphotos-111788638-s-2015.webp",
    itinerary_id: "64dc9e103d1cd386e318fac3"
},{
    name: "Parachuting Experience",
    photo: "https://i.im.ge/2022/09/07/OfQDor.46776775352-2e89743bbe-h-1200x853.jpg",
    itinerary_id: "64dc9e103d1cd386e318fac3"
},{
    name: "Ceremonial Tea",
    photo: "https://i.im.ge/2022/09/08/Of2mJM.kyoto-tea-ceremony-2-M.jpg",
    itinerary_id: "64dc9e103d1cd386e318fac3"
},{
    name: "Tikki Cocktail Party",
    photo: "https://i.im.ge/2022/09/07/OfM8nc.Tonga-Room-Hurricane-Bar-941826-2-0-0.webp",
    itinerary_id: "64dc9e103d1cd386e318fac6"
},{
    name: "Windsurfing",
    photo: "https://i.im.ge/2022/09/07/OfMJ36.Windsurfing-in-Brazil-Top-Ten-spots-to-tryFlickr-image-by-winniepix9.jpg",
    itinerary_id: "64dc9e103d1cd386e318fac6"
},{
    name: "Snorkeling",
    photo: "https://www.furycat.com/images/april-earth-month-key-west.jpg",
    itinerary_id: "64dc9e103d1cd386e318fac6"
},{
    name: "Whale Tour",
    photo: "https://i.im.ge/2022/09/08/OfSTQ9.f6.jpg",
    itinerary_id: "64dc9e113d1cd386e318fac9"
},{
    name: "Snorkeling Tour",
    photo: "https://i.im.ge/2022/09/08/OfSoLX.7c.jpg",
    itinerary_id: "64dc9e113d1cd386e318fac9"
},{
    name: "Quad Ride Adventure",
    photo: "https://i.im.ge/2022/09/07/OfMJ36.Windsurfing-in-Brazil-Top-Ten-spots-to-tryFlickr-image-by-winniepix9.jpg",
    itinerary_id: "64dc9e113d1cd386e318fac9"
},{
    name: "Hot Springs",
    photo: "https://i.im.ge/2022/09/08/Ofd1aa.RORAIMA-lo-mejor-que-te-puede-pasar.jpg",
    itinerary_id: "64dc9e123d1cd386e318facc"
},{
    name: "Helicopter Tour",
    photo: "https://i.im.ge/2022/09/08/OfdFBx.image-paraitepuy-03.jpg",
    itinerary_id: "64dc9e123d1cd386e318facc"
},{
    name: "Local Camps Tour",
    photo: "https://i.im.ge/2022/09/08/OfduYG.canaima-camp.jpg",
    itinerary_id: "64dc9e123d1cd386e318facc"
},{
    name: "Relaxing Time",
    photo: "https://i.im.ge/2022/09/08/Ofaswr.ta-img-20160816-111957.jpg",
    itinerary_id: "64dc9e143d1cd386e318fadb"
},{
    name: "Beach Spa",
    photo: "https://i.im.ge/2022/09/08/Ofaq1m.south-africa-beach-spa-hotels-590x390.jpg",
    itinerary_id: "64dc9e143d1cd386e318fadb"
},{
    name: "Dolphins Watching",
    photo: "https://i.im.ge/2022/09/08/OfaSHf.photo6jpg.jpg",
    itinerary_id: "64dc9e143d1cd386e318fadb"
},{
    name: "Traditional Spa",
    photo: "https://i.im.ge/2022/09/07/OfXBcM.aeaswebimagev2spa944x510.jpg",
    itinerary_id: "64dc9e0e3d1cd386e318fabd"
},{
    name: "Phase Circus Show",
    photo: "https://i.im.ge/2022/09/07/OfX4ih.146.jpg",
    itinerary_id: "64dc9e0e3d1cd386e318fabd"
},{
    name: "Temple Tour",
    photo: "https://i.im.ge/2022/09/08/Of9IfK.the-gate-of-Angkor-Thom.jpg",
    itinerary_id: "64dc9e0e3d1cd386e318fabd"
},{
    name: "Temple Tour",
    photo: "https://i.im.ge/2022/09/06/OZ7EZT.DSCF4529-1200.jpg",
    itinerary_id: "64dc9e0f3d1cd386e318fac0"
},{
    name: "Rafting",
    photo: "https://i.im.ge/2022/09/07/Ofl2er.Bali-Sides.jpg",
    itinerary_id: "64dc9e0f3d1cd386e318fac0"
},{
    name: "Flying in the Jungle",
    photo: "https://i.im.ge/2022/09/07/OflqC0.bali-swing.webp",
    itinerary_id: "64dc9e0f3d1cd386e318fac0"
},{
    name: "Hikking in the Jungle",
    photo: "https://thingstodoincairns.com.au/wp-content/uploads/2014/04/cairns-rainforest-tour-1260x700.jpg",
    itinerary_id: "64dc9e163d1cd386e318fae7"
},{
    name: "Kangaroo Reserve",
    photo: "https://i.im.ge/2022/09/07/OflZrP.41.md.jpg",
    itinerary_id: "64dc9e163d1cd386e318fae7"
},{
    name: "Boat Tour",
    photo: "https://rahetbally.com/wp-content/uploads/2019/11/67212072_2307918876123256_1256478856945074176_n-768x902.jpg",
    itinerary_id: "64dc9e163d1cd386e318fae7"
},{
    name: "High Ropes",
    photo: "https://rahetbally.com/wp-content/uploads/2019/11/67212072_2307918876123256_1256478856945074176_n-768x902.jpg",
    itinerary_id: "64dc9e163d1cd386e318faea"
},{
    name: "Cruice",
    photo: "https://i.im.ge/2022/09/07/Ofllwp.900x600-1-50-b11c1f4f7e3b8f9c8acc4721719e558a.jpg",
    itinerary_id: "64dc9e163d1cd386e318faea"
},{
    name: "Cammel Rides",
    photo: "https://i.im.ge/2022/09/07/Ofld7W.Camel-Ride-in-Giza-Pyramids-Egypt-Tours-Portal.jpg",
    itinerary_id: "64dc9e163d1cd386e318faea"
},{
    name: "Amazing Views",
    photo: "https://www.egypttoursportal.com/images/2021/06/Restaurants-in-Cairo-Egypt-Tours-Portal.jpg",
    itinerary_id: "64dc9e173d1cd386e318faed"
},{
    name: "Meal Show",
    photo: "https://i.im.ge/2022/09/07/OflrKP.2000x2000-0-70-7fd222106e2085c9acc6eee4403ca08e.jpg",
    itinerary_id: "64dc9e173d1cd386e318faed"
},{
    name: "Restaurant",
    photo: "https://media-cdn.tripadvisor.com/media/photo-p/1c/ba/01/3e/egyptian-nights-restaurant.jpg",
    itinerary_id: "64dc9e173d1cd386e318faed"
},{
    name: "Cairo Tower",
    photo: "https://www.egypttoursportal.com/images/2021/04/Cairo-Tower-Egypt-Tours-Portal-1.jpg",
    itinerary_id: "64dc9e183d1cd386e318faf0"
},{
    name: "Alabaster Tour",
    photo: "https://planetofhotels.com/guide/sites/default/files/styles/paragraph__hero_banner__hb_image__1880bp/public/hero_banner/Cairo_Citadel_0.jpg",
    itinerary_id: "64dc9e183d1cd386e318faf0"
},{ 
    name: "Egyptcian Museum",
    photo: "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6b/81/dd.jpg",
    itinerary_id: "64dc9e183d1cd386e318faf0"
},{
    name: "Sightseen",
    photo: "https://www.informador.mx/__export/1626607276625/sites/elinformador/img/2021/07/18/imagen_japan-237658_crop1626607237024.jpg_1970638775.jpg",
    itinerary_id: "64dc9e133d1cd386e318fad2"
},{
    name: "Golden Pavilion",
    photo: "https://www.japan-guide.com/g18/3908_top.jpg",
    itinerary_id: "64dc9e133d1cd386e318fad2"
},{
    name: "Philosopher's Path",
    photo: "https://www.japan-guide.com/g18/3906_top.jpg",
    itinerary_id: "64dc9e133d1cd386e318fad2"
},{
    name: "Canoeing",
    photo: "https://i.im.ge/2022/09/08/Of94zF.canoeing.jpg",
    itinerary_id: "64dc9e123d1cd386e318facf"
},{
    name: "Boat Rides",
    photo: "https://i.im.ge/2022/09/08/Of9ej9.7eab4e08a995fa0b1cd5ab2377b83ba566f6ba5c.jpg",
    itinerary_id: "64dc9e123d1cd386e318facf"
},{
    name: "Air Views",
    photo: "https://i.im.ge/2022/09/08/Of9GFK.0c.jpg",
    itinerary_id: "64dc9e123d1cd386e318facf"
},{
    name: "Tour Guides",
    photo: "https://scontent.faep9-1.fna.fbcdn.net/v/t31.18172-8/12888663_1726269110925382_7725776561470995313_o.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEEG28o1BixY5FDZSabfrevMbNjgcUQbFoxs2OBxRBsWgPC_SIewOflHMtiAzLcBT-XJRuKVf5YziDjjUrw5V8x&_nc_ohc=cU0H5NvuqEMAX9oM-Nw&_nc_ht=scontent.faep9-1.fna&oh=00_AT_fDn9K6tFKigVDtQxh0X8VopxzBXFVNUOe96c7m7fZZw&oe=63400D88",
    itinerary_id: "64dc9e133d1cd386e318fad5"
},{
    name: "Memorials",
    photo: "https://www.thailandnomads.com/wp-content/uploads/2021/07/image1-9-1200x900.jpg",
    itinerary_id: "64dc9e133d1cd386e318fad5"
},{
    name: "Surroundings",
    photo: "https://media-cdn.tripadvisor.com/media/photo-s/13/39/18/a9/photo1jpg.jpg",
    itinerary_id: "64dc9e133d1cd386e318fad5"
},{
    name: "Monkey Forest",
    photo: "https://a.cdn-hotels.com/gdcs/production52/d1669/11891cad-1c0e-4c21-956e-6783db98b4b6.jpg?impolicy=fcrop&w=1600&h=1066&q=medium",
    itinerary_id: "64dc9e153d1cd386e318fade"
},{
    name: "Elephant Cave",
    photo: "https://a.cdn-hotels.com/gdcs/production61/d20/feccd1b4-6554-49e5-9aa2-21d6961b72f1.jpg?impolicy=fcrop&w=1600&h=1066&q=medium",
    itinerary_id: "64dc9e153d1cd386e318fade"
},{
    name: "Campuhan Ridge Walk",
    photo: "https://a.cdn-hotels.com/gdcs/production11/d248/3c26e2dc-5c56-4c1f-a027-452219edc313.jpg?impolicy=fcrop&w=1600&h=1066&q=medium",
    itinerary_id: "64dc9e153d1cd386e318fade"
},{
    name: "Tegallalang Rice Terraces",
    photo: "https://a.cdn-hotels.com/gdcs/production21/d600/9f7c5530-7fd5-457c-82d9-7d44376e8020.jpg?impolicy=fcrop&w=1600&h=1066&q=medium",
    itinerary_id: "64dc9e143d1cd386e318fad8"
},{
    name: "Kintamani",
    photo: "https://a.cdn-hotels.com/gdcs/production34/d808/52b6e0b2-3218-4045-a201-0762db401183.jpg?impolicy=fcrop&w=1600&h=1066&q=medium",
    itinerary_id: "64dc9e143d1cd386e318fad8"
},{
    name: "Bali Safari and Marine Park",
    photo: "https://a.cdn-hotels.com/gdcs/production164/d1117/3e272204-0650-45fe-bf3d-fd0432f4f723.jpg?impolicy=fcrop&w=1600&h=1066&q=medium",
    itinerary_id: "64dc9e143d1cd386e318fad8"
},{
    name: "Meet the Locals",
    photo: "https://i.pinimg.com/originals/61/bc/09/61bc09a44e36921fe57af632c8be187f.jpg",
    itinerary_id: "64dc9e153d1cd386e318fae1"
},{
    name: "Music",
    photo: "https://www.musicinafrica.net/sites/default/files/images/article/201604/danceblogmotherlandsfinestcom.jpg",
    itinerary_id: "64dc9e153d1cd386e318fae1"
},{
    name: "Ceremonial Boats",
    photo: "https://i0.wp.com/zambianews365.com/wp-content/uploads/2018/03/Kuomboka-traditional-ceremony.jpg?fit=1017%2C389&ssl=1",
    itinerary_id: "64dc9e153d1cd386e318fae1"
},{
    name: "Devil's Pool",
    photo: "https://mybestplace.com/uploads/2018/10/Devils-Pool-Zambia-1.jpg",
    itinerary_id: "64dc9e163d1cd386e318fae4"
},{
    name: "Bunjee Jumping",
    photo: "https://www.absolutezambiasafaris.net/dimages/category_images/Bungee-Jumping11_52.jpg",
    itinerary_id: "64dc9e163d1cd386e318fae4"
},{
    name: "Flying over the Falls",
    photo: "https://ychef.files.bbci.co.uk/976x549/p014n0rg.jpg",
    itinerary_id: "64dc9e163d1cd386e318fae4"
}]

async function createActivities(arrayActivities) {
    try {
        await connect(process.env.LINK_DB);
        for (let activity of arrayActivities) {
            let itinerary = await Itinerary.findOne({ name:activity.itinerary_id}) 
            let itinerary_id = await itinerary._id
            activity.itinerary_id = itinerary_id  
            await Activity.create(activity)
        }
        console.log('done');
    } catch (error) {
        console.log(error);
    }
}

createActivities(activities);