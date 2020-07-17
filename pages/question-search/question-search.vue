<template>
	<view>
		<view class="bg-white px-3 py-2 flex1 p-r">
			<input type="text" value="" placeholder="搜索您想要的内容" />
			<view class="font-30 Mcolor pl-4">搜索</view>
			<image src="../../static/images/icon8.png" class="icon3"></image>
		</view>
		
		<view class="px-3 py-2 font-30 color2">
			
			<view class="bg-white radius10 mb-2 d-flex a-start item" @click="Router.redirectTo({route:{path:'/pages/question-detail/question-detail'}})">
				<image src="../../static/images/icon6.png" class="icon2"></image>
				<view class="flex-1">
					<view class="avoidOverflow2">position的值， relative和absolute分别是相对于谁进行定位的？</view>
					<view class="font-26 color6 pt-1 avoidOverflow3">
						问题描述描述:position的值， relative和absolute分别是相对于谁进行定位的？position的值， relative和absolute分别是相对于谁进行定位的？position的值， relative和absolute分别是相对于谁进行定位的？
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
				Router:this.$Router
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
input{background-color: #f5f5f5;flex: 1;line-height: 60rpx;height: 60rpx; border-radius: 10rpx;display: block;padding-left: 60rpx;font-size: 24rpx;}
</style>
