export default class GeoService {
    static geo = null;
    constructor() {
        this.init();
    }

    async init() {
        if ("geolocation" in navigator) {
            navigator.geolocation.watchPosition(
                function (coords) {
                    GeoService.geo = '[' + coords.coords.latitude + ', ' + coords.coords.longitude + ']';
                    console.log(GeoService.geo)
                },
                function (err) {
                },

            );
        } else {

        }
    }


}
