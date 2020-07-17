<template>
	<view class="p-3">
		
		<view class="bg-white radius10 mb-3 d-flex a-start item">
			<image src="../../static/images/icon6.png" class="icon2"></image>
			<view class="flex-1">
				<view class="avoidOverflow2">position的值， relative和absolute分别是相对于谁进行定位的？</view>
				<view class="font-26 color6 pt-1 avoidOverflow3">
					问题描述描述:position的值， relative和absolute分别是相对于谁进行定位的？position的值， relative和absolute分别是相对于谁进行定位的？position的值， relative和absolute分别是相对于谁进行定位的？
				</view>
			</view>
		</view>
		
		<view class="bg-white radius10 mb-3 d-flex a-start item">
			<image src="../../static/images/icon7.png" class="icon2"></image>
			<view class="flex-1">
				<view>§ absolute :生成绝对定位的元素， 相对于最近一级的 定位不是 static 的父元素来进行定位。§ fixed （老IE不支持）生成绝对定位的元素，通常相对于浏览器窗口或 frame 进行定位。§ relative 生成相对定位的元素，相对于其在普通流中的位置进行定位。</view>
				<image src="../../static/images/img2.png" class="conImg"></image>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.conImg{width: 610rpx;height: 280rpx;margin-top: 20rpx;}
</style>
