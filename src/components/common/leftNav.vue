<template>
	<div class="left-nav">
		<ul>
			<router-link to="/pos" class="link">
				<li>
					<i class='icon iconfont icon-goumai'></i>
					<div>收银</div>
				</li>
			</router-link>
			<router-link to="/store" class="link">
				<li>
					<i class='icon iconfont icon-jinrudianpu'></i>
					<div>首页</div>
				</li>
			</router-link>
			<router-link to="*" class="link">		
				<li>
					<i class='icon iconfont icon-hanbao'></i>
					<div>商品</div>
				</li>
			</router-link>
			<router-link to="*" class="link">	
				<li>
					<i class='icon iconfont icon-huiyuanqia'></i>
					<div>会员</div>
				</li>
			</router-link>
			<router-link to="*" class="link">	
				<li>
					<i class='icon iconfont icon-goumai'></i>
					<div>抢购</div>
				</li>
			</router-link>
			<router-link to="*" class="link">	
				<li>
					<i class='icon iconfont icon-shezhi'></i>
					<div>设置</div>
				</li>
			</router-link>	
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'left-nav',
		data() {
			return {

			}
		}
	}
</script>

<style>
	.left-nav {
		color: #fff;
		font-size: 10px;
		height: 100%;
		background-color: #1D8ce0;
		float: left;
		width: 5%;
	}
	.left-nav .link {
		text-decoration: none;
		cursor=: pointer;
		color: #fff;
	}
	.iconfont {
		font-size: 24px;
	}
	.left-nav ul {
		padding: 0;
		margin: 0;

	}
	.left-nav ul li {
		list-style: none;
		text-align: center;
		border-bottom: 1px solid #20a0ff;
		padding: 10px;
	}
</style>