(function(){
/*
    var aa = encodeURIComponent,
        f = window,
        n = Math;
*/
    
    // 將 b link 設定到 a object 的 href 屬性
    // function Pc(a,b){
    function set_href(a,b){
        return a.href = b
    }
    
/*
    var Qc = "replace",
        q = "data",
        m = "match",
        xc = "send",
        ja = "port",
        u = "createElement",
        id = "setAttribute",
        da = "getTime",
        A = "split",
        B = "location",
        ra = "hasOwnProperty",
        ma = "hostname",
        ga = "search",
        E = "protocol",
        Ab = "href",
        kd = "action",
        G = "apply",
        p = "push",
        h = "hash",
        pa = "test",
        ha = "slice",
        r = "cookie",
        t = "indexOf",
        ia = "defaultValue",
        v = "name",
        y = "length",
        Ga = "sendBeacon",
        z = "prototype",
        la = "clientWidth",
        jd = "target",
        C = "call",
        na = "clientHeight",
        F = "substring",
        oa = "navigator",
        H = "join",
        I = "toLowerCase";
*/
    
    var $c = function(a){
        this.w = a || []
    };
    
    // $c[z].set = function(a){
    $c["prototype"].set = function(a){
        this.w[a] = true
    };
    
    // $c[z].encode = function(){
    $c["prototype"].encode = function(){
        // for (var a = [], b = 0; b < this.w[y]; b++ ) {
        for (var a = [], b = 0; b < this.w["length"]; b++ ) {
            // this.w[b] && (a[Math.floor(b / 6)] = a[Math.floor(b / 6)] ^ 1 << b % 6);
            if (this.w[b]) {
                a[Math.floor(b / 6)] = a[Math.floor(b / 6)] ^ 1 << b % 6;
            }
            
            // for (b = 0; b < a[y]; b++)
            for (b = 0; b < a["length"]; b++) {
                a[b] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[b] || 0);
            }
        }
        
        // return a[H]("") + "~"
        return a["join"]("") + "~"
    };
    
    var vd = new $c;
    
    function J(a) {
        vd.set(a)
    }
    
    var Nd = function(a,b) {
        var c = new $c(Dd(a));
        
        c.set(b);
        
        // a.set(Gd, c.w)
        a.set("_um", c.w)
    // },
    };
    
    // Td = function(a) {
    var Td = function(a) {
        // a = Dd(a);
        // a = new $c(a);
        a = new $c(Dd(a));
        
        // for(var b = vd.w[ha](), c = 0; c < a.w[y]; c++)
        for (var b = vd.w["slice"](), c = 0; c < a.w["length"]; c++) {
            b[c] = b[c] || a.w[c]; // boolean 運算
        }
        
        return (new $c(b)).encode()
    // },
    };
    
    // Dd = function(a) {
    var Dd = function(a) {
        // a = a.get(Gd);
        a = a.get("_um");
        
        // ka(a) || (a=[]);
        if ( ! is_array(a)) {
            a = [];
        }
        
        return a
    };
    
    // 檢查 inpur a 是否為 function
    // var ea = function(a) {
    var is_function = function(a) {
        return ("function" == typeof a)
    // },
    };
    
    // 檢查 input a 是否為 array
    // ka = function(a) {
    var is_array = function(a) {
        // return "[object Array]" == Object[z].toString[C](Object(a))
        return ("[object Array]" == Object["prototype"].toString["call"](Object(a)))
    // },
    };
    
    // 檢查 input a 是否為 string
    // qa = function(a){
    var is_string = function(a){
        // return void 0 != a && -1 < (a.constructor + "")[t]("String")
        return ((undefined != a) && (-1 < (a.constructor + "")["indexOf"]("String")))
    // },
    };
    
    // 檢查 input string b 是否為 a 的開頭
    // D = function(a, b) {
    var is_start_with = function(a, b) {
        // return 0 == a[t](b)
        return (0 == a["indexOf"](b))
    // },
    };
    
    // 過濾 input string a 的開頭與結尾的 \s 或是 \xa0 ( BOM 檔頭 )
    // sa = function(a) {
    var filter_space = function(a) {
        // return a ? a[Qc](/^[\s\xa0]+|[\s\xa0]+$/g, "") : ""
        if (a) {
            return a["replace"](/^[\s\xa0]+|[\s\xa0]+$/g, "");
        }
        
        return "";
    // },
    };
    
    // 建立 1x1 的 DOM img 物件
    // ta = function(a){
    var create_DOM_img = function(a){
        // var b = M[u]("img");
        var b = document["createElement"]("img");
        
        b.width = 1;
        b.height = 1;
        b.src = a;
        
        return b
    // },
    };
    
    // ua = function(){},
    var ua = function(){};
    
    // 如果有 encodeURIComponent()，則將 input string 轉換成 UTF-8 編碼
    // K = function(a) {
    var trans_UTF8 = function(a) {
        // if (aa instanceof Function)
        if (encodeURIComponent instanceof Function) {
            // return aa(a);
            return encodeURIComponent(a);
        }
        
        J(28);
        
        return a
    // },
    };
    
    // 動態掛載事件 ( 相容 DOM / DOM2 )
    // DOM => addEventListener(event, function, capture/bubble)
    // DOM2 => attachEvent(event, function)
    // L = function(a, b, c, d) {
    var add_DOM_event = function(target, event, call_function, capture_status) {
        try {
            // a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
            if (target.addEventListener) {
                target.addEventListener(event, call_function, !!capture_status); // if 'undefined' === typeof capture_status, !!capture_status = false
            } esle if (target.attachEvent) {
                target.attachEvent("on" + event, call_function);
            }
        } catch(e) {
            J(27)
        }
    // },
    };
    
    // 動態插入引用的 Javascript Source
    // wa = function(a, b) {
    var insert_js_include = function(target_url, target_id) {
        // if (a) {
        if (target_url) {
            // var c = M[u]("script");
            var c = document["createElement"]("script");
            
            c.type = "text/javascript";
            
            // c.async = !0;
            c.async = true;
            
            // c.src = a;
            c.src = target_url;
            
            // b && (c.id = b);
            if (target_id) {
                c.id = target_id;
            }
            
            // var d = M.getElementsByTagName("script")[0];
            var d = document.getElementsByTagName("script")[0];
            
            d.parentNode.insertBefore(c, d)
        }
    // },
    };
    
    // 檢查是否為 https 連線
    // Ud = function() {
    var is_https = function() {
        // return "https:" == M[B][E]
        return "https:" == document["location"]["protocol"]
    // },
    };
    
    // 取出主要域名
    // xa = function() {
    var get_main_domain = function() {
        // var a = "" + M[B][ma];
        var a = "" + document["location"]["hostname"];
        
        // return 0 == a[t]("www.") ? a[F](4) : a
        if (0 == a["indexOf"]("www.")) {
            return a["substring"](4);
        }
        
        return a;
    // },
    };
    
    // ya = function(a) {
    var get_valid_referrer_url = function(a) {
        // var b = M.referrer;
        var referrer_url = document.referrer;
        
        // if (/^https?:\/\//i[pa](b)) {
        if (/^https?:\/\//i["test"](referrer_url)) {
            if (a) {
                // return b
                return referrer_url;
            }
            
            // a = "//" + M[B][ma];
            a = "//" + document["location"]["hostname"];
            
            // var c = b[t](a);
            var c = referrer_url["indexOf"](a);
            
            if (5 == c || 6 == c) {
                // if (a = b.charAt(c + a[y]), "/" == a || "?" == a || "" == a || ":" == a)
                if (a = referrer_url.charAt(c + a["length"]), "/" == a || "?" == a || "" == a || ":" == a) {
                    return;
                }
            }
            
            // return b
            return referrer_url;
        }
    // },
    };
    
    // za = function(a, b) {
    var za = function(a, b) {
        // if (1 == b[y] && null != b[0] && "object" === typeof b[0])
        if (1 == b["length"] && null != b[0] && "object" === typeof b[0]) {
            return b[0];
        }
        
        // for (var c = {}, d = n.min(a[y] + 1, b[y]), e = 0; e < d; e++)
        for (var c = {}, d = Math.min(a["length"] + 1, b["length"]), e = 0; e < d; e++) {
            // if ("object" === typeof b[e]){
            if ("object" === typeof b[e]) {
                // for (var g in b[e])
                for (var g in b[e]) {
                    // b[e][ra](g) && (c[g] = b[e][g]);
                    b[e]["hasOwnProperty"](g) && (c[g] = b[e][g]);
                }
                
                break
            } else {
                // e < a[y] && (c[a[e]] = b[e]);
                e < a["length"] && (c[a[e]] = b[e]);
            }
        }
        
        return c
    };
    
    var ee = function() {
        this.keys=[];
        this.values={};
        this.m={}
    };
    
    // ee[z].set = function(a, b, c) {
    ee["prototype"].set = function(property_name, property, is_property) {
        // this.keys[p](a);
        this.keys["push"](property_name);
        
        // c ? this.m[":" + a] = b : this.values[":" + a] = b
        if (is_property) {
            this.m[":" + property_name] = property;
        } else {
            this.values[":" + property_name] = property;
        }
    };
    
    // ee[z].get = function(a) {
    ee["prototype"].get = function(property_name) {
        // return this.m[ra](":" + a) ? this.m[":" + a] : this.values[":" + a]
        if (this.m["hasOwnProperty"](":" + property_name)) {
            return this.m[":" + property_name];
        }
        
        return this.values[":" + property_name];
    };
    
    // ee[z].map = function(a) {
    ee["prototype"].map = function(a) {
        // for(var b = 0; b < this.keys[y]; b++) {
        for (var index = 0; index < this.keys["length"]; index++) {
            var property_name = this.keys[index];
            var property = this.get(property_name);
            
            // d && a(c,d)
            if (property) {
                a(property_name, property);
            }
        }
    };
    
    // var O = f,
//    var O = window;
    // M = document,
//    var M = document;
    
    // Mc = function() {
    var Mc = function() {
        // for(var a = O[oa].userAgent + (M[r] ? M[r] : "") + (M.referrer ? M.referrer : ""), b = a[y], c = O.history[y]; 0 < c; )
        for (var a = window["navigator"].userAgent + (document["cookie"] ? document["cookie"] : "") + (document.referrer ? document.referrer : ""), b = a["length"], c = window.history["length"]; 0 < c; ) {
            a += c-- ^ b++;
        }
        
        // return La(a)
        return domain_hash(a)
    };
    
    var Aa = function(a) {
        // var b = O._gaUserPrefs;
        var b = window._gaUserPrefs;
        
        // if (b && b.ioo && b.ioo() || a && !0 === O["ga-disable-" + a])
        if (b && b.ioo && b.ioo() || a && true === window["ga-disable-" + a]) {
            // return !0;
            return true;
        }
        
        try {
            // var c = O.external;
            var c = window.external;
            
            if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) {
                // return !0
                return true
            }
        } catch(d) {}
        
        // return !1
        return false
    };
    
    // var Ca = function(a) {
    var get_cookie_by_input = function(a) {
        // var b = [],
        var b = [];
        
        // c = M[r][A](";");
        var c = document["cookie"]["split"](";");
        
        // a = new RegExp("^\\s*" + a + "=\\s*(.*?)\\s*$");
        a = new RegExp("^\\s*" + a + "=\\s*(.*?)\\s*$");
        
        // for (var d = 0; d < c[y]; d++) {
        for (var d = 0; d < c["length"]; d++) {
            // var e = c[d][m](a);
            var e = c["data"]["match"](a);
            
            // e && b[p](e[1])
            if (e) {
                b["push"](e[1]);
            }
        }
        
        return b;
    };
    
    // zc = function(a, b, c, d, e, g) {
    var zc = function(a, b, c, d, e, g) {
        // e = Aa(e) ? !1 : eb[pa](M[B][ma]) || "/" == c && vc[pa](d) ? !1 : !0;
        if (Aa(e)) {
            e = false;
        } else {
            if (
                eb["test"](document["location"]["hostname"]) ||
                (
                    ("/" == c) &&
                    vc["test"](d)
                )
            ) {
                e = false;
            } else {
                e = true;
            }
        }
        
        if (!e) {
            // return !1;
            return false;
        }
        
        // b && 1200 < b[y] && (b = b[F](0, 1200), J(24));
        if (b && 1200 < b["length"]) {
            b = b["substring"](0, 1200);
            J(24);
        }
        
        c = a + "=" + b + "; path=" + c + "; ";
        
        // g && (c += "expires=" + (new Date((new Date)[da]() + g)).toGMTString() + "; ");
        if (g) {
            c += "expires=";
            c += (new Date((new Date)["getTime"]() + g)).toGMTString();
            c += "; ";
        }
        
        // d && "none" != d && (c += "domain=" + d + ";");
        if (d && "none" != d) {
            c += "domain=" + d + ";";
        }
        
        // d = M[r];
        d = document["cookie"];
        
        // M.cookie = c;
        document.cookie = c;
        
        // if (!(d = d != M[r]))
        if (d != document["cookie"]) {
            d = false;
        } else {
            d = true;
        }
        
        if ( ! d) {
            t : {
                // a = Ca(a);
                a = get_cookie_by_input(a);
                
                // for (d = 0; d < a[y]; d++)
                for (d = 0; d < a["length"]; d++) {
                    if (b == a[d]) {
                        // d = !0;
                        d = true;
                        break t
                    }
                }
                
                // d = !1
                d = false
            }
        }
        
        return d
    // },
    };
    
    // Encoding utility '(' & ')'
    // Cc = function(a) {
    var encoding_parenthesis = function(a) {
        return trans_UTF8(a)["replace"](/\(/g, "%28")["replace"](/\)/g, "%29")
    // },
    };
    
    // vc = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    var vc = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/;
    
    // eb = /(^|\.)doubleclick\.net$/i;
    var eb = /(^|\.)doubleclick\.net$/i;
    
    // var oc = function() {
    var get_ga_domain = function() {
        // return (Ba || is_https() ? "https:" : "http:") + "//www.google-analytics.com"
        if (is_use_SSL || is_https()) {
            return "https://www.google-analytics.com"
        }
        
        return "http://www.google-analytics.com"
    // },
    };
    
    // Da = function(a) {
    var Da = function(a) {
        this.name = "len";
        this.message = a + "-8192"
    // },
    };
    
    // wc = function(a, b, c) {
    var wc = function(a, b, c) {
        // var d = ta(a + "?" + b);
        var d = create_DOM_img(a + "?" + b);
        
        d.onload = d.onerror = function() {
            d.onload = null;
            d.onerror = null;
            c()
        }
    // },
    };
    
    // xd = function(a, b, c) {
    var xd = function(a, b, c) {
        var d;
        
        // d = O.XDomainRequest;
        d = window.XDomainRequest;
        
        if (!d) {
            // return !1;
            return false;
        }
        
        d = new d;
        
        d.open("POST", a);
        d.onerror = function() {
            c()
        };
        
        d.onload = c;
        
        // d[xc](b);
        d["send"](b);
        
        // return !0
        return true
    // },
    };
    
    // wd = function(a, b, c) {
    var wd = function(a, b, c) {
        // var d = O.XMLHttpRequest;
        var d = window.XMLHttpRequest;
        
        if (!d) {
            // return !1;
            return false;
        }
        
        var e = new d;
        
        if (!("withCredentials" in e)) {
            // return !1;
            return false;
        }
        
        // e.open("POST", a, !0);
        e.open("POST", a, true);
        
        // e.withCredentials = !0;
        e.withCredentials = true;
        e.setRequestHeader("Content-Type", "text/plain");
        e.onreadystatechange = function() {
            4 == e.readyState && (c(), e = null)
        };
        
        // e[xc](b);
        e["send"](b);
        
        // return !0
        return true
    // },
    };
    
    // ge = function(a, b, c) {
    var ge = function(a, b, c) {
        // 1 <= 100 * n.random() || Aa("?") || (a = ["t=error", "_e=" + a, "_v=j33", "sr=1"], b && a[p]("_f=" + b), c && a[p]("_m=" + K(c[F](0, 100))), a[p]("aip=1"), a[p]("z=" + fe()), wc(oc() + "/collect", a[H]("&"), ua))
        1 <= 100 * n.random() || Aa("?") || (a = ["t=error", "_e=" + a, "_v=j33", "sr=1"], b && a["push"]("_f=" + b), c && a["push"]("_m=" + trans_UTF8(c["substring"](0, 100))), a["push"]("aip=1"), a["push"]("z=" + get_rand_by_math()), wc(get_ga_domain() + "/collect", a["join"]("&"), ua))
    };
    
    var Ha = function() {
        this.t = []
    };
    
    // Ha[z].add = function(a) {
    Ha["prototype"].add = function(a) {
        // this.t[p](a)
        this.t["push"](a)
    };
    
    // Ha[z].D = function(a) {
    Ha["prototype"].D = function(a) {
        try {
            // for (var b = 0; b < this.t[y]; b++) {
            for (var b = 0; b < this.t["length"]; b++) {
                var c = a.get(this.t[b]);
                
                // c && ea(c) && c[C](O, a)
                c && is_function(c) && c["call"](window, a)
            }
        } catch(d) {}
        
        b = a.get("hitCallback");
        
        // b != ua && ea(b) && (a.set(Ia, ua, !0), setTimeout(b, 10))
        b != ua && is_function(b) && (a.set("hitCallback", ua, true), setTimeout(b, 10))
    };
    
    function Ja(a) {
        // if (100 != a.get(Ka) && La(P(a, Q)) % 1E4 >= 100 * R(a, Ka))
        if (
            100 != a.get("sampleRate") &&
            
            // domain_hash(P(a, Q)) % 1E4 >= 100 * R(a, Ka)
            domain_hash(P(a, "clientId")) % 1E4 >= 100 * R(a, "sampleRate")
        ) {
            throw "abort";
        }
    }
    
    function Ma(a) {
        // if (Aa(P(a, Na))) {
        if (Aa(P(a, "trackingId"))) {
            throw "abort";
        }
    }
    
    function Oa() {
        // var a = M[B][E];
        var a = document["location"]["protocol"];
        
        if ("http:" != a && "https:" != a) {
            throw "abort";
        }
    }
    
    function Pa(a) {
        try {
            // O.XMLHttpRequest && "withCredentials" in new O.XMLHttpRequest ? J(40) : O.XDomainRequest && J(41), O[oa][Ga] && J(42)
            window.XMLHttpRequest && "withCredentials" in new window.XMLHttpRequest ? J(40) : window.XDomainRequest && J(41), window["navigator"]["sendBeacon"] && J(42)
        } catch(b) {}
        
        // a.set(ld, Td(a), true);
        a.set("usage", Td(a), true);
        
        // a.set(Ac, R(a, Ac) + 1);
        a.set("_s", R(a, "_s") + 1);
        
        var c=[];
        
        Qa.map(function(b, e) {
            if (e.p) {
                var g = a.get(b);
                
                // void 0 != g && g != e[ia] && ("boolean" == typeof g && (g *= 1), c[p](e.p + "=" + K("" + g)))
                if (undefined != g && g != e["defaultValue"]) {
                    if ("boolean" == typeof g) {
                        g *= 1;
                        c["push"](e.p + "=" + trans_UTF8("" + g));
                    }
                }
            }
        });
        
        // c[p]("z=" + Bd());
        c["push"]("z=" + get_rand_uint32_by_crypto());
        
        // a.set(Ra, c[H]("&"), !0)
        a.set("hitPayload", c["join"]("&"), true)
    }
    
    function Sa(a) {
        // var b = P(a, gd) || oc() + "/collect",
        if (P(a, "transportUrl")) {
            var b = P(a, "transportUrl");
        } else {
            var b = get_ga_domain() + "/collect";
        }
        
        // c = P(a, Ra),
        var c = P(a, "hitPayload");
        
        // d = a.get(Ia),
        var d = a.get("hitCallback");
        
        // e = a.get(Vd),
        var e = a.get("useBeacon");
        
        // d = d || ua;
        var d = d || ua;
        
        // e && (e = d, O[oa][Ga] ? O[oa][Ga](b, c) ? (e(), e = !0) : e = !1 : e = !1);
        e && (e = d, window["navigator"]["sendBeacon"] ? window["navigator"]["sendBeacon"](b, c) ? (e(), e = true) : e = false : e = false);
        
        if (!e) {
            // if (2036 >= c[y])
            if (2036 >= c["length"]) {
                wc(b, c, d);
            // else if (8192 >= c[y])
            } else if (8192 >= c["length"]) {
                wd(b, c, d) || xd(b, c, d) || wc(b, c, d);
            } else {
                // throw ge("len", c[y]), new Da(c[y]);
                throw ge("len", c["length"]), new Da(c["length"]);
            }
        }
        
        a.set("hitCallback", ua, true)
    }
    
    function Hc(a) {
        // var b = O.gaData;
        var b = window.gaData;
        
        // b && (b.expId && a.set(Nc, b.expId), b.expVar && a.set(Oc, b.expVar))
        b && (b.expId && a.set("expId", b.expId), b.expVar && a.set("expVar", b.expVar))
    }
    
    function cd() {
        // if (O[oa] && "preview" == O[oa].loadPurpose)
        if (window["navigator"] && "preview" == window["navigator"].loadPurpose) {
            throw "abort";
        }
    }
    
    function yd(a) {
        // var b = O.gaDevIds;
        var b = window.gaDevIds;
        
        // ka(b) && 0 != b[y] && a.set("&did", b[H](","), !0)
        if (is_array(b) && 0 != b["length"]) {
            a.set("&did", b["join"](","), true);
        }
    }
    
    function vb(a) {
        // if ( ! a.get(Na)) {
        if ( ! a.get("trackingId")) {
            throw "abort";
        }
    };
    
    // var hd = function() {
    var get_rand_by_math = function() {
        // Douable mersenne Number 2^(2^n - 1) - 1 / M31 = 2^31 - 1 = Mm5 = 2^(2^5-1) - 1 = 2147483647
        return Math.round(2147483647 * Math.random())
    // },
    };
    
    // Bd = function() {
    var get_rand_uint32_by_crypto = function() {
        try {
            var a = new Uint32Array(1);
            
            // O.crypto.getRandomValues(a);
            window.crypto.getRandomValues(a);
            
            return a[0] & 2147483647
        } catch(b) {
            // return hd();
            return get_rand_by_math()
        }
    };
    
    // fe = hd;
    // var fe = get_rand_by_math;
    
    function Ta(a) {
        // var b = R(a, Ua);
        var b = R(a, "_hc");
        
        500 <= b && J(15);
        
        var c = P(a, "hitType");
        
        if ("transaction" != c && "item" != c) {
            // var c = R(a, Wa),
            var c = R(a, "_to");
            
            // d = (new Date)[da](),
            var d = (new Date)["getTime"]();
            
            // e = R(a, Xa);
            var e = R(a, "_ti");
            
            // 0 == e && a.set(Xa, d);
            0 == e && a.set("_ti", d);
            
            // e = n.round(2 * (d - e) / 1E3);
            e = Math.round(2 * (d - e) / 1000);
            
            // 0 < e && (c = n.min(c + e, 20), a.set(Xa, d));
            0 < e && (c = Math.min(c + e, 20), a.set("_ti", d));
            
            if (0 >= c) {
                throw "abort";
            }
            
            // a.set(Wa, --c)
            a.set("_to", --c)
        }
        
        // a.set(Ua, ++b)
        a.set("_hc", ++b)
    };
    
    var Ya = function() {
        this.data = new ee
    // },
    };
    
    // Qa = new ee,
    var Qa = new ee;
    
    // Za = [];
    var Za = [];
    
    // Ya[z].get = function(a) {
    Ya["prototype"].get = function(a) {
        // var b = $a(a),
        var b = $a(a);
        
        // c = this[q].get(a);
        var c = this["data"].get(a);
        
        // b && void 0 == c && (c = ea(b[ia]) ? b[ia]() : b[ia]);
        if (b && undefined == c) {
            if (is_function(b["defaultValue"])) {
                c =  b["defaultValue"]();
            } else {
                c = b["defaultValue"];
            }
        }
        
        // return b && b.n ? b.n(this, a, c) : c
        if (b && b.n) {
            return b.n(this, a, c)
        }
        
        return c;
    };
    
    var P = function(a, b) {
        var c = a.get(b);
        
        // return void 0 == c ? "" : "" + c
        if (undefined == c) {
            return "";
        }
        
        return "" + c
    };
    
    var R = function(a, b) {
        var c = a.get(b);
        
        // return void 0 == c || "" === c ? 0 : 1 * c
        if (undefined == c) || ("" === c)) {
            return 0;
        }
        
        return 1 * c;
    };
    
    // Ya[z].set = function(a, b, c) {
    Ya["prototype"].set = function(a, b, c) {
        if (a) {
            if ("object" == typeof a) {
                for (var d in a) {
                    // a[ra](d) && ab(this, d, a[d], c);
                    if (a["hasOwnProperty"](d)) {
                        ab(this, d, a["data"], c);
                    }
                }
            }
        } else {
            ab(this, a, b, c)
        }
    };
    
    var ab = function(a, b, c, d) {
        // if (void 0 != c) {
        if (undefined != c) {
            switch(b) {
                // case Na:
                case "trackingId":
                    // wb[pa](c)
                    wb["test"](c);
            }
        }
        
        var e = $a(b);
        
        // e && e.o ? e.o(a, b, c, d) : a[q].set(b, c, d)
        e && e.o ? e.o(a, b, c, d) : a["data"].set(b, c, d)
    // },
    };
    
    // bb = function(a, b, c, d, e) {
    var bb = function(a, b, c, d, e) {
        this.name = a;
        this.p = b;
        this.n = d;
        this.o = e;
        this.defaultValue = c
    // },
    };
    
    // $a = function(a) {
    var $a = function(a) {
        var b = Qa.get(a);
        
        if ( ! b) {
            // for (var c = 0; c < Za[y]; c++) {
            for (var c = 0; c < Za["length"]; c++) {
                var d = Za[c],
                    e = d[0].exec(a);
                
                if (e) {
                    b = d[1](e);
                    
                    // Qa.set(b[v], b);
                    Qa.set(b["name"], b);
                    
                    break
                }
            }
        }
        
        return b
    // },
    };
    
    // yc = function(a) {
    var yc = function(a) {
        var b;
        
        // Qa.map(function(c, d) {
        Qa.map(function(property_name, property) {
            // d.p == a && (b = d)
            if (property.p == a) {
                b = property;
            }
        });
        
        return b && b["name"]
    // },
    };
    
    // S = function(a, b, c, d, e) {
    var S = function(property_name, property_value, default_value, d, e) {
        // a = new bb(a, b, c, d, e);
        var a = new bb(property_name, property_value, default_value, d, e);
        
        // Qa.set(a[v], a);
        Qa.set(a["name"], a);
        
        // return a[v]
        return a["name"];
    // },
    };
    
    // cb = function(a, b) {
    var cb = function(a, b) {
        // Za[p]([new RegExp("^" + a + "$"), b])
        Za["push"]([new RegExp("^" + a + "$"), b])
    // },
    };
    
    // T = function(a, b, c) {
    /*
    var T = function(property_name, property_value, default_value) {
        // return S(a, b, c, void 0, db)
        S(property_name, property_value, default_value, undefined, function(){});
        return property_name;
    // },
    };
    */
    
    // db = function(){};
    // var db = function(){};
    
    // var gb = qa(f.GoogleAnalyticsObject) && sa(f.GoogleAnalyticsObject) || "ga",
    var gb = is_string(window.GoogleAnalyticsObject) && filter_space(window.GoogleAnalyticsObject) || "ga";
    
    // Ba = !1,
    var is_use_SSL = false;
    
    // he = S("_br"),
    S("_br");
    // var he = "_br";
    
    // hb = T("apiVersion", "v"),
    S("apiVersion", "v", undefined, undefined, function(){});
    // var hb = "apiVersion";
    
    // ib = T("clientVersion", "_v");
    S("clientVersion", "_v", undefined, undefined, function(){});
    // var ib = "clientVersion";
    
    S("anonymizeIp","aip");
    
    // var jb = S("adSenseId", "a"),
    S("adSenseId", "a");
    // var jb = "adSenseId";
    
    // Va = S("hitType", "t"),
    S("hitType", "t");
    // var Va = "hitType";
    
    // Ia = S("hitCallback"),
    S("hitCallback");
    // var Ia = "hitCallback";
    
    // Ra = S("hitPayload");
    S("hitPayload");
    // var Ra = "hitPayload";
    
    S("nonInteraction", "ni");
    S("currencyCode", "cu");
    
    // var Vd = S("useBeacon", void 0, !1);
    S("useBeacon", undefined, false);
    // var Vd = "useBeacon";
    
    S("dataSource", "ds");
    S("sessionControl", "sc", "");
    S("sessionGroup", "sg");
    S("queueTime", "qt");
    
    // var Ac = S("_s", "_s");
    S("_s", "_s");
    // var Ac = "_s";
    
    S("screenName", "cd");
    
    // var kb = S("location", "dl", ""),
    S("location", "dl", "");
    // var kb = "location";
    
    // lb = S("referrer", "dr"),
    S("referrer", "dr");
    // var lb = "referrer";
    
    // mb = S("page", "dp", "");
    S("page", "dp", "");
    var mb = "page";
    
    S("hostname", "dh");
    
    // var nb = S("language", "ul"),
    S("language", "ul");
    // var nb = "language";
    
    // ob = S("encoding", "de");
    S("encoding", "de");
    // var ob = "encoding";
    
    S("title", "dt", function() {
        // return M.title || void 0
        return document.title || undefined
    });
    
    cb("contentGroup([0-9]+)", function(a) {
        return new bb(a[0], "cg" + a[1])
    });
    
    // var pb = S("screenColors", "sd"),
    S("screenColors", "sd");
    // var pb = "screenColors";
    
    // qb = S("screenResolution", "sr"),
    S("screenResolution", "sr");
    // var qb = "screenResolution";
    
    // rb = S("viewportSize", "vp"),
    S("viewportSize", "vp");
    var rb = "viewportSize";
    
    // sb = S("javaEnabled", "je"),
    S("javaEnabled", "je");
    // var sb = "javaEnabled";
    
    // tb = S("flashVersion", "fl");
    S("flashVersion", "fl");
    var tb = "flashVersion";
    
    S("campaignId", "ci");
    S("campaignName", "cn");
    S("campaignSource", "cs");
    S("campaignMedium", "cm");
    S("campaignKeyword", "ck");
    S("campaignContent", "cc");
    
    // var ub = S("eventCategory", "ec"),
    S("eventCategory", "ec");
    var ub = "eventCategory";
    
    // xb = S("eventAction", "ea"),
    S("eventAction", "ea");
    // var xb = "eventAction";
    
    // yb = S("eventLabel", "el"),
    S("eventLabel", "el");
    // var yb = "eventLabel";
    
    // zb = S("eventValue", "ev"),
    S("eventValue", "ev");
    // var zb = "eventValue";
    
    // Bb = S("socialNetwork", "sn"),
    S("socialNetwork", "sn");
    // var Bb = "socialNetwork";
    
    // Cb = S("socialAction", "sa"),
    S("socialAction", "sa");
    // var Cb = "socialAction";
    
    // Db = S("socialTarget", "st"),
    S("socialTarget", "st");
    // var Db = "socialTarget";
    
    // Eb = S("l1", "plt"),
    S("l1", "plt");
    // var Eb = "l1";
    
    // Fb = S("l2", "pdt"),
    S("l2", "pdt");
    // var Fb = "l2";
    
    // Gb = S("l3", "dns"),
    S("l3", "dns");
    // var Gb = "l3";
    
    // Hb = S("l4", "rrt"),
    S("l4", "rrt");
    // var Hb = "l4";
    
    // Ib = S("l5", "srt"),
    S("l5", "srt");
    // var Ib = "l5";
    
    // Jb = S("l6", "tcp"),
    S("l6", "tcp");
    // var Jb = "l6";
    
    // Kb = S("l7", "dit"),
    S("l7", "dit");
    // var Kb = "l7";
    
    // Lb = S("l8", "clt"),
    S("l8", "clt");
    // var Lb = "l8";
    
    // Mb = S("timingCategory", "utc"),
    S("timingCategory", "utc");
    // var Mb = "timingCategory";
    
    // Nb = S("timingVar", "utv"),
    S("timingVar", "utv");
    // var Nb = "timingVar";
    
    // Ob = S("timingLabel", "utl"),
    S("timingLabel", "utl");
    // var Ob = "timingLabel";
    
    // Pb = S("timingValue", "utt");
    S("timingValue", "utt");
    // var Pb = "timingValue";
    
    S("appName", "an");
    S("appVersion", "av", "");
    S("appId", "aid", "");
    S("appInstallerId", "aiid", "");
    S("exDescription", "exd");
    S("exFatal", "exf");
    
    // var Nc = S("expId", "xid"),
    S("expId", "xid");
    // var Nc = "expId";
    
    // Oc = S("expVar", "xvar"),
    S("expVar", "xvar");
    // var Oc = "expVar";
    
    // Rc = S("_utma", "_utma"),
    S("_utma", "_utma");
    // var Rc = "_utma";
    
    // Sc = S("_utmz", "_utmz"),
    S("_utmz", "_utmz");
    // var Sc = "_utmz";
    
    // Tc = S("_utmht", "_utmht"),
    S("_utmht", "_utmht");
    // var Tc = "_utmht";
    
    // Ua = S("_hc", void 0, 0),
    S("_hc", undefined, 0);
    // var Ua = "_hc";
    
    // Xa = S("_ti", void 0, 0),
    S("_ti", undefined, 0);
    // var Xa = "_ti";
    
    // Wa = S("_to", void 0, 20);
    S("_to", undefined, 20);
    // var Wa = "_to";
    
    cb("dimension([0-9]+)", function(a) {
        return new bb(a[0], "cd" + a[1])
    });
    
    cb("metric([0-9]+)", function(a) {
        return new bb(a[0], "cm" + a[1])
    });
    
    // S("linkerParam", void 0, void 0, Bc, db);
    S("linkerParam", undefined, undefined, Bc, function(){});
    
    // var ld = S("usage", "_u"),
    S("usage", "_u");
    // var ld = "usage";
    
    // Gd = S("_um");
    S("_um");
    // var Gd = "_um";
    
    // S("forceSSL", void 0, void 0, function() { return Ba }, function(a, b, c) {
    S("forceSSL", undefined, undefined, function() { return is_use_SSL }, function(a, b, c) {
        J(34);
        
        // Ba = !!c
        is_use_SSL = !!c;
    });
    
    // var ed = S("_j1", "jid"),
    S("_j1", "jid");
    // var ed = "_j1";
    
    // Hd = S("_j2", "gjid");
    S("_j2", "gjid");
    // var Hd = "_j2";
    
    cb("\\&(.*)", function(a) {
        // var b = new bb(a[0], a[1]),
        var b = new bb(a[0], a[1]);
        
        // c = yc(a[0][F](1));
        var c = yc(a[0]["substring"](1));
        
        // c&&(b.n=function(a){return a.get(c)},b.o=function(a,b,g,ca){a.set(c,g,ca)},b.p=void 0);
        if (c) {
            b.n = function(a) { return a.get(c) };
            b.o = function(a, b, g, ca) { a.set(c, g, ca) };
            b.p = undefined;
        }
        
        return b
    });
    
    // var Qb = T("_oot"),
    S("_oot", undefined, undefined, undefined, function(){});
    // var Qb = "_oot";
    
    // dd = S("previewTask"),
    S("previewTask");
    // var dd = "previewTask";
    
    // Rb = S("checkProtocolTask"),
    S("checkProtocolTask");
    // var Rb = "checkProtocolTask";
    
    // md = S("validationTask"),
    S("validationTask");
    // var md = "validationTask";
    
    // Sb = S("checkStorageTask"),
    S("checkStorageTask");
    // var Sb = "checkStorageTask";
    
    // Uc = S("historyImportTask"),
    S("historyImportTask");
    // var Uc = "historyImportTask";
    
    // Tb = S("samplerTask"),
    S("samplerTask");
    // var Tb = "samplerTask";
    
    // Vb = T("_rlt"),
    S("_rlt", undefined, undefined, undefined, function(){});
    // var Vb = "_rlt";
    
    // Wb = S("buildHitTask"),
    S("buildHitTask");
    // var Wb = "buildHitTask";
    
    // Xb = S("sendHitTask"),
    S("sendHitTask");
    // var Xb = "sendHitTask";
    
    // Vc = S("ceTask"),
    S("ceTask");
    // var Vc = "ceTask";
    
    // zd = S("devIdTask"),
    S("devIdTask");
    // var zd = "devIdTask";
    
    // Cd = S("timingTask"),
    S("timingTask");
    // var Cd = "timingTask";
    
    // Ld = S("displayFeaturesTask"),
    S("displayFeaturesTask");
    // var Ld = "displayFeaturesTask";
    
    // V = T("name"),
    S("name", undefined, undefined, undefined, function(){});
    // var V = "name";
    
    // Q = T("clientId", "cid"),
    S("clientId", "cid", undefined, undefined, function(){});
    // var Q = "clientId";
    
    // Ad = S("userId", "uid"),
    S("userId", "uid");
    // var Ad = "userId";
    
    // Na = T("trackingId", "tid"),
    S("trackingId", "tid", undefined, undefined, function(){});
    // var Na = "trackingId";
    
    // U = T("cookieName", void 0, "_ga"),
    S("cookieName", undefined, "_ga", undefined, function(){});
    // var U = "cookieName";
    
    // W = T("cookieDomain"),
    S("cookieDomain", undefined, undefined, undefined, function(){});
    // var W = "cookieDomain";
    
    // Yb = T("cookiePath", void 0, "/"),
    S("cookiePath", undefined, "/", undefined, function(){});
    // var Yb = "cookiePath";
    
    // Zb = T("cookieExpires", void 0, 63072E3),
    S("cookieExpires", undefined, 63072E3, undefined, function(){});
    // var Zb = "cookieExpires";
    
    // $b = T("legacyCookieDomain"),
    S("legacyCookieDomain", undefined, undefined, undefined, function(){});
    // var $b = "legacyCookieDomain";
    
    // Wc = T("legacyHistoryImport", void 0, !0),
    S("legacyHistoryImport", undefined, true, undefined, function(){});
    // var Wc = "legacyHistoryImport";
    
    // ac = T("storage", void 0, "cookie"),
    S("storage", undefined, "cookie", undefined, function(){});
    // var ac = "storage";
    
    // bc = T("allowLinker", void 0, !1),
    S("allowLinker", undefined, false, undefined, function(){});
    // var bc = "allowLinker");
    
    // cc = T("allowAnchor", void 0, !0),
    S("allowAnchor", undefined, true, undefined, function(){});
    // var cc = "allowAnchor";
    
    // Ka = T("sampleRate", "sf", 100),
    S("sampleRate", "sf", 100, undefined, function(){});
    // var Ka = "sampleRate";
    
    // dc = T("siteSpeedSampleRate", void 0, 1),
    S("siteSpeedSampleRate", undefined, 1, undefined, function(){});
    // var dc = "siteSpeedSampleRate";
    
    // ec = T("alwaysSendReferrer", void 0, !1),
    S("alwaysSendReferrer", undefined, false, undefined, function(){});
    // var ec = "alwaysSendReferrer";
    
    // gd = S("transportUrl"),
    S("transportUrl");
    // var gd = "transportUrl";
    
    // Md = S("_r", "_r");
    S("_r", "_r");
    // var Md = "_r";
    
    function X(a, b, c, d) {
        b[a] = function() {
            try {
                // return d && J(d), c[G](this, arguments)
                return d && J(d), c["apply"](this, arguments)
            } catch(b) {
                // throw ge("exc", a, b && b[v]), b;
                throw ge("exc", a, b && b["name"]), b;
            }
        }
    }
    
    var Od = function(a, b, c) {
        // this.V = 1E4;
        this.V = 10000;
        
        this.fa = a;
        
        // this.$ = !1;
        this.$ = false;
        
        this.B = b;
        this.ea = c || 1
    // },
    };
    
    // Ed = function(a, b) {
    var Ed = function(a, b) {
        var c;
        
        if (a.fa && a.$) {
            return 0;
        }
        
        a.$ = true;
        
        if (b) {
            if (a.B && R(b, a.B)) {
                return R(b, a.B);
            }
            
            // if (0 == b.get(dd)) {
            if (0 == b.get("siteSpeedSampleRate")) {
                return 0
            }
        }
        
        if (0 == a.V) {
            return 0;
        }
        
        // void 0 === c && (c = Bd());
        if (undefined === c) {
            c = get_rand_uint32_by_crypto();
        }
        
        // return 0 == c % a.V ? n.floor(c / a.V) % a.ea + 1 : 0
        return 0 == c % a.V ? Math.floor(c / a.V) % a.ea + 1 : 0
    };
    
    // var ie = new Od(!0, he, 5),
    var ie = new Od(true, "_br", 5);
    
    // je = function(a) {
    var je = function(a) {
        // if (!Ud() && !Ba) {
        if ( ! is_https() && ! is_use_SSL) {
            var b = Ed(ie, a);
            
            // if (b && (O[oa][Ga] || !(4 <= b))) {
            if (
                b &&
                (window["navigator"]["sendBeacon"] || !(4 <= b))
            ) {
                // var c = (new Date).getHours(),
                var c = (new Date).getHours();
                
                // var d = [Bd(), Bd(), Bd()][H](".");
                var d = [get_rand_uint32_by_crypto(), get_rand_uint32_by_crypto(), get_rand_uint32_by_crypto()]["join"](".");
                
                // a = (3 == b || 5 == b ? "https:" : "http:") + "//www.google-analytics.com/collect?z=br.";
                if (3 == b || 5 == b) {
                    a = "https://www.google-analytics.com/collect?z=br.";
                } else {
                    a = "http://www.google-analytics.com/collect?z=br.";
                }
                
                // a += [b, "A", c, d][H](".");
                a += [b, "A", c, d]["join"](".");
                
                // var e = 1 != b && 4 != b ? "https:" : "http:",
                // e = e + "//www.google-analytics.com/collect?z=br.",
                // e = e + [b, "B", c, d][H]("."),
                if ((1 != b) && (4 != b)) {
                    var e = "https://www.google-analytics.com/collect?z=br.";
                } else {
                    var e = "http://www.google-analytics.com/collect?z=br.";
                }
                
                e += [b, "B", c, d]["join"](".");
                
                c = function() {
                    // 4 <= b ? O[oa][Ga](e, "") : ta(e)
                    if (4 <= b) {
                        window["navigator"]["sendBeacon"](e, "");
                    } else {
                        create_DOM_img(e);
                    }
                };
                
                // Bd() % 2 ? (ta(a), c()) : (c(), ta(a))
                if (get_rand_uint32_by_crypto() % 2) {
                    create_DOM_img(a);
                    c();
                } else {
                    c();
                    create_DOM_img(a);
                }
            }
        }
    };
    
    function fc() {
        // var a,
        var a;
        
        // b,
        var b;
        
        // c;
        var c;
        
        // if ((c = (c = O[oa]) ? c.plugins : null) && c[y])
        if ((c = (c = window["navigator"]) ? c.plugins : null) && c["length"]) {
            // for (var d = 0; d < c[y] && !b; d++) {
            for (var d = 0; d < c["length"] && !b; d++) {
                // var e = c[d];
                var e = c["data"];
                
                // -1 < e[v][t]("Shockwave Flash") && (b = e.description)
                if (-1 < e["name"]["indexOf"]("Shockwave Flash")) {
                    b = e.description;
                }
            }
        }
        
        if ( ! b) {
            try {
                a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
                b = a.GetVariable("$version")
            } catch(g) {}
        }
        
        if ( ! b) {
            try {
                a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
                b = "WIN 6,0,21,0";
                
                a.AllowScriptAccess = "always";
                
                b = a.GetVariable("$version")
            } catch(ca) {}
        }
        
        if ( ! b) {
            try {
                a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                b = a.GetVariable("$version")
            } catch(l) {}
        }
        
        // b && (a = b[m](/[\d]+/g)) && 3 <= a[y] && (b = a[0] + "." + a[1] + " r" + a[2]);
        if (b) {
            a = b["match"](/[\d]+/g);

            if (a && 3 <= a["length"]) {
                b = a[0] + "." + a[1] + " r" + a[2];
            }
        }
        
        // return b || void 0
        return b || undefined
    }
    
    var gc = function(a, b) {
        // var c = n.min(R(a, dc), 100);
        var c = Math.min(R(a, "siteSpeedSampleRate"), 100);
        
        // if ( ! (La(P(a, Q)) % 100 >= c) && (c = {}, Ec(c) || Fc(c))) {
        if (
            ! (domain_hash(P(a, "clientId")) % 100 >= c) &&
            (c = {}, get_performance_by_reference(c) || get_readytime_by_reference(c))
        ) {
            // var d = c[Eb];
            var d = c["l1"];
            
            // void 0 == d || Infinity == d || isNaN(d) || (0 < d ? (Y(c, Gb), Y(c, Jb), Y(c, Ib), Y(c, Fb), Y(c, Hb), Y(c, Kb), Y(c, Lb), b(c)) : L(O, "load", function() {gc(a, b)}, !1))
            if (undefined == d || Infinity == d || isNaN(d)) {
                if (0 < d) {
                    Y(c, "l3");
                    Y(c, "l6");
                    Y(c, "l5");
                    Y(c, "l2");
                    Y(c, "l4");
                    Y(c, "l7");
                    Y(c, "l8");
                    b(c);
                } else {
                    add_DOM_event(window, "load", function() { gc(a, b)  }, false);
                }
            }
        }
    // },
    };
    
    // Ec = function(a) {
    var get_performance_by_reference = function(a) {
        // Chrome10 => window.performance
        // Chrome6-9 => window.webkitPerformance
        // PS：IE9 => window.msPerformance
        
        // var b = O.performance || O.webkitPerformance,
        if (window.performance) {
            var b = window.performance
        } else {
            var b = window.webkitPerformance;
        }
        
        // b = b && b.timing;
        if (b) {
            b = b.timing;
        }
        
        if ( ! b) {
            // return !1;
            return false;
        }
        
        var c = b.navigationStart;
        
        if (0 == c) {
            // return !1;
            return false;
        }
        
        // a[Eb] = b.loadEventStart - c;
        a["l1"] = b.loadEventStart - c;
        
        // a[Gb] = b.domainLookupEnd - b.domainLookupStart;
        a["l3"] = b.domainLookupEnd - b.domainLookupStart;
        
        // a[Jb] = b.connectEnd - b.connectStart;
        a["l6"] = b.connectEnd - b.connectStart;
        
        // a[Ib] = b.responseStart - b.requestStart;
        a["l5"] = b.responseStart - b.requestStart;
        
        // a[Fb] = b.responseEnd - b.responseStart;
        a["l2"] = b.responseEnd - b.responseStart;
        
        // a[Hb] = b.fetchStart - c;
        a["l4"] = b.fetchStart - c;
        
        // a[Kb] = b.domInteractive - c;
        a["l7"] = b.domInteractive - c;
        
        // a[Lb] = b.domContentLoadedEventStart - c;
        a["l8"] = b.domContentLoadedEventStart - c;
        
        // return !0
        return true
    // },
    };
    
    // Fc = function(a) {
    var get_readytime_by_reference = function(a) {
        //if (O.top != O)
        if (window.top != window) {
            // return !1;
            return false;
        }
        
        // var b = O.external,
        var b = window.external;
        
        // c = b && b.onloadT;
        var c = b && b.onloadT;
        
        // b && !b.isValidLoadTime && (c = void 0);
        if (b && ! b.isValidLoadTime) {
            c = undefined;
        }
        
        // 2147483648 < c && (c = void 0);
        if (2147483648 < c) {
            c = undefined;
        }
        
        if (0 < c) {
            b.setPageReadyTime();
        }
        
        // if (void 0 == c) {
        if (undefined == c) {
            // return !1;
            return false;
        }
        
        // a[Eb] = c;
        a["l1"] = c;
        
        // return !0
        return true
    // },
    };
    
    // Y = function(a, b) {
    var Y = function(a, b) {
        var c = a[b];
        
        // isNaN = is Not a Number
        // Infinity = 
        if (isNaN(c) || Infinity == c || 0 > c) {
            // a[b] = void 0
            a[b] = undefined;
        }
    // },
    };
    
    // Fd = function(a) {
    var Fd = function(a) {
        return function(b) {
            "pageview" != b.get("hitType") || a.I || (a.I = true, gc(b, function(b) {
                // a[xc]("timing", b)
                a["send"]("timing", b)
            }))
        }
    };
    
    // var hc = !1,
    var hc = false;
    
    // mc = function(a) {
    var mc = function(a) {
        // if ("cookie" == p(a, ac)) {
        if ("cookie" == P(a, "storage")) {
            // var b = P(a, U),
            var b = P(a, "cookieName");
            
            // c = nd(a),
            var c = nd(a);
            
            // d = kc(P(a, Yb)),
            var d = kc(P(a, "cookiePath"));
            
            // e = lc(P(a, W)),
            var e = cutoff_by_first_dot(P(a, "cookieDomain"));
            
            // g = 1E3 * R(a, Zb),
            var g = 1000 * R(a, "cookieExpires");
            
            // ca = P(a, Na);
            var ca = P(a, "trackingId");
            
            if ("auto" != e) {
                // zc(b, c, d, e, ca, g) && (hc = !0);
                zc(b, c, d, e, ca, g) && (hc = true);
            } else {
                J(32);
                
                var l;
                
                t : {
                    c = [];
                    
                    // e = xa()[A](".");
                    e = get_main_domain()["split"](".");
                    
                    // if (4 == e[y] && (l = e[e[y] - 1], parseInt(l, 10) == l)) {
                    if (4 == e["length"] && (l = e[e["length"] - 1], parseInt(l, 10) == l)) {
                        l = ["none"];
                        break t
                    }
                    
                    // for (l = e[y] - 2; 0 <= l; l--)
                    for (l = e["length"] - 2; 0 <= l; l--) {
                        // c[p](e[ha](l)[H]("."));
                        c["push"](e["slice"](l)["join"]("."));
                    }
                    
                    // c[p]("none");
                    c["push"]("none");
                    
                    l = c
                }
                
                // for(var k = 0; k < l[y]; k++)
                for(var k = 0; k < l["length"]; k++) {
                    // if (e = l[k], a[q].set(W, e), c = nd(a), zc(b, c, d, e, ca, g)) {
                    if (e = l[k], a["data"].set("cookieDomain", e), c = nd(a), zc(b, c, d, e, ca, g)) {
                        // hc = !0;
                        hc = true;
                        return
                    }
                }
                
                // a[q].set(W, "auto")
                a["data"].set("cookieDomain", "auto")
            }
        }
    // },
    };
    
    // nc = function(a) {
    var nc = function(a) {
        // if ("cookie" == P(a, ac) && !hc && (mc(a), !hc)) {
        if ("cookie" == P(a, "storage") && !hc && (mc(a), !hc)) {
            throw "abort";
        }
    // },
    };
    
    // Yc = function(a) {
    var Yc = function(a) {
        // if (a.get(Wc)) {
        if (a.get("legacyHistoryImport")) {
            // var b = P(a, W),
            var b = P(a, "cookieDomain");
            
            // c = P(a, $b) || xa(), d = Xc("__utma", c, b);
            var c = P(a, "legacyCookieDomain") || get_main_domain();
            var d = Xc("__utma", c, b);
            
            // d && (J(19), a.set(Tc, (new Date)[da](), !0), a.set(Rc, d.R), (b = Xc("__utmz", c, b)) && d[h] == b[h] && a.set(Sc, b.R))
            if (d) (
                J(19);
                a.set("_utmht", (new Date)["getTime"](), true);
                a.set("_utma", d.R);
                
                b = Xc("__utmz", c, b)
                
                if (b && d["hash"] == b["hash"]) {
                    a.set("_utmz", b.R);
                }
            }
        }
    // },
    };
    
    // only use in mc = function(a) {}
    // nd = function(a) {
    var nd = function(a) {
        // var b = Cc(P(a, Q)),
        var b = encoding_parenthesis(P(a, "clientId"));
        
        // c = ic(P(a, W));
        var c = length_by_split_dot(P(a, "cookieDomain"));
        
        // a = jc(P(a, Yb));
        a = jc(P(a, "cookiePath"));
        
        // 1 < a && (c += "-" + a);
        if (1 < a) {
            c += "-" + a;
        }
        
        // return ["GA1", c, b][H](".")
        return ["GA1", c, b]["join"](".")
    // },
    };
    
    // Gc = function(a, b, c) {
    var Gc = function(a, b, c) {
        // for (var d=[], e=[], g, ca=0; ca < a[y]; ca++) {
        for (var d=[], e=[], g, ca=0; ca < a["length"]; ca++) {
            var l = a[ca];
            
            if (l.r[c] == b) {
                // d[p](l);
                d["push"](l);
            } else {
                // void 0 == g || l.r[c] < g ? (e = [l], g = l.r[c]) : l.r[c] == g && e[p](l)
                (undefined == g) || l.r[c] < g ? (e = [l], g = l.r[c]) : l.r[c] == g && e["push"](l)
            }
        }
        
        // return 0 < d[y] ? d : e
        return (0 < d["length"]) ? d : e
    // },
    };
    
    // lc = function(a) {
    var cutoff_by_first_dot = function(a) {
        // return 0 == a[t](".") ? a.substr(1) : a
        if (0 == a["indexOf"](".")) {
            return a.substr(1);
        }
        
        return a;
    // },
    };
    
    // ic = function(a) {
    var length_by_split_dot = function(a) {
        // return lc(a)[A](".")[y]
        return cutoff_by_first_dot(a)["split"](".")["length"]
    // },
    };
    
    // kc = function(a) {
    var kc = function(a) {
        if (!a) {
            return "/";
        }
        
        // 1 < a[y] && a.lastIndexOf("/") == a[y] - 1 && (a = a.substr(0, a[y] - 1));
        (1 < a["length"]) && (a.lastIndexOf("/") == a["length"] - 1) && (a = a.substr(0, a["length"] - 1));
        
        // 0 != a[t]("/") && (a = "/" + a);
        (0 != a["indexOf"]("/")) && (a = "/" + a);
        
        return a
    // },
    };
    
    // jc = function(a) {
    var jc = function(a) {
        a = kc(a);
        
        // return "/" == a ? 1 : a[A]("/")[y]
        return ("/" == a) ? 1 : a["split"]("/")["length"]
    };
    
    function Xc(a, b, c) {
        // "none" == b && (b = "");
        if ("none" == b) {
            b = "";
        }
        
        // var d = [],
        var d = [];
        
        // e = Ca(a);
        var e = get_cookie_by_input(a);
        
        // a = "__utma" == a ? 6 : 2;
        a = (("__utma" == a) ? 6 : 2);
        
        // for (var g = 0; g < e[y]; g++) {
        for (var g = 0; g < e["length"]; g++) {
            // var ca = ("" + e[g])[A](".");
            var ca = ("" + e[g])["split"](".");
            
            // ca[y] >= a && d[p]({
            ca["length"] >= a && d["push"]({
                hash : ca[0],
                R : e[g],
                O : ca
            })
        }
        
        // return 0 == d[y] ? void 0 : 1 == d[y] ? d[0] : Zc(b, d) || Zc(c, d) || Zc(null, d) || d[0]
        return 0 == d["length"] ? undefined : 1 == d["length"] ? d[0] : Zc(b, d) || Zc(c, d) || Zc(null, d) || d[0]
    }
    
    function Zc(a, b) {
        // var c,
        var c;
        
        // d;
        var d;
        
        // null == a ? c = d = 1 : (c = La(a), d = La(D(a, ".") ? a[F](1) : "." + a));
        if (null == a) {
            c = 1;
            d = 1;
        } esle {
            c = domain_hash(a);
            d = domain_hash(is_start_with(a, ".") ? a["substring"](1) : "." + a);
        }
        
        // for (var e = 0; e < b[y]; e++)
        for (var index = 0; index < b["length"]; index++) {
            // if (b[e][h] == c || b[e][h] == d)
            if (b[index]["hash"] == c || b[index]["hash"] == d) {
                // return b[e]
                return b[index];
            }
        }
    }
    
    // var od = new RegExp(/^https?:\/\/([^\/:]+)/),
    var od = new RegExp(/^https?:\/\/([^\/:]+)/);
    
    // pd = /(.*)([?&#])(?:_ga=[^&#]*)(?:&?)(.*)/;
    var pd = /(.*)([?&#])(?:_ga=[^&#]*)(?:&?)(.*)/;
    
    function Bc(a) {
        // a = a.get(Q);
        a = a.get("clientId");
        
        var b = Ic(a, 0);
        
        // return "_ga=1." + K(b + "." + a)
        return "_ga=1." + trans_UTF8(b + "." + a)
    }
    
    function Ic(a, b) {
        // for (var c = new Date, d = O[oa], e = d.plugins || [], c = [a, d.userAgent, c.getTimezoneOffset(), c.getYear(), c.getDate(), c.getHours(), c.getMinutes() + b], d = 0; d < e[y]; ++d)
        for (
            var c = new Date,
            // d = window["navigator"],
            e = window["navigator"].plugins || [],
            c = [a, window["navigator"].userAgent, c.getTimezoneOffset(), c.getYear(), c.getDate(), c.getHours(), c.getMinutes() + b],
            d = 0;
            d < e["length"];
            ++d
        ) {
            // c[p](e[d].description);
            c["push"](e["data"].description);
        }
        
        // return La(c[H]("."))
        return domain_hash(c["join"]("."))
    }
    
    var Dc = function(a) {
        J(48);
        
        this.target = a;
        
        // this.T = !1
        this.T = false
    };
    
    // Dc[z].Q = function(a, b) {
    Dc["prototype"].Q = function(a, b) {
        if (a.tagName) {
            // if ("a" == a.tagName[I]()) {
            if ("a" == a.tagName["toLowerCase"]()) {
                // a[Ab] && Pc(a, qd(this, a[Ab], b));
                a["href"] && set_href(a, qd(this, a["href"], b));
                return
            }
            
            // if ("form" == a.tagName[I]())
            if ("form" == a.tagName["toLowerCase"]()) {
                return rd(this, a);
            }
        }
        
        if ("string" == typeof a) {
            return qd(this, a, b);
        }
    };
    
    var qd = function(a, b, c) {
        var d = pd.exec(b);
        
        // d && 3 <= d[y] && (b = d[1] + (d[3] ? d[2] + d[3] : ""));
        if (d && 3 <= d["length"]) {
            if (d[3]) {
                b = d[1] + d[2] + d[3];
            } else {
                b = d[1] + "";
            }
        }
        
        // a = a[jd].get("linkerParam");
        a = a["target"].get("linkerParam");
        
        // var e = b[t]("?"),
        var e = b["indexOf"]("?");
        
        // d = b[t]("#");
        d = b["indexOf"]("#");
        
        // c ? b += (-1 == d ? "#" : "&") + a : (c = -1 == e ? "?" : "&", b = -1 == d ? b + (c + a) : b[F](0, d) + c + a + b[F](d));
        c ? b += (-1 == d ? "#" : "&") + a : (c = -1 == e ? "?" : "&", b = -1 == d ? b + (c + a) : b["substring"](0, d) + c + a + b["substring"](d));
        
        return b
    // },
    };
    
    // rd = function(a, b) {
    var rd = function(a, b) {
        // if (b && b[kd]) {
        if (b && b["action"]) {
            // var c = a[jd].get("linkerParam")[A]("=")[1];
            var c = a["target"].get("linkerParam")["split"]("=")[1];
            
            // if ("get" == b.method[I]()) {
            if ("get" == b.method["toLowerCase"]()) {
                // for (var d = b.childNodes || [], e = 0; e < d[y]; e++)
                for (var d = b.childNodes || [], e = 0; e < d["length"]; e++) {
                    // if ("_ga" == d[e][v]) {
                    if ("_ga" == d[e]["name"]) {
                        // d[e][id]("value", c);
                        d[e]["setAttribute"]("value", c);
                        
                        return
                    }
                }
                
                // d = M[u]("input");
                d = document["createElement"]("input");
                
                // d[id]("type", "hidden");
                d["setAttribute"]("type", "hidden");
                
                // d[id]("name", "_ga");
                d["setAttribute"]("name", "_ga");
                
                // d[id]("value", c);
                d["setAttribute"]("value", c);
                
                b.appendChild(d)
            } else {
                // "post" == b.method[I]() && (b.action = qd(a, b[kd]))
                "post" == b.method["toLowerCase"]() && (b.action = qd(a, b["action"]))
            }
        }
    };
    
    // Dc[z].S = function(a, b, c) {
    Dc["prototype"].S = function(a, b, c) {
        function d(c) {
            try {
                // c = c || O.event;
                c = c || window.event;
                
                var d;
                
                t : {
                    // var g = c[jd] || c.srcElement;
                    var g = c["target"] || c.srcElement;
                    
                    for (c = 100; g && 0 < c; ) {
                        // if (g[Ab] && g.nodeName[m](/^a(?:rea)?$/i)) {
                        if (g["href"] && g.nodeName["match"](/^a(?:rea)?$/i)) {
                            d = g;
                            break t
                        }
                        
                        g = g.parentNode;
                        c--
                    }
                    
                    d = {}
                }
                
                // ("http:" == d[E] || "https:" == d[E]) && sd(a, d[ma] || "") && d[Ab] && Pc(d, qd(e, d[Ab], b))
                ("http:" == d["protocol"] || "https:" == d["protocol"]) && sd(a, d["hostname"] || "") && d["href"] && set_href(d, qd(e, d["href"], b))
            } catch(w) {
                J(26)
            }
        }
        
        var e = this;
        
        // this.T || (this.T = !0, L(M, "mousedown", d, !1), L(M, "touchstart", d, !1), L(M, "keyup", d, !1));
        if ( ! this.T) {
            this.T = true;
            add_DOM_event(document, "mousedown", d, false);
            add_DOM_event(document, "touchstart", d, false);
            add_DOM_event(document, "keyup", d, false);
        }
        
        if (c) {
            c = function(b) {
                // b = b || O.event;
                b = b || window.event;
                
                // if ((b = b[jd] || b.srcElement) && b[kd]) {
                if ((b = b["target"] || b.srcElement) && b["action"]) {
                    // var c = b[kd][m](od);
                    var c = b["action"]["match"](od);
                    
                    // c && sd(a, c[1]) && rd(e, b)
                    c && sd(a, c[1]) && rd(e, b)
                }
            };
            
            // for (var g = 0; g < M.forms[y]; g++)
            for (var index = 0; index < document.forms["length"]; index++) {
                // L(M.forms[g], "submit", c)
                add_DOM_event(document.forms[index], "submit", c);
            }
        }
    };
    
    function sd(a, b) {
        // if (b == M[B][ma])
        if (b == document["location"]["hostname"]) {
            // return !1;
            return false;
        }
        
        // for (var c = 0; c < a[y]; c++)
        for (var c = 0; c < a["length"]; c++) {
            if (a[c] instanceof RegExp) {
                // if (a[c][pa](b))
                if (a[c]["test"](b)) {
                    // return !0
                    return true;
                }
            // } else if (0 <= b[t](a[c])) {
            } else if (0 <= b["indexOf"](a[c])) {
                // return !0;
                return true;
            }
        }
        
        // return !1
        return false
    }
    
    var Jd = function(a, b, c, d) {
        this.U = b;
        this.aa = c;
        
        // (b = d) || (b = (b = P(a, V)) && "t0" != b ? Wd[pa](b) ? "_gat_" + Cc(P(a, Na)) : "_gat_" + Cc(b) : "_gat");
        (b = d) || (b = (b = P(a, "name")) && "t0" != b ? Wd["test"](b) ? "_gat_" + encoding_parenthesis(P(a, "trackingId")) : "_gat_" + encoding_parenthesis(b) : "_gat");
        
        this.Y = b
    // },
    };
    
    // Rd = function(a, b) {
    var Rd = function(a, b) {
        // var c = b.get(Wb);
        var c = b.get("buildHitTask");
        
        // b.get(Wb, function(b) {
        b.set("buildHitTask", function(b) {
            Pd(a, b);
            
            var d = c(b);
            
            Qd(a,b);
            
            return d
        });
        
        // var d = b.get(Xb);
        var d = b.get("sendHitTask");
        
        // b.set(Xb, function(b) {
        b.set("sendHitTask", function(b) {
            var c = d(b);
            
            Id(a, b);
            
            return c
        })
    // },
    };
    
    // Pd = function(a, b) {
    var Pd = function(a, b) {
        // b.get(a.U) || ("1" == Ca(a.Y)[0] ? b.set(a.U, "", !0) : b.set(a.U, "" + fe(), !0))
        if ( ! b.get(a.U)) {
            if ("1" == get_cookie_by_input(a.Y)[0]) {
                b.set(a.U, "", true);
            } else {
                b.set(a.U, "" + get_rand_by_math(), true);
            }
        }
    // },
    };
    
    // Qd = function(a, b) {
    var Qd = function(a, b) {
        // b.get(a.U) && zc(a.Y, "1", b.get(Yb), b.get(W), b.get(Na), 6E5)
        if (b.get(a.U)) {
            // zc(a.Y, "1", b.get(Yb), b.get(W), b.get("trackingId"), 600000);
            zc(a.Y, "1", b.get("cookiePath"), b.get("cookieDomain"), b.get("trackingId"), 600000);
        }
    // },
    };
    
    // Id = function(a, b) {
    var Id = function(a, b) {
        if (b.get(a.U)) {
            // var c = new ee,
            var c = new ee;
            
            // d = function(a) {
            var d = function(a) {
                // c.set($a(a).p, b.get(a))
                c.set($a(a).p, b.get(a));
            };
            
            d("apiVersion");
            d("clientVersion");
            
            // d(Na);
            d("trackingId");
            
            // d(Q);
            d("clientId");
            
            d(a.U);
            
            // c.set($a(ld).p, Td(b));
            c.set($a("usage").p, Td(b));
            
            var e = a.aa;
            
            c.map(function(a, b) {
                // e += K(a) + "=";
                e += trans_UTF8(a) + "=";
                
                // e += K("" + b) + "&"
                e += trans_UTF8("" + b) + "&"
            });
            
            // e += "z=" + fe();
            e += "z=" + get_rand_by_math();
            
            // ta(e);
            create_DOM_img(e);
            
            // b.set(a.U, "", !0)
            b.set(a.U, "", true)
        }
    // },
    };
    
    // Wd = /^gtm\d+$/;
    var Wd = /^gtm\d+$/;
    
    var fd = function(a, b) {
        var c = a.b;
        
        if (!c.get("dcLoaded")) {
            Nd(c, 29);
            
            b = b || {};
            
            var d;
            
            // b[U] && (d = Cc(b[U]));
            if (b["cookieName"]) {
                d = encoding_parenthesis(b["cookieName"]);
            }
            
            // d = new Jd(c, ed, "https://stats.g.doubleclick.net/collect?t=dc&aip=1&", d);
            d = new Jd(c, "_j1", "https://stats.g.doubleclick.net/collect?t=dc&aip=1&", d);
            
            Rd(d, c);
            
            // c.set("dcLoaded", !0)
            c.set("dcLoaded", true)
        }
    };
    
    var Sd = function(a) {
        var b;
        
        // b = a.get("dcLoaded") ? !1 : "cookie" != a.get(ac) ? !1 : !0;
        if (a.get("dcLoaded")) {
            b =  false;
        } else {
            if ("cookie" != a.get("storage")) {
                b = false;
            } else {
                b = true;
            }
        }
        
        // b && (Nd(a, 51), b = new Jd(a, ed), Pd(b, a), Qd(b, a), a.get(b.U) && (a.set(Md, 1, !0), a.set(gd,oc() + "/r/collect", !0)))
        if (b) {
            Nd(a, 51);
            
            // b = new Jd(a, ed);
            b = new Jd(a, "_j1");
            
            Pd(b, a);
            Qd(b, a);
            
            if (a.get(b.U)) {
                a.set("_r", 1, true);
                a.set("transportUrl", get_ga_domain() + "/r/collect", true);
            }
        }
    };
    
    var Kd = function(a, b) {
        var c = a.b;
        
        if (!c.get("_rlsaLoaded")) {
            Nd(c, 38);
            
            b = b || {};
            
            // if (b[U]) {
            if (b["cookieName"]) {
                // var d = Cc(b[U]);
                var d = encoding_parenthesis(b["cookieName"]);
            }
            
            // d = new Jd(c, Hd, "https://www.google.com/ads/ga-audiences?t=sr&aip=1&", d);
            d = new Jd(c, "_j2", "https://www.google.com/ads/ga-audiences?t=sr&aip=1&", d);
            
            Rd(d, c);
            
            c.set("_rlsaLoaded", true);
            
            tc("displayfeatures", a, b)
        }
    };
    
    var Lc = function() {
        // var a = O.gaGlobal = O.gaGlobal || {};
        var a = window.gaGlobal = window.gaGlobal || {};
        
        // return a.hid = a.hid || fe()
        return a.hid = a.hid || get_rand_by_math()
    };
    
    // var ad,
    var ad;
    
    // bd = function(a, b, c) {
    var bd = function(a, b, c) {
        if ( ! ad) {
            var d;
            
            // d = M[B][h];
            d = document["location"]["hash"];
            
            // var e = O[v],
            var e = window["name"];
            
            // g = /^#?gaso=([^&]*)/;
            var g = /^#?gaso=([^&]*)/;
            
            // if (e = (d = (d = d && d[m](g) || e && e[m](g)) ? d[1] : Ca("GASO")[0] || "") && d[m](/^(?:!([-0-9a-z.]{1,40})!)?([-.\w]{10,1200})$/i))
            if (e = (d = (d = d && d["match"](g) || e && e["match"](g)) ? d[1] : get_cookie_by_input("GASO")[0] || "") && d["match"](/^(?:!([-0-9a-z.]{1,40})!)?([-.\w]{10,1200})$/i)) {
                // zc("GASO", "" + d, c, b, a, 0), f._udo || (f._udo = b), f._utcp || (f._utcp = c), a = e[1], wa("https://www.google.com/analytics/web/inpage/pub/inpage.js?" + (a ? "prefix=" + a + "&" : "") + fe(), "_gasojs");
                zc("GASO", "" + d, c, b, a, 0);
                f._udo || (f._udo = b);
                f._utcp || (f._utcp = c);
                a = e[1];
                
                // insert_js_include("https://www.google.com/analytics/web/inpage/pub/inpage.js?" + (a ? "prefix=" + a + "&" : "") + fe(), "_gasojs");
                insert_js_include("https://www.google.com/analytics/web/inpage/pub/inpage.js?" + (a ? "prefix=" + a + "&" : "") + fe(), "_gasojs");
            }
            
            // ad = !0
            ad = true
        }
    };
    
    // var wb = /^(UA|YT|MO|GP)-(\d+)-(\d+)$/,
    var wb = /^(UA|YT|MO|GP)-(\d+)-(\d+)$/;
    
    // pc = function(a) {
    var pc = function(a) {
        function b(a, b) {
            // d.b[q].set(a, b)
            d.b["data"].set(a, b)
        }
        
        function c(a, c) {
            b(a, c);
            
            d.filters.add(a)
        }
        
        var d = this;
        
        this.b = new Ya;
        
        this.filters = new Ha;
        
        // b(V, a[V]);
        b("name", a["name"]);
        
        // b(Na, sa(a[Na]));
        b("trackingId", filter_space(a["trackingId"]));
        
        // b(U, a[U]);
        b("cookieName", a["cookieName"]);
        
        // b(W, a[W] || xa());
        b("cookieDomain", a["cookieDomain"] || get_main_domain());
        
        // b(Yb, a[Yb]);
        b("cookiePath", a["cookiePath"]);
        
        // b(Zb, a[Zb]);
        b("cookieExpires", a["cookieExpires"]);
        
        // b($b, a[$b]);
        b("legacyCookieDomain", a["legacyCookieDomain"]);
        
        // b(Wc, a[Wc]);
        b("legacyHistoryImport", a["legacyHistoryImport"]);
        
        // b(bc, a[bc]);
        b("allowLinker", a["allowLinker"]);
        
        // b(cc, a[cc]);
        b("allowAnchor", a["allowAnchor"]);
        
        // b(Ka, a[Ka]);
        b("sampleRate", a["sampleRate"]);
        
        // b(dc, a[dc]);
        b("siteSpeedSampleRate", a["siteSpeedSampleRate"]);
        
        // b(ec, a[ec]);
        b("alwaysSendReferrer", a["alwaysSendReferrer"]);
        
        // b(ac, a[ac]);
        b("storage", a["storage"]);
        
        // b(Ad, a[Ad]);
        b("userId", a["userId"]);
        
        b("apiVersion", 1);
        b(ib, "j33");
        
        // c(Qb, Ma);
        c("_oot", Ma);
        
        // c(dd, cd);
        c("previewTask", cd);
        
        // c(Rd, Oa);
        c("checkProtocolTask", Oa);
        
        // c(md, vb);
        c("validationTask", vb);
        
        // c(Sb, nc);
        c("checkStorageTask", nc);
        
        // c(Uc, Yc);
        c("historyImportTask", Yc);
        
        // c(Tb, Ja);
        c("samplerTask", Ja);
        
        // c(Vb, Ta);
        c("_rlt", Ta);
        
        // c(Vc, Hc);
        c("ceTask", Hc);
        
        // c(zd, yd);
        c("devIdTask", yd);
        
        // c(Ld, Sd);
        c("displayFeaturesTask", Sd);
        
        // c(Wb, Pa);
        c("buildHitTask", Pa);
        
        // c(Xb, Sa);
        c("sendHitTask", Sa);
        
        // c(Cd, Fd(this));
        c("timingTask", Fd(this));
        
        // Jc(this.b, a[Q]);
        Jc(this.b, a["clientId"]);
        
        Kc(this.b);
        
        this.b.set("adSenseId", Lc());
        
        // bd(this.b.get(Na), this.b.get(W), this.b.get(Yb))
        bd(this.b.get("trackingId"), this.b.get("cookieDomain"), this.b.get("cookiePath"))
    // },
    };
    
    // Jc = function(a, b) {
    var Jc = function(a, b) {
        // if ("cookie" == P(a, ac)) {
        if ("cookie" == P(a, "storage")) {
            // hc =!1;
            hc = false;
            
            var c;
            
            i : {
                // var d = Ca(P(a, U));
                var d = get_cookie_by_input(P(a, "cookieName"));
                
                // if (d && !(1 > d[y])) {
                if (d && !(1 > d["length"])) {
                    c = [];
                    
                    // for (var e = 0; e < d[y]; e++) {
                    for (var e = 0; e < d["length"]; e++) {
                        var g;
                        
                        // g = d[e][A](".");
                        g = d[e]["split"](".");
                        
                        var ca = g.shift();
                        
                        // ("GA1" == ca || "1" == ca) && 1 < g[y] ? (ca = g.shift()[A]("-"), 1 == ca[y] && (ca[1] = "1"), ca[0] *= 1, ca[1] *= 1, g = {
                        ("GA1" == ca || "1" == ca) && 1 < g["length"] ? (ca = g.shift()["split"]("-"), 1 == ca["length"] && (ca[1] = "1"), ca[0] *= 1, ca[1] *= 1, g = {
                            r : ca,
                            
                            // s : g[H](".")
                            s : g["join"](".")
                            
                        // }) : g = void 0;
                        }) : g = undefined;
                        
                        // g && c[p](g)
                        if (g) {
                            c["push"](g);
                        }
                    }
                    
                    // if (1 == c[y]) {
                    if (1 == c["length"]) {
                        J(13);
                        
                        c = c[0].s;
                        
                        break i
                    }
                    
                    // if (0 == c[y])
                    if (0 == c["length"]) {
                        J(12);
                    } else {
                        J(14);
                        
                        // d = ic(P(a, W));
                        d = length_by_split_dot(P(a, "cookieDomain"));
                        
                        c = Gc(c, d, 0);
                        
                        // if (1 == c[y]) {
                        if (1 == c["length"]) {
                            c = c[0].s;
                            
                            break i
                        }
                        
                        // d = jc(P(a, Yb));
                        d = jc(P(a, "cookiePath"));
                        
                        c = Gc(c, d, 1);
                        
                        // c = c[0] && c[0].s;
                        if (c[0]) {
                            c = c[0];
                        } else {
                            c = c[0].s;
                        }
                        
                        break i
                    }
                }
                
                // c = void 0
                c = undefined
            }
            
            // c || (c = P(a, W), d = P(a, $b) || xa(), c = Xc("__utma", d, c), void 0 != c ? (J(10), c = c.O[1] + "." + c.O[2]) : c = void 0);
            if ( ! c){
                c = P(a, "cookieDomain");
                
                if ( ! P(a, "legacyCookieDomain")) {
                    d = get_main_domain();
                }
                
                c = Xc("__utma", d, c)
                
                if (undefined != c) {
                    J(10);
                    c = c.O[1] + "." + c.O[2];
                } else {
                    c = undefined;
                }
            }
            
            // c && (a[q].set(Q, c), hc = !0)
            if (c) {
                a["data"].set("clientId", c);
                hc = true
            }
        }
        
        // c = a.get(cc);
        c = a.get("allowAnchor");
        
        // if (e = (c = M[B][c ? "href" : "search"][m]("(?:&|#|\\?)" + K("_ga")[Qc](/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1") + "=([^&#]*)")) && 2 == c[y] ? c[1] : "")
        if (c) {
            c = document["location"]["href"]["match"]("(?:&|#|\\?)" + trans_UTF8("_ga")["replace"](/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1") + "=([^&#]*)")
        } else {
            c = document["location"]["search"]["match"]("(?:&|#|\\?)" + trans_UTF8("_ga")["replace"](/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1") + "=([^&#]*)")
        }
        
        if (c && 2 == c["length"]) { 
            e = c[1];
        } else {
            e = "";
        }

        if (e) {
            // a.get(bc) ? (c = e[t]("."), -1 == c ? J(22) : (d = e[F](c + 1), "1" != e[F](0, c) ? J(22) : (c = d[t]("."), -1 == c ? J(22) : (e = d[F](0, c), c = d[F](c + 1), e != Ic(c, 0) && e != Ic(c, -1) && e != Ic(c, -2) ? J(23) : (J(11), a[q].set(Q, c)))))) : J(21);
            if (a.get("allowLinker")) {
                c = e["indexOf"](".");
                
                if (-1 == c) {
                    J(22);
                } else {
                    d = e["substring"](c + 1);
                    
                    if ("1" != e["substring"](0, c)) {
                        J(22);
                    } else {
                        c = d["indexOf"](".");
                        
                        if (-1 == c) {
                            J(22);
                        } else {
                            e = d["substring"](0, c);
                            c = d["substring"](c + 1);
                            
                            if (e != Ic(c, 0) && e != Ic(c, -1) && e != Ic(c, -2)) {
                                J(23);
                            } else {
                                J(11);
                                
                                // a[q].set(Q, c);
                                a["data"].set("clientId", c);
                            }
                        }
                    }
                }
            } else {
                J(21);
            }
        }
        
        // b && (J(9), a[q].set(Q, K(b)));
        if (b) {
            J(9);
            a["data"].set("clientId", trans_UTF8(b));
        }
        
        // a.get(Q) || ((c = (c = O.gaGlobal && O.gaGlobal.vid) && -1 != c[ga](/^(?:utma\.)?\d+\.\d+$/) ? c : void 0) ? (J(17), a[q].set(Q, c)) : (J(8), a[q].set(Q, [fe() ^ Mc() & 2147483647, n.round((new Date)[da]() / 1E3)][H]("."))));
        if ( ! a.get("clientId")) {
            if (window.gaGlobal) {
                c = window.gaGlobal.vid;
            }

            if (c && (-1 != c["search"](/^(?:utma\.)?\d+\.\d+$/))) {
                c = c;
            } else {
                c = undefined;
            }
        }
        
        if ( ! a.get(Q) || c) {
            J(17);
            
            // a[q].set(Q, c);
            a["data"].set("clientId", c);
        } else {
            J(8);
            
            // a[q].set(Q, [fe() ^ Mc() & 2147483647, Math.round((new Date)[da]() / 1000)][H]("."));
            a["data"].set("clientId", [fe() ^ Mc() & 2147483647, Math.round((new Date)[da]() / 1000)][H]("."));
        }
        
        mc(a)
    // },
    };
    
    // Kc = function(a) {
    var Kc = function(a) {
        // var b = O[oa],
        // var b = window["navigator"];
        
        // c = O.screen,
        // var c = window.screen;
        
        // d = M[B];
        // var d = document["location"];
        
        // a.set(lb, ya(a.get(ec)));
        a.set("referrer", get_valid_referrer_url(a.get("alwaysSendReferrer")));
        
        // if (d) {
        if (document["location"]) {
            // var e = d.pathname || "";
            var e = document["location"].pathname || "";
            
            // "/" != e.charAt(0) && (J(31), e = "/" + e);
            if ("/" != e.charAt(0)) {
                J(31);
                e = "/" + e;
            }
            
            // a.set(kb, d[E] + "//" + d[ma] + e + d[ga])
            a.set("location", document["location"]["protocol"] + "//" + document["location"]["hostname"] + e + document["location"]["search"])
        }
        
        // c && a.set(qb, c.width + "x" + c.height);
        if (window.screen) {
            a.set("screenResolution", window.screen.width + "x" + window.screen.height);
        }
        
        // c && a.set(pb, c.colorDepth + "-bit");
        if (window.screen) {
            a.set("screenColors", window.screen.colorDepth + "-bit");
        }
        
        // var c = M.documentElement,
        // var c = document.documentElement;
        
        // g = (e = M.body) && e[la] && e[na],
        var g = (document.body && document.body["clientWidth"] && document.body["clientHeight"]);
        
        // ca = [];
        var ca = [];
        
        // c && c[la] && c[na] && ("CSS1Compat" === M.compatMode || !g) ? ca = [c[la], c[na]] : g && (ca = [e[la], e[na]]);
        if (document.documentElement && document.documentElement["clientWidth"] && document.documentElement["clientHeight"] && ("CSS1Compat" === document.compatMode || !g)) {
            ca = [document.documentElement["clientWidth"], document.documentElement["clientHeight"]];
        } else {
            if (g) {
                ca = [document.body["clientWidth"], document.body["clientHeight"]];
            }
        }
        
        // c = 0 >= ca[0] || 0 >= ca[1] ? "" : ca[H]("x");
        if ((0 >= ca[0]) || (0 >= ca[1]))
            c = "";
        } else {
            c = ca["join"]("x");
        }
        
        // a.set(rb, c);
        a.set("viewportSize", c);
        
        // a.set(tb, fc());
        a.set("flashVersion", fc());
        
        // a.set(ob, M.characterSet || M.charset);
        if (document.characterSet) {
            a.set("encoding", document.characterSet);
        } else {
            a.set("encoding", document.charset);
        }
        
        // a.set(sb, b && "function" === typeof b.javaEnabled && b.javaEnabled() || !1);
        if (window["navigator"] && "function" === typeof window["navigator"].javaEnabled) {
            a.set("javaEnabled", window["navigator"].javaEnabled());
        } else {
            a.set("javaEnabled", false);
        }
        
        // a.set(nb, (b && (b.language || b.browserLanguage) || "")[I]());
        if (window["navigator"]) {
            if (window["navigator"].language) {
                a.set("language", window["navigator"].language["toLowerCase"]());
            } else {
                a.set("language", window["navigator"].browserLanguage["toLowerCase"]());
            }
        } else {
            a.set("language", ("")["toLowerCase"]());
        }
        
        // if (d && a.get(cc) && (b = M[B][h])) {
        if (document["location"] && a.get("allowAnchor")) {
            var b = document["location"]["hash"];
            
            // b = b[A](/[?&#]+/);
            b = document["location"]["hash"]["split"](/[?&#]+/);
            
            var d = [];
            
            // for (c = 0; c < b[y]; ++c)
            for (c = 0; c < b["length"]; ++c) {
                // (D(b[c], "utm_id") || D(b[c], "utm_campaign") || D(b[c], "utm_source") || D(b[c], "utm_medium") || D(b[c], "utm_term") || D(b[c], "utm_content") || D(b[c], "gclid") || D(b[c], "dclid") || D(b[c], "gclsrc")) && d[p](b[c]);
                if (is_start_with(b[c], "utm_id") ||
                    is_start_with(b[c], "utm_campaign") ||
                    is_start_with(b[c], "utm_source") ||
                    is_start_with(b[c], "utm_medium") ||
                    is_start_with(b[c], "utm_term") ||
                    is_start_with(b[c], "utm_content") ||
                    is_start_with(b[c], "gclid") ||
                    is_start_with(b[c], "dclid") ||
                    is_start_with(b[c], "gclsrc")
                ) {
                    d["push"](b[c]);
                }
            }
            
            // 0 < d[y] && (b = "#" + d[H]("&"), a.set(kb, a.get(kb) + b))
            if (0 < d["length"]) {
                b = "#" + d["join"]("&");
                a.set("location", a.get("location") + b);
            }
        }
    };
    
    // pc[z].get = function(a) {
    pc["prototype"].get = function(a) {
        return this.b.get(a)
    };
    
    // pc[z].set = function(a, b) {
    pc["prototype"].set = function(a, b) {
        this.b.set(a,b)
    };
    
    var qc = {
        // pageview : [mb],
        pageview : ["page"],
        
        // event : [ub, xb, yb, zb],
        event : ["eventCategory", "eventAction", "eventLabel", "eventValue"],
        
        // social : [Bb, Cb, Db],
        social : ["socialNetwork", "socialAction", "socialTarget"],
        
        // timing : [Mb, Nb, Pb, Ob]
        timing : ["timingCategory", "timingVar", "timingValue", "timingLabel"]
    };
    
    // pc[z].send = function(a) {
    pc["prototype"].send = function(a) {
        // if (!(1 > arguments[y])) {
        if (!(1 > arguments["length"])) {
            // var b,
            var b;
            
            // c;
            var c;
            
            // "string" === typeof arguments[0] ? (b = arguments[0], c = [][ha][C](arguments, 1)) : (b=arguments[0] && arguments[0][Va], c = arguments);
            if ("string" === typeof arguments[0]) {
                b = arguments[0];
                c = []["slice"]["call"](arguments, 1);
            } else {
                b = arguments[0] && arguments[0]["hitType"];
                c = arguments;
            }
            
            // b && (c = za(qc[b] || [], c), c[Va] = b, this.b.set(c, void 0, !0), this.filters.D(this.b), this.b[q].m = {}, je(this.b))
            if (b) {
                c = za(qc[b] || [], c);
                c["hitType"] = b;
                this.b.set(c, undefined, true);
                this.filters.D(this.b);
                this.b["data"].m = {};
                je(this.b);
            }
        }
    };
    
    // var rc = function(a) {
    var is_prerender_exec_input = function(a) {
        // document.visibilityState
        
        // Returns a string denoting the visibility state of the document. Possible values:
        // visible : the page content may be at least partially visible. In practice this means that the page is the foreground tab of a non-minimized window.
        // hidden : the page content is not visible to the user. In practice this means that the document is either a background tab or part of a minimized window, or the OS screen lock is active.
        // prerender : the page content is being prerendered and is not visible to the user (considered hidden for purposes of document.hidden). The document may start in this state, but will never transition to it from another value. Note: browser support is optional.
        // unloaded : the page is being unloaded from memory. Note: browser support is optional.
        
        // if ("prerender" == M.visibilityState)
        if ("prerender" == document.visibilityState) {
            return false;
        }
        
        a();
        
        // return !0
        return true;
    };
    
    // var td = /^(?:(\w+)\.)?(?:(\w+):)?(\w+)$/,
    var td = /^(?:(\w+)\.)?(?:(\w+):)?(\w+)$/;
    
    // sc = function(a) {
    var sc = function(a) {
        // if (ea(a[0]))
        if (is_function(a[0])) {
            this.u = a[0];
        } else {
            var b = td.exec(a[0]);
            
            // null != b && 4 == b[y] && (this.c = b[1] || "t0", this.e = b[2] || "", this.d = b[3], this.a = [][ha][C](a, 1), this.e || (this.A = "create" == this.d, this.i = "require" == this.d, this.g = "provide" == this.d, this.ba = "remove" == this.d), this.i && (3 <= this.a[y] ? (this.X = this.a[1], this.W = this.a[2]) : this.a[1] && (qa(this.a[1]) ? this.X = this.a[1] : this.W = this.a[1])));
            if ((null != b) && (4 == b["length"])) {
                this.c = (b[1] || "t0");
                this.e = (b[2] || "");
                this.d = b[3];
                this.a = ([]["slice"]["call"](a, 1));
                
                if ( ! this.e) {
                    this.A = ("create" == this.d);
                    this.i = ("require" == this.d);
                    this.g = ("provide" == this.d);
                    this.ba = ("remove" == this.d);
                }
                
                if (this.i) {
                    if (3 <= this.a["length"]) {
                        this.X = this.a[1];
                        this.W = this.a[2];
                    } else {
                        if (this.a[1]) {
                            if (is_string(this.a[1])) {
                                this.X = this.a[1];
                            } else {
                                this.W = this.a[1];
                            }
                        }
                    }
                }
            }
            
            b = a[1];
            a = a[2];
            
            if ( ! this.d) {
                throw "abort";
            }
            
            // if (this.i && (!qa(b) || "" == b))
            if (this.i && ( ! is_string(b) || "" == b)) {
                throw "abort";
            }
            
            // if (this.g && (!qa(b) || "" == b || !ea(a)))
            if (this.g && ( ! is_string(b) || "" == b || ! is_function(a))) {
                throw "abort";
            }
            
            if (ud(this.c) || ud(this.e)) {
                throw "abort";
            }
            
            if (this.g && "t0" != this.c) {
                throw "abort";
            }
        }
    };
    
    // 檢查 input a 是否有 . || :
    function ud(a) {
        // return 0 <= a[t](".") || 0 <= a[t](":")
        return 0 <= a["indexOf"](".") || 0 <= a["indexOf"](":")
    };
    
    // var Yd,
    var Yd;
    
    // Zd,
    var Zd;
    
    // $d;
    var $d;
    
    Yd = new ee;
    $d = new ee;
    
    Zd = {
        ec : 45,
        ecommerce : 46,
        linkid : 47
    };
    
    var tc = function(a, b, c) {
        // b == N || b.get(V);
        b == N || b.get("name");
        
        var d = Yd.get(a);
        
        // if (!ea(d))
        if ( ! is_function(d)) {
            // return !1;
            return false;
        }
        
        b.plugins_ = b.plugins_ || new ee;
        
        if (b.plugins_.get(a)) {
            // return !0;
            return true;
        }
        
        b.plugins_.set(a, new d(b, c || {}));
        
        // return !0
        return true
    // },
    };
    
    // ae = function(a) {
    var ae = function(a) {
        function b(a) {
            // var b = (a[ma] || "")[A](":")[0][I](),
            var b = (a["hostname"] || "")["split"](":")[0]["toLowerCase"](),
            
            // c = (a[E] || "")[I](),
            var c = (a["protocol"] || "")["toLowerCase"]();
            
            // c = 1 * a[ja] || ("http:" == c ? 80 : "https:" == c ? 443 : "");
            c = 1 * a["port"] || ("http:" == c ? 80 : "https:" == c ? 443 : "");
            
            a = a.pathname || "";
            
            D(a, "/") || (a = "/" + a);
            
            return [b, "" + c, a]
        }
        
        // var c = M[u]("a");
        var c = document["createElement"]("a");
        
        // Pc(c, M[B][Ab]);
        set_href(c, document["location"]["href"]);
        
        // var d = (c[E] || "")[I](),
        var d = (c["protocol"] || "")["toLowerCase"]();
        
        // e = b(c),
        var e = b(c);
        
        // g = c[ga] || "",
        var g = c["search"] || "";
        
        // ca = d + "//" + e[0] + (e[1] ? ":" + e[1] : "");
        var ca = d + "//" + e[0];
        
        if (e[1]) {
            ca += ":" + e[1];
        }
        
        // D(a, "//") ? a = d + a : D(a, "/") ? a = ca + a : !a || D(a, "?") ? a = ca + e[2] + (a || g) : 0 > a[A]("/")[0][t](":") && (a = ca + e[2][F](0, e[2].lastIndexOf("/")) + "/" + a);
        if (D(a, "//")) {
            a = d + a;
        } else if (D(a, "/")) {
            a = ca + a;
        } else if (!a || D(a, "?")) {
            a = ca + e[2] + (a || g);
        } else if (0 > a["split"]("/")[0]["indexOf"](":")) {
            a = ca + e[2]["substring"](0, e[2].lastIndexOf("/")) + "/" + a;
        }
        
        // Pc(c,a);
        set_href(c,a);
        
        d = b(c);
        
        return {
            // protocol : (c[E] || "")[I](),
            protocol : (c["protocol"] || "")["toLowerCase"](),
            
            host : d[0],
            port : d[1],
            path : d[2],
            
            // G : c[ga] || "",
            G : c["search"] || "",
            
            url : a || ""
        }
    };
    
    var Z = {
        ga : function() {
            Z.f = []
        }
    };
    
    Z.ga();
    
    Z.D = function(a) {
        // var b = Z.J[G](Z, arguments),
        var b = Z.J["apply"](Z, arguments);
        
        b = Z.f.concat(b);
        
        // for (Z.f = []; 0 < b[y] && !Z.v(b[0]) && !(b.shift(), 0 < Z.f[y]); )
        for (Z.f = []; 0 < b["length"] && !Z.v(b[0]) && !(b.shift(), 0 < Z.f["length"]); )
            ;
        
        Z.f = Z.f.concat(b)
    };
    
    Z.J = function(a) {
        for (var b = [], c = 0; c < arguments["length"]; c++)
            try {
                var d = new sc(arguments[c]);
                
                if (d.g) {
                    Yd.set(d.a[0], d.a[1]);
                } else {
                    if (d.i) {
                        // var e = d,
                        var e = d;
                        
                        // g = e.a[0];
                        var g = e.a[0];
                        
                        // if (!ea(Yd.get(g)) && !$d.get(g)) {
                        if ( ! is_function(Yd.get(g)) && ! $d.get(g)) {
                            // Zd[ra](g) && J(Zd[g]);
                            if (Zd["hasOwnProperty"](g)) {
                                J(Zd[g]);
                            }
                            
                            var ca = e.X;
                            
                            // !ca && Zd[ra](g) ? (J(39), ca = g + ".js") : J(43);
                            if ( !ca && Zd["hasOwnProperty"](g)) {
                                J(39);
                                ca = g + ".js";
                            } else {
                                J(43);
                            }
                            
                            if (ca) {
                                // ca && 0 <= ca[t]("/") || (ca = (Ba || Ud() ? "https:" : "http:") + "//www.google-analytics.com/plugins/ua/" + ca);
                                if (ca && !(0 <= ca["indexOf"]("/"))) {
                                    if (is_use_SSL || is_https()) {
                                        ca = "https://www.google-analytics.com/plugins/ua/" + ca;
                                    } else {
                                        ca = "http://www.google-analytics.com/plugins/ua/" + ca;
                                    }
                                }
                                
                                // var l = ae(ca),
                                var l = ae(ca);
                                
                                // e = void 0;
                                e = undefined;
                                
                                // var k = l[E],
                                var k = l["protocol"];
                                
                                // w = M[B][E],
                                var w = document["location"]["protocol"];
                                
                                // e = "https:" == k || k == w ? !0 : "http:" != k ? !1 : "http:" == w;
                                if ("https:" == k || k == w) {
                                    e =  true;
                                } else {
                                    if ("http:" != k) {
                                        e = false;
                                    } else {
                                        e = ("http:" == w);
                                    }
                                }
                                
                                var Xd;
                                
                                if (Xd = e) {
                                    // var e = l,
                                    var e = l;
                                    
                                    // be = ae(M[B][Ab]);
                                    var be = ae(document["location"]["href"]);
                                    
                                    // if (e.G || 0 <= e.url[t]("?") || 0 <= e.path[t]("://"))
                                    if (e.G || 0 <= e.url["indexOf"]("?") || 0 <= e.path["indexOf"]("://")) {
                                        // Xd = !1;
                                        Xd = false;
                                    // else if (e.host == be.host && e[ja] == be[ja])
                                    } else if (e.host == be.host && e["port"] == be["port"]) {
                                        // Xd =!0;
                                        Xd = true;
                                    } else {
                                        // var ce = "http:" == e[E] ? 80 : 443;
                                        var ce = "http:" == e["protocol"] ? 80 : 443;
                                        
                                        // Xd = "www.google-analytics.com" == e.host && (e[ja] || ce) == ce && D(e.path, "/plugins/") ? !0 : !1
                                        Xd = "www.google-analytics.com" == e.host && (e["port"] || ce) == ce && D(e.path, "/plugins/") ? true : false
                                    }
                                }
                                
                                // Xd && (wa(l.url), $d.set(g, !0))
                                Xd && (insert_js_include(l.url), $d.set(g, true))
                            }
                        }
                    }
                    
                    // b[p](d)
                    b["push"](d)
                }
            }catch(de) {}
        
        return b
    };
    
    Z.v = function(a) {
        try {
            if (a.u) {
                // a.u[C](O, N.j("t0"));
                a.u["call"](window, N.j("t0"));
            } else {
                var b = a.c == gb ? N : N.j(a.c);
                
                if (a.A) {
                    // "t0" == a.c && N.create[G](N, a.a);
                    "t0" == a.c && N.create["apply"](N, a.a);
                } else if (a.ba) {
                    N.remove(a.c);
                } else if (b) {
                    if (a.i) {
                        if (!tc(a.a[0], b, a.W)) {
                            // return !0
                            return true;
                        }
                    } else if (a.e) {
                        var c = a.d;
                        var d = a.a;
                        var e = b.plugins_.get(a.e);
                        
                        // e[c][G](e, d)
                        e[c]["apply"](e, d)
                    } else {
                        // b[a.d][G](b,a.a)
                        b[a.d]["apply"](b,a.a)
                    }
                }
            }
        } catch(g) {}
    };
    
    var N = function(a) {
        J(1);
        
        // Z.D[G](Z, [arguments])
        Z.D["apply"](Z, [arguments])
    };
    
    N.h = {};
    N.P = [];
    N.L = 0;
    N.answer = 42;
    
    var uc = [
        // Na,
        "trackingId",
        
        // W,
        "cookieDomain",
        
        // V
        "name"
    ];
    
    N.create = function(a) {
        // var b = za(uc, [][ha][C](arguments));
        var b = za(uc, []["slice"]["call"](arguments));
        
        // b[V] || (b[V] = "t0");
        b["name"] || (b["name"] = "t0");
        
        // var c = "" + b[V];
        var c = "" + b["name"];
        
        if (N.h[c]) {
            return N.h[c];
        }
        
        b = new pc(b);
        
        N.h[c] = b;
        
        // N.P[p](b);
        N.P["push"](b);
        
        return b
    };
    
    N.remove = function(a) {
        // for (var b = 0; b < N.P[y]; b++)
        for (var b = 0; b < N.P["length"]; b++) {
            // if (N.P[b].get(V) == a) {
            if (N.P[b].get("name") == a) {
                N.P.splice(b, 1);
                N.h[a] = null;
                
                break;
            }
        }
    };
    
    N.j = function(a) {
        return N.h[a]
    };
    
    N.K = function() {
        // return N.P[ha](0)
        return N.P["slice"](0)
    };
    
    N.N = function() {
        "ga" != gb && J(49);
        
        // var a = O[gb];
        var a = window[gb];
        
        if (!a || 42 != a.answer) {
            N.L = a && a.l;
            
            // N.loaded = !0;
            N.loaded = true;
            
            // var b = O[gb] = N;
            var b = window[gb] = N;
            
            X("create", b, b.create);
            X("remove", b, b.remove);
            X("getByName", b, b.j, 5);
            X("getAll", b, b.K, 6);
            
            // b = pc[z];
            b = pc["prototype"];
            
            X("get", b, b.get, 7);
            X("set", b, b.set, 4);
            
            // X("send", b, b[xc]);
            X("send", b, b["send"]);
            
            // b = Ya[z];
            b = Ya["prototype"];
            
            X("get", b, b.get);
            X("set", b, b.set);
            
            // if (!Ud() && !Ba) {
            if ( ! is_https() && ! is_use_SSL) {
                t : {
                    // for(var b = M.getElementsByTagName("script"), c = 0; c < b[y] && 100 > c; c++) {
                    for(var b = document.getElementsByTagName("script"), c = 0; c < b["length"] && 100 > c; c++) {
                        var d = b[c].src;
                        
                        // if (d && 0 == d[t]("https://www.google-analytics.com/analytics")) {
                        if (d && 0 == d["indexOf"]("https://www.google-analytics.com/analytics")) {
                            J(33);
                            
                            // b = !0;
                            b = true;
                            
                            break t;
                        }
                    }
                    
                    // b = !1
                    b = false
                }
                
                // b && (Ba = !0)
                b && (is_use_SSL = true)
            }
            
            // Ud() || Ba || !Ed(new Od) || (J(36), Ba = !0);
            if ( ! is_https() && ! is_use_SSL && !!Ed(new Od)) {
                J(36);
                is_use_SSL = true;
            }
            
            // (O.gaplugins = O.gaplugins || {}).Linker = Dc;
            (window.gaplugins = window.gaplugins || {}).Linker = Dc;
            
            // b = Dc[z];
            b = Dc["prototype"];
            
            Yd.set("linker", Dc);
            
            X("decorate", b, b.Q, 20);
            X("autoLink", b, b.S, 25);
            
            Yd.set("displayfeatures", fd);
            Yd.set("adfeatures", Kd);
            
            a = a && a.q;
            
            // ka(a) ? Z.D[G](N, a) : J(50)
            if (is_array(a)) {
                Z.D["apply"](N, a);
            } else {
                J(50);
            }
        }
    };
    
    N.k = function() {
        // for (var a = N.K(), b = 0; b < a[y]; b++)
        for (var a = N.K(), b = 0; b < a["length"]; b++) {
            // a[b].get(V);
            a[b].get("name");
        }
    };
    
    (function() {
        var a = N.N;
        
        // if ( ! rc(a)) {
        if ( ! is_prerender_exec_input(a)) {
            J(16);
            
            // var b = !1,
            var switch_status = false;
            
            // c = function() {
            var c = function() {
                // if (!b && rc(a)) {
                if ( ! switch_status && is_prerender_exec_input(a)) {
                    // b = !0;
                    switch_status = true;
                    
                    // var d = c,
                    var d = c;
                    
                    // e = M;
                    // var e = document;
                    
                    // e.removeEventListener ? e.removeEventListener("visibilitychange", d, !1) : e.detachEvent && e.detachEvent("onvisibilitychange", d)
                    // DOM => removeEventListener(event, function, useCapture)
                    // DOM2 => detachEvent(event, function)
                    if (document.removeEventListener) {
                        document.removeEventListener("visibilitychange", d, false);
                    } else if (document.detachEvent) {
                            document.detachEvent("onvisibilitychange", d);
                        }
                    }
                }
            };
            
            // L(M, "visibilitychange", c)
            add_DOM_event(document, "visibilitychange", c)
        }
    })();
    
    // function La(a) {
    function domain_hash(domain_string) {
        // var b = 1,
        var hash = 1;
        
        // c = 0,
        var c = 0;
        
        // d;
        var index;
        
        // if (a)
        if (domain_string) {
            // for (b = 0, d = a[y] - 1; 0 <= d; d--)
            for (hash = 0, index = domain_string["length"] - 1; 0 <= index; index--) {
                // c = a.charCodeAt(d), b= (b << 6 & 268435455) + c + (c << 14), c = b & 266338304, b = 0 != c ? b ^ c >> 21 : b;
                c = domain_string.charCodeAt(index);
                hash = ((hash << 6) & 268435455) + c + (c << 14);
                c = hash & 266338304;
                hash = 0 != c ? hash ^ c >> 21 : hash;
            }
        }
        
        // return b
        return hash
    };
})(window);
