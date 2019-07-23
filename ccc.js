/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  Date.prototype.addDays = function(days) {
    this.setDate( this.getDate()  + days);
    return this;
  };
  

  function calcDrug() {
      var dateTaken = $("#datepicker").datepicker( 'getDate' );;
      var drug = document.getElementById("drugTaken");
      var drugChoice = drug.options[drug.selectedIndex].text;
        switch(drugChoice) {
            case "Marijuana":
                dateTaken.addDays(21);
                break;
            case "Cocaine":
                dateTaken.addDays(2);
                break;
            case "Alcohol":
                dateTaken.addDays(1);
                break;
            default:
                daysToClean = 30;
                console.log("Generic 30 day generated date. Could not calculate");
        }

      var cleanDate = dateTaken;

      document.getElementById("generated").innerHTML = `${drugChoice} will be out of your system on ${cleanDate.toLocaleDateString("en-us")}.`
  }

