<script>
	import Dan from '../Brands/Dan.svelte';
	import BlurringGradients from '../Effects/BlurringGradients.svelte';

	import { Skull, Twitter, Figma } from 'lucide-svelte';
</script>

<nav>
	<div class="relative z-0 w-full md:container md:w-auto">
		<BlurringGradients customStyle="absolute top-0 h-auto w-full" />
	</div>
	<div class="container-tight relative z-10 pt-5">
		<div class="navbar">
			<div>
				<Dan customStyle="w-16 h-auto text-gray-800" />
			</div>
			<div>
				<a href="/teste">Timeline</a>
				<a href="/">Sobre</a>
				<a href="/">Blog</a>
				<a href="/">Links</a>
			</div>
			<div>
				<a href="/"><Twitter /></a>
				<a href="/"><Figma /></a>
				<a href="/"><Skull /></a>
			</div>
		</div>
	</div>
</nav>

<style lang="postcss">
	.navbar {
		@apply bg-white/30 backdrop-blur-lg;
		@apply px-10 py-5;
		@apply rounded-full;
		@apply flex items-center justify-between;
		@apply shadow-navbar-inset;
		@apply border border-white/30;
	}

	.navbar > div {
		@apply space-x-2;
	}

	.navbar > div:nth-child(2) {
		@apply text-sm;
		@apply text-gray-800;
		@apply hidden md:block;
		& a {
			@apply opacity-80 hover:opacity-100;
		}
	}
</style>
