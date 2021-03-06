$( document ).ready( onReady );

function onReady(){
    console.log( 'JQ' );
    $( '#getInfoButton' ).on( 'click', getInfo ); 
}//end of onReady

let employeeInfo = [];

function getInfo () {
    //console.log( 'clicked getInfoButton' );//TEST dont need anymore
    let employee = {
        firstName: $( '#fNameIn' ).val(),
        lastName: $( '#lNameIn' ).val(),
        id: $( '#idIn' ).val(),
        title: $( '#titleIn' ).val(),
        salary: Number($( '#salaryIn' ).val() )
    }//end of employeeObject
    employeeInfo.push( employee );
    console.log( employeeInfo );//Test
    console.log(totalCost( employeeInfo ));//Test
    displayInfo( employeeInfo );
    totalCost( employeeInfo );
    //empty text input
    clear();
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
    let el = $ ( '#costOut' );
    //empty tag
    el.empty();
    //append
    el.append( `<h4> ${monthlyCost} </h4>` ) 
}//end of totalCost

function displayInfo( info ){
    console.log( 'in displayInfo' );//Test
    //target ul by id
    let el = $( '#infoOut' );
    //empty ul
    el.empty();
    //loop through array
    for (let i=0; i<info.length; i++)
        el.append( `<li> ${info[i].firstName} ${info[i].lastName} ${info[i].id} ${info[i].title} ${info[i].salary} </li>` );
}// end of displayInfo