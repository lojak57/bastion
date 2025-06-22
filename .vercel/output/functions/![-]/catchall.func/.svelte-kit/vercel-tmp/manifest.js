export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico","images/5280-hero-bg.png","images/hero-mountains.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.DlY3c9qN.js",app:"_app/immutable/entry/app.ByrzLb1i.js",imports:["_app/immutable/entry/start.DlY3c9qN.js","_app/immutable/chunks/CDxg8SBf.js","_app/immutable/chunks/Css05BXU.js","_app/immutable/chunks/_257eR7t.js","_app/immutable/entry/app.ByrzLb1i.js","_app/immutable/chunks/Css05BXU.js","_app/immutable/chunks/scG1bs2O.js","_app/immutable/chunks/Eh6UUspi.js","_app/immutable/chunks/_257eR7t.js","_app/immutable/chunks/9uFmwV0r.js","_app/immutable/chunks/0rg3Sjrj.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js')),
			__memo(() => import('../output/server/nodes/6.js'))
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
				id: "/api/leads",
				pattern: /^\/api\/leads\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/leads/_server.ts.js'))
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/solo-biz-helper",
				pattern: /^\/solo-biz-helper\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/thank-you",
				pattern: /^\/thank-you\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
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
