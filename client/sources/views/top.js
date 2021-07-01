import {JetView, plugins} from "webix-jet";

export default class TopView extends JetView{
	config(){
		fetch('http://localhost:3000/api/token', {
		method: "GET",
		}).then(res => res.json())
		.then(data =>{
			localStorage.setItem('token' , data.token)
		})
		var supervisor = new Supervisor({ url: 'https://demo.proctoring.online' });

		supervisor
		.init({
		provider: 'jwt',
		token: localStorage.getItem('token')
		})
		.then(function() {

		return supervisor.start();
		})
		.catch(function(err) {
		alert(err.toString());
		location.href = '/';
		});
		const ui = {
			type: 'line',
			rows:[
				{
					template: 'Demo test with proctoring',height:100,top:100
					
				},
				{
					template: 'Complite', height:200
					
				},
				{ view:"button", value:"Start",width:100, click: () => {
					this.show("./start");
				}}
			]
		}
		return ui;
	}

}