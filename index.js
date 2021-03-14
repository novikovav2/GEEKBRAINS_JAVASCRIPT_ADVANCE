const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('./public'));
app.use(bodyParser.json());

app.get('/products/:page', (req, res) => {
    const page = req.params.page;
    fs.readFile(`./public/db/data${page}.json`, 'utf8', ((err, data) => {
        res.send(data);
    }))
})

app.post('/products', ((req, res) => {
    const filePath = './public/db/data3.json';
    fs.readFile(filePath, 'utf8', ((err, data) => {
        const dataList = JSON.parse(data || {});
        const list = dataList.data;
        const amountData = list[list.length - 1].id;
        const newID = '0000' +amountData + 1;


        const newProduct = req.body;
        newProduct.id = newID;
        newProduct.img = "/img/product1.png";
        list.push(newProduct);

        const newDataList = {};
        newDataList.data = list;

        fs.writeFile(filePath, JSON.stringify(newDataList), (err) => {
            if (err) {
                console.warn(err)
            }
            res.send(list);
        })
    }))
}))

app.get('/cart', (req, res) => {
    fs.readFile(`./public/db/cart.json`, 'utf8', ((err, data) => {
        res.send(data);
    }))
})

app.post('/cart', (((req, res) => {
    const filePath = './public/db/cart.json';
    const newCart = {"cart": req.body};
    fs.writeFile(filePath, JSON.stringify(newCart), (err) => {
        if (err) {
            console.warn(err)
        }
        res.send(newCart);
    })
})))

app.listen(3000, () => {
    console.log('Server started');
})
