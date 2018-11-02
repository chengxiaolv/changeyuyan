"use strict";
var lang = sessionStorage.getItem("lang");
console.log(lang);
if (lang === null) {
    lang = "zh";
    sessionStorage.setItem("lang",lang);
}
loadProperties(lang);
$("#lang").val(lang);

function loadProperties(types) {
    $.i18n.properties({
        name: 'strings', //属性文件名  命名格式： 文件名_国家代号.properties
        path: '/i18n/', //注意这里路径是你属性文件的所在文件夹
        mode: 'map',
        language: types, //这就是国家代号 name+language刚好组成属性文件名：strings+zh -> strings_zh.properties
        callback: function () {
            $("[data-locale]").each(function () {
                $(this).html($.i18n.prop($(this).data("locale")));
            });
            $("[data-placeholder]").each(function () {
                $(this).attr('placeholder', $.i18n.prop($(this).data("placeholder")));
            });
        }
    });
}

