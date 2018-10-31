// Business Logic
function Band(bandName, addMainContactFirstName, addMainContactLastName, email, phone) {
  this.BandName = bandName; // What's the name of the band?
  this.BandMainContactFirstName = addMainContactFirstName; // What's the band's main contacts first name?
  this.BandMainContactLastName = addMainContactLastName; // "                                " last name?
  this.BandEmail = email; // what's the band's email? (not the main contact, though it may be the same)
  this.BandPhone = phone; // what's the main contact's phone number?
};

function Show(showDate) {
  this.DoorIncomeTotal = doorIncome; // how much total income from ticket sales/door sales?
  this.BarIncomeTotal = barIncome; // how much total income from the Bar
  this.ShowDate = showDate; // what is the date the show will happen?
  this.BandList = []; // this is the list of bands that will be on the show
  this.ShowType;  // is it a guaranteed payout, or a split between the house and bands?
  this.BandSplit = []; // An array representing the split for each band. 
  this.showIncomeTotal = 0; // this is the sum of all income the show made (Bar and Door)
}

var settledShowList = []; // this is the list of shows that have been settled, each item in the array should be a Show object.
var bands = []; // This is the overall list of bands that have been entered. 

var addBand = function(addBandName, addMainContactFirstName,addMainContactLastName, addEmail, addPhone){
    var newBand = new Band(addBandName, addMainContactFirstName, addMainContactLastName, addEmail, addPhone);
    return bands.push(newBand);
}; // this function will add new bands to the bands list

var addShow = function(date) {
  var newShow = new Show(date)
  return  settledShowList.push(newShow);
}; // this function will add new shows to the settled show list

Show.prototype.NewShow () {
  // this will update a show that's been created

};



var addBandToShow = function(band, date){
}

//UI Logic
$("Document").ready(function() {
  $("form#band-contact").submit(function(event){
    event.preventDefault();
    var bandNameInput = $("input#new-band").val();
    var mainContactFirstNameInput = $("input#contact-Firstname").val();
    var mainContactLastNameInput = $("input#contact-Lastname").val();
  });

});
