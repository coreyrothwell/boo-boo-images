<h1>Boo Boo Images - The simple jQuery plugin for responsive images.</h1>
<p>I made this just messing around and I honestly think its great. A simple jQuery responsive images plugin that checks window width and adjusts image sources to serve the 'best' image. Set the 'larger' image src to ANY attribute on the img tag and thats it!</p>
<h2>Usage</h2>
<p>Requires jQuery</p>
<pre>
	<code>
$(function(){
	$('[data-ri-big]').booBooImages({
		breakWidth: 480, // width to swap images
		onWindowResize: true, // allow resizing
		dataAttr: 'data-ri-big' //data attribute name for big version
	});
});
	</code>
</pre>

<p>jQuery selector can be whatever you want ('.class' or all 'img' or whatever).</p>

<h2>Options</h2>

<h4>breakWidth</h4>
<p>Responsive Break width in pixels to load the 'larger' image. ex: [480 or 1300]</p>

<h4>onWindowResize</h4>
<p>Script will attach an event to any window resize. Not really neccessary as most people are not resizing their browser. ex: [true/false]</p>

<h4>dataAttr</h4>
<p>The attribute on each image that the script will use to get the url of the 'larger' image.</p>

<h2>HTML</h2>

<pre>
	<code>
&lt;img src=&quot;_img/build.jpg&quot; data-ri-big=&quot;_img/build-big.jpg&quot; /&gt;
or maybe...
&lt;img src=&quot;_img/map.jpg&quot; data-ri-big=&quot;_img/map_xl.jpg&quot; /&gt;
	</code>
</pre>






<p>Easy as that. Let me know what you think. (p.s. I haven't looked for another solution so... yeah.)</p>