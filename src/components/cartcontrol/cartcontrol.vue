<template>
  <div class="cartcontrol">
  	<div class="cart-decrease" @click="decreaseCart" v-show="food.count>0" >
	  	<span class="inner">
	  		-
	  	</span>
  	</div>
  	<div class="cart-count" v-show="food.count>0">
  		{{food.count}}
  	</div>
  	<div class="cart-add" @click="addCart">+</div>
  </div>
</template>

<script>
import Vue from "vue"
export default {
	props:{
		food: {
			type: Object
		}
	},
	methods: {
		addCart(event) {
			if(!event._constructed) {
				return
			}
			if(!this.food.count) {
				Vue.set(this.food, "count", 1)
			}else{
				this.food.count++
			}
		},
		decreaseCart(event) {
			if(!event._constructed) {
				return
			}
			if(this.food.count) {
				this.food.count--
			}
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang='stylus' rel='stylesheet/stylus'>
.cartcontrol
	font-size:0
	.cart-decrease, .cart-add
		display:inline-block
		padding:6
		width:24px
		text-align:center
		border:1px solid rgb(0,160,220)
		border-radius:12px
		line-height:24px
		font-size:24px
		color:rgb(0,160,220)
	.cart-decrease
		.inner
			line-height:24px
			font-size:24px
			color:rgb(0,160,220)
	.cart-count
		display:inline-block
		vertical-align:top
		width:12px
		padding-top:6px
		line-height:12px
		text-align:center
		font-size:12px
	.cart-add
		display:inline-block

</style>