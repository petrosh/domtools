var h2 = create("h2", {"style":"font-style: italic;"}, "Pocket knife");
var markdownBody = body.find('.markdown-body');
markdownBody.insertBefore(h2, markdownBody.get(0));

// get('https://api.github.com/repos/petrosh/domtools/comments', function (xhr) {
// 	console.log(xhr.responseText);
// });
