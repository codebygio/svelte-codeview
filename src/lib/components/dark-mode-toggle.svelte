<script lang="ts">
	import { codeview } from '$lib/codeview.svelte.js';
</script>

<button
	type="button"
	class="dark-mode-toggle"
	onclick={() => codeview.toggleDarkMode()}
	aria-label="Toggle dark mode"
>
	<svg
		class="sun-icon"
		class:hidden={codeview.isDarkMode}
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		<circle cx="12" cy="12" r="4" />
		<path d="M12 2v2" />
		<path d="M12 20v2" />
		<path d="m4.93 4.93 1.41 1.41" />
		<path d="m17.66 17.66 1.41 1.41" />
		<path d="M2 12h2" />
		<path d="M20 12h2" />
		<path d="m6.34 17.66-1.41 1.41" />
		<path d="m19.07 4.93-1.41 1.41" />
	</svg>
	<svg
		class="moon-icon"
		class:hidden={!codeview.isDarkMode}
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
	</svg>
</button>

<style>
	.dark-mode-toggle {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		width: 2.25rem;
		height: 2.25rem;
		border-radius: 0.375rem;
		background-color: white;
		border: 1px solid #e5e7eb;
		color: #374151;
		transition: all 0.2s ease;
	}

	:global([data-theme='dark']) .dark-mode-toggle {
		background-color: #171717;
		border-color: #404040;
		color: #d4d4d4;
	}

	.dark-mode-toggle:hover {
		background-color: #f3f4f6;
	}

	:global([data-theme='dark']) .dark-mode-toggle:hover {
		background-color: #404040;
	}

	.dark-mode-toggle:focus {
		outline: none;
		background-color: #f8fafc;
	}

	:global([data-theme='dark']) .dark-mode-toggle:focus {
		background-color: #404040;
	}

	.sun-icon,
	.moon-icon {
		width: 0.75rem;
		height: 0.75rem;
		flex-shrink: 0;
	}

	@media (min-width: 768px) {
		.dark-mode-toggle {
			width: 2.375rem;
			height: 2.375rem;
		}

		.sun-icon,
		.moon-icon {
			width: 0.875rem;
			height: 0.875rem;
		}
	}

	.hidden {
		display: none;
	}
</style>
