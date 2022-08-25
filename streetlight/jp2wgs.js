
import { CSV } from "https://js.sabae.cc/CSV.js";

const data = CSV.toJSON(await CSV.fetch("./k.csv"));

// 日本測地系->世界測地系
const jp2wgs84 = (lat, lng) => {
	return {
		lat: lat - lat * 0.00010695 + lng * 0.000017464 + 0.0046017,
		lng: lng - lat * 0.000046038 - lng * 0.000083043 + 0.010040
	};
};

// 世界測地系->日本測地系
var wgs842jp = function(pos) {
	return {
		lat: pos.lat + pos.lat * 0.00010696 - pos.lng * 0.000017467 - 0.0046020,
		lng: pos.lng + pos.lat * 0.000046047 + pos.lng * 0.000083049 - 0.010041
	};
};

data.forEach(d => Object.assign(d, jp2wgs84(d.lat, d.lng)));
await Deno.writeTextFile("k2.csv", CSV.encode(CSV.fromJSON(data)));
