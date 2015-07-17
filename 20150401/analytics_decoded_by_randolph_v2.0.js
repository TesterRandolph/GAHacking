(function(){
    // 將 b link 設定到 a object 的 href 屬性
    // function Pc(a,b){}
    function set_href(target, url) {
        return target.href = url;
    }
    
    // var $c = function(a) {
    var $c = function(init_array) {
        // this.w = a || []
        if (init_array) {
            this.w = init_array;
        } else {
            this.w = [];
        }
    };
    
    // $c["prototype"].set = function(a) {
    $c["prototype"].set = function(input_int) {
        // this.w[a] = true;
        this.w[input_int] = true;
    };
    
    $c["prototype"].encode = function() {
        // for (var a = [], b = 0; b < this.w["length"]; b++ ) {
        var output = [];
        
        // for (b = 0; b < this.w["length"]; b++) {
        for (index = 0; index < this.w["length"]; index++) {
            // if (this.w[b]) {
            if (this.w[index]) {
                // a[Math.floor(b / 6)] = a[Math.floor(b / 6)] ^ 1 << b % 6;
                output[Math.floor(index / 6)] = output[Math.floor(index / 6)] ^ (1 << (index % 6));
            }
        }
        
        // for (b = 0; b < a["length"]; b++) {
        for (pointer = 0; pointer < output["length"]; pointer++) {
            // a[b] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[b] || 0);
            if (output[pointer]) {
                output[pointer] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(output[pointer]);
            } else {
                output[pointer] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(0);
            }
        }
        
        return output["join"]("") + "~";
    };
    
    var vd = new $c;
    
    // function J(a) {
    function J(input_int) {
        // vd.set(a)
        vd.set(input_int)
    }
    
    var Nd = function(a, b) {
        var c = new $c(Dd(a));
        
        c.set(b);
        
        a.set("_um", c.w)
    };
    
    var Td = function(a) {
        a = new $c(Dd(a));
        
        // for (var b = vd.w["slice"](), c = 0; c < a.w["length"]; c++) {
        var b = vd.w["slice"]();
        
        for (index = 0; index < a.w["length"]; index++) {
            // if ( ! b[c]) {
            if ( ! b[index]) {
                // b[c] = a.w[c];
                b[index] = a.w[index];
            }
        }
        
        return (new $c(b)).encode();
    };
    
    var Dd = function(a) {
        a = a.get("_um");
        
        if ( ! is_array(a)) {
            a = [];
        }
        
        return a
    };
    
    // 檢查 inpur a 是否為 function
    // var ea = function(a) {}
    // var is_function = function(a) {
    var is_function = function(target) {
        // return ("function" == typeof a)
        return ("function" == typeof target)
    };
    
    // 檢查 input a 是否為 array
    // ka = function(a) {}
    // var is_array = function(a) {
    var is_array = function(target) {
        // return ("[object Array]" == Object["prototype"].toString["call"](Object(a)))
        return ("[object Array]" == Object["prototype"].toString["call"](Object(target)))
    };
    
    // 檢查 input a 是否為 string
    // qa = function(a){}
    // var is_string = function(a){
    var is_string = function(target){
        // return ((undefined != a) && (-1 < (a.constructor + "")["indexOf"]("String")))
        return ((undefined != target) && (-1 < (target.constructor + "")["indexOf"]("String")))
    };
    
    // 檢查 input string b 是否為 a 的開頭
    // var D = function(a, b) {
    var is_start_with = function(target, prefix) {
        // return (0 == a["indexOf"](b))
        if (0 == target["indexOf"](prefix)) {
            return true;
        }
        
        return false;
    };
    
    // 過濾 input string a 的開頭與結尾的 \s 或是 \xa0 ( BOM 檔頭 )
    // sa = function(a) {}
    // var filter_space = function(a) {
    var filter_space = function(target_string) {
        // if (a) {
        if (target_string) {
            // return a["replace"](/^[\s\xa0]+|[\s\xa0]+$/g, "");
            return target_string["replace"](/^[\s\xa0]+|[\s\xa0]+$/g, "");
        }
        
        return "";
    };
    
    // 建立 1x1 的 DOM img 物件
    // ta = function(a){}
    // var create_DOM_img = function(a){
    var create_DOM_img = function(image_url){
        // var b = document["createElement"]("img");
        var dom_image_obj = document["createElement"]("img");
        
        // b.width = 1;
        dom_image_obj.width = 1;
        
        // b.height = 1;
        dom_image_obj.height = 1;
        
        // b.src = a;
        dom_image_obj.src = image_url;
        
        // return b
        return dom_image_obj;
    };
    
    var ua = function(){};
    
    // 如果有 encodeURIComponent()，則將 input string 轉換成 UTF-8 編碼
    // K = function(a) {}
    // var trans_UTF8 = function(a) {
    var trans_UTF8 = function(target_string) {
        if (encodeURIComponent instanceof Function) {
            // return encodeURIComponent(a);
            return encodeURIComponent(target_string);
        }
        
        J(28);
        
        // return a
        return target_string;
    };
    
    // 動態掛載事件 ( 相容 DOM / DOM2 )
    // L = function(a, b, c, d) {}
    var add_DOM_event = function(target, event, call_function, capture_status) {
        try {
            if (target.addEventListener) {
                // if 'undefined' === typeof capture_status, !!capture_status = false
                target.addEventListener(event, call_function, !!capture_status); // DOM => addEventListener(event, function, capture/bubble)
            } esle if (target.attachEvent) {
                target.attachEvent("on" + event, call_function); // DOM2 => attachEvent(event, function)
            }
        } catch(e) {
            J(27)
        }
    };
    
    // 動態插入引用的 Javascript Source
    // wa = function(a, b) {}
    var insert_js_include = function(target_url, target_id) {
        if (target_url) {
            // var c = document["createElement"]("script");
            var dom_srcipt_obj = document["createElement"]("script");
            
            // c.type = "text/javascript";
            dom_srcipt_obj.type = "text/javascript";
            
            // c.async = true;
            dom_srcipt_obj.async = true;
            
            // c.src = target_url;
            dom_srcipt_obj.src = target_url;
            
            if (target_id) {
                // c.id = target_id;
                dom_srcipt_obj.id = target_id;
            }
            
            // var d = document.getElementsByTagName("script")[0];
            var first_dom_script_obj = document.getElementsByTagName("script")[0];
            
            // d.parentNode.insertBefore(c, d)
            first_dom_script_obj.parentNode.insertBefore(dom_srcipt_obj, first_dom_script_obj)
        }
    };
    
    // 檢查是否為 https 連線
    // Ud = function() {}
    var is_https = function() {
        return "https:" == document["location"]["protocol"];
    };
    
    // 取出主要域名
    // xa = function() {}
    var get_main_domain = function() {
        // var a = "" + document["location"]["hostname"];
        var hostname = "" + document["location"]["hostname"];
        
        // 截取主要域名 ( 去除 www. )
        // if (0 == a["indexOf"]("www.")) {
        if (0 == hostname["indexOf"]("www.")) {
            // return a["substring"](4);
            return hostname["substring"](4);
        }
        
        // return a;
        return hostname;
    };
    
    // ya = function(a) {}
    var get_valid_referrer_url = function(a) {
        var referrer_url = document.referrer;
        
        if (/^https?:\/\//i["test"](referrer_url)) {
            if (a) {
                return referrer_url;
            }
            
            a = "//" + document["location"]["hostname"];
            
            var c = referrer_url["indexOf"](a);
            
            if (5 == c || 6 == c) { // "http:" = 5、"https:" = 6
                if (a = referrer_url.charAt(c + a["length"]), "/" == a || "?" == a || "" == a || ":" == a) {
                    return;
                }
            }
            
            return referrer_url;
        }
    };
    
    /*
    [
        "trackingId",
        "cookieDomain",
        "name"
    ],
    []["slice"]["call"](arguments)
    */
    
    var za = function(a, b) {
        if (1 == b["length"] && null != b[0] && "object" === typeof b[0]) {
            return b[0];
        }
        
        // for (var c = {}, d = Math.min(a["length"] + 1, b["length"]), e = 0; e < d; e++) {
        var c = {};
        var d = Math.min(a["length"] + 1, b["length"]);
        
        // for (e = 0; e < d; e++) {
        for (index = 0; index < d; index++) {
            // if ("object" === typeof b[e]) {
            if ("object" === typeof b[index]) {
                // for (var g in b[e]) {
                for (var g in b[index]) {
                    // b[e]["hasOwnProperty"](g) && (c[g] = b[e][g]);
                    if (b[index]["hasOwnProperty"](g)) {
                        c[g] = b[index][g];
                    }
                }
                
                break;
            } else {
                // e < a["length"] && (c[a[e]] = b[e]);
                if (index < a["length"]) {
                    c[a[index]] = b[index];
                }
            }
        }
        
        return c
    };
    
    var ee = function() {
        this.keys=[];
        this.values={};
        this.m={}
    };
    
    ee["prototype"].set = function(property_name, property, is_property) {
        this.keys["push"](property_name);
        
        if (is_property) {
            this.m[":" + property_name] = property;
        } else {
            this.values[":" + property_name] = property;
        }
    };
    
    ee["prototype"].get = function(property_name) {
        if (this.m["hasOwnProperty"](":" + property_name)) {
            return this.m[":" + property_name];
        }
        
        return this.values[":" + property_name];
    };
    
    ee["prototype"].map = function(a) {
        for (var index = 0; index < this.keys["length"]; index++) {
            var property_name = this.keys[index];
            var property = this.get(property_name);
            
            if (property) {
                a(property_name, property);
            }
        }
    };
    
    var Mc = function() {
        for (
            var a = window["navigator"].userAgent + (document["cookie"] ? document["cookie"] : "") + (document.referrer ? document.referrer : ""),
            var b = a["length"],
            var c = window.history["length"];
            0 < c;
        ) {
            a += c-- ^ b++;
        }
        
        return ga_data_string_hash(a)
    };
    
    var Aa = function(a) {
        var b = window._gaUserPrefs;
        
        if (b && b.ioo && b.ioo() || a && true === window["ga-disable-" + a]) {
            return true;
        }
        
        try {
            var c = window.external;
            
            if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) {
                return true
            }
        } catch(d) {}
        
        return false
    };
    
    // var Ca = function(a) {}
    var get_cookie_by_input = function(a) {
        var b = [];
        
        var c = document["cookie"]["split"](";");
        
        a = new RegExp("^\\s*" + a + "=\\s*(.*?)\\s*$");
        
        for (var d = 0; d < c["length"]; d++) {
            var e = c["data"]["match"](a);
            
            if (e) {
                b["push"](e[1]);
            }
        }
        
        return b;
    };
    
    var zc = function(a, b, c, d, e, g) {
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
        
        if ( ! e) {
            return false;
        }
        
        if (b && 1200 < b["length"]) {
            b = b["substring"](0, 1200);
            J(24);
        }
        
        c = a + "=" + b + "; path=" + c + "; ";
        
        if (g) {
            c += "expires=";
            c += (new Date((new Date)["getTime"]() + g)).toGMTString();
            c += "; ";
        }
        
        if (d && "none" != d) {
            c += "domain=" + d + ";";
        }
        
        d = document["cookie"];
        
        document.cookie = c;
        
        if (d != document["cookie"]) {
            d = false;
        } else {
            d = true;
        }
        
        if ( ! d) {
            t : {
                a = get_cookie_by_input(a);
                
                for (d = 0; d < a["length"]; d++) {
                    if (b == a[d]) {
                        d = true;
                        break t
                    }
                }
                
                d = false
            }
        }
        
        return d
    };
    
    // Encoding utility '(' & ')'
    // Cc = function(a) {}
    var encoding_parenthesis = function(a) {
        return trans_UTF8(a)["replace"](/\(/g, "%28")["replace"](/\)/g, "%29")
    };
    
    var vc = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/;
    
    var eb = /(^|\.)doubleclick\.net$/i;
    
    // var oc = function() {}
    var get_ga_domain = function() {
        if (is_use_SSL || is_https()) {
            return "https://www.google-analytics.com"
        }
        
        return "http://www.google-analytics.com"
    };
    
    var Da = function(a) {
        this.name = "len";
        this.message = a + "-8192"
    };
    
    var wc = function(a, b, c) {
        var d = create_DOM_img(a + "?" + b);
        
        d.onload = d.onerror = function() {
            d.onload = null;
            d.onerror = null;
            c()
        }
    };
    
    var xd = function(a, b, c) {
        var d;
        
        d = window.XDomainRequest;
        
        if ( ! d) {
            return false;
        }
        
        d = new d;
        
        d.open("POST", a);
        d.onerror = function() {
            c()
        };
        
        d.onload = c;
        
        d["send"](b);
        
        return true
    };
    
    var wd = function(a, b, c) {
        var d = window.XMLHttpRequest;
        
        if (!d) {
            return false;
        }
        
        var e = new d;
        
        if (!("withCredentials" in e)) {
            return false;
        }
        
        e.open("POST", a, true);
        
        e.withCredentials = true;
        e.setRequestHeader("Content-Type", "text/plain");
        e.onreadystatechange = function() {
            4 == e.readyState && (c(), e = null)
        };
        
        e["send"](b);
        
        return true
    };
    
    var ge = function(a, b, c) {
        // 1 <= 100 * n.random() || Aa("?") || (a = ["t=error", "_e=" + a, "_v=j33", "sr=1"], b && a["push"]("_f=" + b), c && a["push"]("_m=" + trans_UTF8(c["substring"](0, 100))), a["push"]("aip=1"), a["push"]("z=" + get_rand_by_math()), wc(get_ga_domain() + "/collect", a["join"]("&"), ua))
        if ( ! (1 <= 100 * Math.random()) &&
             ! Aa("?")
        ) {
            a = ["t=error", "_e=" + a, "_v=j33", "sr=1"];
            
            b && a["push"]("_f=" + b);
            c && a["push"]("_m=" + trans_UTF8(c["substring"](0, 100)));
            
            a["push"]("aip=1");
            a["push"]("z=" + get_rand_by_math());
            
            wc(get_ga_domain() + "/collect", a["join"]("&"), ua);
        }
    };
    
    var Ha = function() {
        this.t = []
    };
    
    Ha["prototype"].add = function(a) {
        this.t["push"](a)
    };
    
    Ha["prototype"].D = function(a) {
        try {
            for (var b = 0; b < this.t["length"]; b++) {
                var c = a.get(this.t[b]);
                
                if (c && is_function(c)) {
                    c["call"](window, a);
                }
            }
        } catch(d) {}
        
        b = a.get("hitCallback");
        
        if (b != ua && is_function(b)) {
            a.set("hitCallback", ua, true);
            setTimeout(b, 10)
        }
    };
    
    function Ja(a) {
        if (
            100 != a.get("sampleRate") &&
            
            (ga_data_string_hash(P(a, "clientId")) % 1E4) >= (100 * R(a, "sampleRate"))
        ) {
            throw "abort";
        }
    }
    
    function Ma(a) {
        if (Aa(P(a, "trackingId"))) {
            throw "abort";
        }
    }
    
    function Oa() {
        var a = document["location"]["protocol"];
        
        if ("http:" != a && "https:" != a) {
            throw "abort";
        }
    }
    
    function Pa(a) {
        try {
            window.XMLHttpRequest && "withCredentials" in new window.XMLHttpRequest ? J(40) : window.XDomainRequest && J(41), window["navigator"]["sendBeacon"] && J(42)
        } catch(b) {}
        
        a.set("usage", Td(a), true);
        
        a.set("_s", R(a, "_s") + 1);
        
        var c = [];
        
        Qa.map(function(b, e) {
            if (e.p) {
                var g = a.get(b);
                
                if (undefined != g && g != e["defaultValue"]) {
                    if ("boolean" == typeof g) {
                        g *= 1;
                        c["push"](e.p + "=" + trans_UTF8("" + g));
                    }
                }
            }
        });
        
        c["push"]("z=" + get_rand_uint32_by_crypto());
        
        a.set("hitPayload", c["join"]("&"), true);
    }
    
    function Sa(a) {
        if (P(a, "transportUrl")) {
            var b = P(a, "transportUrl");
        } else {
            var b = get_ga_domain() + "/collect";
        }
        
        var c = P(a, "hitPayload");
        
        var d = a.get("hitCallback");
        
        var e = a.get("useBeacon");
        
        var d = d || ua;
        
        e && (e = d, window["navigator"]["sendBeacon"] ? window["navigator"]["sendBeacon"](b, c) ? (e(), e = true) : e = false : e = false);
        
        if ( ! e) {
            if (2036 >= c["length"]) {
                wc(b, c, d);
            } else if (8192 >= c["length"]) {
                wd(b, c, d) || xd(b, c, d) || wc(b, c, d);
            } else {
                throw ge("len", c["length"]), new Da(c["length"]);
            }
        }
        
        a.set("hitCallback", ua, true)
    }
    
    function Hc(a) {
        var b = window.gaData;
        
        if (b) {
            if (b.expId) {
                a.set("expId", b.expId);
            }
            
            if (b.expVar) {
                a.set("expVar", b.expVar);
            }
        }
    }
    
    function cd() {
        if (window["navigator"] && "preview" == window["navigator"].loadPurpose) {
            throw "abort";
        }
    }
    
    function yd(a) {
        var b = window.gaDevIds;
        
        if (is_array(b) && 0 != b["length"]) {
            a.set("&did", b["join"](","), true);
        }
    }
    
    function vb(a) {
        if ( ! a.get("trackingId")) {
            throw "abort";
        }
    };
    
    // var hd = function() {}
    var get_rand_by_math = function() {
        // Douable mersenne Number 2^(2^n - 1) - 1 / M31 = 2^31 - 1 = Mm5 = 2^(2^5-1) - 1 = 2147483647
        return Math.round(2147483647 * Math.random())
    };
    
    // Bd = function() {}
    var get_rand_uint32_by_crypto = function() {
        try {
            var a = new Uint32Array(1);
            
            window.crypto.getRandomValues(a);
            
            return a[0] & 2147483647
        } catch(b) {
            return get_rand_by_math()
        }
    };
    
    function Ta(a) {
        var b = R(a, "_hc");
        
        if (500 <= b) {
            J(15);
        }
        
        var c = P(a, "hitType");
        
        if ("transaction" != c && "item" != c) {
            var c = R(a, "_to");
            
            var d = (new Date)["getTime"]();
            
            var e = R(a, "_ti");
            
            if (0 == e) {
                a.set("_ti", d);
            }
            
            e = Math.round(2 * (d - e) / 1000);
            
            if (0 < e) {
                c = Math.min(c + e, 20);
                a.set("_ti", d);
            }
            
            if (0 >= c) {
                throw "abort";
            }
            
            a.set("_to", --c);
        }
        
        a.set("_hc", ++b);
    };
    
    var Ya = function() {
        this.data = new ee
    };
    
    var Qa = new ee;
    
    var Za = [];
    
    Ya["prototype"].get = function(a) {
        var b = $a(a);
        
        var c = this["data"].get(a);
        
        if (b && undefined == c) {
            if (is_function(b["defaultValue"])) {
                c =  b["defaultValue"]();
            } else {
                c = b["defaultValue"];
            }
        }
        
        if (b && b.n) {
            return b.n(this, a, c)
        }
        
        return c;
    };
    
    // var P = function(a, b) {
    var P = function(target_obj, string_name) {
        // var c = a.get(b);
        var c = target_obj.get(string_name);
        
        if (undefined == c) {
            return "";
        }
        
        return "" + c
    };
    
    var R = function(a, b) {
        var c = a.get(b);
        
        if (undefined == c) || ("" === c)) {
            return 0;
        }
        
        return 1 * c;
    };
    
    Ya["prototype"].set = function(a, b, c) {
        if (a) {
            if ("object" == typeof a) {
                for (var d in a) {
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
        if (undefined != c) {
            switch(b) {
                case "trackingId":
                    wb["test"](c);
            }
        }
        
        var e = $a(b);
        
        // e && e.o ? e.o(a, b, c, d) : a[q].set(b, c, d)
        if (e && e.o) {
            e.o(a, b, c, d);
        } else {
            a["data"].set(b, c, d);
        }
    };
    
    var bb = function(a, b, c, d, e) {
        this.name = a;
        this.p = b;
        this.n = d;
        this.o = e;
        this.defaultValue = c
    };
    
    var $a = function(a) {
        var b = Qa.get(a);
        
        if ( ! b) {
            // for (var c = 0; c < Za["length"]; c++) {
            for (var index = 0; index < Za["length"]; index++) {
                // var d = Za[c], e = d[0].exec(a);
                var d = Za[index];
                var e = d[0].exec(a); // e => matches array [full, in()], ex: ["contentGroup01", "01"]
                
                if (e) {
                    b = d[1](e); // b => New bb();
                    
                    Qa.set(b["name"], b);
                    
                    break
                }
            }
        }
        
        return b
    };
    
    var yc = function(a) {
        var b;
        
        Qa.map(function(property_name, property) {
            if (property.p == a) {
                b = property;
            }
        });
        
        return b && b["name"]
    };
    
    var S = function(property_name, property_value, default_value, d, e) {
        var a = new bb(property_name, property_value, default_value, d, e);
        
        Qa.set(a["name"], a);
        
/*
        // 反解後，已不需要此用途
        return a["name"];
*/
    };
    
    // var cb = function(a, b) {
    var cb = function(Regular_rule, callback) {
        // Za["push"]([new RegExp("^" + a + "$"), b])
        Za["push"]([new RegExp("^" + Regular_rule + "$"), callback]);
    };
    
    var gb = is_string(window.GoogleAnalyticsObject) && filter_space(window.GoogleAnalyticsObject) || "ga";
    
    // Ba = !1,
    var is_use_SSL = false;
    
    // he = S("_br"),
    S("_br");
    
    // hb = T("apiVersion", "v"),
    S("apiVersion", "v", undefined, undefined, function(){});
    
    // ib = T("clientVersion", "_v");
    S("clientVersion", "_v", undefined, undefined, function(){});
    
    S("anonymizeIp","aip");
    
    // var jb = S("adSenseId", "a"),
    S("adSenseId", "a");
    
    // Va = S("hitType", "t"),
    S("hitType", "t");
    
    // Ia = S("hitCallback"),
    S("hitCallback");
    
    // Ra = S("hitPayload");
    S("hitPayload");
    
    S("nonInteraction", "ni");
    S("currencyCode", "cu");
    
    // var Vd = S("useBeacon", void 0, !1);
    S("useBeacon", undefined, false);
    
    S("dataSource", "ds");
    S("sessionControl", "sc", "");
    S("sessionGroup", "sg");
    S("queueTime", "qt");
    
    // var Ac = S("_s", "_s");
    S("_s", "_s");
    
    S("screenName", "cd");
    
    // var kb = S("location", "dl", ""),
    S("location", "dl", "");
    
    // lb = S("referrer", "dr"),
    S("referrer", "dr");
    
    // mb = S("page", "dp", "");
    S("page", "dp", "");
    
    S("hostname", "dh");
    
    // var nb = S("language", "ul"),
    S("language", "ul");
    
    // ob = S("encoding", "de");
    S("encoding", "de");
    
    S("title", "dt", function() {
        return document.title || undefined
    });
    
    cb("contentGroup([0-9]+)", function(a) {
        return new bb(a[0], "cg" + a[1])
    });
    
    // var pb = S("screenColors", "sd"),
    S("screenColors", "sd");
    
    // qb = S("screenResolution", "sr"),
    S("screenResolution", "sr");
    
    // rb = S("viewportSize", "vp"),
    S("viewportSize", "vp");
    
    // sb = S("javaEnabled", "je"),
    S("javaEnabled", "je");
    
    // tb = S("flashVersion", "fl");
    S("flashVersion", "fl");
    S("campaignId", "ci");
    S("campaignName", "cn");
    S("campaignSource", "cs");
    S("campaignMedium", "cm");
    S("campaignKeyword", "ck");
    S("campaignContent", "cc");
    
    // var ub = S("eventCategory", "ec"),
    S("eventCategory", "ec");
    
    // xb = S("eventAction", "ea"),
    S("eventAction", "ea");
    
    // yb = S("eventLabel", "el"),
    S("eventLabel", "el");
    
    // zb = S("eventValue", "ev"),
    S("eventValue", "ev");
    
    // Bb = S("socialNetwork", "sn"),
    S("socialNetwork", "sn");
    
    // Cb = S("socialAction", "sa"),
    S("socialAction", "sa");
    
    // Db = S("socialTarget", "st"),
    S("socialTarget", "st");
    
    // Eb = S("l1", "plt"),
    S("l1", "plt");
    
    // Fb = S("l2", "pdt"),
    S("l2", "pdt");
    
    // Gb = S("l3", "dns"),
    S("l3", "dns");
    
    // Hb = S("l4", "rrt"),
    S("l4", "rrt");
    
    // Ib = S("l5", "srt"),
    S("l5", "srt");
    
    // Jb = S("l6", "tcp"),
    S("l6", "tcp");
    
    // Kb = S("l7", "dit"),
    S("l7", "dit");
    
    // Lb = S("l8", "clt"),
    S("l8", "clt");
    
    // Mb = S("timingCategory", "utc"),
    S("timingCategory", "utc");
    
    // Nb = S("timingVar", "utv"),
    S("timingVar", "utv");
    
    // Ob = S("timingLabel", "utl"),
    S("timingLabel", "utl");
    
    // Pb = S("timingValue", "utt");
    S("timingValue", "utt");
    
    S("appName", "an");
    S("appVersion", "av", "");
    S("appId", "aid", "");
    S("appInstallerId", "aiid", "");
    S("exDescription", "exd");
    S("exFatal", "exf");
    
    // var Nc = S("expId", "xid"),
    S("expId", "xid");
    
    // Oc = S("expVar", "xvar"),
    S("expVar", "xvar");
    
    // Rc = S("_utma", "_utma"),
    S("_utma", "_utma");
    
    // Sc = S("_utmz", "_utmz"),
    S("_utmz", "_utmz");
    
    // Tc = S("_utmht", "_utmht"),
    S("_utmht", "_utmht");
    
    // Ua = S("_hc", void 0, 0),
    S("_hc", undefined, 0);
    
    // Xa = S("_ti", void 0, 0),
    S("_ti", undefined, 0);
    
    // Wa = S("_to", void 0, 20);
    S("_to", undefined, 20);
    
    cb("dimension([0-9]+)", function(a) {
        return new bb(a[0], "cd" + a[1])
    });
    
    cb("metric([0-9]+)", function(a) {
        return new bb(a[0], "cm" + a[1])
    });
    
    S("linkerParam", undefined, undefined, Bc, function(){});
    
    // var ld = S("usage", "_u"),
    S("usage", "_u");
    
    // Gd = S("_um");
    S("_um");
    
    S("forceSSL", undefined, undefined, function() { return is_use_SSL }, function(a, b, c) {
        J(34);
        
        is_use_SSL = !!c;
    });
    
    // var ed = S("_j1", "jid"),
    S("_j1", "jid");
    
    // Hd = S("_j2", "gjid");
    S("_j2", "gjid");
    
    cb("\\&(.*)", function(a) {
        var b = new bb(a[0], a[1]);
        
        var c = yc(a[0]["substring"](1)); // a[0]["substring"](1) => 移除 &
        
        if (c) {
            b.n = function(a) {
                return a.get(c);
            }; // this.n = d;
            
            b.o = function(a, b, g, ca) {
                a.set(c, g, ca);
            }; // this.o = e;
            
            b.p = undefined; // this.p = b;
        }
        
        return b;
    });
    
    // var Qb = T("_oot"),
    S("_oot", undefined, undefined, undefined, function(){});
    
    // dd = S("previewTask"),
    S("previewTask");
    
    // Rb = S("checkProtocolTask"),
    S("checkProtocolTask");
    
    // md = S("validationTask"),
    S("validationTask");
    
    // Sb = S("checkStorageTask"),
    S("checkStorageTask");
    
    // Uc = S("historyImportTask"),
    S("historyImportTask");
    
    // Tb = S("samplerTask"),
    S("samplerTask");
    
    // Vb = T("_rlt"),
    S("_rlt", undefined, undefined, undefined, function(){});
    
    // Wb = S("buildHitTask"),
    S("buildHitTask");
    
    // Xb = S("sendHitTask"),
    S("sendHitTask");
    
    // Vc = S("ceTask"),
    S("ceTask");
    
    // zd = S("devIdTask"),
    S("devIdTask");
    
    // Cd = S("timingTask"),
    S("timingTask");
    
    // Ld = S("displayFeaturesTask"),
    S("displayFeaturesTask");
    
    // V = T("name"),
    S("name", undefined, undefined, undefined, function(){});
    
    // Q = T("clientId", "cid"),
    S("clientId", "cid", undefined, undefined, function(){});
    
    // Ad = S("userId", "uid"),
    S("userId", "uid");
    
    // Na = T("trackingId", "tid"),
    S("trackingId", "tid", undefined, undefined, function(){});
    
    // U = T("cookieName", void 0, "_ga"),
    S("cookieName", undefined, "_ga", undefined, function(){});
    
    // W = T("cookieDomain"),
    S("cookieDomain", undefined, undefined, undefined, function(){});
    
    // Yb = T("cookiePath", void 0, "/"),
    S("cookiePath", undefined, "/", undefined, function(){});
    
    // Zb = T("cookieExpires", void 0, 63072E3),
    S("cookieExpires", undefined, 63072E3, undefined, function(){});
    
    // $b = T("legacyCookieDomain"),
    S("legacyCookieDomain", undefined, undefined, undefined, function(){});
    
    // Wc = T("legacyHistoryImport", void 0, !0),
    S("legacyHistoryImport", undefined, true, undefined, function(){});
    
    // ac = T("storage", void 0, "cookie"),
    S("storage", undefined, "cookie", undefined, function(){});
    
    // bc = T("allowLinker", void 0, !1),
    S("allowLinker", undefined, false, undefined, function(){});
    
    // cc = T("allowAnchor", void 0, !0),
    S("allowAnchor", undefined, true, undefined, function(){});
    
    // Ka = T("sampleRate", "sf", 100),
    S("sampleRate", "sf", 100, undefined, function(){});
    
    // dc = T("siteSpeedSampleRate", void 0, 1),
    S("siteSpeedSampleRate", undefined, 1, undefined, function(){});
    
    // ec = T("alwaysSendReferrer", void 0, !1),
    S("alwaysSendReferrer", undefined, false, undefined, function(){});
    
    // gd = S("transportUrl"),
    S("transportUrl");
    
    // Md = S("_r", "_r");
    S("_r", "_r");
    
    function X(a, b, c, d) {
        b[a] = function() {
            try {
                return d && J(d), c["apply"](this, arguments)
            } catch(b) {
                throw ge("exc", a, b && b["name"]), b;
            }
        }
    }
    
    var Od = function(a, b, c) {
        this.V = 10000;
        
        this.fa = a;
        
        this.$ = false;
        
        this.B = b;
        this.ea = c || 1
    };
    
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
            
            if (0 == b.get("siteSpeedSampleRate")) {
                return 0
            }
        }
        
        if (0 == a.V) {
            return 0;
        }
        
        if (undefined === c) {
            c = get_rand_uint32_by_crypto();
        }
        
        return 0 == c % a.V ? Math.floor(c / a.V) % a.ea + 1 : 0
    };
    
    var ie = new Od(true, "_br", 5);
    
    var je = function(a) {
        if ( ! is_https() && ! is_use_SSL) {
            var b = Ed(ie, a);
            
            if (
                b &&
                (window["navigator"]["sendBeacon"] || !(4 <= b))
            ) {
                var c = (new Date).getHours();
                
                var d = [get_rand_uint32_by_crypto(), get_rand_uint32_by_crypto(), get_rand_uint32_by_crypto()]["join"](".");
                
                if (3 == b || 5 == b) {
                    a = "https://www.google-analytics.com/collect?z=br.";
                } else {
                    a = "http://www.google-analytics.com/collect?z=br.";
                }
                
                a += [b, "A", c, d]["join"](".");
                
                if ((1 != b) && (4 != b)) {
                    var e = "https://www.google-analytics.com/collect?z=br.";
                } else {
                    var e = "http://www.google-analytics.com/collect?z=br.";
                }
                
                e += [b, "B", c, d]["join"](".");
                
                c = function() {
                    if (4 <= b) {
                        window["navigator"]["sendBeacon"](e, "");
                    } else {
                        create_DOM_img(e);
                    }
                };
                
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
    
    // function fc() {
    function get_flash_infos() {
        var a;
        
        var b;
        
        var c;
        
        if ((c = (c = window["navigator"]) ? c.plugins : null) && c["length"]) {
            for (var d = 0; d < c["length"] && !b; d++) {
                var e = c["data"];
                
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
        
        if (b) {
            a = b["match"](/[\d]+/g);

            if (a && 3 <= a["length"]) {
                b = a[0] + "." + a[1] + " r" + a[2];
            }
        }
        
        if ( ! b) {
            return undefined;
        }
        
        return b;
    }
    
    var gc = function(a, b) {
        var c = Math.min(R(a, "siteSpeedSampleRate"), 100);
        
        if (
            ! (ga_data_string_hash(P(a, "clientId")) % 100 >= c) &&
            (c = {}, get_performance_by_reference(c) || get_readytime_by_reference(c))
        ) {
            var d = c["l1"];
            
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
    };
    
    // Ec = function(a) {
    var get_performance_by_reference = function(a) {
        // Chrome10 => window.performance
        // Chrome6-9 => window.webkitPerformance
        // PS：IE9 => window.msPerformance
        
        if (window.performance) {
            var b = window.performance
        } else {
            var b = window.webkitPerformance;
        }
        
        if (b) {
            b = b.timing;
        }
        
        if ( ! b) {
            return false;
        }
        
        var c = b.navigationStart;
        
        if (0 == c) {
            return false;
        }
        
        a["l1"] = b.loadEventStart - c;
        a["l3"] = b.domainLookupEnd - b.domainLookupStart;
        a["l6"] = b.connectEnd - b.connectStart;
        a["l5"] = b.responseStart - b.requestStart;
        a["l2"] = b.responseEnd - b.responseStart;
        a["l4"] = b.fetchStart - c;
        a["l7"] = b.domInteractive - c;
        a["l8"] = b.domContentLoadedEventStart - c;
        
        return true
    };
    
    // Fc = function(a) {
    var get_readytime_by_reference = function(a) {
        if (window.top != window) {
            return false;
        }
        
        var b = window.external;
        
        var c = b && b.onloadT;
        
        if (b && ! b.isValidLoadTime) {
            c = undefined;
        }
        
        if (2147483648 < c) {
            c = undefined;
        }
        
        if (0 < c) {
            b.setPageReadyTime();
        }
        
        if (undefined == c) {
            return false;
        }
        
        a["l1"] = c;
        
        return true
    };
    
    var Y = function(a, b) {
        var c = a[b];
        
        // isNaN = is Not a Number
        // Infinity = 
        if (isNaN(c) || Infinity == c || 0 > c) {
            a[b] = undefined;
        }
    };
    
    var Fd = function(a) {
        return function(b) {
            "pageview" != b.get("hitType") || a.I || (a.I = true, gc(b, function(b) {
                a["send"]("timing", b)
            }))
        }
    };
    
    // var hc = !1,
    var hc = false;
    
    var mc = function(a) {
        if ("cookie" == P(a, "storage")) {
            var b = P(a, "cookieName");
            
            var c = nd(a);
            
            var d = kc(P(a, "cookiePath"));
            
            var e = cutoff_by_first_dot(P(a, "cookieDomain"));
            
            var g = 1000 * R(a, "cookieExpires");
            
            var ca = P(a, "trackingId");
            
            if ("auto" != e) {
                zc(b, c, d, e, ca, g) && (hc = true);
            } else {
                J(32);
                
                var l;
                
                t : {
                    c = [];
                    
                    e = get_main_domain()["split"](".");
                    
                    if (4 == e["length"] && (l = e[e["length"] - 1], parseInt(l, 10) == l)) {
                        l = ["none"];
                        break t
                    }
                    
                    for (l = e["length"] - 2; 0 <= l; l--) {
                        c["push"](e["slice"](l)["join"]("."));
                    }
                    
                    c["push"]("none");
                    
                    l = c
                }
                
                for(var k = 0; k < l["length"]; k++) {
                    if (e = l[k], a["data"].set("cookieDomain", e), c = nd(a), zc(b, c, d, e, ca, g)) {
                        hc = true;
                        return
                    }
                }
                
                a["data"].set("cookieDomain", "auto")
            }
        }
    };
    
    var nc = function(a) {
        if ("cookie" == P(a, "storage") && !hc && (mc(a), !hc)) {
            throw "abort";
        }
    };
    
    var Yc = function(a) {
        if (a.get("legacyHistoryImport")) {
            var b = P(a, "cookieDomain");
            
            var c = P(a, "legacyCookieDomain") || get_main_domain();
            var d = Xc("__utma", c, b);
            
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
    };
    
    // only use in mc = function(a) {}
    var nd = function(a) {
        var b = encoding_parenthesis(P(a, "clientId"));
        
        var c = length_by_split_dot(P(a, "cookieDomain"));
        
        a = jc(P(a, "cookiePath"));
        
        if (1 < a) {
            c += "-" + a;
        }
        
        return ["GA1", c, b]["join"](".")
    };
    
    var Gc = function(a, b, c) {
        for (var d=[], e=[], g, ca=0; ca < a["length"]; ca++) {
            var l = a[ca];
            
            if (l.r[c] == b) {
                d["push"](l);
            } else {
                (undefined == g) || l.r[c] < g ? (e = [l], g = l.r[c]) : l.r[c] == g && e["push"](l)
            }
        }
        
        return (0 < d["length"]) ? d : e
    };
    
    // lc = function(a) {
    var cutoff_by_first_dot = function(a) {
        if (0 == a["indexOf"](".")) {
            return a.substr(1);
        }
        
        return a;
    };
    
    // ic = function(a) {
    var length_by_split_dot = function(a) {
        return cutoff_by_first_dot(a)["split"](".")["length"]
    };
    
    var kc = function(a) {
        if (!a) {
            return "/";
        }
        
        (1 < a["length"]) && (a.lastIndexOf("/") == a["length"] - 1) && (a = a.substr(0, a["length"] - 1));
        
        (0 != a["indexOf"]("/")) && (a = "/" + a);
        
        return a
    };
    
    var jc = function(a) {
        a = kc(a);
        
        return ("/" == a) ? 1 : a["split"]("/")["length"]
    };
    
    function Xc(a, b, c) {
        if ("none" == b) {
            b = "";
        }
        
        var d = [];
        
        var e = get_cookie_by_input(a);
        
        a = (("__utma" == a) ? 6 : 2);
        
        for (var g = 0; g < e["length"]; g++) {
            var ca = ("" + e[g])["split"](".");
            
            ca["length"] >= a && d["push"]({
                hash : ca[0],
                R : e[g],
                O : ca
            })
        }
        
        // return 0 == d["length"] ? undefined : 1 == d["length"] ? d[0] : Zc(b, d) || Zc(c, d) || Zc(null, d) || d[0]
        if (0 == d["length"]) {
            return undefined;
        }
        
        if (1 == d["length"]) {
            return d[0];
        }
        
        Zc(b, d) || Zc(c, d) || Zc(null, d) || d[0]
    }
    
    function Zc(a, b) {
        var c;
        
        var d;
        
        if (null == a) {
            c = 1;
            d = 1;
        } esle {
            c = ga_data_string_hash(a);
            
            // d = ga_data_string_hash(is_start_with(a, ".") ? a["substring"](1) : "." + a);
            if (is_start_with(a, ".")) {
                d = ga_data_string_hash(a["substring"](1));
            } else {
                d = ga_data_string_hash("." + a);
            }
        }
        
        for (var index = 0; index < b["length"]; index++) {
            if (b[index]["hash"] == c || b[index]["hash"] == d) {
                return b[index];
            }
        }
    }
    
    var od = new RegExp(/^https?:\/\/([^\/:]+)/);
    
    var pd = /(.*)([?&#])(?:_ga=[^&#]*)(?:&?)(.*)/;
    
    // only use for setup linkerParam => S("linkerParam", undefined, undefined, Bc, function(){});
    function Bc(a) {
        a = a.get("clientId");
        
        var b = Ic(a, 0);
        
        return "_ga=1." + trans_UTF8(b + "." + a)
    }
    
    function Ic(a, b) {
        for (
            var c = new Date,
            e = window["navigator"].plugins || [],
            c = [a, window["navigator"].userAgent, c.getTimezoneOffset(), c.getYear(), c.getDate(), c.getHours(), c.getMinutes() + b],
            d = 0;
            d < e["length"];
            ++d
        ) {
            c["push"](e["data"].description);
        }
        
        return ga_data_string_hash(c["join"]("."))
    }
    
    var Dc = function(a) {
        J(48);
        
        this.target = a;
        
        this.T = false;
    };
    
    Dc["prototype"].Q = function(a, b) {
        if (a.tagName) {
            if ("a" == a.tagName["toLowerCase"]()) {
                // a["href"] && set_href(a, qd(this, a["href"], b));
                if (a["href"]) {
                    set_href(a, qd(this, a["href"], b));
                }
                
                return;
            }
            
            if ("form" == a.tagName["toLowerCase"]()) {
                return rd(this, a);
            }
        }
        
        if ("string" == typeof a) {
            return qd(this, a, b);
        }
    };
    
    // 可參考 window.gaplugins.Linker.decorate()
    var qd = function(a, b, c) {
        var d = pd.exec(b);
        
        // 過濾 pd 指定 keyword ( var pd = /(.*)([?&#])(?:_ga=[^&#]*)(?:&?)(.*)/; )
        if (d && 3 <= d["length"]) {
            if (d[3]) {
                b = d[1] + d[2] + d[3];
            } else {
                b = d[1] + "";
            }
        }
        
        a = a["target"].get("linkerParam");
        
        var e = b["indexOf"]("?");
        
        d = b["indexOf"]("#");
        
        // c ? b += (-1 == d ? "#" : "&") + a : (c = -1 == e ? "?" : "&", b = -1 == d ? b + (c + a) : b["substring"](0, d) + c + a + b["substring"](d));
        if (c) {
            // 使用 # ( bookmark ) 連接變數
            if (-1 == d) {
                // 如果 target url 沒有 # → 就用 # 連接
                b += "#" + a
            } else {
                // 如果 target url 有 # → 就用 & 連接
                b += "&" + a
            }
        } else {
            // 使用 ? ( GET ) 連接變數
            if (-1 == e) {
                // 如果沒有 ? → 就用 ? 連接
                c = "?";
            } else {
                // 如果有 ? → 就用 & 連接
                c = "&";
            }
            
            // 根據 ?、# 的優先序規則處理
            if (-1 == d) {
                // 如果沒有 # → 直接接上
                b += c + a;
            } else {
                // 如果有 # → 要接在 # 之前
                b = b["substring"](0, d) + c + a + b["substring"](d);
            }
        }
        
        return b;
    };
    
    var rd = function(a, b) {
        if (b && b["action"]) {
            var c = a["target"].get("linkerParam")["split"]("=")[1];
            
            if ("get" == b.method["toLowerCase"]()) {
                for (var d = b.childNodes || [], e = 0; e < d["length"]; e++) {
                    if ("_ga" == d[e]["name"]) {
                        d[e]["setAttribute"]("value", c);
                        
                        return;
                    }
                }
                
                d = document["createElement"]("input");
                
                d["setAttribute"]("type", "hidden");
                
                d["setAttribute"]("name", "_ga");
                
                d["setAttribute"]("value", c);
                
                b.appendChild(d)
            } else {
                "post" == b.method["toLowerCase"]() && (b.action = qd(a, b["action"]))
            }
        }
    };
    
    Dc["prototype"].S = function(a, b, c) {
        function d(c) {
            try {
                // c = c || window.event;
                if ( ! c) {
                    c = window.event;
                }
                
                var d;
                
                t : {
                    // var g = c["target"] || c.srcElement;
                    var g;
                    
                    if (c["target"]) {
                        g = c["target"]; // FF & Chrome ...
                    } else {
                        g = c.srcElement; // IE & Chrome...
                    }
                    
                    for (c = 100; g && 0 < c; ) {
                        if (g["href"] && g.nodeName["match"](/^a(?:rea)?$/i)) {
                            d = g;
                            break t
                        }
                        
                        g = g.parentNode;
                        c--
                    }
                    
                    d = {}
                }
                
                // ("http:" == d["protocol"] || "https:" == d["protocol"]) && sd(a, d["hostname"] || "") && d["href"] && set_href(d, qd(e, d["href"], b))
                if (("http:" == d["protocol"] || "https:" == d["protocol"]) &&
                    sd(a, d["hostname"] || "") &&
                    d["href"]
                ) {
                    set_href(d, qd(e, d["href"], b));
                }
            } catch(w) {
                J(26)
            }
        }
        
        var e = this;
        
        if ( ! this.T) {
            this.T = true;
            add_DOM_event(document, "mousedown", d, false);
            add_DOM_event(document, "touchstart", d, false);
            add_DOM_event(document, "keyup", d, false);
        }
        
        if (c) {
            c = function(b) {
                // b = b || window.event;
                if ( ! b) {
                    b = window.event;
                }
                
                if ((b = b["target"] || b.srcElement) && b["action"]) {
                    var c = b["action"]["match"](od);
                    
                    // c && sd(a, c[1]) && rd(e, b)
                    if (c) {
                        if (sd(a, c[1])) {
                            rd(e, b);
                        }
                    }
                }
            };
            
            for (var index = 0; index < document.forms["length"]; index++) {
                add_DOM_event(document.forms[index], "submit", c);
            }
        }
    };
    
    function sd(a, b) {
        if (b == document["location"]["hostname"]) {
            return false;
        }
        
        for (var c = 0; c < a["length"]; c++) {
            if (a[c] instanceof RegExp) {
                if (a[c]["test"](b)) {
                    return true;
                }
            } else if (0 <= b["indexOf"](a[c])) {
                return true;
            }
        }
        
        return false
    }
    
    var Jd = function(a, b, c, d) {
        this.U = b;
        this.aa = c;
        
        (b = d) || (b = (b = P(a, "name")) && "t0" != b ? Wd["test"](b) ? "_gat_" + encoding_parenthesis(P(a, "trackingId")) : "_gat_" + encoding_parenthesis(b) : "_gat");
        
        this.Y = b
    };
    
    var Rd = function(a, b) {
        var c = b.get("buildHitTask");
        
        b.set("buildHitTask", function(b) {
            Pd(a, b);
            
            var d = c(b);
            
            Qd(a,b);
            
            return d
        });
        
        var d = b.get("sendHitTask");
        
        b.set("sendHitTask", function(b) {
            var c = d(b);
            
            Id(a, b);
            
            return c;
        })
    };
    
    var Pd = function(a, b) {
        if ( ! b.get(a.U)) {
            if ("1" == get_cookie_by_input(a.Y)[0]) {
                b.set(a.U, "", true);
            } else {
                b.set(a.U, "" + get_rand_by_math(), true);
            }
        }
    };
    
    var Qd = function(a, b) {
        if (b.get(a.U)) {
            zc(a.Y, "1", b.get("cookiePath"), b.get("cookieDomain"), b.get("trackingId"), 600000);
        }
    };
    
    var Id = function(a, b) {
        if (b.get(a.U)) {
            var c = new ee;
            
            var d = function(a) {
                c.set($a(a).p, b.get(a));
            };
            
            d("apiVersion");
            d("clientVersion");
            d("trackingId");
            d("clientId");
            d(a.U);
            c.set($a("usage").p, Td(b));
            
            var e = a.aa;
            
            c.map(function(a, b) {
                e += trans_UTF8(a) + "=";
                e += trans_UTF8("" + b) + "&"
            });
            
            e += "z=" + get_rand_by_math();
            
            create_DOM_img(e);
            
            b.set(a.U, "", true);
        }
    };
    
    var Wd = /^gtm\d+$/;
    
    var fd = function(a, b) {
        var c = a.b;
        
        if ( ! c.get("dcLoaded")) {
            Nd(c, 29);
            
            b = b || {};
            
            var d;
            
            if (b["cookieName"]) {
                d = encoding_parenthesis(b["cookieName"]);
            }
            
            d = new Jd(c, "_j1", "https://stats.g.doubleclick.net/collect?t=dc&aip=1&", d);
            
            Rd(d, c);
            
            c.set("dcLoaded", true);
        }
    };
    
    var Sd = function(a) {
        var b;
        
        if (a.get("dcLoaded")) {
            b =  false;
        } else {
            if ("cookie" != a.get("storage")) {
                b = false;
            } else {
                b = true;
            }
        }
        
        if (b) {
            Nd(a, 51);
            
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
        
        if ( ! c.get("_rlsaLoaded")) {
            Nd(c, 38);
            
            b = b || {};
            
            if (b["cookieName"]) {
                var d = encoding_parenthesis(b["cookieName"]);
            }
            
            d = new Jd(c, "_j2", "https://www.google.com/ads/ga-audiences?t=sr&aip=1&", d);
            
            Rd(d, c);
            
            c.set("_rlsaLoaded", true);
            
            tc("displayfeatures", a, b)
        }
    };
    
    // var Lc = function() {
    var get_AdSense_ID = function() {
        // var a = window.gaGlobal = window.gaGlobal || {};
        if (window.gaGlobal) {
            window.gaGlobal = window.gaGlobal;
        } else {
            window.gaGlobal = {};
        }
        
        var a = window.gaGlobal;
        
        // return a.hid = a.hid || get_rand_by_math()
        if (a.hid) {
            return a.hid;
        }
        
        return get_rand_by_math();
    };
    
    var ad;
    
    var bd = function(a, b, c) {
        if ( ! ad) {
            var d;
            
            d = document["location"]["hash"];
            
            var e = window["name"];
            
            var g = /^#?gaso=([^&]*)/;
            
            if (e = (d = (d = d && d["match"](g) || e && e["match"](g)) ? d[1] : get_cookie_by_input("GASO")[0] || "") && d["match"](/^(?:!([-0-9a-z.]{1,40})!)?([-.\w]{10,1200})$/i)) {
                zc("GASO", "" + d, c, b, a, 0);
                f._udo || (f._udo = b);
                f._utcp || (f._utcp = c);
                a = e[1];
                
                insert_js_include("https://www.google.com/analytics/web/inpage/pub/inpage.js?" + (a ? "prefix=" + a + "&" : "") + get_rand_by_math(), "_gasojs");
            }
            
            ad = true
        }
    };
    
    var wb = /^(UA|YT|MO|GP)-(\d+)-(\d+)$/;
    
    var pc = function(a) {
        function b(a, b) {
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
        
        // b(hb, 1);
        b("apiVersion", 1);
        
        // b(ib, "j33");
        b("clientVersion", "j33");
        
        // c(Qb, Ma);
        c("_oot", Ma);
        
        // c(dd, cd);
        c("previewTask", cd);
        
        // c(Rb, Oa);
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
        
        // Kc(this.b);
        detect_browser_features(this.b);
        
        // this.b.set("adSenseId", Lc());
        this.b.set("adSenseId", get_AdSense_ID());
        
        bd(this.b.get("trackingId"), this.b.get("cookieDomain"), this.b.get("cookiePath"));
    };
    
    var Jc = function(a, b) {
        if ("cookie" == P(a, "storage")) {
            hc = false;
            
            var c;
            
            i : {
                var d = get_cookie_by_input(P(a, "cookieName"));
                
                if (d && !(1 > d["length"])) {
                    c = [];
                    
                    for (var e = 0; e < d["length"]; e++) {
                        var g;
                        
                        g = d[e]["split"](".");
                        
                        var ca = g.shift();
                        
                        /*
                        (("GA1" == ca || "1" == ca) && (1 < g["length"])) ? (ca = g.shift()["split"]("-"), 1 == ca["length"] && (ca[1] = "1"), ca[0] *= 1, ca[1] *= 1, g = {
                            r : ca,
                            s : g["join"](".")
                        }) : g = undefined;
                        */
                        if (("GA1" == ca || "1" == ca) && (1 < g["length"])) {
                            ca = g.shift()["split"]("-");
                            
                            if (1 == ca["length"]) {
                                ca[1] = "1";
                            }
                            
                            ca[0] *= 1;
                            ca[1] *= 1;
                            
                            g = {
                                r : ca,
                                s : g["join"](".")
                            }
                        } else {
                            g = undefined;
                        }
                        
                        if (g) {
                            c["push"](g);
                        }
                    }
                    
                    if (1 == c["length"]) {
                        J(13);
                        
                        c = c[0].s;
                        
                        break i
                    }
                    
                    if (0 == c["length"]) {
                        J(12);
                    } else {
                        J(14);
                        
                        d = length_by_split_dot(P(a, "cookieDomain"));
                        
                        c = Gc(c, d, 0);
                        
                        if (1 == c["length"]) {
                            c = c[0].s;
                            
                            break i;
                        }
                        
                        d = jc(P(a, "cookiePath"));
                        
                        c = Gc(c, d, 1);
                        
                        if (c[0]) {
                            c = c[0];
                        } else {
                            c = c[0].s;
                        }
                        
                        break i;
                    }
                }
                
                c = undefined;
            }
            
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
            
            if (c) {
                a["data"].set("clientId", c);
                hc = true;
            }
        }
        
        c = a.get("allowAnchor");
        
        // 截取 URL 透過 ? or # 傳遞的 GA cookie value ( _ga=cookie_value )
        if (c) {
            c = document["location"]["href"]["match"]("(?:&|#|\\?)" + trans_UTF8("_ga")["replace"](/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1") + "=([^&#]*)")
        } else {
            c = document["location"]["search"]["match"]("(?:&|#|\\?)" + trans_UTF8("_ga")["replace"](/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1") + "=([^&#]*)")
        }
        
        if (c && 2 == c["length"]) { 
            // ex:
            // 1. cookie value = GA1.2.1864880973.1435720848
            // 2. e = 1.2.1864880973.1435720848
            e = c[1];
        } else {
            e = "";
        }

        // 如果有抓到 GA cookie value
        if (e) {
            if (a.get("allowLinker")) {
                c = e["indexOf"](".");
                
                if (-1 == c) {
                    J(22);
                } else {
                    // ex:
                    // 1. e = 1.2.1864880973.1435720848
                    // 2. d = 2.1864880973.1435720848
                    d = e["substring"](c + 1);
                    
                    if ("1" != e["substring"](0, c)) {
                        J(22);
                    } else {
                        // ex:
                        // 1. d = 2.1864880973.1435720848
                        c = d["indexOf"](".");
                        
                        if (-1 == c) {
                            J(22);
                        } else {
                            // ex:
                            // 1. d = 2.1864880973.1435720848
                            // 2. e = 2
                            // 3. c = 1864880973.1435720848
                            e = d["substring"](0, c);
                            c = d["substring"](c + 1);
                            
                            if (e != Ic(c, 0) && e != Ic(c, -1) && e != Ic(c, -2)) {
                                J(23);
                            } else {
                                J(11);
                                
                                // 沿用 cross domain 所傳遞的 clientId
                                a["data"].set("clientId", c);
                            }
                        }
                    }
                }
            } else {
                J(21);
            }
        }
        
        if (b) {
            J(9);
            a["data"].set("clientId", trans_UTF8(b));
        }
        
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
            
            a["data"].set("clientId", c);
        } else {
            J(8);
            
            a["data"].set("clientId", [get_rand_by_math() ^ Mc() & 2147483647, Math.round((new Date)["getTime"]() / 1000)]["join"]("."));
        }
        
        mc(a)
    };
    
    // var Kc = function(a) {
    var detect_browser_features = function(a) {
        a.set("referrer", get_valid_referrer_url(a.get("alwaysSendReferrer")));
        
        if (document["location"]) {
            var e = document["location"].pathname || "";
            
            if ("/" != e.charAt(0)) {
                J(31);
                e = "/" + e;
            }
            
            a.set("location", document["location"]["protocol"] + "//" + document["location"]["hostname"] + e + document["location"]["search"])
        }
        
        if (window.screen) {
            a.set("screenResolution", window.screen.width + "x" + window.screen.height);
        }
        
        if (window.screen) {
            a.set("screenColors", window.screen.colorDepth + "-bit");
        }
        
        var g = (document.body && document.body["clientWidth"] && document.body["clientHeight"]);
        
        var ca = [];
        
        if (document.documentElement &&
            document.documentElement["clientWidth"] &&
            document.documentElement["clientHeight"] &&
            ("CSS1Compat" === document.compatMode || !g)
        ) {
            ca = [document.documentElement["clientWidth"], document.documentElement["clientHeight"]];
        } else {
            if (g) {
                ca = [document.body["clientWidth"], document.body["clientHeight"]];
            }
        }
        
        if ((0 >= ca[0]) || (0 >= ca[1]))
            c = "";
        } else {
            c = ca["join"]("x");
        }
        
        a.set("viewportSize", c);
        
        // a.set("flashVersion", fc());
        a.set("flashVersion", get_flash_infos());
        
        if (document.characterSet) {
            a.set("encoding", document.characterSet);
        } else {
            a.set("encoding", document.charset);
        }
        
        if (window["navigator"] && "function" === typeof window["navigator"].javaEnabled) {
            a.set("javaEnabled", window["navigator"].javaEnabled());
        } else {
            a.set("javaEnabled", false);
        }
        
        if (window["navigator"]) {
            if (window["navigator"].language) {
                a.set("language", window["navigator"].language["toLowerCase"]());
            } else {
                a.set("language", window["navigator"].browserLanguage["toLowerCase"]());
            }
        } else {
            a.set("language", ("")["toLowerCase"]());
        }
        
        if (document["location"] && a.get("allowAnchor")) {
            var b = document["location"]["hash"];
            
            b = document["location"]["hash"]["split"](/[?&#]+/);
            
            var d = [];
            
            for (c = 0; c < b["length"]; ++c) {
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
            
            if (0 < d["length"]) {
                b = "#" + d["join"]("&");
                a.set("location", a.get("location") + b);
            }
        }
    };
    
    pc["prototype"].get = function(a) {
        return this.b.get(a)
    };
    
    pc["prototype"].set = function(a, b) {
        this.b.set(a,b)
    };
    
    var qc = {
        pageview : ["page"],
        event : ["eventCategory", "eventAction", "eventLabel", "eventValue"],
        social : ["socialNetwork", "socialAction", "socialTarget"],
        timing : ["timingCategory", "timingVar", "timingValue", "timingLabel"]
    };
    
    pc["prototype"].send = function(a) {
        if (!(1 > arguments["length"])) {
            var b;
            var c;
            
            if ("string" === typeof arguments[0]) {
                b = arguments[0];
                c = []["slice"]["call"](arguments, 1);
            } else {
                b = arguments[0] && arguments[0]["hitType"];
                c = arguments;
            }
            
            if (b) {
                // c = za(qc[b] || [], c);
                if ( ! qc[b]) {
                    c = za([], c);
                } else {
                    c = za(qc[b], c);
                }
                
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
        
        if ("prerender" == document.visibilityState) {
            return false;
        }
        
        a(); // N.N();
        
        return true;
    };
    
/*
    var td = /^(?:(\w+)\.)?(?:(\w+):)?(\w+)$/;
*/
    
    var sc = function(a) {
        if (is_function(a[0])) {
            this.u = a[0];
        } else {
            // var b = td.exec(a[0]);
            var b = /^(?:(\w+)\.)?(?:(\w+):)?(\w+)$/.exec(a[0]);
            
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
            
            if (this.i && ( ! is_string(b) || "" == b)) {
                throw "abort";
            }
            
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
        return 0 <= a["indexOf"](".") || 0 <= a["indexOf"](":")
    };
    
    var Yd;
    var Zd;
    var $d;
    
    Yd = new ee;
    $d = new ee;
    
    Zd = {
        ec : 45,
        ecommerce : 46,
        linkid : 47
    };
    
    var tc = function(a, b, c) {
        if ( ! (b == N)) {
            b.get("name");
        }
        
        var d = Yd.get(a);
        
        if ( ! is_function(d)) {
            return false;
        }
        
        b.plugins_ = b.plugins_ || new ee;
        
        if (b.plugins_.get(a)) {
            return true;
        }
        
        b.plugins_.set(a, new d(b, c || {}));
        
        return true
    };
    
    var ae = function(a) {
        function b(a) {
            var b = (a["hostname"] || "")["split"](":")[0]["toLowerCase"](),
            var c = (a["protocol"] || "")["toLowerCase"]();
            
            c = 1 * a["port"] || ("http:" == c ? 80 : "https:" == c ? 443 : "");
            
            a = a.pathname || "";
            
            // D(a, "/") || (a = "/" + a);
            if ( ! is_start_with(a, "/")) {
                a = "/" + a;
            }
            
            return [b, "" + c, a]
        }
        
        var c = document["createElement"]("a");
        
        set_href(c, document["location"]["href"]);
        
        var d = (c["protocol"] || "")["toLowerCase"]();
        var e = b(c);
        var g = c["search"] || "";
        var ca = d + "//" + e[0];
        
        if (e[1]) {
            ca += ":" + e[1];
        }
        
        // if (D(a, "//")) {
        if (is_start_with(a, "//")) {
            a = d + a;
        // } else if (D(a, "/")) {
        } else if (is_start_with(a, "/")) {
            a = ca + a;
        // } else if (!a || D(a, "?")) {
        } else if (!a || is_start_with(a, "?")) {
            a = ca + e[2] + (a || g);
        } else if (0 > a["split"]("/")[0]["indexOf"](":")) {
            a = ca + e[2]["substring"](0, e[2].lastIndexOf("/")) + "/" + a;
        }
        
        set_href(c,a);
        
        d = b(c);
        
        return {
            protocol : (c["protocol"] || "")["toLowerCase"](),
            host : d[0],
            port : d[1],
            path : d[2],
            G : c["search"] || "",
            url : a || ""
        }
    };
    
    var Z = {
        ga : function() {
            Z.f = [];
        }
    };
    
    Z.ga(); // 清空 Z.f ??
    
    Z.D = function(a) {
        var b = Z.J["apply"](Z, arguments);
        
        b = Z.f.concat(b);
        
        for (Z.f = []; 0 < b["length"] && !Z.v(b[0]) && !(b.shift(), 0 < Z.f["length"]); ) {
            ;
        }
        
        Z.f = Z.f.concat(b)
    };
    
    Z.J = function(a) {
        for (var b = [], c = 0; c < arguments["length"]; c++) {
            try {
                var d = new sc(arguments[c]);
                
                if (d.g) {
                    Yd.set(d.a[0], d.a[1]);
                } else {
                    if (d.i) {
                        var e = d;
                        var g = e.a[0];
                        
                        if ( ! is_function(Yd.get(g)) && ! $d.get(g)) {
                            if (Zd["hasOwnProperty"](g)) {
                                J(Zd[g]);
                                J(Zd[g]);
                            }
                            
                            var ca = e.X;
                            
                            if ( ! ca && Zd["hasOwnProperty"](g)) {
                                J(39);
                                ca = g + ".js";
                            } else {
                                J(43);
                            }
                            
                            if (ca) {
                                if (ca && !(0 <= ca["indexOf"]("/"))) {
                                    if (is_use_SSL || is_https()) {
                                        ca = "https://www.google-analytics.com/plugins/ua/" + ca;
                                    } else {
                                        ca = "http://www.google-analytics.com/plugins/ua/" + ca;
                                    }
                                }
                                
                                var l = ae(ca);
                                
                                e = undefined;
                                
                                var k = l["protocol"];
                                var w = document["location"]["protocol"];
                                
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
                                    var e = l;
                                    var be = ae(document["location"]["href"]);
                                    
                                    if (e.G || 0 <= e.url["indexOf"]("?") || 0 <= e.path["indexOf"]("://")) {
                                        Xd = false;
                                    } else if (e.host == be.host && e["port"] == be["port"]) {
                                        Xd = true;
                                    } else {
                                        var ce = "http:" == e["protocol"] ? 80 : 443;
                                        
                                        Xd = "www.google-analytics.com" == e.host && (e["port"] || ce) == ce && D(e.path, "/plugins/") ? true : false
                                    }
                                }
                                
                                if (Xd) {
                                    insert_js_include(l.url);
                                    $d.set(g, true);
                                }
                            }
                        }
                    }
                    
                    b["push"](d);
                }
            }catch(de) {}
        
            return b
        }
    };
    
    Z.v = function(a) {
        try {
            if (a.u) {
                // a.u["call"](window, N.j("t0"));
                a.u["call"](window, N.get_property("t0"));
            } else {
                // var b = a.c == gb ? N : N.j(a.c);
                if (a.c == gb) {
                    var b = N;
                } else {
                    var b = N.get_property(a.c);
                }
                
                if (a.A) {
                    if ("t0" == a.c) {
                        N.create["apply"](N, a.a);
                    }
                } else if (a.ba) {
                    N.remove(a.c);
                } else if (b) {
                    if (a.i) {
                        if ( ! tc(a.a[0], b, a.W)) {
                            return true;
                        }
                    } else if (a.e) {
                        var c = a.d;
                        var d = a.a;
                        var e = b.plugins_.get(a.e);
                        
                        e[c]["apply"](e, d)
                    } else {
                        b[a.d]["apply"](b,a.a)
                    }
                }
            }
        } catch(g) {}
    };
    
    var N = function(a) {
        J(1);
        
        Z.D["apply"](Z, [arguments])
    };
    
    N.h = {};
    N.P = [];
    N.L = 0;
    N.answer = 42;
    
/*
    var uc = [
        "trackingId",
        "cookieDomain",
        "name"
    ];
*/
    
    N.create = function(a) {
        // var b = za(uc, []["slice"]["call"](arguments));
        var b = za([
                "trackingId",
                "cookieDomain",
                "name"
            ],
            []["slice"]["call"](arguments));
        
        if ( ! b["name"]) {
            b["name"] = "t0";
        }
        
        var c = "" + b["name"];
        
        if (N.h[c]) {
            return N.h[c];
        }
        
        b = new pc(b);
        
        N.h[c] = b;
        
        N.P["push"](b);
        
        return b
    };
    
    N.remove = function(a) {
        for (var b = 0; b < N.P["length"]; b++) {
            if (N.P[b].get("name") == a) {
                N.P.splice(b, 1);
                N.h[a] = null;
                
                break;
            }
        }
    };
    
    // N.j = function(a) {
    N.get_property = function(property_name) {
        // return N.h[a];
        return N.h[property_name];
    };
    
    N.K = function() {
        // return N.P["slice"](0)
        return N.P["slice"]()
    };
    
    N.N = function() {
        if ("ga" != gb) {
            J(49);
        }
        
        var a = window[gb];
        
        if ( ! a || 42 != a.answer) {
            N.L = a && a.l;
            
            N.loaded = true;
            
            var b = window[gb] = N;
            
            X("create", b, b.create);
            X("remove", b, b.remove);
            X("getByName", b, b.j, 5);
            X("getAll", b, b.K, 6);
            
            b = pc["prototype"];
            
            X("get", b, b.get, 7);
            X("set", b, b.set, 4);
            
            X("send", b, b["send"]);
            
            b = Ya["prototype"];
            
            X("get", b, b.get);
            X("set", b, b.set);
            
            if ( ! is_https() && ! is_use_SSL) {
                t : {
                    for(var b = document.getElementsByTagName("script"), c = 0; c < b["length"] && 100 > c; c++) {
                        var d = b[c].src;
                        
                        if (d && 0 == d["indexOf"]("https://www.google-analytics.com/analytics")) {
                            J(33);
                            
                            b = true;
                            
                            break t;
                        }
                    }
                    
                    b = false
                }
                
                if (b) {
                    is_use_SSL = true;
                }
            }
            
            if ( ! is_https() && ! is_use_SSL && !!Ed(new Od)) {
                J(36);
                is_use_SSL = true;
            }
            
            // (window.gaplugins = window.gaplugins || {}).Linker = Dc;
            if ( ! window.gaplugins) {
                window.gaplugins = {};
            }
            
            window.gaplugins.Linker = Dc;
            
            b = Dc["prototype"];
            
            Yd.set("linker", Dc);
            
            X("decorate", b, b.Q, 20);
            X("autoLink", b, b.S, 25);
            
            Yd.set("displayfeatures", fd);
            Yd.set("adfeatures", Kd);
            
            a = a && a.q;
            
            if (is_array(a)) {
                Z.D["apply"](N, a);
            } else {
                J(50);
            }
        }
    };
    
/*
    // 好像沒有被用到??
    N.k = function() {
        // for (var a = N.K(), b = 0; b < a["length"]; b++) {
        var a = N.P["slice"]();
        
        for (index = 0; index < a["length"]; index++) {
            // a[b].get("name");
            a[index].get("name");
        }
    };
*/
    
    (function() {
        var a = N.N;
        
        if ( ! is_prerender_exec_input(a)) {
            J(16);
            
            var switch_status = false;
            
            var c = function() {
                if ( ! switch_status && is_prerender_exec_input(a)) {
                    switch_status = true;
                    
                    var d = c;
                    
                    if (document.removeEventListener) {
                        document.removeEventListener("visibilitychange", d, false); // DOM => removeEventListener(event, function, useCapture)
                    } else if (document.detachEvent) {
                        document.detachEvent("onvisibilitychange", d); // DOM2 => detachEvent(event, function)
                    }
                }
            };
            
            add_DOM_event(document, "visibilitychange", c);
        }
    })();
    
    // function La(a) {
    function ga_data_string_hash(input_string) {
        var hash = 1;
        var c = 0;
        var index;
        
        if (input_string) {
            hash = 0;
            
            // 從 input_string 最尾端開始往回處理
            for (index = input_string["length"] - 1; 0 <= index; index--) {
                c = input_string.charCodeAt(index);
                hash = ((hash << 6) & 268435455) + c + (c << 14);
                c = hash & 266338304;
                
                // hash = 0 != c ? hash ^ c >> 21 : hash;
                if (0 != c) {
                    hash = hash ^ c >> 21;
                }
            }
        }
        
        return hash;
    };
})(window);
