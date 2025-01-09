<script>
	let code = `

<div class="preview-container" class:dark={codeview.isDarkMode}>
	<div class="button-grid">
		{#each buttons as button}
					<button
						type="button"
						class="button"
						class:button-solid={button.type === 'solid'}
						class:button-outline={button.type === 'outline'}
						class:button-ghost={button.type === 'ghost'}>
				{button.label}
			</button>
				{/each}
	</div>
</div>

<style>
			.preview-container {
				--primary-color: #2563eb;
				--primary-hover: #1d4ed8;
				--background-color: #ffffff;
				--text-color: #1f2937;
				--border-color: #e5e7eb;
				padding: 1.5rem;
				background-color: var(--background-color);
				border-radius: 0.75rem;
				transition: all 0.2s ease;
			}

			/* Dark mode styles */
			.preview-container.dark {
				--primary-color: #3b82f6;
				--primary-hover: #60a5fa;
				--background-color: #171717;
				--text-color: #e5e7eb;
				--border-color: #404040;
			}

			.button-grid {
				display: flex;
				flex-wrap: wrap;
				gap: 0.5rem;
			}

			.button {
				padding: 0.75rem 1rem;
				border-radius: 0.5rem;
				font-size: 0.875rem;
				font-weight: 500;
				cursor: pointer;
				transition: all 0.2s ease;
			}

			/* Solid button style */
			.button-solid {
				background-color: var(--primary-color);
				color: white;
				border: none;
			}

			.button-solid:hover {
				background-color: var(--primary-hover);
			}

			/* Outline button style */
			.button-outline {
				background-color: transparent;
				border: 1px solid var(--border-color);
				color: var(--text-color);
			}

			.button-outline:hover {
				border-color: var(--primary-color);
				color: var(--primary-color);
			}

			/* Ghost button style */
			.button-ghost {
				background-color: transparent;
				border: none;
				color: var(--primary-color);
			}

			.button-ghost:hover {
				background-color: color-mix(in srgb, var(--primary-color) 10%, transparent);
			}

			/* Focus styles */
			.button:focus-visible {
				outline: 2px solid var(--primary-color);
				outline-offset: 2px;
			}

			/* Responsive adjustments */
			@media (max-width: 768px) {
				.preview-container {
					padding: 1rem;
				}

				.button {
					padding: 0.5rem 0.75rem;
					font-size: 0.75rem;
				}
			}
		</style>`;
</script>

<pre><code>
        {code}
</code> </pre>
