import {Magika} from 'magika'

const magika = new Magika()
await magika.load()
const $ = document.querySelector.bind(document)

async function test() {
    const file_input = $('input')
    const file = file_input.files[0]
    const prediction = await magika.identifyBytesFull(new Uint8Array(await file.arrayBuffer()))
    console.log(prediction)
}
window.test=test
console.log(document.readyState)
