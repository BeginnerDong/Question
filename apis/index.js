import http from "./http.js";
import config from "@/config/index.config.js";


export default {
	
	messageGet(param, callback) {
		var allParams = {
			url: 'Common/Message/get',
			type: 'post',
			noToken: true,
			data: param,
			sCallback: function(data) {
				callback && callback(data);
			}
		};
		http.HTTP(allParams);
	},
	
	messageAdd(param, callback) {
		var allParams = {
			url: 'Common/Message/add',
			type: 'post',
			noToken: true,
			data: param,
			sCallback: function(data) {
				callback && callback(data);
			}
		};
		http.HTTP(allParams);
	},

	labelGet(param, callback) {
		var allParams = {
			url: 'Common/Label/get',
			type: 'post',
			noToken: true,
			data: param,
			sCallback: function(data) {
				callback && callback(data);
			}
		};
		http.HTTP(allParams);
	},

	articleGet(param, callback) {
		
		var allParams = {
			url: 'Common/Article/get',
			type: 'post',
			noToken: true,
			data: param,
			sCallback: function(data) {
				callback && callback(data);
			}
		};
		http.HTTP(allParams);
	},

	userGet(param, callback) {
		var allParams = {
			url: 'Base/User/get',
			type: 'post',
			data: param,
			sCallback: function(data) {
				callback && callback(data);
			}
		};
		http.HTTP(allParams);
	},
	
	userUpdate(param, callback) {
		var allParams = {
			url: 'Base/User/update',
			type: 'post',
			data: param,
			sCallback: function(data) {
				callback && callback(data);
			}
		};
		http.HTTP(allParams);
	},

	userInfoGet(param, callback) {
		var allParams = {
			url: 'Common/UserInfo/get',
			type: 'post',
			data: param,
			sCallback: function(data) {
				callback && callback(data);
			}
		};
		http.HTTP(allParams);
	},

	userInfoUpdate(param, callback) {
		var allParams = {
			url: 'Common/UserInfo/update',
			type: 'post',
			data: param,
			sCallback: function(data) {
				callback && callback(data);
			}
		};
		http.HTTP(allParams);
	},


	

	productGet(param, callback) {
		if(!param.hasContent){
			param.noContent = true;
		};
		var allParams = {
			url: 'Common/Product/get',
			type: 'post',
			data: param,
			sCallback: function(data) {
				callback && callback(data);
			}
		};
		http.HTTP(allParams);
	},
	

	qrCodeGet(param, callback) {
		var allParams = {
			url: 'Common/Qrcode/get',
			type: 'post',
			data: param,
			sCallback: function(data) {
				callback && callback(data);
			}
		};
		http.HTTP(allParams);
	},

	qrCodeUpdate(param, callback) {
		var allParams = {
			url: 'Common/Qrcode/update',
			type: 'post',
			data: param,
			sCallback: function(data) {
				callback && callback(data);
			}
		};
		http.HTTP(allParams);
	},


	login(param, callback) {

		var allParams = {
			url: 'Func/Common/loginByUp',
			type: 'post',
			data: param,
			sCallback: function(data) {
				callback && callback(data);
			}
		};
		http.HTTP(allParams);
	},

	shopLogin(param, callback) {

		var allParams = {
			url: 'Func/Common/loginByShop',
			type: 'post',
			data: param,
			sCallback: function(data) {
				callback && callback(data);
			}
		};
		http.HTTP(allParams);
	},

	wechatGet(param, callback) {
		var allParams = {
			url: 'Common/Wechat/get',
			type: 'post',
			data: param,
			sCallback: function(data) {
				callback && callback(data);
			}
		};
		http.HTTP(allParams);
	},

	skuGet(param, callback) {
		var allParams = {
			url: 'Common/Sku/get',
			type: 'post',
			data: param,
			sCallback: function(data) {
				callback && callback(data);
			}
		};
		http.HTTP(allParams);
	},

	addressGet(param, callback) {
		var allParams = {
			url: 'Common/UserAddress/get',
			type: 'post',
			data: param,
			sCallback: function(data) {
				callback && callback(data);
			}
		};
		http.HTTP(allParams);
	},

	addressUpdate(param, callback) {
		var allParams = {
			url: 'Common/UserAddress/update',
			type: 'post',
			data: param,
			sCallback: function(data) {
				callback && callback(data);
			}
		};
		http.HTTP(allParams);
	},

	addressDelete(param, callback) {
		var allParams = {
			url: 'Common/UserAddress/delete',
			type: 'post',
			data: param,
			sCallback: function(data) {
				callback && callback(data);
			}
		};
		http.HTTP(allParams);
	},

	addressAdd(param, callback) {
		var allParams = {
			url: 'Common/UserAddress/add',
			type: 'post',
			data: param,
			sCallback: function(data) {
				callback && callback(data);
			}
		};
		http.HTTP(allParams);
	},

	userCouponGet(param, callback) {
		var allParams = {
			url: 'Common/UserCoupon/get',
			type: 'post',
			data: param,
			sCallback: function(data) {
				callback && callback(data);
			}
		};
		http.HTTP(allParams);
	},

	orderGet(param, callback) {
		var allParams = {
			url: 'Common/Order/get',
			type: 'post',
			data: param,
			sCallback: function(data) {
				callback && callback(data);
			}
		};
		http.HTTP(allParams);
	},

	orderUpdate(param, callback) {
		var allParams = {
			url: 'Common/Order/update',
			type: 'post',
			data: param,
			sCallback: function(data) {
				callback && callback(data);
			}
		};
		http.HTTP(allParams);
	},

	orderDelete(param, callback) {
		var allParams = {
			url: 'Common/Order/delete',
			type: 'post',
			data: param,
			sCallback: function(data) {
				callback && callback(data);
			}
		};
		http.HTTP(allParams);
	},



	addOrder(param, callback) {
		var allParams = {
			url: 'Func/Order/addOrder',
			type: 'post',
			data: param,
			sCallback: function(data) {
				callback && callback(data);
			}
		};
		http.HTTP(allParams);
	},

	pay(param, callback) {
		var allParams = {
			url: 'Base/Pay/pay',
			type: 'post',
			data: param,
			sCallback: function(data) {
				callback && callback(data);
			}
		};
		http.HTTP(allParams);
	},

	flowLogGet(param, callback) {
		var allParams = {
			url: 'Common/FlowLog/get',
			type: 'post',
			data: param,
			sCallback: function(data) {
				callback && callback(data);
			}
		};
		http.HTTP(allParams);
	},

	flowLogAdd(param, callback) {
		var allParams = {
			url: 'Common/FlowLog/add',
			type: 'post',
			data: param,
			sCallback: function(data) {
				callback && callback(data);
			}
		};
		http.HTTP(allParams);
	},


	orderGet(param, callback) {
		var allParams = {
			url: 'Common/Order/get',
			type: 'post',
			data: param,
			sCallback: function(data) {
				callback && callback(data);
			}
		};
		http.HTTP(allParams);
	},



	distriGet(param, callback) {
		var allParams = {
			url: 'Common/Distribution/get',
			type: 'post',
			data: param,
			sCallback: function(data) {
				callback && callback(data);
			}
		};
		http.HTTP(allParams);
	},
	
	
	addVirtualOrder(param, callback) {
		var allParams = {
			url: 'Func/Order/addVirtualOrder',
			type: 'post',
			data: param,
			sCallback: function(data) {
				callback && callback(data);
			}
		};
		http.HTTP(allParams);
	}

}
