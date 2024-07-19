// import React,{useEffect, useState,useRef} from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
// import {APIProvider, Map,AdvancedMarker, Pin, InfoWindow,ControlPosition,MapControl,useMap,useMapsLibrary,useAdvancedMarkerRef} from '@vis.gl/react-google-maps';
// // import {GoogleMapsPlacesAutocomplete} from 'google-maps-react-autocomplete'
// // control position is  a property that is used to specify the position of user interface controls on the map. User interface controls include elements like the zoom control, map type control,full screen control and street view control.The controlPosition property allows developers to determine where these controls appear relative to the map canvas. It takes values such as TOP_LEFT, TOP_RIGHT, BOTTOM_LEFT, BOTTOM_RIGHT, LEFT_TOP, RIGHT_TOP, LEFT_BOTTOM, RIGHT_BOTTOM, and CENTER. 
// function Distance() {
//   const position={lat: -1.286389, lng: 36.817223}
//   const handleChange=()=>{
//     new google.maps.places.Autocomplete(value)
//   }
//   const[open,setOpen]=useState(false);
//  const[selectedPlace, setSelectedPlace]=useState(null);
//  const[markerRef,marker]=useAdvancedMarkerRef()

//   return (
//     <>
//       <h3>Find the cost and time </h3>
//         <div className="pickup">
//           <FontAwesomeIcon icon={faLocationDot} />
//           <input type="text" placeholder="Enter Pickup Point..." value={(e)=>{
//             e.target.value
//           }}  onChange={handleChange}/>
//         </div>
//         <div className="dropoff">
//           <FontAwesomeIcon icon={faLocationDot} />
//           <input type="text" placeholder="Enter Dropoff Point..." value={(e)=>{
//             e.target.value
//           }} onChange={handleChange} />
//         </div>
//         <button className="calculate-btn">
//           Calculate Route
//         </button>
//         <label>Distance:</label>
//         <label>Duration:</label>
//       <APIProvider apiKey={}>
//         <Map
//          style={{width: '100%', height: '100vh'}}
//          center={position}
//          defaultZoom={3}
//          mapId={'27c8b217578dedc5'}
//          gestureHandling={'greedy'}
//          disableDefaultUI={true}
//         >
//           <AdvancedMarker position={position} onClick={()=>setOpen(true)} ref={markerRef} >
//             <Pin background={'green'} borderColor={'yellow'} glyphColor={'black'}/>
//           </AdvancedMarker>
//           {open && <InfoWindow position={position} onCloseClick={()=>setOpen(false)}><p>I am in Nairobi</p></InfoWindow>}
//         </Map>
//         <MapControl position={ControlPosition.TOP}>
//           <div className="autocomplete-control">
//             <PlaceAutocomplete onPlaceSelect={setSelectedPlace}/>
//           </div>
//         </MapControl>
//         <MapHandler place={selectedPlace} marker={marker}/>
//       </APIProvider>
//     </>
//   );
// }
// const MapHandler=({place,marker})=>{
//   const map=useMap()
//   useEffect(()=>{
//     if(!map ||!place||!marker)return;
//     if(place.geometry?.viewport){
//       map.fitBounds(place.geometry?.viewport)
//     }
//     marker.position=place.geometry?.location
//   },[map,place,marker]);
//   return null;
// }

// const PlaceAutocomplete=({onPlaceSelect})=>{
//   const[placeAutocomplete, setPlaceAutocomplete]=useState(null);
//   const inputRef=useRef(null)
//   const places=useMapsLibrary("places")

//   useEffect(()=>{
//     if(!places||!inputRef.current)return;
//     const options={
//       fields:["geometry","name","formatted_address"]
//     }
//     setPlaceAutocomplete(new places.Autocomplete(inputRef.current,options))
//   },[places])
//   useEffect(()=>{
//     if(!placeAutocomplete)return;
//     placeAutocomplete.addListener("place-changed",()=>{
//       onPlaceSelect(placeAutocomplete.getPlace())
//     })
//   },[onPlaceSelect,placeAutocomplete])
//   return(
//     <div className="autocomplete-container">
//       <input ref={inputRef}/>
//     </div>
//   )
// }

// export default Distance;
