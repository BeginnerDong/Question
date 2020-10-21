<template>
	<view>
		<!-- banner -->
		<view class="banner">
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" indicator-active-color="#329CFF">
				<swiper-item v-for="(item,index) of sliderData.mainImg" :key="index">
					<view class="swiper-item">
						<image :src="item.url" mode=""></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		
		
		
		<view class="flex1 colorf line-h p-3">
			<view class="bg1 radius10 d-flex a-center" @click="Router.navigateTo({route:{path:'/pages/question-submit/question-submit'}})">
				<image src="../../static/images/icon.png"></image>
				<view class="flex4">
					<view class="font-30 pb-3">问题提交</view>
					<view class="font-20">立即进入></view>
				</view>
			</view>
			<view class="bg2 radius10 d-flex a-center" @click="Router.navigateTo({route:{path:'/pages/question-search/question-search'}})">
				<image src="../../static/images/icon2.png"></image>
				<view class="flex4">
					<view class="font-30 pb-3">问题查询</view>
					<view class="font-20">立即进入></view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				Router:this.$Router,
				sliderData:{}
			}
		},
		
		onLoad() {
			const self = this;
			uni.setStorageSync('canClick', true);
			self.$Utils.loadAll(['getSliderData'], self);
		},
		
		onShareAppMessage(ops) {
			console.log(ops)
			const self = this;
			if (ops.from === 'button') {
				
				return {
					title:'',
					path: '/pages/index/index', //点击分享的图片进到哪一个页面
					//imageUrl:self.mainData&&self.mainData.mainImg&&self.mainData.mainImg[0]&&self.mainData.mainImg[0].url?self.mainData.mainImg[0].url:'',
				}
			}else{
				return {
					title:'',
					path: '/pages/index/index', //点击分享的图片进到哪一个页面
					//imageUrl:self.mainData&&self.mainData.mainImg&&self.mainData.mainImg[0]&&self.mainData.mainImg[0].url?self.mainData.mainImg[0].url:'',
				}
			}
		},
		
		methods: {
			
			getSliderData() {
				var self = this;
				const postData = {};
				postData.searchItem = {
					thirdapp_id:2,
					title:'首页轮播图'
				};
				var callback = function(res){
					if(res.info.data.length>0){
						self.sliderData = res.info.data[0]
					}
					self.$Utils.finishFunc('getSliderData');
				};
				self.$apis.labelGet(postData, callback);
			},
			
		}
	};
</script>
<style>
.banner swiper{height: 400rpx;background-color: #fff;}
.banner image{width: 100%;height: 400rpx;}
.bg1{background-color: #329CFF;height: 160rpx;width: 330rpx;}
.bg1 image{width: 68rpx;height: 70rpx;margin: 0 20rpx 0 30rpx;}
.bg2{background-color: #FF8D2D;height: 160rpx;width: 330rpx;}
.bg2 image{width: 75rpx;height: 67rpx;margin: 0 20rpx 0 30rpx;}
</style>
