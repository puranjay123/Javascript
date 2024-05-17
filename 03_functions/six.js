const coding = ["js","ruby","java","python","cpp"]
// coding.forEach((item)  )
const mynums = [1,2,3,4,5,6,7,8,9]
// const newNums = mynums.filter((num) => num>4)
// console.log(newNums);
const newNums = []
mynums.forEach((nums) => {
    if(nums>4){
        newNums.push(nums)
    }
})
console.log(newNums);