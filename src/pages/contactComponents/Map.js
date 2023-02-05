import React from "react";
import "../../style/css/map.css";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
const center = { lat: 51.39241275673889, lng: 16.204791932272258 };
const MapBox = () => {
	return (
		<GoogleMap zoom={19} center={center} mapContainerClassName="map">
			<Marker position={center} />
		</GoogleMap>
	);
};

const Map = () => {
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: "AIzaSyBmWq272OEqZfCcLneiOPt5wg01SIvcG8A",
	});
	return (
		<div className="map-and-address-container">
			{!isLoaded ? (
				"<div className='loading-box'><h3>Loading...</h3></div>'"
			) : (
				<MapBox />
			)}

			<div className="location-and-address-container">
				<div className="location">
					<h2>Gdzie i kiedy stacjonujemy?</h2>
					<p>
						Nasze biuro znajduje się w Lubinie na ulicy Karkonoskiej 1C, na
						pierwszym piętrze budynku usługowego. Jesteśmy otwarci od
						poniedziałku do piątku w godzinach 9-16.
					</p>
				</div>
				<div className="address">
					<h2>Dane kontaktowe</h2>
					<p>
						Biuro Tłumaczeń Przysięgłych „DAG-MAR” <br />
						ul. Karkonoska 1C, 59-300 Lubin <br />
						tel. +48 76 846 10 64, kom. +48 607 618 567 <br />
						NIP: 692-172-62-49, Regon: 390770661
					</p>
				</div>
			</div>
		</div>
	);
};

export default Map;
