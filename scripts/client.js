$( document ).ready( onReady );

function onReady(){
    console.log( 'JQ' );
    $( '#getInfoButton' ).on( 'click', getInfo ); 
}//end of onReady

let employeeInfo = [];

function getInfo () {
    //console.log( 'clicked getInfoButton' );//TEST dont need anymore
    const fName = $( '#fNameIn' ).val();
    const lName = $( '#lNameIn' ).val();
    const id = $( '#idIn').val();
    const title = $( '#titleIn').val();
    const salary = $( '#salaryIn').val();
    let employee = {
        firstName: fName,
        lastName: lName,
        id: id,
        title: title,
        salary: Number(salary)
    }//end of employeeObject
    employeeInfo.push( employee );
    console.log( employeeInfo );
    clear();
    console.log(totalCost( employeeInfo ));
}//end getInfo

function clear() {
    $( '#fNameIn' ).val('');
    $( '#lNameIn' ).val('');
    $( '#idIn' ).val('');
    $( '#titleIn' ).val('');
    $( '#salaryIn' ).val('');
}//end clear

function totalCost( array ) {
    let cost = 0;
    for (let i=0; i<array.length; i++ ) {
        cost += array[i].salary;
    }//end of for loop
    let monthlyCost = cost/12;
    return monthlyCost; 
}