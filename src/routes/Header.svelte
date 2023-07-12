<script>
	import { page } from '$app/stores';
	import { base } from '$app/paths';
</script>

<header>
	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="{base}/">Portfolio</a>
			</li>
			<li aria-current={$page.url.pathname === '/comic/' ? 'page' : undefined}>
				<a href="{base}/comic">Comic</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: center;
		padding: 20px;
		border-bottom: 1px solid #eee;
		box-shadow: 0px 1px 5px #eeeeee;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 20px;
		list-style: none;
		background-size: contain;
	}

	a {
		font-size: 1.45rem;
		color: var(--bg-color-primary);
	}

	li[aria-current='page'] > a {
		color: var(--bg-color-secondary);
	}
</style>
