$( document ).ready( onReady );

function onReady(){
    console.log( 'JQ' );
    $( '#getInfoButton' ).on( 'click', getInfo ); 
    $( '#infoOut' ).on( 'click', '#deleteButton', deleteRow );
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
    totalCost( employeeInfo );
    displayInfo( employeeInfo );
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
    if (monthlyCost > 20000) {
        $('#costOut').css("background-color", "red");
    }//end greater than 20k    
    el.append( `<p> Total Monthly: ${monthlyCost} <p>` ) 
}//end of totalCost

function displayInfo( info ){
    console.log( 'in displayInfo' );//Test
    //target ul by id
    let el = $( '#infoOut' );
    //empty ul
    el.empty();
    //loop through array
    for (let i=0; i<info.length; i++)
        el.append( `<tr> <td>${info[i].firstName}</td> <td>${info[i].lastName}</td> <td>${info[i].id}</td> <td>${info[i].title}</td> <td>${info[i].salary}</td> <td><button id="deleteButton" >Delete</button></td> </tr>` );
}// end of displayInfo

function deleteRow(){
    $(this).parent().parent().remove();
}