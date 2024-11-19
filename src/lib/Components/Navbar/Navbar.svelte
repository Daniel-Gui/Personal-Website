<script lang="ts">
	import { Twitter, Figma, Menu, X } from 'lucide-svelte';
	import Dan from '../Brands/Dan.svelte';
	import BlurringGradients from '../Effects/BlurringGradients.svelte';

	const iconsStyle = 'h-auto w-5 md:w-4 text-gray-800 opacity-80 hover:opacity-100';

	interface MenuItem {
		name: string;
		link: string;
	}
	const menu: MenuItem[] = [
		{
			name: 'Timeline',
			link: '/timeline'
		},
		{
			name: 'Sobre',
			link: '/Sobre'
		},
		{
			name: 'Blog',
			link: '/Blog'
		},
		{
			name: 'Links',
			link: '/Links'
		}
	];

	interface SocialItem {
		name: string;
		link: string;
		icon: string;
	}

	const socials: SocialItem[] = [
		{
			name: 'Twitter',
			link: 'https://twitter.com/',
			icon: 'Twitter'
		},
		{
			name: 'Figma',
			link: 'https://twitter.com/',
			icon: 'figma'
		}
	];

	let SideBarOpen = false;
	function toggleSideBar() {
		SideBarOpen = !SideBarOpen;
	}
</script>

<nav class="relative">
	<div class="relative z-0 w-full md:container md:w-auto">
		<BlurringGradients customStyle="absolute top-0 h-auto w-full" />
	</div>
	<div class="container-tight relative z-10 pt-5">
		<div class="navbar">
			<div>
				<Dan customStyle="w-16 h-auto text-gray-800" />
			</div>
			<div>
				{#each menu as item}
					<a href={item.link}>{item.name}</a>
				{/each}
			</div>
			<div>
				{#each socials as item}
					<a href={item.link}>
						{#if item.icon === 'Twitter'}
							<Twitter class={iconsStyle} />
						{:else if item.icon === 'figma'}
							<Figma class={iconsStyle} />
						{/if}
					</a>
				{/each}
				<span class="text-gray-800 opacity-10 md:hidden">|</span>
				<button onclick={toggleSideBar} class="cursor-pointer md:hidden">
					<Menu class={iconsStyle} />
				</button>
			</div>
		</div>
	</div>

	<div class="sidebar {SideBarOpen ? 'translate-x-0' : 'translate-x-full'}">
		<div>
			<button onclick={toggleSideBar} class="cursor-pointer md:hidden">
				<X class="h-auto w-6 text-gray-800" />
			</button>
			<hr />
			{#each menu as item}
				<a href={item.link}>{item.name}</a>
			{/each}
		</div>
	</div>
</nav>

<style lang="postcss">
	.sidebar {
		@apply fixed right-0 top-0;
		@apply z-20;
		@apply transform transition-all duration-500 ease-in-out;
		@apply h-full w-2/3;
		@apply p-6;
		@apply md:hidden;
		@apply bg-white/30 backdrop-blur-lg;
		@apply border-l border-white/30;
		@apply shadow-2xl shadow-teal-500/20;
	}
	.sidebar > div {
		@apply flex flex-col items-end;
		@apply w-full;
		@apply space-y-5;
		@apply text-lg;
	}
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

	.navbar > div:nth-child(3) {
		@apply text-gray-800;
		@apply flex items-center;
	}
</style>
