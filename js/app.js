const Cat = function() {
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Tabby');
  this.imgSrc =  ko.observable('img/434164568_fea0ad4013_z.jpg');
  this.imgAttribution = ko.observable('https://flickr.com');
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
  this.currentCat = ko.observable(new Cat());
  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
  };
};

ko.applyBindings(new ViewModel());
