var rule = {
    title: '孜然影视',
    host: 'https://www.zrys.top',
    url: '/index.php/vod/show/id/fypage/page/fyclass.html',
    searchUrl: '/index.php/vod/search/page/fypage/wd/**.html',
    searchable: 2,
    quickSearch: 0,
    filterable: 0,
    headers: {
        'User-Agent': 'MOBILE_UA',
    },
    class_parse: '.top_nav li;a&&Text;a&&href;.*/(.*?).html',
    play_parse: true,
    lazy: '',
    limit: 6,
    推荐: 'div.tit_up:eq(1)&&div.pannel;ul.vodlist li;*;*;*;*',
    double: true,
    一级: 'ul.vodlist li;a&&title;a&&data-original;.pic_text&&Text;a&&href',
    二级: {
        title: 'h2&&Text',
        img: '.vodlist_thumb&&data-original',
        desc: '.content_detail&&li:eq(1)&&Text',
        content: '.content_desc&&span&&Text',
        tabs: '.play_source_tab&&a',
        lists: '.content_playlist:eq(#id) li',
    },
    搜索: 'ul.vodlist&&li;*;*;*;*',
}
