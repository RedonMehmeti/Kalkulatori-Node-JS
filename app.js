// const express = require('express');
// const app = express();
// const path = require('path');

// // Na kena me bo GET
// // localhost:porta/add?num1=5&num2=3
// // serverijon.com/path?key1=value&key2=value

// // {
//     //   nume1: 5,
//     //   nume2: 3
// // }

// // add path i jon.

// app.get('/', (req,res) => {
//     res.sendFile(path.join(__dirname, 'index.html'))
// })

// app.get('/add', (req,res) => {
//     const num1 = parseFloat(req.query.num1)
//     const num2 = parseFloat(req.query.num2)
//     switch(operator){
//         case '+':
//             result = num1 + num2;
//             break;
//     }
//     const result = num1 + num2;

//     switch(operator){
//         case '-':
//             result = num1 - num2;
//             break;
//     }
  




//     res.send(`Rezultati: ${result}`);

// });

// app.listen(3000, () => {
//     console.log("Serveri eshte online ne porten 3000")
        
// })




const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/add', (req, res) => {
    const numer1 = parseFloat(req.query.num1);
    const numer2 = parseFloat(req.query.num2);
    const operatori = req.query.operatori;
    let result;

    switch (operatori) {
        case '+':
            result = numer1 + numer2;
            break;
        case '-':
            result = numer1 - numer2;
            break;
        case '*':
            result = numer1 * numer2;
            break;
        case '/':
            if (numer2 !== 0) {
                result = numer1 / numer2;
            } else {
                return res.send('Error: Division by zero');
            }
            break;
        default:
            return res.send('Error: Invalid operator');
    }

    res.send(`Result: ${result}`);
});

app.listen(2014, () => {
    console.log("Server is online on port 2014");
});
