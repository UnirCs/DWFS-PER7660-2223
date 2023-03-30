function validarInput(elementId, elementType) {
    
    var swError = false;


    if (elementType == "text") {

        let element = $("#" + elementId);
        if (element.val() == "") {
            element.css({ "border": "solid 1px red" });
            element.change();
            swError = true;
        } else {
            element.css({ "border": "solid 1px #CCC" });
            element.change();
        }

    }

    return swError;
}

function setFormat(obj, e, type) {

    let cadena = obj.value;
    let swOK = false;

    if (type == "entero") {
        // Permito Enter
        if (e.keyCode == 13) { swOK = true; }

        // Dígitos del 0 al 9
        if ((e.keyCode < 48 || e.keyCode > 57) && !swOK) {
            return false;
        }
    }
}

function validateFormat(obj, type) {

    let cadena = obj.value;

    if (obj.value.length == 0) { return false; }

    if (type == "entero") {

        if (isNaN(cadena)) {
            alert("DIGITE UN N\u00DAMERO ENTERO V\u00C1LIDO");
            obj.value = "";
            return false;
        }
    }
}

function aplicarFormato() {

    $(".entero").each(function () {

        $(this).on("keypress", function (e) {
            return setFormat(this, e, "entero");
        });
        $(this).on("blur", function () {
            return validateFormat(this, "entero");
        });

    });

}



function swal(pTitle, pMessage, pIcon, pFunction) {

    let pIconColor;
    if (pIcon == "success") {
        pIconColor = "#28a745";
    }
    else if (pIcon == "error") {
        pIconColor = "#dc3545";
    }
    else if (pIcon == "warning") {
        pIconColor = "#ffc107";
    }

    Swal.fire({
        title: pTitle,
        text: pMessage,
        //icon: pIcon,
        iconColor: pIconColor,
        confirmButtonColor: "#17a2b8",
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false
    }).then((result) => {
        if (result.isConfirmed && pFunction != undefined) {
            pFunction();
        }
    });
}