
  document.getElementById("main-button").addEventListener('click',function(){
   const inputName = document.getElementById("inputField").value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputName}`)
    .then(res=>res.json())
    .then(data=>displayMeal(data))
    .catch(error=>errorMeal(error))
   })
 let mealItem =""
 displayMeal = data =>{
    // console.log(data)
    const item = data.meals;
    document.getElementById("showMeal").innerHTML=""
    mealItem=""
    item.forEach(element => {
        // console.log(element)
        const showMeal = document.getElementById("showMeal");
         mealItem  = mealItem + `
         <div onclick="mealDetails('${element.idMeal}')" class="col-md-4 my-3 col-6">
        <img src="${element.strMealThumb}" class="w-50 d-block mx-auto" />
        <h5 id="recipe-tittle" class="text-center">${element.strMeal}</h5>
        <div id="details">

        </div>
        </div>
        `
        showMeal.innerHTML = mealItem;
    });
    }

    

    const mealDetails = idMeal => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            mealInfo(data.meals[0])
        })
    }
    
     mealInfo = info =>{
         console.log(info)
        const details = document.getElementById("oneMeal") ;
        const detailsInfo = `
        <img src="${info.strMealThumb}" class="w-50 d-block mx-auto" />
        <h4>${info.idMeal} </h4>
         <h4>${info.strMeal} </h4>
         <h4>1. ${info.strIngredient1} </h4>
         <h4>2. ${info.strIngredient2} </h4>
         <h4>3. ${info.strIngredient3} </h4>
         <h4>4. ${info.strIngredient4} </h4>
         <h4>5. ${info.strIngredient5} </h4>
         <h4>6. ${info.strIngredient6} </h4>
         <h4>7. ${info.strIngredient7} </h4>
         
        
        `
        details.innerHTML = detailsInfo;
    
     } 
     
     errorMeal = errorItem=>{
       result= document.getElementById("showSearch");
       result.innerHTML=`<h3>There is no item,please input a correct name </h3>`
     } 