import type { Blog } from "#/types/domains";
import type { BlogService } from "#/types/services";

const DATA: Blog[] = [
	{
		slug: "hello-world",
		title: "Hello World",
		content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae odio nunc. Nunc porta ex sed ipsum dignissim vulputate. Nullam enim sem, rutrum efficitur euismod quis, pellentesque eget sem. Mauris vel neque massa. Donec pulvinar enim at dui tempus, vel fermentum orci eleifend. Vestibulum id dui in ex scelerisque gravida vel at sapien. Aenean suscipit risus eu dui imperdiet, at lacinia augue dictum. Nulla facilisi. Suspendisse non maximus tortor. Nunc arcu ante, efficitur at risus ut, consequat sodales neque. Ut viverra lorem sed erat luctus, eget mattis nunc cursus. Donec vitae consequat dolor, quis consequat risus. Vestibulum felis lectus, mollis ac mauris eu, pellentesque condimentum sapien. Aenean vitae tincidunt purus.

Pellentesque id elementum nisl. Sed nec augue suscipit, venenatis quam in, sodales dolor. Aliquam scelerisque vitae lorem vitae hendrerit. Aliquam ultrices purus dictum, ullamcorper augue eget, viverra nisl. Praesent ut feugiat urna. Donec erat ligula, mollis vel justo sit amet, sagittis porttitor felis. Vestibulum id suscipit lectus, ornare convallis velit. Suspendisse semper sem vel massa gravida, ut lobortis enim bibendum. Cras sed ex metus.

Donec at nulla lectus. Nulla venenatis id nisl sit amet gravida. Sed vel ipsum ligula. Mauris leo diam, semper in pharetra sed, malesuada sit amet sapien. Donec lacinia, velit maximus lobortis volutpat, enim tortor tempor dolor, eu pretium tortor massa nec tortor. Integer hendrerit, mauris aliquet ornare convallis, lectus erat gravida nulla, id tristique dolor lectus vel leo. Vestibulum lacinia rutrum risus, eget sollicitudin eros.

Etiam a volutpat ipsum, in tempus leo. Donec sollicitudin, eros eget luctus ultrices, justo massa dapibus lacus, sed efficitur eros tortor a neque. Aliquam erat volutpat. Morbi et nunc vitae purus vestibulum semper nec sed tortor. Nulla at tellus in arcu tincidunt sagittis. Aenean vitae tincidunt ante. Aliquam hendrerit erat sed leo vestibulum cursus. Curabitur aliquet arcu mauris, eu posuere ligula faucibus vitae. Curabitur a urna vel tellus commodo sollicitudin. Vestibulum euismod arcu a quam lacinia, sed lacinia lorem auctor. Quisque non ullamcorper nisi. Ut orci est, malesuada eget lacus sit amet, consequat elementum augue. Sed erat enim, rhoncus sit amet sodales nec, feugiat nec elit.

Nulla quis ultrices eros. Aenean ac sapien vel purus venenatis ultricies. Vivamus varius rutrum sapien, eget rhoncus dolor cursus at. Ut viverra urna id risus faucibus porttitor. Phasellus tincidunt, diam sodales dictum laoreet, nisl neque sollicitudin libero, vitae tempor turpis diam eget velit. Cras porta, est cursus ultrices imperdiet, metus erat ornare tellus, sed eleifend arcu enim id justo. Phasellus volutpat diam quam, quis vehicula quam finibus efficitur. Ut dictum, dui id tincidunt elementum, lectus turpis mollis ligula, vel porta odio ipsum in nibh. Mauris ut lorem hendrerit, cursus lorem ut, vehicula metus. Morbi vestibulum consectetur rhoncus.`,
		publishedAt: new Date(),
	},
	{
		slug: "foo-bar",
		title: "Foo Bar",
		content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae odio nunc. Nunc porta ex sed ipsum dignissim vulputate. Nullam enim sem, rutrum efficitur euismod quis, pellentesque eget sem. Mauris vel neque massa. Donec pulvinar enim at dui tempus, vel fermentum orci eleifend. Vestibulum id dui in ex scelerisque gravida vel at sapien. Aenean suscipit risus eu dui imperdiet, at lacinia augue dictum. Nulla facilisi. Suspendisse non maximus tortor. Nunc arcu ante, efficitur at risus ut, consequat sodales neque. Ut viverra lorem sed erat luctus, eget mattis nunc cursus. Donec vitae consequat dolor, quis consequat risus. Vestibulum felis lectus, mollis ac mauris eu, pellentesque condimentum sapien. Aenean vitae tincidunt purus.

Pellentesque id elementum nisl. Sed nec augue suscipit, venenatis quam in, sodales dolor. Aliquam scelerisque vitae lorem vitae hendrerit. Aliquam ultrices purus dictum, ullamcorper augue eget, viverra nisl. Praesent ut feugiat urna. Donec erat ligula, mollis vel justo sit amet, sagittis porttitor felis. Vestibulum id suscipit lectus, ornare convallis velit. Suspendisse semper sem vel massa gravida, ut lobortis enim bibendum. Cras sed ex metus.

Donec at nulla lectus. Nulla venenatis id nisl sit amet gravida. Sed vel ipsum ligula. Mauris leo diam, semper in pharetra sed, malesuada sit amet sapien. Donec lacinia, velit maximus lobortis volutpat, enim tortor tempor dolor, eu pretium tortor massa nec tortor. Integer hendrerit, mauris aliquet ornare convallis, lectus erat gravida nulla, id tristique dolor lectus vel leo. Vestibulum lacinia rutrum risus, eget sollicitudin eros.

Etiam a volutpat ipsum, in tempus leo. Donec sollicitudin, eros eget luctus ultrices, justo massa dapibus lacus, sed efficitur eros tortor a neque. Aliquam erat volutpat. Morbi et nunc vitae purus vestibulum semper nec sed tortor. Nulla at tellus in arcu tincidunt sagittis. Aenean vitae tincidunt ante. Aliquam hendrerit erat sed leo vestibulum cursus. Curabitur aliquet arcu mauris, eu posuere ligula faucibus vitae. Curabitur a urna vel tellus commodo sollicitudin. Vestibulum euismod arcu a quam lacinia, sed lacinia lorem auctor. Quisque non ullamcorper nisi. Ut orci est, malesuada eget lacus sit amet, consequat elementum augue. Sed erat enim, rhoncus sit amet sodales nec, feugiat nec elit.

Nulla quis ultrices eros. Aenean ac sapien vel purus venenatis ultricies. Vivamus varius rutrum sapien, eget rhoncus dolor cursus at. Ut viverra urna id risus faucibus porttitor. Phasellus tincidunt, diam sodales dictum laoreet, nisl neque sollicitudin libero, vitae tempor turpis diam eget velit. Cras porta, est cursus ultrices imperdiet, metus erat ornare tellus, sed eleifend arcu enim id justo. Phasellus volutpat diam quam, quis vehicula quam finibus efficitur. Ut dictum, dui id tincidunt elementum, lectus turpis mollis ligula, vel porta odio ipsum in nibh. Mauris ut lorem hendrerit, cursus lorem ut, vehicula metus. Morbi vestibulum consectetur rhoncus.`,
		publishedAt: new Date(),
	},
	{
		slug: "fizz-buzz",
		title: "Fizz Buzz",
		content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae odio nunc. Nunc porta ex sed ipsum dignissim vulputate. Nullam enim sem, rutrum efficitur euismod quis, pellentesque eget sem. Mauris vel neque massa. Donec pulvinar enim at dui tempus, vel fermentum orci eleifend. Vestibulum id dui in ex scelerisque gravida vel at sapien. Aenean suscipit risus eu dui imperdiet, at lacinia augue dictum. Nulla facilisi. Suspendisse non maximus tortor. Nunc arcu ante, efficitur at risus ut, consequat sodales neque. Ut viverra lorem sed erat luctus, eget mattis nunc cursus. Donec vitae consequat dolor, quis consequat risus. Vestibulum felis lectus, mollis ac mauris eu, pellentesque condimentum sapien. Aenean vitae tincidunt purus.

Pellentesque id elementum nisl. Sed nec augue suscipit, venenatis quam in, sodales dolor. Aliquam scelerisque vitae lorem vitae hendrerit. Aliquam ultrices purus dictum, ullamcorper augue eget, viverra nisl. Praesent ut feugiat urna. Donec erat ligula, mollis vel justo sit amet, sagittis porttitor felis. Vestibulum id suscipit lectus, ornare convallis velit. Suspendisse semper sem vel massa gravida, ut lobortis enim bibendum. Cras sed ex metus.

Donec at nulla lectus. Nulla venenatis id nisl sit amet gravida. Sed vel ipsum ligula. Mauris leo diam, semper in pharetra sed, malesuada sit amet sapien. Donec lacinia, velit maximus lobortis volutpat, enim tortor tempor dolor, eu pretium tortor massa nec tortor. Integer hendrerit, mauris aliquet ornare convallis, lectus erat gravida nulla, id tristique dolor lectus vel leo. Vestibulum lacinia rutrum risus, eget sollicitudin eros.

Etiam a volutpat ipsum, in tempus leo. Donec sollicitudin, eros eget luctus ultrices, justo massa dapibus lacus, sed efficitur eros tortor a neque. Aliquam erat volutpat. Morbi et nunc vitae purus vestibulum semper nec sed tortor. Nulla at tellus in arcu tincidunt sagittis. Aenean vitae tincidunt ante. Aliquam hendrerit erat sed leo vestibulum cursus. Curabitur aliquet arcu mauris, eu posuere ligula faucibus vitae. Curabitur a urna vel tellus commodo sollicitudin. Vestibulum euismod arcu a quam lacinia, sed lacinia lorem auctor. Quisque non ullamcorper nisi. Ut orci est, malesuada eget lacus sit amet, consequat elementum augue. Sed erat enim, rhoncus sit amet sodales nec, feugiat nec elit.

Nulla quis ultrices eros. Aenean ac sapien vel purus venenatis ultricies. Vivamus varius rutrum sapien, eget rhoncus dolor cursus at. Ut viverra urna id risus faucibus porttitor. Phasellus tincidunt, diam sodales dictum laoreet, nisl neque sollicitudin libero, vitae tempor turpis diam eget velit. Cras porta, est cursus ultrices imperdiet, metus erat ornare tellus, sed eleifend arcu enim id justo. Phasellus volutpat diam quam, quis vehicula quam finibus efficitur. Ut dictum, dui id tincidunt elementum, lectus turpis mollis ligula, vel porta odio ipsum in nibh. Mauris ut lorem hendrerit, cursus lorem ut, vehicula metus. Morbi vestibulum consectetur rhoncus.`,
		publishedAt: new Date(),
	},
	{
		slug: "fafifuwasweswos",
		title: "Fafifuwasweswos",
		content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae odio nunc. Nunc porta ex sed ipsum dignissim vulputate. Nullam enim sem, rutrum efficitur euismod quis, pellentesque eget sem. Mauris vel neque massa. Donec pulvinar enim at dui tempus, vel fermentum orci eleifend. Vestibulum id dui in ex scelerisque gravida vel at sapien. Aenean suscipit risus eu dui imperdiet, at lacinia augue dictum. Nulla facilisi. Suspendisse non maximus tortor. Nunc arcu ante, efficitur at risus ut, consequat sodales neque. Ut viverra lorem sed erat luctus, eget mattis nunc cursus. Donec vitae consequat dolor, quis consequat risus. Vestibulum felis lectus, mollis ac mauris eu, pellentesque condimentum sapien. Aenean vitae tincidunt purus.

Pellentesque id elementum nisl. Sed nec augue suscipit, venenatis quam in, sodales dolor. Aliquam scelerisque vitae lorem vitae hendrerit. Aliquam ultrices purus dictum, ullamcorper augue eget, viverra nisl. Praesent ut feugiat urna. Donec erat ligula, mollis vel justo sit amet, sagittis porttitor felis. Vestibulum id suscipit lectus, ornare convallis velit. Suspendisse semper sem vel massa gravida, ut lobortis enim bibendum. Cras sed ex metus.

Donec at nulla lectus. Nulla venenatis id nisl sit amet gravida. Sed vel ipsum ligula. Mauris leo diam, semper in pharetra sed, malesuada sit amet sapien. Donec lacinia, velit maximus lobortis volutpat, enim tortor tempor dolor, eu pretium tortor massa nec tortor. Integer hendrerit, mauris aliquet ornare convallis, lectus erat gravida nulla, id tristique dolor lectus vel leo. Vestibulum lacinia rutrum risus, eget sollicitudin eros.

Etiam a volutpat ipsum, in tempus leo. Donec sollicitudin, eros eget luctus ultrices, justo massa dapibus lacus, sed efficitur eros tortor a neque. Aliquam erat volutpat. Morbi et nunc vitae purus vestibulum semper nec sed tortor. Nulla at tellus in arcu tincidunt sagittis. Aenean vitae tincidunt ante. Aliquam hendrerit erat sed leo vestibulum cursus. Curabitur aliquet arcu mauris, eu posuere ligula faucibus vitae. Curabitur a urna vel tellus commodo sollicitudin. Vestibulum euismod arcu a quam lacinia, sed lacinia lorem auctor. Quisque non ullamcorper nisi. Ut orci est, malesuada eget lacus sit amet, consequat elementum augue. Sed erat enim, rhoncus sit amet sodales nec, feugiat nec elit.

Nulla quis ultrices eros. Aenean ac sapien vel purus venenatis ultricies. Vivamus varius rutrum sapien, eget rhoncus dolor cursus at. Ut viverra urna id risus faucibus porttitor. Phasellus tincidunt, diam sodales dictum laoreet, nisl neque sollicitudin libero, vitae tempor turpis diam eget velit. Cras porta, est cursus ultrices imperdiet, metus erat ornare tellus, sed eleifend arcu enim id justo. Phasellus volutpat diam quam, quis vehicula quam finibus efficitur. Ut dictum, dui id tincidunt elementum, lectus turpis mollis ligula, vel porta odio ipsum in nibh. Mauris ut lorem hendrerit, cursus lorem ut, vehicula metus. Morbi vestibulum consectetur rhoncus.`,
		publishedAt: new Date(),
	},
];

const blogMockService: BlogService = {
	getAllBlogs: async () => {
		await new Promise((resolve) => setTimeout(resolve, 1000));

		return DATA;
	},

	getBlog: async (slug) => {
		await new Promise((resolve) => setTimeout(resolve, 1000));

		const blog = DATA.find((b) => b.slug === slug) || null;

		return blog;
	},
};

export default blogMockService;
