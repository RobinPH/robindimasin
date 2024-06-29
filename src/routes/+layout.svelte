<script>
	import '../app.css';
</script>

<svelte:head>
	<meta property="image" content="https://robindimasin.com/images/thumbnail.png" />
	<meta
		property="description"
		content="Robin Dimasin is a Freelancer specializing in Python and Fullstack Development, offering services like Web Scraping, Fullstack Development, Browser Automation using Selenium/Puppeteer, Python Scripting, Task Automation, and Chrome Extension Development. With experience as a System Analyst."
	/>

	<!-- Open Graph meta data -->
	<meta property="og:url" content="https://robindimasin.com/" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Robin Dimasin | Freelance Python & Fullstack Developer" />
	<meta
		property="og:description"
		content="Robin Dimasin is a Freelancer specializing in Python and Fullstack Development, offering services like Web Scraping, Fullstack Development, Browser Automation using Selenium/Puppeteer, Python Scripting, Task Automation, and Chrome Extension Development. With experience as a System Analyst."
	/>
	<meta property="og:image" content="https://robindimasin.com/images/thumbnail.png" />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="robindimasin.com" />
	<meta property="twitter:url" content="https://robindimasin.com/" />
	<meta name="twitter:title" content="Robin Dimasin" />
	<meta
		name="twitter:description"
		content="Robin Dimasin is a Freelancer specializing in Python and Fullstack Development, offering services like Web Scraping, Fullstack Development, Browser Automation using Selenium/Puppeteer, Python Scripting, Task Automation, and Chrome Extension Development. With experience as a System Analyst."
	/>
	<meta name="twitter:image" content="https://robindimasin.com/images/thumbnail.png" />
	<meta
		data-rh="true"
		name="twitter:image:alt"
		content="Robin Dimasin | Freelance Python & Fullstack Developer"
	/>
	<meta data-rh="true" name="twitter:image:width" content="854" />
	<meta data-rh="true" name="twitter:image:height" content="480" />
	<meta name="twitter:creator" content="@RobinDimasin" />

	<!-- Google tag (gtag.js) -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-Q6VLQXPD6K"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());

		gtag('config', 'G-Q6VLQXPD6K');
	</script>
</svelte:head>

<slot />
