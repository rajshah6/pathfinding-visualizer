<script lang="ts">
	import { goto } from '$app/navigation';
	export let data;
	export let toggleModal: () => void;

	const changeLanguage = (lang: string) => {
		goto(`/${lang}`);
	};
	const languages = [];
</script>

<div class="wrapper" on:pointerdown={toggleModal}>
	<article class="content">
		<header>
			<h1 style="text-align: center;">{data.title}</h1>
		</header>
		<div>
		</div>
		<p>{data.pickAlgorithm}</p>
		<p>
			{@html data.selectStartOrEnd
				.replace('Start', `<span style="color: var(--bg-start)">Start</span>`)
				.replace('End', `<span style="color: var(--bg-end)">End</span>`)}
		</p>
		<p>
			{data.usePlayer}
		</p>
		<p>
			{@html data.selectWallsWeights
				.replace('Walls', `<span style="color: var(--bg-wall)">Walls</span>`)
				.replace('Weights', `<span style="color: var(--bg-weight-2)">Weights</span>`)}
		</p>
		<section class="description">
			<h2>{data.detailsTitle}</h2>
			<br>
			<p>
				{data.details1}
			</p>
			<br>
			<p>{data.details2}</p>
			<p>{data.details3}</p>
			<br>
			<p style="color: #add8e6; font-size: 20px; text-align: end;">{data.details4}</p>

		</section>
	</article>
</div>

<style>
	.buttons-language {
		display: flex;
		justify-content: end;
	}
	button {
		background-color: var(--bg-body);
		color: var(--main-white);
		outline: none;
		border: none;
		font-size: 18px;
		border-right: var(--main-white) 1px solid;
	}
	button:hover {
		background-color: var(--main-white);
		color: var(--bg-body);
	}
	.wrapper {
		z-index: 3;
		background: hsla(270, 32%, 9%, 0.8);
		color: var(--main-white);
		position: absolute;
		height: 100%;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: start;
	}

	h1 {
		font-size: 32px;
		letter-spacing: 3px;
	}

	.content {
		font-size: 18px;
		padding: 32px 4px 26px 12px;
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 18px;
		background: hsla(270, 32%, 9%, 1);
	}

	.description {
		color: #cdcdcd;
		display: flex;
		flex-direction: column;
		gap: 1px;
		font-size: 20px;
	}

	@media (min-width: 1024px) {
		.wrapper {
			align-items: center;
		}

		h1 {
			font-size: 64px;
		}

		.content {
			font-size: 1.65rem;
			padding: 40px;

			width: 78%;

			display: flex;
			flex-direction: column;
			gap: 20px;
			background: var(--bg-body);
		}

		.description {
			color: #cdcdcd;
			font-size: 1.3rem;
		}
	}
</style>
