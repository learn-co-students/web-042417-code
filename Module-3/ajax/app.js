// Explain what ajax is and
// $.ajax({
//   url: 'https://api.magicthegathering.io/v1/cards',
//   type: 'GET'
// })
//   .then((response) => console.log('ajax', response))
//
// fetch('https://api.magicthegathering.io/v1/cards')
//   .then(response => response.json())
//   .then(jsonResponse => console.log('fetch', jsonResponse.cards))

class MTGCard {
  constructor (imgURL, set) {
    this.image = imgURL
    this.set = set
  }

  render () {
    return (`
      <div class="ui raised card">
        <a class="image" href="#">
          <img src="${this.image}">
        </a>
        <div class="content">
          <div class="description">
            ${this.set}
            <span class="right floated">
              <i class="heart outline like icon"></i>
            </span>
          </div>
        </div>
      </div>
    `)
  }
}

class MTGCardList {
  constructor () {
    this.cards = []
    this.sets = []
    this.listContainer = document.querySelector('#cards-list')
    this.apiAdapter = new MTGApiAdapter()
  }

  renderCards () {
    return this.cards.map(card => card.render()).join('')
  }
  fetchCards (page) {
    this.apiAdapter.getCards(page)
      // .then(this.getJson)
      .then(this.createCards.bind(this))
      .then(this.render.bind(this))
  }
  searchByName (name) {
    this.apiAdapter.searchCards(name)
      .then(this.getJson)
      .then(this.createCards.bind(this))
      .then(this.render.bind(this))
  }
  render () {
    this.listContainer.innerHTML = this.renderCards()
  }

  getJson (response) {
    return response.json()
  }

  createCards (response) {
    this.cards = response.cards.map(card => new MTGCard(card.imageUrl, card.setName))
  }
}

class MTGApiAdapter {
  constructor () {
    this.base_url = 'http://api.magicthegathering.io/v1/'
    this.cards = this.base_url + 'cards'
    this.sets = this.base_url + 'sets'
    this.page = 1
  }
  getCards (page) {
    switch (page) {
      case 'back':
        this.page--
        return fetch(this.cards + `?page=${this.page}`)
      case 'next':
        this.page++
        return fetch(this.cards + `?page=${this.page}`)
      default:
        this.page = 1
        return fetch(this.cards).then(r => r.json())
    }
  }
  searchCards (name) {
    return fetch(this.cards + `?name=${name}`)
  }
}

class App {
  constructor () {
    // grab nav buttons
    this.search = document.querySelector('.search')
    this.back = document.querySelector('#back')
    this.next = document.querySelector('#next')
    this.searchText = document.querySelector('#search-text')
    // new instance of list container
    this.cardList = new MTGCardList()
    // event listeners
    this.search.addEventListener('click', () => this.cardList.searchByName(this.searchText.value))
    this.back.addEventListener('click', () => this.cardList.fetchCards('back'))
    this.next.addEventListener('click', () => this.cardList.fetchCards('next'))
  }
  render () {
    this.cardList.fetchCards()
    this.cardList.render()
  }
}

const mtgApp = new App()
mtgApp.render()
