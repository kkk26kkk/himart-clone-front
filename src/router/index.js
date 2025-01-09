import { createRouter, createWebHistory } from 'vue-router';
import MainView from '@/views/MainView.vue';
import GoodsDetailView from '@/views/goods/GoodsDetailView.vue';

const routes = [
	{
		path: '/',
		name: 'main',
		component: MainView,
	},
	{
		path: '/goods/goodsDetail',
		name: 'goodsDetail',
		component: GoodsDetailView,
	},
];

const router = createRouter({
	history: createWebHistory('/'),
	routes,
});

export default router;
