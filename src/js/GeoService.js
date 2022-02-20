export default class GeoService {
    static geo = null;
    constructor() {
        this.init();
        this.coords = null;
    }

    async init() {
        if ("geolocation" in navigator) {
            navigator.geolocation.watchPosition(
                function (coords) {
                    GeoService.geo = '[' + coords.latitude + ',' + coords.longitude + ']';
                },
                function (err) {

                },

            );
        } else {

        }
    }


}
