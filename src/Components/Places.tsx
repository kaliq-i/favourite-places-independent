import { timeLog } from "console";
import { Interface } from "readline";

interface PlaceDescription {
    title:String,
    place:String,
    country:String,
    image:URL,
    location:URL,
    bio:String

}


function Places ({title,place,country,image,location,bio}:PlaceDescription) {
    return (
        <div>
            <h1>{title}</h1>
            <img src="https://www.ikea.com/gb/en/images/products/fladis-basket-seagrass__0713073_PE729177_S5.JPG"/>
        </div>
    )
}