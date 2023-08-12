//import { goto } from '$app/navigation';
import LibCookie from '$lib/LibCookie';
import LibConfig from '$lib/LibConfig';

/**
 *
 * @param
 *
 * @return
 *  false: OK
 */ 
const validContainPath = function (pathname: string) {
    let ret = false;
    let idxFirst = 0;
    let searchTerm = "/admin";
    idxFirst = pathname.indexOf(searchTerm);
    if(idxFirst >= 0) {
        return ret
    }
    ret = true;
    return ret;
}
//
export async function load({ params, url }) {
//console.log("#+layout.ts");
console.log("pathname=", url.pathname);
    const valid = validContainPath(url.pathname);
//console.log("valid=", valid);
    let checkAuth = false;
    if(!(
        url.pathname === '/login' ||
        url.pathname === '/user/create' ||
        url.pathname === '/'
    )) 
    {
        checkAuth = true;
    }
    if(checkAuth && !valid) 
    {
        if(typeof(window) !== "undefined") {
//console.log("check_auth=");
            const key = LibConfig.COOKIE_KEY_USER;
            const auth = LibCookie.get_cookie(key);
            //console.log(key, auth);
            if(typeof auth === "undefined" || auth === null) {
                window.location.href = '/login';
            }
        }
    }
    return {
        items: []
    };
}