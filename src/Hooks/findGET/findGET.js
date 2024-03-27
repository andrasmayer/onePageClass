export const findGET = () =>{
    const $_GET = [];
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(a,name,value){$_GET[name]=value;});
    return $_GET
}