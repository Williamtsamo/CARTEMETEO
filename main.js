

import { Search } from "./Search.js"




new Search()

var map = document.querySelector('#map')

var paths = map.querySelectorAll('.map__image a')

var links = map.querySelectorAll('.map__liste a')

var liens = map.querySelectorAll('.map__temp a')

var activeArea = function (id) {
    map.querySelectorAll('.is-active').forEach(function (item) {
        item.classList.remove('is-active');
    })
    map.querySelector('#liste-' + id).classList.add('is-active')
    map.querySelector('#region-' + id).classList.add('is-active')
    map.querySelector('#temp-' + id).classList.add('is-active')
}

paths.forEach(function (path) {

    path.addEventListener('mouseenter', function () {
        var id = this.id.replace('region-', '');
        activeArea(id)

    })
})

links.forEach(function (link) {
    link.addEventListener('mouseenter', function () {
        var id = this.id.replace('liste-', '')
        activeArea(id)
    })
})
liens.forEach(function (lien) {
    lien.addEventListener('mouseenter', function () {
        var id = this.id.replace('temp-', '')
        activeArea(id)
    })
})








/* document.querySelector('#liste-' + id).classList.add('is-active')
 document.querySelector('#region-' + id).classList.add('is-active')*/








