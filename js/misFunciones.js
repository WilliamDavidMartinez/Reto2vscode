/********************************* *
** funciones CRUD Cliente
***********************************/
function traerInformacionCliente(){
    $.ajax({
        url:"https://g5b16b7ac5036a0-db202109301457.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
        type:"GET",
        datatype: "JSON",
        success: function(respuesta){
            console.log(respuesta);
            respuestaCliente(respuesta.items);
        }
    });

}

function respuestaCliente(items){
    let myTable="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+" </td>";
        myTable+="<td>"+items[i].name+" </td>";
        myTable+="<td>"+items[i].email+" </td>";
        myTable+="<td>"+items[i].age+" </td>";
        myTable+="<td> <button onclick='borrarElementoCliente("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado").append(myTable);
}

function guardarInformacionCliente(){
    let myData={
        id:$("#id").val(),
        name:$("#name").val(),
        email:$("#email").val(),
        age:$("#age").val()
    };
    let dataToSent=JSON.stringify(myData);
    $.ajax({
        url:"https://g5b16b7ac5036a0-db202109301457.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
        type:"POST",
        data:myData,
        datatype: "JSON",
        success: function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            traerInformacionCliente();
            alert("Se ha guardado el registro")
            
        }

    });
}

function borrarElementoCliente(idElemento){
    let myData={
        id:idElemento
    }
    let dataToSent=JSON.stringify(myData);
    $.ajax({
        url:"https://g5b16b7ac5036a0-db202109301457.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
        type:"DELETE",
        data:dataToSent,
        contentType:"application/JSON",
        datatype: "JSON",
        success: function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            traerInformacionCliente();
            alert("Se ha eliminado el registro")
            
        }

    });
}

function actualizarInformacionCliente(){
    let myData={
        id:$("#id").val(),
        name:$("#name").val(),
        email:$("#email").val(),
        age:$("#age").val()
    };
    let dataToSent=JSON.stringify(myData);
    $.ajax({
        url:"https://g5b16b7ac5036a0-db202109301457.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
        type:"PUT",
        data:dataToSent,
        contentType:"application/JSON",
        datatype: "JSON",
        success: function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            traerInformacionCliente();
            alert("Se ha actualizado el registro");
            
        }

    });
}
/********************************* *
** funciones CRUD Mensaje
***********************************/
function traerInformacionMensaje(){
    $.ajax({
        url:"https://g5b16b7ac5036a0-db202109301457.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
        type:"GET",
        datatype: "JSON",
        success: function(respuesta){
            console.log(respuesta);
            respuestaMensaje(respuesta.items);
        }
    });

}

function respuestaMensaje(items){
    let myTable="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+" </td>";
        myTable+="<td>"+items[i].messagetext+" </td>";
        myTable+="<td> <button onclick='borrarElementoMensaje("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado").append(myTable);
}

function guardarInformacionMensaje(){
    let myData={
        id:$("#id").val(),
        messagetext:$("#messagetext").val()    
    };
    let dataToSent=JSON.stringify(myData);
    $.ajax({
        url:"https://g5b16b7ac5036a0-db202109301457.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
        type:"POST",
        data:myData,
        datatype: "JSON",
        success: function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#messagetext").val("");
            traerInformacionMensaje();
            alert("Se ha guardado el mensaje")
            
        }

    });
}

function borrarElementoMensaje(idElemento){
    let myData={
        id:idElemento
    }
    let dataToSent=JSON.stringify(myData);
    $.ajax({
        url:"https://g5b16b7ac5036a0-db202109301457.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
        type:"DELETE",
        data:dataToSent,
        contentType:"application/JSON",
        datatype: "JSON",
        success: function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#messagetext").val("");
            traerInformacionMensaje();
            alert("Se ha borrado el mensaje")
            
        }

    });
}

function actualizarInformacionMensaje(){
    let myData={
        id:$("#id").val(),
        messagetext:$("#messagetext").val()    
    };
    let dataToSent=JSON.stringify(myData);
    $.ajax({
        url:"https://g5b16b7ac5036a0-db202109301457.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
        type:"PUT",
        data:dataToSent,
        contentType:"application/JSON",
        datatype: "JSON",
        success: function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#messagetext").val("");
            traerInformacionMensaje();
            alert("Se ha actualizado el mensaje")
            
        }

    });
}

/********************************* *
** funciones CRUD Juegos
***********************************/
function traerInformacionJuego(){
    $.ajax({
        url:"https://g5b16b7ac5036a0-db202109301457.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/games/games",
        type:"GET",
        datatype: "JSON",
        success: function(respuesta){
            console.log(respuesta);
            respuestaJuego(respuesta.items);
        }
    });

}

function respuestaJuego(items){
    let myTable="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+" </td>";
        myTable+="<td>"+items[i].developer+" </td>";
        myTable+="<td>"+items[i].minage+" </td>";
        myTable+="<td>"+items[i].category_id+" </td>";
        myTable+="<td>"+items[i].name+" </td>";
        myTable+="<td> <button onclick='borrarElementoJuego("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado").append(myTable);
}

function guardarInformacionJuego(){
    let myData={
        id:$("#id").val(),
        developer:$("#developer").val(),
        minage:$("#minage").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val()
    };
    let dataToSent=JSON.stringify(myData);
    $.ajax({
        url:"https://g5b16b7ac5036a0-db202109301457.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/games/games",
        type:"POST",
        data:myData,
        datatype: "JSON",
        success: function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#developer").val("");
            $("#minage").val("");
            $("#category_id").val("");
            $("#name").val("");
            traerInformacionJuego();
            alert("Se ha guardado el Juego")
            
        }

    });
}

function borrarElementoJuego(idElemento){
    let myData={
        id:idElemento
    }
    let dataToSent=JSON.stringify(myData);
    $.ajax({
        url:"https://g5b16b7ac5036a0-db202109301457.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/games/games",
        type:"DELETE",
        data:dataToSent,
        contentType:"application/JSON",
        datatype: "JSON",
        success: function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#developer").val("");
            $("#minage").val("");
            $("#category_id").val("");
            $("#name").val("");
            traerInformacionJuego();
            alert("Se ha borrado el juego")
            
        }

    });
}

function actualizarInformacionJuego(){
    let myData={
        id:$("#id").val(),
        developer:$("#developer").val(),
        minage:$("#minage").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val()
    };
    let dataToSent=JSON.stringify(myData);
    $.ajax({
        url:"https://g5b16b7ac5036a0-db202109301457.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/games/games",
        type:"PUT",
        data:dataToSent,
        contentType:"application/JSON",
        datatype: "JSON",
        success: function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#developer").val("");
            $("#minage").val("");
            $("#category_id").val("");
            $("#name").val("");
            traerInformacionJuego();
            alert("Se ha actualizado el juego")
            
        }

    });
}