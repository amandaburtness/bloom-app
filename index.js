const dotenv = require("dotenv").config()
const express = require("express")
const app = express()
const port = process.env.PORT || 9000 // allow port to be dynamic by using environment variables and an other option 
const cors = require("cors")

app.use(cors())
app.use(express.json())


// .use covers all requests (put post, get, ext.)
app.use("/api/", (_, res) => { // underscore is a placeholder for req becuase request object is not going to be used in this function
  res.json({
    data: "API data served!" // here is where you can essentially put your own api stuff! build your own API!
  })
})

app.listen(port, () => {
  console.log(`server is on port ${port}`)
})






// apiKey = 9384893844
// dbpw = "abc123"

console.log('its alive ')
// console.log(__dirname)
// console.log(__filename)
// console.log(process.env.USER) // environment variables 
// console.log(process.env.APIKEY)
// console.log(process.env.PORT)
// console.log(process.env.DBPASS)


/////////////////////////////////////////////////

// Basic project from scratch:

// mkdir project-name
// cd project-name
// git init , npx gitignore node, and npm init -y
// Create EMPTY repo on github : https://www.awesomescreenshot.com/image/18203925?key=d753b07b3bab0307ebcb8660b33f2b5f
// Connect remote to origin, git remote add origin git@github.com:mrzacsmith/deploy-scratch-sample.git  https://www.awesomescreenshot.com/image/18203944?key=318ac9927ba26461f088f780a88fc91d
// confirm git remote -v and that should show the proper repo
// create index.js and write a line of code
// git push -u origin main

/////////////////////////////////////////////////