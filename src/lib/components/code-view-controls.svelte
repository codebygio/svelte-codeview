<script lang="ts">
	import CopyButton from './copy-button.svelte';
	import DarkModeToggle from './dark-mode-toggle.svelte';
</script>

<div class="controls-container">
	<DarkModeToggle />
	<CopyButton />
</div>

<style>
	.controls-container {
		display: flex;
		gap: 0.375rem;
		margin-left: auto;
	}

	@media (min-width: 768px) {
		.controls-container {
			gap: 0.5rem;
		}
	}
</style>
