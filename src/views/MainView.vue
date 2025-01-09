<template>
	<div>
		<h2>MainView</h2>
		<li v-for="goods in goodsList" :key="goods.id">
			<button @click="goodsDetail(goods.goodsNo)">
				{{ goods.goodsNm }}
			</button>
		</li>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const goodsDetail = goodsNo =>
	router.push({ name: 'goodsDetail', query: { goodsNo } });
const goodsList = [
	{
		goodsNo: '0028266334',
		goodsNm: '[상급 / 효자점] LG A9/200W/물걸레/침구 (J)AT9170IA.BKOR1',
	},
	{
		goodsNo: '0022103485',
		goodsNm: 'LG A9/200W/물걸레/침구',
	},
	{
		goodsNo: '0000001745',
		goodsNm: '미니 전기주전자 BI-81252A [0.8L/1850W]',
	},
];
</script>

<style scoped></style>
