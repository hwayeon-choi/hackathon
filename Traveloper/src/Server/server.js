const express = require('express')
const cors = require('cors');
const app = express()

const localJSON = require('../DB/data.json')
const locationData = localJSON.map((data)=> data)

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(cors())

app.get('/api/locationdata', (req,res)=> {
  res.json(locationData);
})

app.post('/api/locationdata', (req,res)=> {
  const {place_detail_id,region,city,place_type,company_name,call_num,_address,open_time,homepage,parking,wifi,reservation,dog_type} = req.body;
  
  locationData.push({
    place_detail_id,
    region,
    city,
    place_type,
    company_name,
    call_num,
    _address,
    open_time,
    homepage,
    parking,
    wifi,
    reservation,
    dog_type
  });
  return res.send("업데이트 완료")
})

app.listen(4000, ()=> {
  console.log("server is running on 4000")
})