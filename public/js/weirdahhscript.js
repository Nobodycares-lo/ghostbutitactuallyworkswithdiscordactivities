let rgAPI = [{"name":"There is No Game","img":"/assets/img/assets/thereisnogame.png","href":"https://game258367.konggames.com/gamez/0025/8367/live/index.html"},{"name":"pulsus","img":"/assets/img/assets/pulsus.png","href":"https://www.pulsus.cc/play/"},{"name":"Bad time simulator","img":"/assets/img/assets/badtimesimulator.png","href":"https://jcw87.github.io/c2-sans-fight"},{"name":"Hobo 4","img":"/assets/img/assets/hobo4.png","href":"https://www.gameflare.com/embed/hobo-4/"},{"name":"Baldi's Basics","img":"/assets/img/assets/baldi.png","href":"https://healthstudies.commwebworks.com/game/baldi/index.html"},{"name":"Hobo 6","img":"/assets/img/assets/hobo6.png","href":"https://games.crazygames.com/en_US/hobo-6/index.html?v=1.301"},{"name":"Backrooms","img":"/assets/img/assets/backrooms.png","href":"https://backroomsgame.io/game/backrooms/"},{"name":"Cookie Clicker","img":"/assets/img/assets/cookie1.jpeg","href":"https://orteil.dashnet.org/cookieclicker/"}]
addEventListener('DOMContentLoaded', async (event) => {
    const gData = JSON.parse(rgAPI)
    gData.forEach((game) => {
        const i = document.getElementById('trendingg')
        const g = document.createElement('div')
        g.classList.add('g-icon')
        g.setAttribute(
            'onclick',
            "localStorage.setItem('url', '" +
                __uv$config.prefix +
                __uv$config.encodeUrl(game.href) +
                "'); window.location.href = '/q/'"
        )

        const img = document.createElement('button')
        const image = document.createElement('img')
        image.src = game.img

        const gname = document.createElement('p')
        gname.innerText = game.name

        img.appendChild(image)
        g.appendChild(img)
        g.appendChild(gname)
        i.appendChild(g)
    })
})
let raAPI = [{"name":"Twitch","img":"/assets//img/apps/twitch.png","href":"https://twitch.tv"},{"name":"Spotify","img":"/assets//img/apps/spotify2.png","href":"https://spotify.com"},{"name":"Duck Duck Go","img":"/assets//img/apps/ddg.png","href":"https://duckduckgo.com"},{"name":"Soundcloud","img":"/assets/img/assets/soundcloud.png","href":"https://soundcloud.com"},{"name":"Amazon","img":"/assets//img/apps/amazon.png","href":"https://amazon.com"},{"name":"Amazon Luna","img":"/assets//img/apps/luna.png","href":"https://luna.amazon.com"},{"name":"Pintrest","img":"/assets//img/apps/pintrest.png","href":"https://pinterest.com"},{"name":"Xbox Cloud Gaming","img":"/assets//img/apps/xbox.png","href":"https://xbox.com/play"}]
addEventListener('DOMContentLoaded', async (event) => {
    const gData = JSON.parse(raAPI)
    gData.forEach((game) => {
        const i = document.getElementById('trendinga')

        const g = document.createElement('div')
        g.classList.add('g-icon')
        g.setAttribute(
            'onclick',
            "localStorage.setItem('url', '" +
                __uv$config.prefix +
                __uv$config.encodeUrl(game.href) +
                "'); window.location.href = '/q/'"
        )

        const img = document.createElement('button')
        const image = document.createElement('img')
        image.src = game.img

        const gname = document.createElement('p')
        gname.innerText = game.name

        img.appendChild(image)
        g.appendChild(img)
        g.appendChild(gname)
        i.appendChild(g)
    })
})
function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function getRandomLink() {
    let csites = [
        'https://google.com',
        'https://classroom.google.com',
        'https://docs.google.com',
        'https://nasa.gov',
        'https://desmos.com',
        'https://clever.com',
        'https://ixl.com',
    ]
    return csites[getRandomInt(0, csites.length - 1)]
}
function blank() {
    var currentUrl = top.location.href
    if (currentUrl === 'about:blank') {
        console.log(currentUrl)
    } else {
        var win = window.open()
        var url = '/'
        var iframe = win.document.createElement('iframe')
        top.location.replace(getRandomLink())
        iframe.style.position = 'fixed'
        iframe.style.top = 0
        iframe.style.bottom = 0
        iframe.style.left = 0
        iframe.style.right = 0
        iframe.style.border = 'none'
        iframe.style.outline = 'none'
        iframe.style.width = '100%'
        iframe.style.height = '100%'
        iframe.src = url

        win.document.body.appendChild(iframe)
    }
}

function search() {
    window.location.href = '/w/'
}