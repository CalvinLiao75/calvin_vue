<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'您好~我是廖昱泳，今年22歲      畢業於嘉義大學資管系，求學過程中，從一開始對程式語言的一知半解，到後來隨著專題合作的次數慢慢增加，發現不斷突破自我是一件非常有成就感的事，儘管過程不怎麼輕鬆，但還是有順利得到回報，例如得獎、以及組員間的信任，大家同樣做著不熟悉的任務，並且互相幫助，到後面整合為一個專案，都是非常令人著迷的一件事。',
				},
				{
					id: 2,
					bio:
						'熟悉語言#html #css #javascript #SQL #C #java #VB ',
				},
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/profile.jpg"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
