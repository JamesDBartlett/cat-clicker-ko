const initialCats= [
  {
    clickCount: 0,
    name: 'Tabby',
    imgSrc: 'img/434164568_fea0ad4013_z.jpg',
    imgAttribution: 'https://flickr.com',
  },
  {
    clickCount: 0,
    name: 'Pounce',
    imgSrc: 'img/22252709_010df3379e_z.jpg',
    imgAttribution: 'https://flickr.com',
  },
  {
    clickCount: 0,
    name: 'Predator',
    imgSrc: 'img/1413379559_412a540d29_z.jpg',
    imgAttribution: 'https://flickr.com',
  },
  {
    clickCount: 0,
    name: 'Nugget',
    imgSrc: 'img/4154543904_6e2428c421_z.jpg',
    imgAttribution: 'https://flickr.com',
  },
  {
    clickCount: 0,
    name: 'Pepper',
    imgSrc: 'img/9648464288_2516b35537_z.jpg',
    imgAttribution: 'https://flickr.com',
  },
]

const Cat = function(data) {
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc =  ko.observable(data.imgSrc);
  this.imgAttribution = ko.observable(data.imgAttribution);
  this.level = ko.computed(() => {
    let clicks = this.clickCount();
    switch (true) {
      case clicks === 0:
        return "Useless Newborn"
      case clicks < 5:
        return "Klutzy Kitten"
        break;
      case clicks < 13:
        return "Self-Conscious, Awkward Tween Kitty"
        break;
      case clicks < 20:
        return "Rowdy, Hormonal Teenage Kitty"
        break;
      case clicks < 30:
        return "Mellowed-Out Adult Cat"
        break;
      case clicks >= 30:
        return "Grumpy Old Geezer Cat"
        break;
    };
  }, this);
  this.sillySuffixes = ko.observableArray([
    {suffix: this.name() + '-kins'},
    {suffix: this.name() + '-meister'},
    {suffix: this.name() + ' von Kättenstein'},
    {suffix: this.name() + ' the Great'},
    {suffix: this.name() + ' the Terrible'},
    {suffix: this.name() + ' the Adorable'},
    {suffix: this.name() + ' Mousebane'}
  ]);
};

const ViewModel = function() {
  let self = this;
  this.catList = ko.observableArray([]);
  initialCats.forEach(catItem => {
    self.catList.push(new Cat(catItem));
  });
  this.currentCat = ko.observable(this.catList()[0]);
  this.incrementCounter = () => {
    self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  };
  this.setCat = (clickedCat) => {
    self.currentCat(clickedCat);
  };
};

ko.applyBindings(new ViewModel());
