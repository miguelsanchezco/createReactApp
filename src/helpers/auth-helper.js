const TOKEN = "TOKEN";
const NAME = "NAME";
const ROL = "ROL"

export function setToken(token){
    localStorage.setItem(TOKEN,token);
}
export function setName(name){
    localStorage.setItem(NAME,name);
}

export function setRol(rol){
    localStorage.setItem(ROL,rol);
}

export function getToken(){
    return localStorage.getItem(TOKEN);
}
export function getName(){
    return localStorage.getItem(NAME);
}
export function getRol(){
    return localStorage.getItem(ROL);
}

export function deleteToken(){
    localStorage.deleteItem(ROL);
    localStorage.deleteItem(TOKEN);
    localStorage.deleteItem(NAME);
}

