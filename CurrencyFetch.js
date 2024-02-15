const BASEURL = 'https://api.exchangeratesapi.io/v1/';


export default function CurrencyApi(){
    const res = fetch('BASEURL', {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    }).then((res) => res.json())

    console.log({res})

    return res
}
