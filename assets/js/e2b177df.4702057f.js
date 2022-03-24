"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[798],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return l},MDXProvider:function(){return c},mdx:function(){return u},useMDXComponents:function(){return p},withMDXComponents:function(){return s}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){return function(t){var n=p(t.components);return r.createElement(e,i({},t,{components:n}))}},p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):m(m({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),s=p(n),c=a,f=s["".concat(o,".").concat(c)]||s[c]||h[c]||i;return n?r.createElement(f,m(m({ref:t},l),{},{components:n})):r.createElement(f,m({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var m={};for(var d in t)hasOwnProperty.call(t,d)&&(m[d]=t[d]);m.originalType=e,m.mdxType="string"==typeof e?e:a,o[1]=m;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},57569:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=["components"],m={id:"torchlive_torchvision.transforms",title:"Interface: Transforms",sidebar_label:"Transforms",custom_edit_url:null},d=void 0,l={unversionedId:"api/core/interfaces/torchlive_torchvision.transforms",id:"api/core/interfaces/torchlive_torchvision.transforms",title:"Interface: Transforms",description:"torchlive/torchvision.Transforms",source:"@site/docs/api/core/interfaces/torchlive_torchvision.transforms.md",sourceDirName:"api/core/interfaces",slug:"/api/core/interfaces/torchlive_torchvision.transforms",permalink:"/live/docs/api/core/interfaces/torchlive_torchvision.transforms",editUrl:null,tags:[],version:"current",frontMatter:{id:"torchlive_torchvision.transforms",title:"Interface: Transforms",sidebar_label:"Transforms",custom_edit_url:null},sidebar:"api",previous:{title:"Torch",permalink:"/live/docs/api/core/interfaces/torchlive_torch.torch"},next:{title:"Transforms",permalink:"/live/docs/api/core/interfaces/torchlive_vision.transforms"}},s=[{value:"Methods",id:"methods",children:[{value:"centerCrop",id:"centercrop",children:[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"grayscale",id:"grayscale",children:[{value:"Parameters",id:"parameters-1",children:[],level:4},{value:"Returns",id:"returns-1",children:[],level:4},{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"normalize",id:"normalize",children:[{value:"Parameters",id:"parameters-2",children:[],level:4},{value:"Returns",id:"returns-2",children:[],level:4},{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3},{value:"resize",id:"resize",children:[{value:"Parameters",id:"parameters-3",children:[],level:4},{value:"Returns",id:"returns-3",children:[],level:4},{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3}],level:2}],p={toc:s};function c(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.mdx)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"/live/docs/api/core/modules/torchlive_torchvision"},"torchlive/torchvision"),".Transforms"),(0,i.mdx)("p",null,"Transforms are common image transformations available in the\ntorchvision.transforms module."),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://pytorch.org/vision/0.12/transforms.html"},"https://pytorch.org/vision/0.12/transforms.html")),(0,i.mdx)("h2",{id:"methods"},"Methods"),(0,i.mdx)("h3",{id:"centercrop"},"centerCrop"),(0,i.mdx)("p",null,"\u25b8 ",(0,i.mdx)("strong",{parentName:"p"},"centerCrop"),"(",(0,i.mdx)("inlineCode",{parentName:"p"},"size"),"): ",(0,i.mdx)("a",{parentName:"p",href:"/live/docs/api/core/modules/torchlive_torchvision#transform"},"Transform")),(0,i.mdx)("p",null,"Crops the image Tensor at the center. It is expected to have ",(0,i.mdx)("inlineCode",{parentName:"p"},"[\u2026, H, W]"),"\nshape, where ",(0,i.mdx)("inlineCode",{parentName:"p"},"\u2026")," means an arbitrary number of leading dimensions. If image\nsize is smaller than output size along any edge, image is padded with 0\nand then center cropped."),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://pytorch.org/vision/0.12/generated/torchvision.transforms.CenterCrop.html"},"https://pytorch.org/vision/0.12/generated/torchvision.transforms.CenterCrop.html")),(0,i.mdx)("h4",{id:"parameters"},"Parameters"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,i.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,i.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},(0,i.mdx)("inlineCode",{parentName:"td"},"size")),(0,i.mdx)("td",{parentName:"tr",align:"left"},(0,i.mdx)("inlineCode",{parentName:"td"},"number")," ","|"," ","[",(0,i.mdx)("inlineCode",{parentName:"td"},"number"),"]"," ","|"," ","[",(0,i.mdx)("inlineCode",{parentName:"td"},"number"),", ",(0,i.mdx)("inlineCode",{parentName:"td"},"number"),"]"),(0,i.mdx)("td",{parentName:"tr",align:"left"},"Desired output size of the crop. If size is an int instead of sequence like ",(0,i.mdx)("inlineCode",{parentName:"td"},"(h, w)"),", a square crop ",(0,i.mdx)("inlineCode",{parentName:"td"},"(size, size)")," is made. If provided a sequence of length 1, it will be interpreted as ",(0,i.mdx)("inlineCode",{parentName:"td"},"(size[0], size[0])"),".")))),(0,i.mdx)("h4",{id:"returns"},"Returns"),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"/live/docs/api/core/modules/torchlive_torchvision#transform"},"Transform")),(0,i.mdx)("h4",{id:"defined-in"},"Defined in"),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://github.com/pytorch/live/blob/ea02e68/react-native-pytorch-core/src/torchlive/torchvision.ts#L42"},"torchlive/torchvision.ts:42")),(0,i.mdx)("hr",null),(0,i.mdx)("h3",{id:"grayscale"},"grayscale"),(0,i.mdx)("p",null,"\u25b8 ",(0,i.mdx)("strong",{parentName:"p"},"grayscale"),"(",(0,i.mdx)("inlineCode",{parentName:"p"},"numOutputChannels?"),"): ",(0,i.mdx)("a",{parentName:"p",href:"/live/docs/api/core/modules/torchlive_torchvision#transform"},"Transform")),(0,i.mdx)("p",null,"Convert image to grayscale. It is expected to have ","[\u2026, 3, H, W]"," shape,\nwhere \u2026 means an arbitrary number of leading dimensions."),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://pytorch.org/vision/0.12/generated/torchvision.transforms.Grayscale.html"},"https://pytorch.org/vision/0.12/generated/torchvision.transforms.Grayscale.html")),(0,i.mdx)("h4",{id:"parameters-1"},"Parameters"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,i.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,i.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},(0,i.mdx)("inlineCode",{parentName:"td"},"numOutputChannels?")),(0,i.mdx)("td",{parentName:"tr",align:"left"},(0,i.mdx)("inlineCode",{parentName:"td"},"1")," ","|"," ",(0,i.mdx)("inlineCode",{parentName:"td"},"3")),(0,i.mdx)("td",{parentName:"tr",align:"left"},"Number of channels desired for output image.")))),(0,i.mdx)("h4",{id:"returns-1"},"Returns"),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"/live/docs/api/core/modules/torchlive_torchvision#transform"},"Transform")),(0,i.mdx)("h4",{id:"defined-in-1"},"Defined in"),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://github.com/pytorch/live/blob/ea02e68/react-native-pytorch-core/src/torchlive/torchvision.ts#L52"},"torchlive/torchvision.ts:52")),(0,i.mdx)("hr",null),(0,i.mdx)("h3",{id:"normalize"},"normalize"),(0,i.mdx)("p",null,"\u25b8 ",(0,i.mdx)("strong",{parentName:"p"},"normalize"),"(",(0,i.mdx)("inlineCode",{parentName:"p"},"mean"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"std"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"inplace?"),"): ",(0,i.mdx)("a",{parentName:"p",href:"/live/docs/api/core/modules/torchlive_torchvision#transform"},"Transform")),(0,i.mdx)("p",null,"Normalize a tensor image with mean and standard deviation. Given mean:\n",(0,i.mdx)("inlineCode",{parentName:"p"},"(mean[1],...,mean[n])")," and std: ",(0,i.mdx)("inlineCode",{parentName:"p"},"(std[1],..,std[n])")," for ",(0,i.mdx)("inlineCode",{parentName:"p"},"n")," channels,\nthis transform will normalize each channel of the input torch."),(0,i.mdx)("p",null,"Tensor i.e., ",(0,i.mdx)("inlineCode",{parentName:"p"},"output[channel] = (input[channel] - mean[channel]) / std[channel]"),"."),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://pytorch.org/vision/0.12/generated/torchvision.transforms.Normalize.html"},"https://pytorch.org/vision/0.12/generated/torchvision.transforms.Normalize.html")),(0,i.mdx)("h4",{id:"parameters-2"},"Parameters"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,i.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,i.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},(0,i.mdx)("inlineCode",{parentName:"td"},"mean")),(0,i.mdx)("td",{parentName:"tr",align:"left"},(0,i.mdx)("inlineCode",{parentName:"td"},"number"),"[]"),(0,i.mdx)("td",{parentName:"tr",align:"left"},"Sequence of means for each channel.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},(0,i.mdx)("inlineCode",{parentName:"td"},"std")),(0,i.mdx)("td",{parentName:"tr",align:"left"},(0,i.mdx)("inlineCode",{parentName:"td"},"number"),"[]"),(0,i.mdx)("td",{parentName:"tr",align:"left"},"Sequence of standard deviations for each channel.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},(0,i.mdx)("inlineCode",{parentName:"td"},"inplace?")),(0,i.mdx)("td",{parentName:"tr",align:"left"},(0,i.mdx)("inlineCode",{parentName:"td"},"boolean")),(0,i.mdx)("td",{parentName:"tr",align:"left"},"Bool to make this operation in-place.")))),(0,i.mdx)("h4",{id:"returns-2"},"Returns"),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"/live/docs/api/core/modules/torchlive_torchvision#transform"},"Transform")),(0,i.mdx)("h4",{id:"defined-in-2"},"Defined in"),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://github.com/pytorch/live/blob/ea02e68/react-native-pytorch-core/src/torchlive/torchvision.ts#L67"},"torchlive/torchvision.ts:67")),(0,i.mdx)("hr",null),(0,i.mdx)("h3",{id:"resize"},"resize"),(0,i.mdx)("p",null,"\u25b8 ",(0,i.mdx)("strong",{parentName:"p"},"resize"),"(",(0,i.mdx)("inlineCode",{parentName:"p"},"size"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"interpolation?"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"maxSize?"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"antialias?"),"): ",(0,i.mdx)("a",{parentName:"p",href:"/live/docs/api/core/modules/torchlive_torchvision#transform"},"Transform")),(0,i.mdx)("p",null,"Resize the input tensor image to the given size. It is expected to have\n",(0,i.mdx)("inlineCode",{parentName:"p"},"[\u2026, H, W]")," shape, where ",(0,i.mdx)("inlineCode",{parentName:"p"},"\u2026")," means an arbitrary number of leading\ndimensions."),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://pytorch.org/vision/0.12/generated/torchvision.transforms.Resize.html"},"https://pytorch.org/vision/0.12/generated/torchvision.transforms.Resize.html")),(0,i.mdx)("h4",{id:"parameters-3"},"Parameters"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,i.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,i.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},(0,i.mdx)("inlineCode",{parentName:"td"},"size")),(0,i.mdx)("td",{parentName:"tr",align:"left"},(0,i.mdx)("inlineCode",{parentName:"td"},"number")," ","|"," ","[",(0,i.mdx)("inlineCode",{parentName:"td"},"number"),"]"," ","|"," ","[",(0,i.mdx)("inlineCode",{parentName:"td"},"number"),", ",(0,i.mdx)("inlineCode",{parentName:"td"},"number"),"]"),(0,i.mdx)("td",{parentName:"tr",align:"left"},"Desired output size. If size is a sequence like ",(0,i.mdx)("inlineCode",{parentName:"td"},"(h, w)"),", output size will be matched to this. If size is an int, smaller edge of the image will be matched to this number. i.e, if ",(0,i.mdx)("inlineCode",{parentName:"td"},"height > width"),", then image will be rescaled to ",(0,i.mdx)("inlineCode",{parentName:"td"},"(size * height / width, size)"),".")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},(0,i.mdx)("inlineCode",{parentName:"td"},"interpolation?")),(0,i.mdx)("td",{parentName:"tr",align:"left"},(0,i.mdx)("inlineCode",{parentName:"td"},"InterpolationMode")),(0,i.mdx)("td",{parentName:"tr",align:"left"},"Desired interpolation enum.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},(0,i.mdx)("inlineCode",{parentName:"td"},"maxSize?")),(0,i.mdx)("td",{parentName:"tr",align:"left"},(0,i.mdx)("inlineCode",{parentName:"td"},"number")),(0,i.mdx)("td",{parentName:"tr",align:"left"},"The maximum allowed for the longer edge of the resized image.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},(0,i.mdx)("inlineCode",{parentName:"td"},"antialias?")),(0,i.mdx)("td",{parentName:"tr",align:"left"},(0,i.mdx)("inlineCode",{parentName:"td"},"boolean")),(0,i.mdx)("td",{parentName:"tr",align:"left"},"Antialias flag. The flag is false by default and can be set to true for InterpolationMode.BILINEAR only mode.")))),(0,i.mdx)("h4",{id:"returns-3"},"Returns"),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"/live/docs/api/core/modules/torchlive_torchvision#transform"},"Transform")),(0,i.mdx)("h4",{id:"defined-in-3"},"Defined in"),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://github.com/pytorch/live/blob/ea02e68/react-native-pytorch-core/src/torchlive/torchvision.ts#L86"},"torchlive/torchvision.ts:86")))}c.isMDXComponent=!0}}]);