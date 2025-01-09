import axios from 'axios';

export function getGoodsDetail(goodsNo) {
	return axios.get(
		`http://localhost:8080/goods/goodsDetail?goodsNo=${goodsNo}`,
	);
}
