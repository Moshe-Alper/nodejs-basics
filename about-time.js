import ms from 'ms'

convertTime()

function convertTime() {
    console.log(ms(60000, { long: true }))
    console.log(ms(120000, { long: true }))
    console.log(ms(-23000, { long: true }))
}
