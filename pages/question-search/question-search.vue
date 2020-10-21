<template>
	<view>
		<view class="bg-white px-3 py-2 flex1 p-r">
			<input type="text" v-model="keywords" placeholder="搜索您想要的内容" />
			<view class="font-30 Mcolor pl-4" @click="search">搜索</view>
			<image src="../../static/images/icon8.png" class="icon3"></image>
		</view>
		
		<view class="px-3 py-2 font-30 color2">
			
			<view class="bg-white radius10 mb-2 d-flex a-start item" v-for="(item,index) of mainData" :key="item.id" :data-id="item.id"
			 @click="Router.navigateTo({route:{path:'/pages/question-detail/question-detail?id='+$event.currentTarget.dataset.id}})">
				<image src="../../static/images/icon6.png" class="icon2"></image>
				<view class="flex-1">
					<view class="avoidOverflow2">{{item.title?item.title:''}}</view>
					<view class="font-26 color6 pt-1 avoidOverflow3">
						{{item.description?item.description:''}}
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
				Router:this.$Router,
				mainData:[],
				keywords:''
			}
		},
		
		onLoad() {
			const self = this;
			self.paginate = self.$Utils.cloneForm(self.$AssetsConfig.paginate);
			self.$Utils.loadAll(['getMainData'], self);
		},
		
		onReachBottom() {
			console.log('onReachBottom')
			const self = this;
			if (!self.isLoadAll && uni.getStorageSync('loadAllArray')) {
				self.paginate.currentPage++;
				self.getMainData()
			};
		},
		
		onPullDownRefresh() {
			const self = this;
			console.log('refresh'),
			self.keywords = '';
			self.getMainData(true)	
		},
		
		methods: {
			
			search(){
				const self = this;
				if(self.keywords!=''){
					self.getMainData(true)
				}else{
					self.$Utils.showToast('请输入关键词搜索', 'none')
				}
			},
			
			getMainData(isNew) {
				const self = this;
				if (isNew) {
					self.mainData = [];
					self.paginate = {
						count: 0,
						currentPage: 1,
						is_page: true,
						pagesize: 10
					}
				};
				const postData = {};
				postData.paginate = self.$Utils.cloneForm(self.paginate);
				postData.searchItem = {
					thirdapp_id: 2,
				};
				postData.order  = {
					create_time:'desc'
				};
				if(self.keywords!=''){
					postData.searchItem.title = ['LIKE', ['%' + self.keywords + '%']]
				};
				const callback = (res) => {
					if (res.info.data.length > 0) {
						self.mainData.push.apply(self.mainData, res.info.data);
					};
					uni.stopPullDownRefresh()
					self.total = res.info.total;
					self.$Utils.finishFunc('getMainData');
				};
				self.$apis.messageGet(postData, callback);
			},
			
		}
	}
</script>

<style scoped>
input{background-color: #f5f5f5;flex: 1;line-height: 60rpx;height: 60rpx; border-radius: 10rpx;display: block;padding-left: 60rpx;font-size: 24rpx;}
</style>
