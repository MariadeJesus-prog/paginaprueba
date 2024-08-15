var url = ventana.ubicacion;
//var x = url.indexOf("https://");
var QRWValue = getUrlParameter("QRW");
var QRHValue = getUrlParameter("QRH");
si (url.protocolo == "http:") {

    documento.write("<iframe id='Iframe1' src='http://dunsregistered.dnb.com/SealAuthentication.aspx?Cid=1&QR=1&QRW=" + QRWValue + "&QRH=" + QRHValue + "' frameborder='0' scrolling='no' allowtransparency='true' ></iframe>");
}
demás {
    documento.write("<iframe id='Iframe1' src='https://dunsregistered.dnb.com/SealAuthentication.aspx?Cid=1&QR=1&QRW=" + QRWValue + "&QRH=" + QRHValue + "' frameborder='0' scrolling='no' allowtransparency='true' ></iframe>");

}
función getUrlParameter(nombre) {
    nombre = nombre.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + nombre + '=([^&#]*)');
    var resultados = regex.exec(document.currentScript.src);
    devolver resultados === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};