var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
              , _p = "W5D80NFZHAYB8EUI2T649RT2MNRMVE2O";
function e1(e){
    if (null == e)
        return null;
    for (var t, n, r, o, i, a, u, s = "", c = 0; c < e.length; )
        o = (t = e.charCodeAt(c++)) >> 2,
        i = (3 & t) << 4 | (n = e.charCodeAt(c++)) >> 4,
        a = (15 & n) << 2 | (r = e.charCodeAt(c++)) >> 6,
        u = 63 & r,
        isNaN(n) ? a = u = 64 : isNaN(r) && (u = 64),
        s = s + _keyStr.charAt(o) + _keyStr.charAt(i) + _keyStr.charAt(a) + _keyStr.charAt(u);
    return s
}
function e2(e){
    if (null == (e = _u_e(e)))
        return null;
    for (var t = "", n = 0; n < e.length; n++) {
        var r = _p.charCodeAt(n % _p.length);
        t += String.fromCharCode(e.charCodeAt(n) ^ r)
    }
    return t
}

function _u_e(e) {
    if (null == e)
        return null;
    e = e.replace(/\r\n/g, "\n");
    for (var t = "", n = 0; n < e.length; n++) {
        var r = e.charCodeAt(n);
        r < 128 ? t += String.fromCharCode(r) : r > 127 && r < 2048 ? (t += String.fromCharCode(r >> 6 | 192),
        t += String.fromCharCode(63 & r | 128)) : (t += String.fromCharCode(r >> 12 | 224),
        t += String.fromCharCode(r >> 6 & 63 | 128),
        t += String.fromCharCode(63 & r | 128))
    }
    return t
}

function sig(e) {
    return md5(e + _p).toUpperCase()
}