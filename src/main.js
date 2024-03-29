// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Import global styles
require('~/css/main.css');

import DefaultLayout from '~/layouts/Default.vue';

export default function(Vue, { router, head, isClient }) {
	// Set default layout as a global component
	Vue.component('Layout', DefaultLayout);
	head.bodyAttrs = { class: 'grain' };
	head.link.push({
		rel: 'stylesheet',
		href:
			'https://fonts.googleapis.com/css2?family=Cabin:wght@400;500;700&display=swap',
	});
}
