<template>
	<view class="color2 px-3 line-h">
		<view class="tt flex3 py-4 bB-f5">
			<view class="font-28">平台类型</view>
			<view class="font-26 d-flex j-end">
				<view class="d-flex a-center">
					<image src="../../static/images/icon3.png" class="icon1"></image>
					<view>window</view>
				</view>
				<view class="pl-3 d-flex a-center">
					<image src="../../static/images/icon4.png" class="icon1"></image>
					<view>linux</view>
				</view>
			</view>
		</view>
		<view class="tt flex3 py-4 bB-f5 type" @click="changeType()">
			<view class="font-28">问题类型</view>
			<view class="font-24">
				<input type="text" placeholder="请输入" v-model="type"/>
				<image src="../../static/images/icon1.png" class="icon"></image>
			</view>
		</view>
		<view class="tt flex3 py-4 bB-f5">
			<view class="font-28">联系方式</view>
			<view class="font-24">
				<input type="text" placeholder="请输入" />
			</view>
		</view>
		<view class="tt flex3 py-4 bB-f5">
			<view class="font-28">省/市/区</view>
			<view class="font-24">
				<input type="text" placeholder="请输入" />
				<image src="../../static/images/icon1.png" class="icon"></image>
			</view>
		</view>
		<view class="tt flex3 py-4 bB-f5">
			<view class="font-28">问题标题</view>
			<view class="font-24">
				<input type="text" placeholder="请输入" />
			</view>
		</view>
		<view class="tt flex3 py-4 bB-f5">
			<view class="font-28">内容</view>
			<view class="font-24 h-100">
				<textarea value="" placeholder="请输入" />
			</view>
		</view>
		<view class="tt pt-4 pb-2 bB-f5">
			<view class="font-28">图片</view>
			<view class="d-flex flex-wrap pt-4 w-100" style="width: 100%;">
				<image src="../../static/images/img1.png" class="img"></image>
				
				<image src="../../static/images/icon5.png" class="img"></image>
			</view>
		</view>
		<view class="tt py-5">
			<view class="font-28 submit" @click="Router.redirectTo({route:{path:'/pages/question/question'}})">提交</view>
		</view>
		
		
		<view class="bg-mask" v-show="type_show">
			<view class="bg-white radius10 span-15 t-indent10 p-aXY m-a" style="height: 328rpx;">
				<view class="py-4 bB-f5" @click="changeType('会员')">会员</view>
				<view class="py-4 bB-f5" @click="changeType('功能')">功能</view>
				<view class="py-4" @click="changeType('工具')">工具</view>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				Router:this.$Router,
				type_show:false,
				type:""
			}
		},
		onLoad(){
			
		},
		methods: {
			changeType(type){
				const self = this;
				self.type_show = !self.type_show;
				self.type = type;
			}
		}
	}
</script>

<style>
page{background-color: #fff;}
.tt>view:nth-child(2){width: 440rpx;text-align: right;display: flex;align-items: center;}
.tt input,.tt textarea{flex: 1;color: #999;}
.tt textarea{display: block;width: 100%;height: 100rpx;line-height: 1.3;}
.img{width: 140rpx;height: 140rpx;margin-bottom: 20rpx;margin-right: 30rpx;}
.tt .img:nth-child(4n){margin-right: 0;}
.submit{width: 100%;color: #fff;background-color: #329CFF;border-radius: 10rpx;line-height: 80rpx;text-align: center;}
</style>
