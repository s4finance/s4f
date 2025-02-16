<script lang="ts">

	import { footerLinks, socialMedia } from '../../Constants';
</script>

<footer class="max-container" id="contact-us">
	<div class="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
		<div class="flex flex-col items-start">
			<a href="/">
				<img src="/images/footer-logo.svg" alt="footer logo" width="150" height="46">
			</a>
			<p class="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">Get shoes ready for the new term at your nearest Nike store. Find your perfect size in your perfect dream.</p>
			<div class="flex items-center gap-5 mt-8">
				{#each socialMedia as item}
					<div class="flex justify-center items-center w-12 h-12 bg-white rounded-full">
						<img src="{item.src}" alt="{item.alt}" width="24" height="24">
					</div>
				{/each}
			</div>
		</div>
		<div class="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
			{#each footerLinks as section}
				<div>
					<h4 class="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
						{section.title}
					</h4>
					<ul>
						{#each section.links as link}
							<li class="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer" key="{link.link}">
								<a href={link.link}>{link.name}</a>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>

	<div class="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
		<div class="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
			<img src="/icons/copyright-sign.svg" alt="Copyright" width="20" height="20" class="rounded-full m-0">
			<p>Copyright. All rights reserved.</p>
		</div>
		<p class="font-montserrat cursor-pointer">Terms and Conditions.</p>
	</div>
</footer>