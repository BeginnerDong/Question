<template>
	<view class="color2 px-3 font-26">
		<view class="tt flex3 py-4 bB-f5">
			<view class="font-28">平台类型</view>
			<view class="d-flex a-center">
				<view>{{mainData.class==1?'window':'linux'}}</view>
			</view>
		</view>
		<view class="tt flex3 py-4 bB-f5">
			<view class="font-28">问题类型</view>
			<view>{{mainData.type?mainData.type.title:''}}</view>
		</view>
		<view class="tt flex3 py-4 bB-f5">
			<view class="font-28">联系方式</view>
			<view>{{mainData.phone?mainData.phone:''}}</view>
		</view>
		<view class="tt flex3 py-4 bB-f5">
			<view class="font-28">省/市/区</view>
			<view>{{mainData.passage1?mainData.passage1:''}}</view>
		</view>
		<view class="tt flex3 py-4 bB-f5">
			<view class="font-28">详细地址</view>
			<view>{{mainData.passage2?mainData.passage2:''}}</view>
		</view>
		<view class="tt flex3 py-4 bB-f5">
			<view class="font-28">问题标题</view>
			<view>{{mainData.title?mainData.title:''}}</view>
		</view>
		<view class="tt flex3 py-4 bB-f5">
			<view class="font-28">内容</view>
			<view class="text-left">{{mainData.description?mainData.description:''}}</view>
		</view>
		<view class="tt py-4">
			<view class="font-28">图片</view>
			<view class="d-flex flex-wrap pt-4 w-100" style="width: 100%;">
				<image v-for="(item,index) in mainData.mainImg" :key="index" :src="item.url" class="img"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mainData:{}
			}
		},
		
		onLoad() {
			const self = this;
			uni.setStorageSync('canClick', true);
			self.$Utils.loadAll(['getMainData'], self);
		},
		
		methods: {
			
			getMainData() {
				var self = this;
				const postData = {};
				postData.searchItem = {
					thirdapp_id:2,
					id:self.id
				};
				postData.getAfter = {
					type:{
						tableName:'Label',
						middleKey:'score',
						key:'id',
						searchItem:{
							status:1
						},
						condition:'=',
						info:['title']
					}
				};
				var callback = function(res){
					if(res.info.data.length>0){
						self.mainData = res.info.data[0]
					}
					self.$Utils.finishFunc('getMainData');
				};
				self.$apis.messageGet(postData, callback);
			},
		}
	}
</script>

<style>
page{background-color: #fff;}
.tt:nth-child(7) view:nth-child(2){width: 442rpx;}
.img{width: 240rpx;height: 240rpx;margin-bottom: 20rpx;margin-right: 20rpx;}
</style>
