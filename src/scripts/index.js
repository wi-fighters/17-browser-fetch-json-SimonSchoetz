// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/
import { dataString } from "./data.js"
const recipes = JSON.parse(dataString);
// \/ All of your javascript should go here \/

for (let key in recipes) {
    const section = document.querySelector("#" + key)

    recipes[key].forEach(el => {
        //Get all elements from the objects
        const author = document.createTextNode(el.author)
        const title = document.createTextNode(el.title)
        const ingredients = el.ingredients
        const image = el.image

        //create html elements
        const article = document.createElement("article")
        const img = document.createElement("img")
        const h3 = document.createElement("h3")
        const pAuthor = document.createElement("p")
        const pIngr = document.createElement("p")

        //add content to the elements//create src attribute and add image links to it
        img.src = image
        pAuthor.append(author)
        h3.append(title)
        for (let j = 0; j < ingredients.length; j++) {
            if (j < ingredients.length - 1) {
                //write everything with a comma and space at the end
                pIngr.append(`${ingredients[j]}, `)
            } else {
                //except of the last one
                pIngr.append(ingredients[j])
            }
        }

        //append all elements
        section.append(article)
        article.append(img, h3, pAuthor, pIngr)
    })
}

