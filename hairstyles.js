const hairstyles = [
    {id:"box-braid", name:"box braids", duration: 4, length: "twa", ability:"beginner",  state: "washed", lasts: "3mnt"},
    {id:"knotless-braid", name: "knotless braid", duration: 4, length: "big chop", ability:"intermediate",  state: "stretched", lasts: "1mnt" },
    {id:"puff", name: "puff", duration: .25, length: "chin", ability:"beginner",  state: "blown", lasts: "one-day"},
    {id:"braid-tuck", name: "braid tuck", duration: .5, length: "chin", ability:"beginner",  state: "washed", lasts: "couple-days"},
    {id:"locs", name: "locs", duration: 4, length: "chin", ability:"expert",  state: "blown", lasts: "1mnt"},
    {id:"twist-out", name: "twists", duration: 2, length: "mid-back", ability:"beginner",  state: "3 days", lasts: "two-wks"},
    {id:"crochet", name: "crochet braids", duration: 4, length: "chin", ability:"intermediate",  state: "washed", lasts: "3mnt"},
    {id:"feedin-braids", name: "feed in braids", duration: 1, length: "chin", ability:"expert",  state: "stretched", lasts: "one-wk"},
    {id:"fing-coils", name: "finger coils", duration: 2, length: "big chop", ability:"beginner",  state: "washed", lasts: "one-wk"},
    {id:"fing-waves", name: "finger waves", duration: 3, length: "twa", ability:"intermediate",  state: "washed", lasts: "couple=days"},
    {id:"big-chop-off", name: "big chop", duration: 1, length: "chin", ability:"expert",  state: "dirty", lasts: "3mnt"},
    {id:"tap-afro", name: "tapered afro", duration: 2, length: "chin", ability:"intermediate",  state: "washed", lasts: "3mnt"},
    {id:"sleek-bun", name: "sleek bun", duration: 1, length: "shoulder", ability:"beginner",  state: "washed", lasts: "one-wk"},
    {id:"d-pony", name: "drawstring pony", duration: 1, length: "longer-length", ability:"intermediate",  state: "dirty", lasts: "couple-days"},
    {id:"twisted-crown", name: "asymmetrical twisted crown", duration: 1, length: "longer-length", ability:"intermediate",  state: "washed", lasts: "couple-days"}
  ];
  
  
  let filteredStyles = hairstyles;
  let activeFilters = [ ]; 
  function applyFilters(testStyle)
  {
    let passesActiveFilters = true;
    for(let index = 0; index < activeFilters.length; index++)
    {
      let testFilter = activeFilters[index];
      if(testStyle[testFilter.propertyName] == testFilter.propertyValue)
      {
        continue;
      }   else   {  
        passesActiveFilters = false; 
        break;
      }
    }
    return passesActiveFilters;
  }
    
function updateVisibleStyles()
{
  for(let index = 0; index < hairstyles.length; index++)
  {
   let testStyle = hairstyles[index];
    let hairstyleArticle = document.getElementById(testStyle.id);

   if(hairstyleArticle != null)
    {
      if(filteredStyles.includes(testStyle))
      {
        hairstyleArticle.style.display = "block";
      }   else    {
        hairstyleArticle.style.display = "none"; 
      }
    }
  }
}
  
function activateFilter(newPropertyName, newPropertyValue)
{
  activeFilters = activeFilters.filter(function(testFilter)
      {
          return testFilter.propertyName != newPropertyName;
      });

  if(newPropertyValue != null) 
  {
    let newFilter = {propertyName: newPropertyName, propertyValue: newPropertyValue};
    activeFilters.push(newFilter);
  }
  filteredStyles = hairstyles.filter(applyFilters);
  updateVisibleStyles();
}

function emailFunction()
{
  alert("Did you input your details? If you did, thank you for signing up");
}

 
  
  
  
  
  
  
  
  