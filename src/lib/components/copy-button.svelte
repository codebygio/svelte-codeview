<script lang="ts">
	import { codeview } from '$lib/codeview.svelte.js';
</script>

<div class="copy-container">
	<button
		type="button"
		class="copy-button"
		onclick={() => codeview.copyCode()}
		aria-label="Copy code"
	>
		<svg
			class="copy-icon"
			class:hidden={codeview.isCopied}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
			<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
		</svg>
		<svg
			class="check-icon"
			class:hidden={!codeview.isCopied}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<polyline points="20 6 9 17 4 12" />
		</svg>
		<span>{codeview.isCopied ? 'Copied' : 'Copy'}</span>
	</button>
</div>

<style>
	.copy-container {
		display: flex;
		border: 1px solid #e5e7eb;
		border-radius: 0.5rem;
	}

	:global([data-theme='dark']) .copy-container {
		border-color: #404040;
	}

	.copy-button {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.5625rem 0.5rem;
		background-color: white;
		color: #374151;
		font-size: 0.75rem;
		font-weight: 500;
		border-radius: 0.5rem;
		transition: all 0.2s ease;
	}

	:global([data-theme='dark']) .copy-button {
		background-color: #171717;
		color: #d4d4d4;
	}

	.copy-button:hover {
		background-color: #f3f4f6;
	}

	:global([data-theme='dark']) .copy-button:hover {
		background-color: #404040;
	}

	.copy-button:focus {
		outline: none;
		background-color: #f8fafc;
	}

	.copy-icon,
	.check-icon {
		width: 0.75rem;
		height: 0.75rem;
		flex-shrink: 0;
	}

	.check-icon {
		color: #2563eb;
		transform: rotate(6deg);
	}

	@media (min-width: 768px) {
		.copy-button {
			font-size: 0.8125rem;
		}

		.copy-icon,
		.check-icon {
			width: 0.875rem;
			height: 0.875rem;
		}
	}

	.hidden {
		display: none;
	}
</style>
