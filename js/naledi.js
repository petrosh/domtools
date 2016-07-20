/*
*
* str.timeAgo()
*
*/
String.prototype.timeAgo = function () {
	var config = function(int,str){
		return (Math.round(int) <= 1) ? ['1', str, 'ago'].join(' ') : [Math.round(int), str + 's ago'].join(' ');
		// if (Math.round(int) <= 1) return '1 ' + str + ' ago'; else return Math.round(int) + ' ' + str + 's ago'; };
	};
	var date = new Date(this);
	// Account for timezone
	var offset = new Date().getTimezoneOffset();
	var seconds = Math.floor((new Date() - date) / 1000) + (60 * -offset);
	// Start checking
	var interval = Math.floor(seconds / 31536000);
	if (interval > 0.9) return config(interval, 'year');
	interval = seconds / (86400*30);
	if (interval > 0.75) return config(interval, 'month');
	interval = seconds / (3600*24*7);
	if (interval > 1) return config(interval, 'week');
	interval = Math.floor(seconds / (3600*24));
	if (interval > 0.75) return config(interval, 'day');
	interval = Math.floor(seconds / (60*60));
	if (interval > 0.92) return config(interval, 'hour');
	interval = Math.floor(seconds / 60);
	if (interval > 1) return config(interval, 'minute');
	return 'just now';
};