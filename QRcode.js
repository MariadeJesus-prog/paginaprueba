var url = window.location;

// Obtener parámetros QRW y QRH
var QRWValue = getUrlParameter("QRW");
var QRHValue = getUrlParameter("QRH");

// Determinar si la URL es HTTP o HTTPS y crear el iframe apropiado
if (url.protocol === "http:") {
    document.write("<iframe id='Iframe1' src='http://dunsregistered.dnb.com/SealAuthentication.aspx?Cid=1&QR=1&QRW=" + QRWValue + "&QRH=" + QRHValue + "' frameborder='0' scrolling='no' allowtransparency='true'></iframe>");
} else {
    document.write("<iframe id='Iframe1' src='https://dunsregistered.dnb.com/SealAuthentication.aspx?Cid=1&QR=1&QRW=" + QRWValue + "&QRH=" + QRHValue + "' frameborder='0' scrolling='no' allowtransparency='true'></iframe>");
}

// Función para obtener parámetros de la URL
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(window.location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}
