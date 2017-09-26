var telegram = require('telegram-bot-api');
var api = new telegram({
	token: '<YOUR TOKEN>',
	updates: {
		enabled: true,
		get_interval: 1000
	}
});
var host = "";
var user = "";
var pass = "";
api.on('message', function(message)
{
  if (message.text == "/newftp")
  {
	var chat_id = message.chat.id;
	api.sendMessage({
		chat_id: message.chat.id,
		text: 'tell me your host'
	})
	.then(function(message)
	{
    api.on('message', function(host)
    {
    
    }
	})
}
});
