require("dotenv").config();

// Print out value of API key stored in .env file
// console.log(process.env.API_KEY);



async function getImage(query){
    const endpoint =
      `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
   
      try{
        const response = await fetch(endpoint)
        //console.log(response);
        //.json() is used for objs, JSON.parse() is for strings
        const parsedRes =await response.json();
       
        console.log(parsedRes.data[0].url)

    }catch(err){
        console.log(err)
    }
}

getImage("cat")