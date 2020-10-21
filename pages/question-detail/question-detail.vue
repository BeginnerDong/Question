<template>
	<view class="p-3">
		
		<view class="bg-white radius10 mb-3 d-flex a-start item">
			<image src="../../static/images/icon6.png" class="icon2"></image>
			<view class="flex-1">
				<view class="avoidOverflow2">{{mainData.title?mainData.title:''}}</view>
				<view class="font-26 color6 pt-1">
					{{mainData.description?mainData.description:''}}
				</view>
				<view class="d-flex flex-wrap  w-100" style="width: 100%">
					
					
					<image @click="previewImg(index)" v-for="(item,index) in mainData.mainImg" :key="index" :src="item.url" style="width: 33.3%;height: 200rpx;margin-top: 20rpx;" mode="aspectFit"></image>
				</view>
				<view class="d-flex j-center pt-2">
					<view class="font-24  d-flex j-start">平台：{{mainData.class&&mainData.class==1?'windows':'linux'}}</view>
					<view class="font-24  d-flex j-start">类型：{{mainData.type.title?mainData.type.title:''}}</view>
				</view>
			</view>
		</view>
		
		<view class="bg-white radius10 mb-3 d-flex a-start item">
			<image src="../../static/images/icon7.png" class="icon2"></image>
			<view class="flex-1">
				<view v-if="mainData.content==''">暂时没有回答~</view>
				<view v-else>
					<view   @click="getImg($event)" class="content ql-editor" style="padding:0;" v-html="mainData.content">
					</view>
				</view>
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
		
		onLoad(options) {
			const self = this;
			uni.setStorageSync('canClick', true);
			self.id =  options.id;
			self.$Utils.loadAll(['getMainData'], self);
		},
		
		methods: {
			
			previewImg(index){
				const self = this;
				var urls = [];
				for (var i = 0; i < self.mainData.mainImg.length; i++) {
					urls.push(self.mainData.mainImg[i].url)
				};
				uni.previewImage({
					current:index,
					urls:urls,
				})
			},
			
			getImg($event){
			  console.log($event)
			  console.log($event.target.currentSrc)
			},
			
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
						const regex = new RegExp('<img', 'gi');
						self.mainData.content = self.mainData.content.replace(regex, `<img style="max-width: 100%;"`);
					}
					self.$Utils.finishFunc('getMainData');
				};
				self.$apis.messageGet(postData, callback);
			},
		}
	}
</script>

<style>
.conImg{width: 610rpx;height: 280rpx;margin-top: 20rpx;}
</style>
