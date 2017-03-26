function solve(arr)
{
    let nums =arr[0].split(' ').map(Number);


        console.log(
            checkForSum(nums[0],nums[1],nums[2])||
            checkForSum(nums[0],nums[2],nums[1])||
            checkForSum(nums[1],nums[2],nums[0])|| 'No');

      function checkForSum(first,second ,sum)
      {
        if (first+second !== sum)
        {
            return false;
        }

        if (first>second)
        {
            [first,second]=[second,first]
        }
        return `${first} + ${second} = ${sum}`;
      }
}

