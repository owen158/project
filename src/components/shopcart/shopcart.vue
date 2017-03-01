<template> 
  <div class="shopcart">
    <div class="content" @click="toggleList">
    	<div class="content-left">
    		<div class="logo-wrapper">
    			<div class="logo" :class="{'highlight':totalCount > 0}">
    				<span class="span" :class="{'highlight':totalCount > 0}">购物车</span>
    			</div>
    			<div class="num" v-show="totalCount > 0">
    				{{totalCount}}
    			</div>
    		</div>
    		<div class="price" :class="{'highlight':totalPrice > 0}">
    			￥{{totalPrice}}
    		</div>
    		<div class="desc">
    			另需配送{{deliveryPrice}}元
    		</div>
    	</div>
    	<div class="content-right">
    		<div class="pay" :class="payClass">
    			{{payDesc}}
    		</div>
    	</div>
    </div>
    <div class="shopcart-list" v-show="listShow" transition="fold">
    		<div class="list-header">
    			<h1 class="title">购物车</h1>
    			<span class="empty">清空</span>
    		</div>
    		<div class="list-content">
    			<ul>
    				<li class="food" v-for="food in selectFoods">
    					<span class="name">{{food.name}}</span>
    					<div class="price">
    						<span class="">￥{{food.price*food.count}}</span>
    					</div>
    					<div class="cartcontrol-wrapper">
    						<cartcontrol :food='food'></cartcontrol>
    					</div>
    				</li>
    			</ul>
    		</div>
    	</div>	
  </div>
</template>

<script>
import cartcontrol from "components/cartcontrol/cartcontrol"
export default {
	props: {
		selectFoods: {
			type: Array,
			default() {
				return []
			}
		},
		deliveryPrice: {
			type: Number,
			default: 0
		},
		minPrice: {
			type: Number,
			default: 0
		},
		
	},
	data() {
		return {
			dropBalls: [],
			fold: true
		}
	},
	computed: {
		totalPrice() {
			let total = 0
			this.selectFoods.forEach((food) => {
				total +=food.price * food.count
			})
			return total 
		},
		totalCount() {
			let count = 0
			this.selectFoods.forEach((food) =>{
				count +=food.count
			})
			return count
		},
		payDesc() {
			if(this.totalPrice === 0) {
				return 	`￥${this.minPrice}元起送`
			}else if(this.totalPrice < this.minPrice){
				let diff = this.minPrice - this.totalPrice
				return `还差￥${diff}元起送`
			}else {
				return '去结算'
			
			}
		},
		payClass() {
			if(this.totalPrice <this.minPrice) {
				return 'not-enough'
			}else{
				return 'enough'
			}
		},
		listShow() {
			if(!this.totalCount){
				this.fold = true
				return false
			}
			let show = !this.fold
			return show
		}
	},
	methods: {
		toggleList() {
			if(!this.totalCount) {
				return
			}
			this.fold = !this.fold
		}
	},
	components: {
		cartcontrol
	} 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus' rel=stylesheet/stylus>
.shopcart
	position: fixed
	left:0
	bottom:0
	z-index: 50
	width:100%
	height:48px
	background:#000
	.content
		display: flex
		background:#141d27
		font-size:0
		.content-left
			flex:1
			.logo-wrapper
				display: inline-block
				position:relative
				top:-10px
				margin:0 12px
				padding:6px
				width:56px
				height:56px
				box-sizing: border-box
				vertical-align:top
				border-radius:50%
				background:#000
				.logo
					width:100%
					height:100%
					border-radius:50%
					text-align:center
					background:#141d27
					&.highlight
						background: rgb(0,160,220)
					.span
						line-height:44px
						font-size:12px
						color:#BBB
						&.highlight
							color: rgb(255,255,255)
				.num
					position: absolute
					top:0
					right:0
					width:24px
					height:16px
					line-height:16px
					text-align: center
					border-radius: 16px
					font-size:9px
					font-weright:700
					background:red
					color:#fff
					box-shadow:0 4px 8px 0 rgba(0,0,0,0.4)

			.price
				display: inline-block
				verical-align: top
				margin-top: 12px
				line-height:24px
				padding-right:12px
				border-right:1px solid rgba(255,255,255,0.1)
				font-size:16px
				font-weight:700
				box-sizing: border-box
				color:rgba(255,255,255,0.4)
				&.highlight
						color: rgb(255,255,255)
			.desc
				display: inline-block
				vertical-align:top
				line-height:24px
				margin:12px 0 0 12px
				line-height:24px 
				color:rgba(255,255,255,0.4)
				font-size:10px
		.content-right
			flex:0 0 105px
			width:105px
			.pay
				height:48px
				line-height:48px
				text-align:center
				font-size:12px
				font-weight:700
				color:rgba(255,255,255,0.4)
				&.not-enough
					background:#2B333B
				&.enough
					background: #00b43c
	.shopcart-list
		position: absolute
		left: 0
		bottom:48px
		z-index: 1
		width: 100%
		&.fold-transition
			transiton: all 0.5s
			transform:translate3D(0,-100%,0)
		&.fold-enter, &.fold-leave
			transform:translate3D(0,0,0)
		.list-header
			height:40px
			line-height:40px
			padding:0 18px
			background:#f3f5f7
			border-bottom:1px solid rgba(7,17,27,0.1)	
			.title
				float:left
				font-size:14px
				color:rgb(7,17,27)
			.empty
				float:right
				font-size:12px
				color:rgb(0,160,220)
</style>