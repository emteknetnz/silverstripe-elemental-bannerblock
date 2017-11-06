!function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=5)}([function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"Component",function(){return f});var o=n(2),l=n.n(o),c=n(1),s=(n.n(c),n(8)),u=n.n(s),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),f=function(e){function t(e){i(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleChangeValue=n.handleChangeValue.bind(n),n}return a(t,e),p(t,[{key:"getOptionByValue",value:function(e){return this.props.actions.find(function(t){return t.value===e})}},{key:"handleChangeValue",value:function(e){var t=this.getOptionByValue(e.target.value);return void 0===t?null:"function"==typeof t.confirm?t.confirm().then(function(){return t.callback()}).catch(function(e){if("cancelled"!==e)throw e}):t.callback()||Promise.resolve()}},{key:"render",value:function(){var e=this,t=this.props.actions.map(function(t){var n=u()("block-link-field__action","btn","btn-secondary",t.className||"");return l.a.createElement("button",{type:"button",className:n,key:t.value,onClick:e.handleChangeValue,value:t.value},t.label)}).filter(function(e){return e});if(!t.length)return null;var n=this.props.PopoverField;return l.a.createElement("div",{className:"block-link-field-actions fieldholder-small input-group"},l.a.createElement(n,{id:this.props.id,popoverClassName:"block-link-field-actions__menu",className:"btn-sm",buttonSize:"md",data:{placement:"bottom"},container:this.props.container},t))}}]),t}(o.Component);f.propTypes={id:l.a.PropTypes.string.isRequired,actions:l.a.PropTypes.arrayOf(l.a.PropTypes.shape({value:l.a.PropTypes.string.isRequired,label:l.a.PropTypes.string.isRequired,className:l.a.PropTypes.string,destructive:l.a.PropTypes.bool,callback:l.a.PropTypes.func,canApply:l.a.PropTypes.func,confirm:l.a.PropTypes.func})),PopoverField:l.a.PropTypes.oneOfType([l.a.PropTypes.node,l.a.PropTypes.func])},f.defaultProps={id:"",actions:[],PopoverField:null},t.default=n.i(c.inject)(["PopoverField"],function(e){return{PopoverField:e}},function(){return"BlockLinkFieldActions"})(f)},function(e,t){e.exports=Injector},function(e,t){e.exports=React},function(e,t){e.exports=i18n},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(9),r=n.n(i),a=n(3),o=n.n(a),l=n(2),c=n.n(l),s=n(7),u=n.n(s),p=n(0),f=n(6),d=n(1),h=(n.n(d),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}),v="insert-link__dialog-wrapper--internal",g=v+"-no-tinymce",k=n.i(d.provideInjector)(p.default);r.a.entwine("ss",function(e){e(".form__field-holder .block-link-field").entwine({getDialogWrapper:function(){return e("#"+v)},createDialog:function(){var t=this.getDialogWrapper();t.length||(t=e('<div id="'+v+'" />').addClass("insert-link__dialog-wrapper"),e("body").append(t))},onmatch:function(){this.createDialog()},onclick:function(t){if(!e(t.target).is("button")){var n=this.attr("name");this.getDialogWrapper().addClass(g).data("datafield-name",n).renderModal(!0),e("#"+v).updateModalTitle(e(this).find("#"+n+"_Title").val())}},registerChange:function(){this.find(".block-link-field__content").empty().append(e("<span/>").addClass("block-link-field__content--message").text(o.a._t("BlockLinkField.ModifiedMessage","Changes will be visible upon save")))}}),e(".js-injector-boot .block-link-field__actions").entwine({getLinkField:function(){return this.parent(".block-link-field")},getLinkDataField:function(){return this.getLinkField().find("input:hidden.block-link-field")},onmatch:function(){var e=JSON.parse(this.getLinkDataField().val());e&&void 0!==e.PageID&&this.renderActionsMenu()},renderActionsMenu:function(){var t=this,n=f.a.LINK_ACTIONS.map(function(n){if(n.callback)return n;switch(n.value){case"clear":return h({},n,{callback:function(){t.getLinkDataField().val("{}"),t.getLinkField().registerChange(),t.remove(),e("#"+t.find(".btn").attr("aria-controls")).remove()}});default:return n}});u.a.render(c.a.createElement(k,{id:this.getLinkDataField().attr("name")+"_Popover",actions:n,container:this.closest("form")[0]}),this[0])}}),e("#"+v).entwine({isTinyMce:function(){return!this.hasClass(g)},getRequireLinkText:function(){if(this.isTinyMce())return this._super();var e=this.getLinkDataField();return void 0===e||void 0===e.data("showlinktext")||!!+e.data("showlinktext")},getLinkDataField:function(){var t=this.data("datafield-name");return e('input[name="'+t+'"]')},getDataFromLinkField:function(){var e=this.getLinkDataField(),t={};if(void 0!==e)try{t=JSON.parse(e.val())}catch(e){}return t||(t={}),t},setDataToLinkField:function(e){var t=this.getLinkDataField();if(t){var n={},i=Object.keys(e).filter(function(e){return["PageID","Anchor","Text","Description","TargetBlank"].includes(e)}).reduce(function(t,i){return n[i]=e[i],n},{});t.val(JSON.stringify(i))}},getModalTitle:function(){return e(".modal."+v).find(".modal-title")},updateModalTitle:function(e){this.getModalTitle().text(e)},getLinkAttributes:function(){var e=this.getDataFromLinkField();return{PageID:e.PageID||0,Anchor:e.Anchor||"",Text:e.Text||"",Description:e.Description||"",TargetBlank:e.TargetBlank||!1}},handleInsert:function(e){return this.isTinyMce()?this._super(e):(this.setDataToLinkField(e),this.close(),Promise.resolve())},getOriginalAttributes:function(){return this.isTinyMce()?this._super():this.getLinkAttributes()},updateFormField:function(){this.getLinkDataField().parent("div.block-link-field").registerChange()},close:function(){var e=this._super();return this.removeClass(g),this.updateFormField(),e}})})},function(e,t,n){n(4),n(0)},function(e,t,n){"use strict";var i=n(3),r=n.n(i);t.a={LINK_ACTIONS:[{value:"clear",label:r.a._t("BlockLinkField.ClearLink","Clear link"),className:"",destructive:!0,canApply:function(){return!0},callback:null}]}},function(e,t){e.exports=ReactDom},function(e,t){e.exports=classnames},function(e,t){e.exports=jQuery}]);