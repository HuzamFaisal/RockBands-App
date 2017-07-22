"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var rockbands = [
            { id: 11, name: 'Nirvana', image: "http://www.cheekymonkeysarnia.ca/wp-content/uploads/2017/03/MAR-17-NIRV.jpg" },
            { id: 12, name: 'Led Zeppelin', image: "https://www.rockhall.com/sites/default/files/styles/header_image_portrait/public/ledzeppelin1973_gruen_webuseonly.jpg?itok=5gToCOAc" },
            { id: 13, name: 'AD/DC', image: "https://busites_www.s3.amazonaws.com/acdccom/content/articles/angusaxlacdc.jpg" },
            { id: 14, name: 'The Beatles', image: "http://theoutlook.com.ua/uploads/user/%D0%91%D0%B8%D1%82%D0%BB%D0%B7/db4741faf4db929b34b3d84e797f34a7.jpg" },
            { id: 15, name: 'Radiohead', image: "https://www.busforfun.com/picture/Immagine/789/340x170,crop/d0c3f26bc8e1cd018586ea9d388f2319.jpg" },
            { id: 16, name: 'U2', image: "http://modern-vinyl.com/wp/wp-content/uploads/2013/10/U21.jpg" },
            { id: 17, name: 'Aerosmith', image: "https://www.busforfun.com/picture/Immagine/847/original/7241c859cc137d46aaa8026a8bf0dbe7.jpg" },
            { id: 18, name: 'The Who', image: "http://i.telegraph.co.uk/multimedia/archive/03354/the-who-1965_3354772k.jpg" },
            { id: 19, name: 'Pink Floyd', image: "https://www.floydianslip.com/images/slideshow/photo3.jpg" },
            { id: 20, name: 'The Rolling Stones', image: "https://www.morrisonhotelgallery.com/images/medium/STONES21963.jpg" },
        ];
        return { rockbands: rockbands };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map