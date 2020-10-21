<template>
	<view class="color2 px-3 line-h">
		<view class="tt flex1 py-4 bB-f5">
			<view class="font-28">平台类型</view>
			<view class="font-26 d-flex j-end">
				<view class="d-flex a-center" @click="changeClass(1)">
					<image :src="submitData.class==1?'../../static/images/icon3.png':'../../static/images/icon4.png'" class="icon1"></image>
					<view>windows</view>
				</view>
				<view class="pl-3 d-flex a-center"  @click="changeClass(2)">
					<image :src="submitData.class==2?'../../static/images/icon3.png':'../../static/images/icon4.png'" class="icon1"></image>
					<view>linux</view>
				</view>
			</view>
		</view>
		<view class="tt flex1 py-4 bB-f5 type">
			<view class="font-28">问题类型</view>
			<view class="font-24">
				<!-- <input type="text" placeholder="请输入" v-model="type"/> -->
				<picker mode="selector" :range="typeData" range-key="title" @change="changeType">
					{{typeData[typeIndex]?typeData[typeIndex].title:'请选择'}}
				</picker>
				<image src="../../static/images/icon1.png" class="icon"></image>
			</view>
		</view>
		<view class="tt flex1 py-4 bB-f5">
			<view class="font-28">联系方式</view>
			<view class="font-24">
				<input type="number" maxlength="11" placeholder="请输入" v-model="submitData.phone"/>
			</view>
		</view>
		<view class="tt flex1 py-4 bB-f5">
			<view class="font-28">省/市/区</view>
			<view class="font-24">
				<!-- <input type="text" placeholder="请输入" /> -->
				<picker mode="region"  @change="changeCity">
					{{submitData.passage1!=''?submitData.passage1:'请选择'}}
				</picker>
				<image src="../../static/images/icon1.png" class="icon"></image>
			</view>
		</view>
		<view class="tt flex1 py-4 bB-f5">
			<view class="font-28">详细地址</view>
			<view class="font-24">
				<input type="text" placeholder="请输入" v-model="submitData.passage2"/>
			</view>
		</view>
		<view class="tt flex1 py-4 bB-f5">
			<view class="font-28">问题标题</view>
			<view class="font-24">
				<input type="text" placeholder="请输入" v-model="submitData.title"/>
			</view>
		</view>
		<view class="tt flex1 py-4 bB-f5">
			<view class="font-28">内容</view>
			<view class="font-24 h-100">
				<textarea value="" placeholder="请输入" v-model="submitData.description"/>
			</view>
		</view>
		<view class="tt pt-4 pb-2 bB-f5">
			<view class="font-28">图片</view>
			<view class="d-flex flex-wrap pt-4 w-100" style="width: 100%;">
				<image :src="item.url"  v-for="(item,index) of submitData.mainImg" :key="index" class="img"></image>
				<image v-if="submitData.mainImg.length<8" @click="upLoadImg('mainImg')" src="../../static/images/icon5.png" class="img"></image>
			</view>
		</view>
		<view class="tt py-5">
			<button class="font-28 submit" open-type="getUserInfo" @getuserinfo="Utils.stopMultiClick(submit)">提交</button>
		</view>
		
		
		<!-- <view class="bg-mask" v-show="type_show">
			<view class="bg-white radius10 span-15 t-indent10 p-aXY m-a" style="height: 328rpx;">
				<view class="py-4 bB-f5" @click="changeType('会员')">会员</view>
				<view class="py-4 bB-f5" @click="changeType('功能')">功能</view>
				<view class="py-4" @click="changeType('工具')">工具</view>
			</view>
		</view> -->
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				Router:this.$Router,
				Utils:this.$Utils,
				typeData:[],
				submitData:{
					title:'',
					class:1,
					score:'',
					description:'',
					phone:'',
					passage1:'',
					passage2:'',
					mainImg:[],
					thirdapp_id:2
				},
				typeIndex:-1
			}
		},
		
		onLoad() {
			const self = this;
			uni.setStorageSync('canClick', true);
			self.$Utils.loadAll(['getTypeData'], self);
		},
		
		
		
		methods: {
			
			changeClass(num){
				const self = this;
				self.submitData.class = num
			},
			
			submit() {
				const self = this;
				uni.setStorageSync('canClick', false);
				var newObject = self.$Utils.cloneForm(self.submitData);
				delete newObject.mainImg;
				delete newObject.price;
				const pass = self.$Utils.checkComplete(newObject);
				console.log('self.submitData',self.submitData)
				if (pass) {	
					if (self.submitData.phone.trim().length != 11 || !/^1[3|4|5|6|7|8|9]\d{9}$/.test(self.submitData.phone)) {
						uni.setStorageSync('canClick', true);
						self.$Utils.showToast('请输入真实有效的手机号', 'none', 1000)
						return;
					}
					const callback = (user, res) => {
						self.messageAdd();
					};
					self.$Utils.getAuthSetting(callback);
				} else {
					uni.setStorageSync('canClick', true);
					self.$Utils.showToast('请补全信息', 'none')
				};
			},
			
			
			
			messageAdd() {
				const self = this;
				uni.setStorageSync('canClick', false);
				const postData = {};
				postData.tokenFuncName = 'getProjectToken';
				postData.data = {};
				postData.data = self.$Utils.cloneForm(self.submitData);
				if(!wx.getStorageSync('user_info')||wx.getStorageSync('user_info').headImgUrl==''||!wx.getStorageSync('user_info').headImgUrl){
				  postData.refreshToken = true;
				};
				const callback = (data) => {				
					if (data.solely_code == 100000) {					
						self.$Utils.showToast('提交成功', 'none', 1000)
						setTimeout(function() {
							self.Router.redirectTo({route:{path:'/pages/question/question?id='+data.info.id}})
						}, 1000);
					} else {
						uni.setStorageSync('canClick', true);
						self.$Utils.showToast(data.msg, 'none', 1000)
					}	
				};
				self.$apis.messageAdd(postData, callback);
			},
			
			upLoadImg(type) {
				const self = this;			
				uni.showLoading();
				const callback = (res) => {
					uni.hideLoading();
					console.log('res', res)
					if (res.solely_code == 100000) {
						//self.submitData[type] = [];
						self.submitData[type].push({url:res.info.url,type:'image'})
						console.log(self.submitData)
					} else {
						self.$Utils.showToast('网络故障', 'none')
					}
				};				
				uni.chooseImage({
					count: 8-self.submitData.mainImg.length,
					success: function(res) {
						console.log(res);
						var tempFilePaths = res.tempFilePaths[0];
						var file = res.tempFiles[0];
						var obj = res.tempFiles[0].path.lastIndexOf(".");
						var ext = res.tempFiles[0].path.substr(obj+1);
						console.log(callback)
						self.$Utils.uploadFile(tempFilePaths, 'file', {
							tokenFuncName: 'getProjectToken',ext:ext,md5:'md5',totalSize:file.size,start:0,chunkSize:file.size,originName:'headImg'
						}, callback)
					},
					fail: function(err) {
						uni.hideLoading();
					},			
				})			
			},
			
			changeType(e){
				const self = this;
				console.log(e);
				self.typeIndex = e.detail.value;
				self.submitData.score = self.typeData[self.typeIndex].id;
			},
			
			changeCity(e){
				const self = this;
				console.log(e)
				self.submitData.passage1 = e.detail.value[0]+e.detail.value[1]+e.detail.value[2];
			},
			
			getTypeData() {
				var self = this;
				const postData = {};
				postData.searchItem = {
					thirdapp_id:2,
				};
				postData.getBefore = {
					parent:{
						tableName:'Label',
						middleKey:'parentid',
						key:'id',
						searchItem:{
							title:['in',['问题类型']]
						},
						condition:'in'
					}
				};
				var callback = function(res){
					if(res.info.data.length>0){
						self.typeData = res.info.data
					}
					self.$Utils.finishFunc('getTypeData');
				};
				self.$apis.labelGet(postData, callback);
			},
			
			
			
		}
		
	}
</script>

<style>
page{background-color: #fff;}
.tt>view:nth-child(2){width: 440rpx;text-align: right;display: flex;align-items: center;}
.tt input,.tt textarea,.tt picker{flex: 1;}
.tt textarea{display: block;width: 100%;height: 100rpx;line-height: 1.3;}
.img{width: 140rpx;height: 140rpx;margin-bottom: 20rpx;margin-right: 30rpx;}
.tt .img:nth-child(4n){margin-right: 0;}
.submit{width: 100%;color: #fff;background-color: #329CFF;border-radius: 10rpx;line-height: 80rpx;text-align: center;}
</style>
