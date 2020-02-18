// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/
import { dataString } from "./data.js"
const recipes = JSON.parse(dataString);
// \/ All of your javascript should go here \/

const cakeSection = document.querySelector("#cakes")
recipes.cakes.forEach(el => {
    //Get all elements from the objects
    const author = document.createTextNode(el.author)
    const title = document.createTextNode(el.title)
    const ingredients = el.ingredients
    const image = el.image

    //create html elements
    const article = document.createElement("article")
    const img = document.createElement("img")
    const src = document.createAttribute("src")
    const h3 = document.createElement("h3")
    const pAuthor = document.createElement("p")
    const pIngr = document.createElement("p")

    //append all elements
    cakeSection.append(article)
    article.append(img)
    article.append(h3)
    article.append(pAuthor)
    article.append(pIngr)

    //add content to the elements
    //create src attribute and add image links to it
    src.value = image
    img.setAttributeNode(src)
    pAuthor.append(author)
    h3.append(title)
    ingredients.forEach(ingr => { pIngr.append(ingr) })

})
