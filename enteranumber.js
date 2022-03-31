var read=require('readline-sync')
num1=read.question('enter two number')
num2=read.question('')
console.log( 'entered numbers are '+num1,num2)
if (num1>num2) {
    console.log('largest number is '+num1)
}else{
    console.log('largest number is '+num2)
}

