<script>
	import GithubIcon from '$lib/images/github-icon.png';
	import LinkedIcon from '$lib/images/linkedin-icon.png';
	import EmailIcon from '$lib/images/email-icon.png';
	import TelegramIcon from '$lib/images/telegram-icon.png';
</script>

<footer>
	<a href="https://github.com/HaidarJbeily7" id="gh-link" class="icon-link" target="_blank"
		><img src={GithubIcon} alt="GitHub Icon" />
	</a>
	<a href="https://t.me/HaidarJbeily" id="tg-link" class="icon-link" target="_blank"
		><img src={TelegramIcon} alt="Telegram Icon" />
	</a>
	<a href="mailto:haidarjbeily76@gmail.com" id="email" class="icon-link">
		<img src={EmailIcon} alt="Email Icon" />
	</a>

	<a
		href="https://www.linkedin.com/in/haidar-jbeily-5478081b3/"
		id="linkedin"
		class="icon-link"
		target="_blank"
		><img src={LinkedIcon} alt="LinkedIn Icon" />
	</a>
</footer>

<style>
	footer {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 20px;
		padding: 16px;
	}

	footer > .icon-link {
		max-width: 70px;
	}
</style>
