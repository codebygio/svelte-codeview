<script lang="ts">
	import CodeViewControls from './components/code-view-controls.svelte';
	import Tabs from './components/tabs.svelte';
	import { codeview } from './codeview.svelte.js';
	import CodeTabContent from './components/code-tab-content.svelte';
	let { children } = $props();
</script>

<div class="codeview">
	<div class="codeview-header">
		<Tabs />
		<CodeViewControls />
	</div>
	<div class="codeview-content">
		<div class="content-container">
			{#if children}
				{#if codeview.activeTab === 'preview'}
					{@render children()}
				{:else if codeview.activeTab === 'code'}
					<CodeTabContent />
				{/if}
			{:else}
				<p>No content to display</p>
			{/if}
		</div>
	</div>
</div>

<style>
	.codeview {
		--spacing-base: 1.5rem;
		--border-radius: 0.75rem;
		--border-color: #e5e7eb;
		--shadow-color: rgb(0 0 0 / 0.05);
		--background-color: #ffffff;
	}

	/* Dark mode variables */
	@media (prefers-color-scheme: dark) {
		.codeview {
			--border-color: #404040;
			--background-color: #171717;
			--shadow-color: rgb(0 0 0 / 0.2);
		}
	}

	.codeview-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
		margin-bottom: var(--spacing-base);
	}

	.codeview-content {
		position: relative;
		width: 100%;
	}

	.content-container {
		background-color: var(--background-color);
		border: 1px solid var(--border-color);
		border-radius: var(--border-radius);
		box-shadow: 0 1px 2px var(--shadow-color);
		padding: var(--spacing-base);
		max-height: 300px;
		overflow: auto;
	}

	/* Responsive adjustments */
	@media (max-width: 768px) {
		.codeview {
			--spacing-base: 1rem;
		}

		.codeview-header {
			gap: 0.5rem;
		}
	}
</style>
