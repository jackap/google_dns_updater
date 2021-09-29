const axios = require('axios');


const username = process.env.USERNAME
const password = process.env.PASSWORD
const domain_name = process.env.DOMAIN



async function main(){

    const ip_response = await axios.get('https://api.ipify.org?format=json')
    const ip = ip_response.data.ip
    console.log(ip)
    const dns_url = `https://${username}:${password}@domains.google.com/nic/update?hostname=${domain_name}&myip=${ip}`
    const dns_response = await axios.post(dns_url)
    console.log(dns_response.data)

}

main().then(() => console.log("DONE"))