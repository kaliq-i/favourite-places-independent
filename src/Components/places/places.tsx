import "./places.css"


interface PlaceDescription {
    title:String,
    image:string,
    location:String,
    map:string,
    comment:String

}


function Places (props:PlaceDescription) {

    let {title, location,image, map, comment} = props 

    return (
        <div className="places_holder">
            <img className="places_image" src={image} alt="An Image"/>
            <p className="places_title">{title}</p>
            <p className="places_location">{location} 
                <a href={map} className="places_map"> (Map Here) </a> 
            </p>
            <p className="places_comment">{comment}</p>
           
        </div>
    )
}


export default Places