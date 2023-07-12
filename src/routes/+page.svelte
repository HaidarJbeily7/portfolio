<script lang="ts">
	import MyPhoto from '$lib/images/haidar.jpg';
	import List from './List.svelte';
	import type { ListProps } from '$lib/interfaces';

	export let data: { [key: number]: ListProps };

	const workExperienceData: ListProps = data[0];
	const skillsData: ListProps = data[1];
</script>

<div class="container">
	<div class="box intro">
		<div>
			<h1 class="title">Haidar Jbeily</h1>
			<p>
				Software Engineer with a demonstrated history of working on real projects using frameworks
				like Laravel, Django, nodejs, Spring Boot, Flutter, and Vuejs.
			</p>
		</div>
		<div>
			<img class="personal-photo" src={MyPhoto} alt="haidar" />
		</div>
	</div>
</div>
<div class="container dark-bg-container">
	<div class="box">
		<List title={workExperienceData.title} listItems={workExperienceData.listItems} />
	</div>
</div>
<div class="container">
	<div class="box">
		<List title={skillsData.title} listItems={skillsData.listItems} />
	</div>
</div>

<style>
	.box {
		max-width: 1100px;
		margin: 0 auto;
	}

	.container {
		color: var(--bg-color-primary);
		min-height: 320px;
		padding: 24px;
		flex-wrap: wrap;
	}

	.dark-bg-container {
		color: white;
		background: linear-gradient(to right, var(--darkblue), var(--lightblue));
	}

	.title {
		font-size: 4rem;
		font-weight: bold;
	}

	.intro {
		display: flex;
		flex-direction: row;
		align-content: center;
		justify-content: center;
		align-items: center;
	}

	.personal-photo {
		border-radius: 50px;

		box-shadow: 0px 2px 5px #eeeeee;
	}
</style>
