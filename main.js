// Function-check palindrome or not
let arr=[16,202,98,99,23,131,67];
let palindrome = [];
let notPalindrome = [];
let count=0;
document.write("Elements stored in the given array: "+arr);
document.write("<br>")
for(i=0;i<arr.length;i++){
    let a=arr[i], check=arr[i],c=0;
    while(a>0){
        let b = a%10;
        a=parseInt(a/10);
        c=c*10+b;
    }
    if(c==check){
        palindrome.push(check);
		count++;
    }
    else{
        notPalindrome.push(check);
    }
}
document.write("Number of palindrome in given array are: "+count);
document.write("<br>")
document.write("Palindrome in the given array are: "+palindrome);