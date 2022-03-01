//Get second largest number from array
let nums= [2,3,6,6,5];

function getSecondLargest(nums) {

   let biggest:[] = nums[0];
   let nextbiggest:[] = nums[0];
    for(let i=0;i<nums.length;i++){
        if(nums[i]>biggest){
            nextbiggest = biggest;
            biggest = nums[i];
        }
        else if(nums[i]>nextbiggest && nums[i]!=biggest)
            nextbiggest = nums[i];
    }
    
    return nextbiggest;
}
console.log(getSecondLargest(nums));