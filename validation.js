function myValidation(){
    // let myValue = document.querySelector('myForm')
    let myValue = document.querySelector('myForm').value;

    if (isNaN(myValue) || myValue < 1 || myValue > 20){
        console.log('Not a Valid Input');
        
    }else{
        console.log('This input is OKAY');
        
    }
}