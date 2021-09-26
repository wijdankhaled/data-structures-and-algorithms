const repeatedWord =require('../hashmap-repeated-word');

describe('first repeated word ',()=>{
    it('should return first repeated word',()=>{
        let string="It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...";
        let expected="summer"
        expect(repeatedWord(string)).toEqual(expected);
    })
    it('return first repeated word regardless of cast (captel/small)',()=>{
        let string="It was a queer, sultry Summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...";
        let expected="summer"
        expect(repeatedWord(string)).toEqual(expected);
    })
    it('return null if there not repeated word ',()=>{
        let string="Once upon time, there was a brave princess who...";
        expect(repeatedWord(string)).toBeNull();
    })
})