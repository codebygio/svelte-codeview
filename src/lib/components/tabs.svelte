<script lang="ts">
	import { codeview } from '$lib/codeview.svelte.js';

	// Function to handle keyboard navigation
	function handleKeydown(event: KeyboardEvent) {
		const tabs = Array.from(document.querySelectorAll('[role="tab"]'));
		const currentIndex = tabs.findIndex((tab) => tab === document.activeElement);

		switch (event.key) {
			case 'ArrowRight':
			case 'ArrowDown':
				event.preventDefault();
				const nextIndex = (currentIndex + 1) % tabs.length;
				(tabs[nextIndex] as HTMLElement).focus();
				break;
			case 'ArrowLeft':
			case 'ArrowUp':
				event.preventDefault();
				const prevIndex = currentIndex === 0 ? tabs.length - 1 : currentIndex - 1;
				(tabs[prevIndex] as HTMLElement).focus();
				break;
			case 'Home':
				event.preventDefault();
				(tabs[0] as HTMLElement).focus();
				break;
			case 'End':
				event.preventDefault();
				(tabs[tabs.length - 1] as HTMLElement).focus();
				break;
		}
	}
</script>

<div class="tabs-container">
	<div
		class="tabs-list"
		role="tablist"
		aria-label="Code view options"
		onkeydown={handleKeydown}
		tabindex="0"
	>
		<button
			type="button"
			role="tab"
			class="tab-button"
			class:active={codeview.activeTab === 'preview'}
			aria-selected={codeview.activeTab === 'preview'}
			aria-controls="preview-panel"
			id="preview-tab"
			onclick={() => (codeview.activeTab = 'preview')}
		>
			Preview
		</button>
		<button
			type="button"
			role="tab"
			class="tab-button"
			class:active={codeview.activeTab === 'code'}
			aria-selected={codeview.activeTab === 'code'}
			aria-controls="code-panel"
			id="code-tab"
			onclick={() => (codeview.activeTab = 'code')}
		>
			Code
		</button>
	</div>
</div>

<style>
	.tabs-container {
		--tab-border-radius: 6px;
		--tab-background: #f3f4f6;
		--tab-active-background: #ffffff;
		--tab-text-color: #4b5563;
		--tab-active-text-color: #1f2937;
		--tab-hover-border-color: #9ca3af;
		--tab-focus-ring-color: #3b82f6;
		background-color: var(--tab-background);
		padding: 2px;
		border-radius: var(--tab-border-radius);
	}

	/* Dark mode support if needed */
	@media (prefers-color-scheme: dark) {
		.tabs-container {
			--tab-background: #262626;
			--tab-active-background: #404040;
			--tab-text-color: #e5e5e5;
			--tab-active-text-color: #ffffff;
			--tab-hover-border-color: #737373;
			--tab-focus-ring-color: #60a5fa;
		}
	}

	.tabs-list {
		display: flex;
		gap: 2px;
	}

	.tab-button {
		position: relative;
		padding: 8px 12px;
		border: 1px solid transparent;
		border-radius: calc(var(--tab-border-radius) - 2px);
		background: transparent;
		color: var(--tab-text-color);
		font-size: 0.875rem;
		font-weight: 500;
		cursor: pointer;
		transition: all 0.2s ease;
	}

	/* Hover state */
	.tab-button:hover:not(.active) {
		border-color: var(--tab-hover-border-color);
	}

	/* Focus state */
	.tab-button:focus-visible {
		outline: 2px solid var(--tab-focus-ring-color);
		outline-offset: 1px;
	}

	/* Active state */
	.tab-button.active {
		background-color: var(--tab-active-background);
		color: var(--tab-active-text-color);
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
	}

	/* Responsive font size */
	@media (max-width: 768px) {
		.tab-button {
			font-size: 0.75rem;
			padding: 6px 10px;
		}
	}

	/* Remove default button styles */
	.tab-button {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		margin: 0;
	}

	/* Ensure proper button text alignment */
	.tab-button {
		text-align: center;
		line-height: 1.2;
	}
</style>
