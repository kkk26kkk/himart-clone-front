<template>
	<div>
		<h2>GoodsDetailView</h2>
		상품번호 : {{ goodsDetail.goodsNo }} <br />
		상품명 : {{ goodsDetail.goodsNm }} <br />
		모델명 : {{ goodsDetail.mdlNm }} <br />
		브랜드 : {{ goodsDetail.brndNm }} <br />
		판매상태 : {{ goodsDetail.saleStatCd }} <br />
		상품유형 : {{ goodsDetail.goodsTpCd }} <br />
		상품구성 : {{ goodsDetail.goodsCmpsCd }} <br />
		배송수단 : {{ goodsDetail.dlvTpCd }} <br />
		배송유형 : {{ goodsDetail.dlvMeanCd }} <br />
		판매가 : {{ goodsDetail.salePrc }} <br />
		사용설명서 : {{ goodsDetail.manual }} <br />
		<li v-for="image in goodsDetail.images" :key="image.sn">
			<img :src="image.url" :alt="image.url" />
		</li>
		MD공지 : {{ goodsDetail.mdNotice }} <br />
		상세설명 : {{ goodsDetail.description }} <br />
		전시등급 : {{ goodsDetail.displayInfo.prdGrdCd }} <br />
		지점 : {{ goodsDetail.displayInfo.brchId }}
	</div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { getGoodsDetail } from '@/api/goods';
import { ref } from 'vue';
const route = useRoute();

const goodsDetail = ref({});
const fetchGoods = async () => {
	({ data: goodsDetail.value } = await getGoodsDetail(route.query.goodsNo));
};
fetchGoods();
</script>

<style scoped></style>
