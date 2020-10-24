if (self.CavalryLogger) { CavalryLogger.start_js(["po6+P"]); }

__d("CometUFICommentFallbackAttachmentStyle_styleTypeRenderer$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},b=[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],c={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},e=[d];return{kind:"SplitOperation",metadata:{},name:"CometUFICommentFallbackAttachmentStyle_styleTypeRenderer$normalization",selections:[{alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachment",plural:!1,selections:[a,{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"source",plural:!1,selections:b,storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title_with_entities",plural:!1,selections:b,storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"target",plural:!1,selections:[c,d,{kind:"InlineFragment",selections:[a],type:"ExternalUrl",abstractKey:null}],storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"action_links",plural:!0,selections:[c,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"object_id",storageKey:null}],type:"ArticleContextActionLink",abstractKey:null}],storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[c,{alias:"fallback_image",args:[{kind:"Literal",name:"height",value:98},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:98}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_playable",storageKey:null},{kind:"InlineFragment",selections:e,type:"Node",abstractKey:"__isNode"},{kind:"InlineFragment",selections:e,type:"ComposerMediaTemplatePreview",abstractKey:null},{kind:"InlineFragment",selections:e,type:"GenericAttachmentMedia",abstractKey:null},{kind:"InlineFragment",selections:e,type:"MontageImage",abstractKey:null},{kind:"InlineFragment",selections:e,type:"MontageVideo",abstractKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"tracking",storageKey:null}],storageKey:null}]}}();e.exports=a}),null);
__d("CometUFICommentFallbackAttachmentStyle_styleTypeRenderer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometUFICommentFallbackAttachmentStyle_styleTypeRenderer",selections:[{alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachment",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometUFICommentFallbackAttachment_attachment"}],storageKey:null}],type:"StoryAttachmentFallbackStyleRenderer",abstractKey:null};e.exports=a}),null);
__d("CometUFICommentFallbackAttachment_attachment.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},b=[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}];return{argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"CometUFICommentFallbackAttachment_attachment",selections:[a,{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"source",plural:!1,selections:b,storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title_with_entities",plural:!1,selections:b,storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"target",plural:!1,selections:[{kind:"InlineFragment",selections:[a],type:"ExternalUrl",abstractKey:null}],storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"action_links",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{args:null,kind:"FragmentSpread",name:"UFI2CommentArticleContext_actionLink"}],storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[{alias:"fallback_image",args:[{kind:"Literal",name:"height",value:98},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:98}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_playable",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"tracking",storageKey:null}],type:"StoryAttachment",abstractKey:null}}();e.exports=a}),null);
__d("useProfileFormField",["React"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){var b=g.useState(a),c=b[0];b=b[1];a=JSON.stringify(c)!==JSON.stringify(a);return[c,b,a]}}),null);
__d("CometUFICommentFallbackAttachment.react",["ix","BaseAccessibleElement_DEPRECATED.react","BaseLink.react","CometImage.react","CometPlaceholder.react","CometRelay","JSResource","React","TetraTextPairing.react","UFI2ScaleRect","lazyLoadComponent","stylex","CometUFICommentFallbackAttachment_attachment.graphql"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i,j=b("React"),k=b("lazyLoadComponent")(b("JSResource")("UFI2CommentArticleContext.react").__setRef("CometUFICommentFallbackAttachment.react")),l={attachmentContainer:{borderTop:"l6v480f0",borderEnd:"maa8sdkg",borderBottom:"s1tcr66n",borderStart:"aypy0576",borderTopStartRadius:"e72ty7fz",borderTopEndRadius:"qlfml3jp",borderBottomEndRadius:"inkptoze",borderBottomStartRadius:"qmr60zad",display:"j83agx80",flexDirection:"btwxx1t3",flexGrow:"buofh1pr",flexWrap:"owycx6da",overflowX:"ni8dbmo4",overflowY:"stjgntxs",position:"l9j0dhe7"},body:{borderStart:"t63ysoy8",boxSizing:"rq0escxv",display:"j83agx80",flexDirection:"cbu4d94t",flexGrow:"buofh1pr",justifyContent:"taijpn5t",paddingTop:"jktsbyx5",paddingEnd:"d1544ag0",paddingBottom:"osnr6wyh",paddingStart:"tw6a2znq",width:"k4urcfbm"},linkOverlay:{bottom:"i09qtzwb",end:"n7fi1qx3",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4",":hover":{backgroundColor:"dwzzwef6"}},media:{display:"j83agx80",flexBasis:"cu69yu53",flexDirection:"cbu4d94t",flexShrink:"pfnyh3mw",height:"lc891dc2",justifyContent:"taijpn5t",pointerEvents:"hzruof5a",position:"l9j0dhe7",width:"aijzkk2f"},mediaImage:{borderBottomStartRadius:"qmr60zad",borderTopStartRadius:"e72ty7fz",verticalAlign:"j1lvzwm4"},playIcon:{bottom:"i09qtzwb",display:"pq6dq46d",end:"n7fi1qx3",height:"gvqrqva3",marginTop:"km676qkl",marginEnd:"ad2k81qe",marginBottom:"myj7ivm5",marginStart:"f9o22wc5",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4",width:"jokk5rks"},root:{marginTop:"rs0gx3tq",maxWidth:"d2edcug0",position:"l9j0dhe7",width:"i5up6316"}};function a(a){var c,d,e,f;a=b("CometRelay").useFragment(h!==void 0?h:h=b("CometUFICommentFallbackAttachment_attachment.graphql"),a.attachment);c=(c=(c=a.target)==null?void 0:c.url)!=null?c:a.url;var m=(d=a.title_with_entities)==null?void 0:d.text,n=(d=a.source)==null?void 0:d.text;d=(d=a.media)==null?void 0:(d=d.fallback_image)==null?void 0:d.uri;e=(e=a.media)==null?void 0:(e=e.fallback_image)==null?void 0:e.width;f=(f=a.media)==null?void 0:(f=f.fallback_image)==null?void 0:f.height;var o=null;if(d!=null&&e!=null&&f!=null){var p;f=b("UFI2ScaleRect").scaleToContain({gracefullyFallbackToMaxDimensionWhenHeightOrWidthIsZero:!0,maxHeight:98,maxWidth:98,srcHeight:f,srcWidth:e});e=f.height;f=f.width;o=d&&j.jsxs(j.Fragment,{children:[j.jsx(b("CometImage.react"),{alt:(p=(p=m)!=null?p:n)!=null?p:"",height:e,src:d,width:f,xstyle:l.mediaImage}),((p=a.media)==null?void 0:p.is_playable)?j.jsx("span",{className:(i||(i=b("stylex")))(l.playIcon),children:j.jsx(b("CometImage.react"),{src:g("40151")})}):null]})}e=null;a.action_links.forEach(function(a){if(a.__typename==="ArticleContextActionLink"){e=j.jsx(k,{actionLink:a,title:(a=m)!=null?a:n})}});return j.jsxs("div",{className:(i||(i=b("stylex")))(l.root),"data-ft":a.tracking,children:[j.jsxs("div",{className:i(l.attachmentContainer),children:[o!=null?j.jsx("div",{className:(i||(i=b("stylex")))(l.media),children:o}):null,j.jsxs("div",{className:i(l.body),children:[j.jsx(b("TetraTextPairing.react"),{body:m,bodyLineLimit:2,level:2,meta:n!=null?n.toLocaleUpperCase():null,metaLocation:"above"}),c!==null?j.jsx(b("BaseLink.react"),{href:c,rel:["noopener","nofollow"],target:"_blank",xstyle:l.linkOverlay,children:j.jsx(b("BaseAccessibleElement_DEPRECATED.react"),{children:(d=m)!=null?d:n})}):null]})]}),j.jsx(b("CometPlaceholder.react"),{fallback:null,children:e})]})}}),null);
__d("CometUFICommentFallbackAttachmentStyle.react",["CometRelay","CometUFICommentFallbackAttachment.react","FBLogger","React","CometUFICommentFallbackAttachmentStyle_styleTypeRenderer.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React");function a(a){a=a.styleTypeRenderer;a=b("CometRelay").useFragment(g!==void 0?g:g=b("CometUFICommentFallbackAttachmentStyle_styleTypeRenderer.graphql"),a);a=a.attachment;if(a==null){b("FBLogger")("CometFeed").mustfix("CometUFICommentFallbackAttachmentStyle: Tried to render a fallback attachment, but attachment information is null.");return null}return h.jsx(b("CometUFICommentFallbackAttachment.react"),{attachment:a})}}),null);