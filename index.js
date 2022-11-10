

function encode(string) {
    let localString = '';

    const obj = {
        a: 1,
        e: 2,
        i: 3,
        o: 4,
        u: 5,
    }

    for (const vowel of string) {
        const x = obj[vowel]  ? obj[vowel] : vowel
        localString = localString + x
    }



    return localString
}


const stringValue = encode('hello')

