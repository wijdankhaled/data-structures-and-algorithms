let array=[ [1, 2, 3], [3, 5, 7], [1, 7, 10] ]
let sumFun =(arr)=>{
  let newarray=[]
  let sum =0
  for(let i=0;i<arr.length;i++){
    sum=0
    for (let j=0;j<arr[i].length;j++)
    sum+=array[i][j]
    newarray.push(sum)
  }
  return newarray
}


