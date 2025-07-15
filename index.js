
const fs=require('fs');

const readStream= fs.createReadStream(`${__dirname}/text.txt`);
const writeStream= fs.createWriteStream(`${__dirname}/out.txt`);


 const data= readStream.on('data',(chunk)=>{

writeStream.write(chunk)



})

const buf = Buffer.from([104, 101, 108, 108, 111])



const str = "Hello,xx world!";
const base64 = Buffer.from(str).toString('utf-8');

console.log(base64); // "SGVsbG8sIHdvcmxkIQ=="