export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico","favicon.png","favicon.svg","images/5280-hero-bg.png","images/hero-mountains.png","images/logo/weknowco-full-logo.png","images/logo/weknowco-icon.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.DdzwzjUN.js",app:"_app/immutable/entry/app.1UoXp4Gl.js",imports:["_app/immutable/entry/start.DdzwzjUN.js","_app/immutable/chunks/i6PB7SaW.js","_app/immutable/chunks/C63uuvp8.js","_app/immutable/chunks/DjEDCbSZ.js","_app/immutable/entry/app.1UoXp4Gl.js","_app/immutable/chunks/C63uuvp8.js","_app/immutable/chunks/Q8BvE5vV.js","_app/immutable/chunks/BSdB2KAb.js","_app/immutable/chunks/DjEDCbSZ.js","_app/immutable/chunks/DO8Tl_SB.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/5280-site",
				pattern: /^\/5280-site\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/api/leads",
				pattern: /^\/api\/leads\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/leads/_server.ts.js'))
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/plans-growth",
				pattern: /^\/plans-growth\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/solo-biz-helper",
				pattern: /^\/solo-biz-helper\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/thank-you",
				pattern: /^\/thank-you\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
