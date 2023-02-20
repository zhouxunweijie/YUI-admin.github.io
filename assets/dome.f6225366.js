import{a9 as e,_ as t,r as l,o as n,c as i,l as o,t as d,e as s,w as c}from"./index.f42464ca.js";import r from"./index.8c0ff9bd.js";import"./img.3d940f7f.js";import"./video.10c8b193.js";import"./index.63b84812.js";import"./index.6c7529e9.js";import"./index.1b445d99.js";import"./xlsx.88aeccfa.js";import"./docx.5754a1c0.js";import"./pdf.52d3411a.js";import"./txt.9ea5132c.js";function p(t){const l=document.createDocumentFragment();return e(r,t).mount(l),document.body.appendChild(l),{el:l}}const a={name:"preview",methods:{videoClick(){p({type:"video",url:process.env.BASE_URL+"123.mp4",poster:"/yuan.jpg"})},imgClick(){p({type:"img",url:"https://img2.baidu.com/it/u=3202947311,1179654885&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500"})},xlsxClick(){p({type:"xlsx",url:process.env.BASE_URL+"789.xlsx"})},docxClick(){p({type:"docx",url:"https://501351981.github.io/vue-office/examples/dist/static/test-files/test.docx"})},pdfClick(){p({type:"pdf",url:process.env.BASE_URL+"789.pdf"})},txtClick(){p({type:"txt",url:process.env.BASE_URL+"123456.txt"})}}},u=o("div",{class:"github-markdown-body"},[o("pre",null,"        引用方式：\n        import Preview from '@/views/components/preview/index.js';\n      ")],-1),x={class:"github-markdown-body"},m=o("pre",null,"        图片预览调用方式: \n        let flag = Preview({\n          type: 'img',\n          url: '', // 访问路径\n        });\n      ",-1),f={class:"github-markdown-body"},k=o("pre",null,"        视频预览调用方式: \n        let flag = Preview({\n          type: 'video',\n          url: '', // 访问路径\n          poster: '', // 默认展示视频封面\n        });\n      ",-1),v={class:"github-markdown-body"},C=o("pre",null,"        // 目前只支持文字表格的展示，暂不支持图片显示\n        xlsx预览调用方式: \n        let flag = Preview({\n          type: 'xlsx', // \"xlsx || xls\"\n          url: '', // 访问路径\n        });\n      ",-1),b={class:"github-markdown-body"},g=o("pre",null,"        // 目前只支持在线文档的默认展示，访问本地路径时插件报错\n        docx预览调用方式: \n        let flag = Preview({\n          type: 'docx', // \"docx || doc\"\n          url: '', // 访问路径\n        });\n      ",-1),y={class:"github-markdown-body"},w=o("pre",null,"        pdf预览调用方式: \n        let flag = Preview({\n          type: 'pdf',\n          url: '', // 访问路径\n        });\n      ",-1),h={class:"github-markdown-body"},j=o("pre",null,"        txt预览调用方式: \n        let flag = Preview({\n          type: 'txt',\n          url: '', // 访问路径\n        });\n      ",-1);const _=t(a,[["render",function(e,t,r,p,a,_){const P=l("el-button");return n(),i("div",null,[u,o("div",x,[m,d(" 例子: "),s(P,{onClick:_.imgClick},{default:c((()=>[d("图片")])),_:1},8,["onClick"])]),o("div",f,[k,d(" 例子:"),s(P,{onClick:_.videoClick},{default:c((()=>[d("视频")])),_:1},8,["onClick"])]),o("div",v,[C,d(" 例子:"),s(P,{onClick:_.xlsxClick},{default:c((()=>[d("xlsx")])),_:1},8,["onClick"])]),o("div",b,[g,d(" 例子:"),s(P,{onClick:_.docxClick},{default:c((()=>[d("docx")])),_:1},8,["onClick"])]),o("div",y,[w,d(" 例子: "),s(P,{onClick:_.pdfClick},{default:c((()=>[d("pdf")])),_:1},8,["onClick"])]),o("div",h,[j,d(" 例子:"),s(P,{onClick:_.txtClick},{default:c((()=>[d("txt")])),_:1},8,["onClick"])])])}]]);export{_ as default};
