// Business Logic
function Band(bandName, addMainContactFirstName, addMainContactLastName, email, phone) {
  this.BandName = bandName;
  this.BandMainContactFirstName = addMainContactFirstName;
  this.BandMainContactLastName = addMainContactLastName;
  this.BandEmail = email;
  this.BandPhone = phone;
};

// Next don't we need

function Show(doorIncome,showIncome,showDate) {
  this.DoorIncomeTotal = doorIncome;
  this.BarIncomeTotal = showIncome;
  this.ShowDate = showDate;
  this.BandList = [];
}

var settledShowList = [];
var bands = [];

var addBand = function(addBandName, addMainContactFirstName,addMainContactLastName, addEmail, addPhone){
    var newBand = new Band(addBandName, addMainContactFirstName, addMainContactLastName, addEmail, addPhone);
    return bands.push(newBand);
};

var addShow = function(doorIncome, barIncome, date) {
  var newShow = new Show(doorIncome, barIncome, date)
  return  settledShowList.push(newShow);
};

var addBandToShow = function(band, date){
}

//UI Logic
$("Document").ready(function() {
  $("form#band-contact").submit(function(event){
    event.preventDefault();
    var bandNameInput = $("input#new-band").val();
    var mainContactFirstNameInput = $("input#contact-firstName").val();
    var mainContactLastNameInput = $("input#contact-lastName").val();
  });

});
