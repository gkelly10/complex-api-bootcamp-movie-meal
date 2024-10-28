document.querySelector('#pressThisButton').addEventListener('click', movieOfTheDay)
     

    function movieOfTheDay(){
        const userInput=document.querySelector('input').value
    //   const url = `http://www.omdbapi.com/?i=tt3896198&apikey=a14cb033`
      const url = `http://www.omdbapi.com/?t=${userInput}&apikey=`

       fetch(url) 
    .then(res => res.json()) // parse response as JSON 
    .then(data => { 
      
      console.log(data)
      console.log(data.Title)
      console.log(data.Genre)
      console.log(data.Plot)
      console.log(data.Poster) 
      
      
    

      document.querySelector('.movietitle').innerText=data.Title
      document.querySelector('#movieGenre').innerText=data.Genre
      document.querySelector('#moviePlot').innerText=data.Plot
      document.querySelector('img').src = data.Poster

mealOfTheDay()
      function mealOfTheDay(){
      
        // const userInput=document.querySelector('input').value
      
        const url = `https://www.themealdb.com/api/json/v1/1/random.php`
  
         fetch(url) 
      .then(res => res.json()) // parse response as JSON 
      .then(data => { 
  
        
        console.log(data) 
        console.log(data.meals[0].strMeal)
        console.log(data.meals[0].strArea)
        console.log(data.meals[0].strCategory)
        console.log(data.meals[0].strSource)
        console.log(data.meals[0].strMealThumb)

        document.querySelector('.mealTitle').innerText=data.meals[0].strMeal
        document.querySelector('#mealArea').innerText=data.meals[0].strArea
        document.querySelector('#mealCategory').innerText=data.meals[0].strCategory
        document.querySelector('#mealSource').innerText=data.meals[0].strSource
        document.querySelector('#mealPic').src=data.meals[0].strMealThumb
      
  
       }) 
      //  func for in case of errors
      .catch(err => { 
          console.log(`error ${err}`) 
      });
  
      }
  
      
     }) 
    
    .catch(err => { 
        console.log(`error ${err}`) 
    });

    } 