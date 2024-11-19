<svg class="texture" id="texture"
	><filter id="noise"
		><feTurbulence type="fractalNoise" baseFrequency=".8" numOctaves="4" stitchTiles="stitch"
		></feTurbulence><feColorMatrix type="saturate" values="0"></feColorMatrix></filter
	><rect width="100%" height="100%" filter="url(#noise)"></rect></svg
>

<style>
	.texture {
		position: fixed;
		top: 0px;
		left: 0px;
		z-index: -99;
		width: 100%;
		height: calc(200px + 100vh);
		opacity: 0.25;
		pointer-events: none;
		transform: translateY(0px);
		filter: contrast(120%) brightness(120%);
	}
</style>
